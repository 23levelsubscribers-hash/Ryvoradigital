import React from 'react';

interface RyvoraLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  monogramOnly?: boolean;
}

export const RyvoraMonogram: React.FC<{ size?: number; className?: string }> = ({
  size = 40,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 drop-shadow-[0_4px_12px_rgba(43,112,247,0.3)] ${className}`}
      aria-label="Ryvora R Monogram"
    >
      <defs>
        {/* Top curved ribbon gradient (Cyan to Royal Blue to Violet) */}
        <linearGradient id="ryvora-grad-top" x1="40" y1="40" x2="160" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00d2ff" />
          <stop offset="45%" stopColor="#2b70f7" />
          <stop offset="100%" stopColor="#7a3bf6" />
        </linearGradient>

        {/* Diagonal lower leg gradient (Violet to Bright Purple) */}
        <linearGradient id="ryvora-grad-leg" x1="90" y1="90" x2="165" y2="155" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6332eb" />
          <stop offset="60%" stopColor="#8d38f5" />
          <stop offset="100%" stopColor="#b43cf7" />
        </linearGradient>

        {/* Fold ribbon facet gradient (Origami blue-violet fold) */}
        <linearGradient id="ryvora-grad-fold" x1="40" y1="75" x2="80" y2="135" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e58eb" />
          <stop offset="100%" stopColor="#4323c9" />
        </linearGradient>

        {/* Stem lower gradient */}
        <linearGradient id="ryvora-grad-stem" x1="40" y1="100" x2="70" y2="155" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2963f2" />
          <stop offset="100%" stopColor="#4c2bf0" />
        </linearGradient>
      </defs>

      {/* Main Origami Geometric R Construction */}
      <g>
        {/* Diagonal right leg */}
        <path
          d="M95 90 L126 90 L166 148 L136 148 L104 104 L95 104 Z"
          fill="url(#ryvora-grad-leg)"
        />

        {/* Top bar and curved loop */}
        <path
          d="M40 40 L60 40 L60 40 L118 40 C145 40 162 55 162 76 C162 97 145 110 118 110 L70 110 L70 90 L116 90 C131 90 141 84 141 76 C141 67 131 60 116 60 L60 60 L40 40 Z"
          fill="url(#ryvora-grad-top)"
        />

        {/* Left vertical ribbon fold / origami facet */}
        <path
          d="M40 40 L60 60 L60 110 L40 92 Z"
          fill="url(#ryvora-grad-fold)"
          opacity="0.95"
        />

        {/* Left vertical lower stem */}
        <path
          d="M40 92 L60 110 L60 148 L40 148 Z"
          fill="url(#ryvora-grad-stem)"
        />
      </g>
    </svg>
  );
};

export const RyvoraLogo: React.FC<RyvoraLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  monogramOnly = false,
}) => {
  const sizeMap = {
    sm: { monogram: 28, text: 'text-base', sub: 'text-[9px] tracking-[0.25em]' },
    md: { monogram: 36, text: 'text-xl', sub: 'text-[10px] tracking-[0.3em]' },
    lg: { monogram: 48, text: 'text-2xl', sub: 'text-xs tracking-[0.35em]' },
    xl: { monogram: 64, text: 'text-4xl', sub: 'text-sm tracking-[0.4em]' },
  };

  const currentSize = sizeMap[size];

  if (monogramOnly || !showText) {
    return <RyvoraMonogram size={currentSize.monogram} className={className} />;
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <RyvoraMonogram size={currentSize.monogram} />
      <div className="flex flex-col leading-none">
        <span className={`font-display font-extrabold text-white tracking-wider ${currentSize.text}`}>
          RYVORA
        </span>
        <span className={`font-medium text-cyan-400 font-sans mt-0.5 ${currentSize.sub}`}>
          DIGITAL
        </span>
      </div>
    </div>
  );
};

export default RyvoraLogo;
