export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  headline: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  metrics: { value: string; label: string }[];
  accentColor: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  location: string;
  industry: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: string;
  metrics: { label: string; value: string; timeframe: string }[];
  services: string[];
  technologies: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  mockupType: 'biotech' | 'architecture' | 'automotive' | 'saas' | 'luxury' | 'fintech';
  featured: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  location: string;
  metric: string;
  metricLabel: string;
  service: string;
}

export interface GlobalHub {
  city: string;
  country: string;
  district: string;
  timezone: string;
  coordinates: string;
  focus: string;
}

export const AGENCY_STATS = [
  { value: '$420M+', label: 'Client Revenue Generated', context: 'across 140+ digital builds' },
  { value: '48ms', label: 'Global CDN Response Time', context: 'average edge delivery' },
  { value: '99.4%', label: 'On-Time Sprint Delivery', context: 'strict engineering SLAs' },
  { value: '4.8x', label: 'Average Meta Ad ROAS', context: 'performance acquisition' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-dev',
    slug: 'web-development',
    title: 'Web Development',
    category: 'Engineering',
    headline: 'High-Performance Web Applications & Modern Headless Platforms',
    description: 'We architect ultra-fast, resilient digital applications designed to withstand global scale. From edge-rendered web apps to custom enterprise CMS implementations, our codebases deliver unmatched speed, security, and conversion velocity.',
    deliverables: [
      'Custom React, Next.js & TypeScript architectures',
      'Headless CMS integration (Sanity, Strapi, Contentful)',
      'Sub-50ms edge rendering & distributed serverless APIs',
      'Strict Core Web Vitals optimization (98+ performance score)',
      'Enterprise security audits, OWASP compliance & CI/CD pipelines',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'GraphQL', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    metrics: [
      { value: '48ms', label: 'Average Page Response' },
      { value: '99.99%', label: 'Production Uptime' },
      { value: '2.8x', label: 'Average Speed Multiplier' },
    ],
    accentColor: '#2b70f7',
  },
  {
    id: 'e-commerce',
    slug: 'e-commerce',
    title: 'E-Commerce Solutions',
    category: 'Commerce',
    headline: 'Flagship DTC Storefronts & High-Volume Commerce Engines',
    description: 'We design and build bespoke e-commerce experiences that turn international visitors into lifelong brand advocates. Powered by Shopify Plus and headless commerce architectures, our stores maximize average order value and checkout completion.',
    deliverables: [
      'Custom bespoke Shopify Plus theme engineering',
      'Headless commerce architectures with instant page navigation',
      'Multi-currency, multi-language global localization',
      'High-converting 1-click checkout flows and custom bundle builders',
      'Custom ERP, inventory, and warehouse logistics integration',
    ],
    technologies: ['Shopify Plus', 'Hydrogen', 'Stripe', 'Algolia Search', 'Klaviyo', 'Sanity', 'Tailwind'],
    metrics: [
      { value: '+42%', label: 'Average Order Value' },
      { value: '1.4s', label: 'Global Checkout Latency' },
      { value: '34%', label: 'Repeat Customer Rate' },
    ],
    accentColor: '#00d2ff',
  },
  {
    id: 'ai-solutions',
    slug: 'ai-solutions',
    title: 'AI Solutions & Automation',
    category: 'Intelligence',
    headline: 'Enterprise AI Workflows & Autonomous Multi-Agent Systems',
    description: 'Bridge the gap between artificial intelligence research and commercial business value. We engineer custom large language model integrations, semantic retrieval engines (RAG), and autonomous agentic pipelines that eliminate operational bottlenecks.',
    deliverables: [
      'Custom multi-agent workflows for automated customer operations',
      'Private enterprise RAG (Retrieval-Augmented Generation) document search',
      'Fine-tuned domain models for predictive pricing and forecasting',
      'Intelligent multimodal analysis (text, vision, audio processing)',
      'Zero-data-leakage architecture with isolated cloud deployments',
    ],
    technologies: ['Google Gemini API', 'Python', 'LangChain', 'Pinecone', 'FastAPI', 'PyTorch', 'Vector DB'],
    metrics: [
      { value: '72%', label: 'Manual Time Eliminated' },
      { value: '0.35s', label: 'Vector Query Latency' },
      { value: '3.4x', label: 'Pipeline Throughput' },
    ],
    accentColor: '#8b5cf6',
  },
  {
    id: 'ui-ux',
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    category: 'Design Systems',
    headline: 'Intuitive Product Architectures & Distinctive Digital Aesthetics',
    description: 'We reject generic design templates. Every interface we build combines mathematical typographic hierarchy, fluid interaction physics, and rigorous user research to craft digital experiences that evoke prestige and drive measurable engagement.',
    deliverables: [
      'Comprehensive multi-tier Figma design systems and tokens',
      'Interactive 60fps micro-interaction and transition prototyping',
      'Customer journey mapping and quantitative usability research',
      'Inclusive accessibility compliance (WCAG 2.1 AA certified)',
      'Full visual brand identities, typography guidelines, and stylebooks',
    ],
    technologies: ['Figma', 'Storybook', 'Framer Motion', 'Spline 3D', 'Tailwind', 'Design Tokens'],
    metrics: [
      { value: '4.9/5', label: 'User Satisfaction Rating' },
      { value: '60%', label: 'Faster Engineering Handoff' },
      { value: '0', label: 'Design-System Debt' },
    ],
    accentColor: '#a855f7',
  },
  {
    id: 'seo',
    slug: 'search-engine-optimization',
    title: 'Search Engine Optimization',
    category: 'Search & Organic',
    headline: 'Technical Organic Dominance & Algorithmic Search Infrastructure',
    description: 'Move beyond vanity keywords. We build search foundations rooted in algorithmic precision: deep technical crawling health, programmatic page synthesis, structured data taxonomies, and high-intent commercial keyword authority.',
    deliverables: [
      'Full technical architecture, canonicalization, and crawl-budget audit',
      'Programmatic SEO generators for high-intent category scales',
      'Schema.org JSON-LD semantic knowledge graphs',
      'International hreflang multi-region search indexation',
      'Server-side rendering optimization for Googlebot discovery',
    ],
    technologies: ['Next.js SSR', 'Schema.org', 'Screaming Frog', 'Ahrefs', 'Google Search Console', 'Semrush'],
    metrics: [
      { value: '+265%', label: 'Qualified Inbound Traffic' },
      { value: '100%', label: 'Indexation Health Score' },
      { value: 'Top 3', label: 'Commercial Keyphrases' },
    ],
    accentColor: '#38bdf8',
  },
  {
    id: 'meta-ads',
    slug: 'meta-ads-marketing',
    title: 'Meta Ads & Acquisition',
    category: 'Performance',
    headline: 'Full-Funnel Paid Acquisition & Predictive Performance Scaling',
    description: 'Scale acquisition profitably without burning capital. We combine high-velocity creative testing, server-side Meta Conversions API (CAPI) data modeling, and bespoke landing pages to turn paid traffic into reliable enterprise revenue.',
    deliverables: [
      'Server-side Meta Conversions API (CAPI) & Google Tag Manager setup',
      'High-velocity creative testing pipeline (video, statics, motion)',
      'First-party data modeling and predictive lookalike segmentation',
      'Bespoke dedicated landing pages tailored to specific ad hooks',
      'Weekly cross-channel ROAS and customer acquisition cost optimization',
    ],
    technologies: ['Meta Ads Manager', 'Conversions API (CAPI)', 'GTM Server', 'Triple Whale', 'GA4', 'Figma'],
    metrics: [
      { value: '4.8x', label: 'Average Verified ROAS' },
      { value: '-38%', label: 'Blended Cost Per Acquisition' },
      { value: '$28M+', label: 'Annual Media Spend Scaled' },
    ],
    accentColor: '#6366f1',
  },
];

export const PORTFOLIO_CASES: CaseStudy[] = [
  {
    id: 'aura-biotech',
    slug: 'aura-health-longevity',
    title: 'Aura Health & Longevity',
    client: 'Aura BioLabs',
    location: 'Zurich · San Francisco',
    industry: 'Biotech & Digital Health',
    year: '2026',
    summary: 'Custom patient telemetry platform and high-conversion membership portal for a premier longevity biotechnology institute.',
    challenge: 'Aura required a clinical-grade digital platform capable of visualizing real-time continuous biological metrics (biomarkers, DNA sequencing, cellular age) while delivering a seamless, high-ticket private subscription checkout with sub-100ms response latency.',
    solution: 'We engineered an edge-rendered web application with an interactive WebGL biometrics visualization engine, custom subscription onboarding with zero-dropoff step flows, and HIPAA-compliant edge data routing.',
    impact: 'Increased qualified member applications by 214% while reducing patient onboarding dropoff from 38% down to 4.2% within the first 90 days post-launch.',
    metrics: [
      { label: 'Qualified Conversion Rate', value: '+214%', timeframe: '90 days post-launch' },
      { label: 'Edge TTFB Response', value: '48ms', timeframe: 'Global average across 38 nodes' },
      { label: 'Active Subscribers', value: '120k+', timeframe: 'Scalable subscription cohort' },
    ],
    services: ['Web Development', 'UI/UX Design', 'AI Solutions'],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'WebGL', 'Docker'],
    testimonial: {
      quote: 'Ryvora Digital operates at a level of technical depth and aesthetic refinement we have rarely seen. Our patients praise the clarity of our data visualizer daily.',
      author: 'Dr. Henrik Vance',
      role: 'Chief Digital Officer, Aura BioLabs',
    },
    mockupType: 'biotech',
    featured: true,
  },
  {
    id: 'kroma-architecture',
    slug: 'kroma-studios-london',
    title: 'Kroma Studios London',
    client: 'Kroma Architectural Group',
    location: 'London · Milan',
    industry: 'Architecture & Spatial Design',
    year: '2026',
    summary: 'Interactive 3D WebGL spatial showcase and editorial portfolio for an internationally acclaimed contemporary architecture practice.',
    challenge: 'Conventional architectural portfolios felt static and unable to capture the tactile scale, day-to-night lighting transitions, and spatial depth of multimillion-pound international residences.',
    solution: 'Built a lightweight 3D spatial web environment with real-time solar path simulators, material texture inspection, and bespoke editorial project monographs loaded dynamically over CDN.',
    impact: 'Transformed Kroma into the premier digital destination for ultra-luxury residential commissions, generating £42M in verified project inquiries.',
    metrics: [
      { label: 'Inbound Project Inquiries', value: '+185%', timeframe: 'First 6 months' },
      { label: 'Average Session Dwell', value: '4.2 min', timeframe: 'Industry benchmark: 1.1 min' },
      { label: 'Verified Pipeline Value', value: '£42M', timeframe: 'High-net-worth client briefs' },
    ],
    services: ['Web Development', 'UI/UX Design', 'SEO'],
    technologies: ['React', 'Three.js / WebGL', 'Tailwind CSS', 'Sanity CMS', 'Framer Motion'],
    testimonial: {
      quote: 'The interactive spatial environment Ryvora crafted has completely transformed our client acquisition meetings. It pays for itself ten times over.',
      author: 'Elena Rostova',
      role: 'Principal Partner, Kroma Studios',
    },
    mockupType: 'architecture',
    featured: true,
  },
  {
    id: 'veloce-mobility',
    slug: 'veloce-hypercars',
    title: 'Veloce Mobility',
    client: 'Veloce Hypercars',
    location: 'Milan · Munich',
    industry: 'Electric Automotive & Mobility',
    year: '2025',
    summary: 'Ultra-luxury DTC digital showroom and real-time 3D vehicle configurator for an all-electric €450k hypercar launch.',
    challenge: 'Launching a boutique electric hypercar to a discerning global audience required an uncompromising digital showroom capable of rendering 4K materials at 60 frames per second on any device.',
    solution: 'Designed and engineered an ultra-fast WebGL configurator allowing clients to customize aerodynamic carbon packages, interior aniline leathers, and exterior lacquers, integrated with encrypted escrow deposits.',
    impact: 'Sold out the complete first-year allocation of 32 vehicles in under 48 hours, collecting $14.2M in verified customer reservation deposits.',
    metrics: [
      { label: 'Pre-Order Deposits', value: '$14.2M', timeframe: 'Collected in 48 hours' },
      { label: 'Configurator Frame Rate', value: '60 FPS', timeframe: 'Tested across mobile & desktop' },
      { label: 'Global Checkout Uptime', value: '99.98%', timeframe: 'Zero failed transactions' },
    ],
    services: ['Web Development', 'UI/UX Design', 'E-Commerce'],
    technologies: ['Next.js', 'WebGL', 'Stripe Escrow', 'TypeScript', 'Tailwind CSS'],
    testimonial: {
      quote: 'Our buyers expect perfection. Ryvora built a digital showroom that matched the obsessive engineering of our cars down to the millimeter.',
      author: 'Marco Valenti',
      role: 'Head of Brand & DTC, Veloce Hypercars',
    },
    mockupType: 'automotive',
    featured: true,
  },
  {
    id: 'nexaflow-ai',
    slug: 'nexaflow-systems',
    title: 'NexaFlow AI',
    client: 'NexaFlow Systems',
    location: 'Boston · Dublin',
    industry: 'Enterprise SaaS & Automation',
    year: '2025',
    summary: 'Visual node-based canvas and telemetry console for orchestrating complex enterprise AI agent swarms.',
    challenge: 'Enterprise operations leaders wanted to automate backend work with AI agents, but existing tools were command-line driven and opaque, hindering enterprise sales cycles.',
    solution: 'Crafted a fluid visual orchestration canvas with real-time agent execution tracking, latency gauges, and zero-code logic branching backed by distributed streaming APIs.',
    impact: 'Accelerated enterprise pilot conversions by 3.4x, allowing NexaFlow to close Fortune 500 contracts and scale platform ARR from $2.1M to $7.2M.',
    metrics: [
      { label: 'ARR Expansion', value: '3.4x', timeframe: 'Scaled across 9 months' },
      { label: 'Support Friction', value: '-55%', timeframe: 'Drop in customer onboarding tickets' },
      { label: 'Automated Tasks/Day', value: '1.2M', timeframe: 'Sustained platform volume' },
    ],
    services: ['AI Solutions', 'UI/UX Design', 'Web Development'],
    technologies: ['React', 'TypeScript', 'Gemini API', 'Tailwind CSS', 'WebSockets', 'Python'],
    testimonial: {
      quote: 'Ryvora turned our abstract AI engine into a tangible, beautiful enterprise software product that enterprise procurement teams love.',
      author: 'Sarah Jenkins',
      role: 'VP of Product, NexaFlow Systems',
    },
    mockupType: 'saas',
    featured: false,
  },
  {
    id: 'soleil-fragrance',
    slug: 'soleil-fine-fragrance',
    title: 'Soleil Fine Fragrance',
    client: 'Maison Soleil Paris',
    location: 'Paris · New York',
    industry: 'Luxury Fragrance & E-Commerce',
    year: '2025',
    summary: 'Sensory e-commerce flagship and interactive olfactory matchmaking experience for a Parisian luxury perfumery.',
    challenge: 'Translating intangible olfactory notes (sandalwood, ambergris, bergamot) into online purchases without customer sampling in person.',
    solution: 'Constructed a custom headless Shopify Plus flagship featuring an intuitive "Scent Harmony" interactive quiz, tactile micro-animations, and personalized discovery discovery sets.',
    impact: 'Generated $4.8M in first-year digital revenue with an exceptional 34% repeat purchase rate and a storewide conversion rate of 4.6%.',
    metrics: [
      { label: 'First-Year Digital GMV', value: '$4.8M', timeframe: 'Surpassed forecast by 140%' },
      { label: 'Repeat Purchase Rate', value: '34%', timeframe: 'Driven by scent replenishment flows' },
      { label: 'Storewide Conversion', value: '4.6%', timeframe: 'Industry average: 1.8%' },
    ],
    services: ['E-Commerce', 'UI/UX Design', 'Meta Ads'],
    technologies: ['Shopify Plus', 'Hydrogen', 'Tailwind CSS', 'Meta CAPI', 'Klaviyo'],
    testimonial: {
      quote: 'They did not just build a website; they captured the soul of French haute perfumery in digital form. Our conversion rates are unprecedented.',
      author: 'Laurent Dupont',
      role: 'Creative Director, Maison Soleil',
    },
    mockupType: 'luxury',
    featured: false,
  },
  {
    id: 'strata-wealth',
    slug: 'strata-wealth-partners',
    title: 'Strata Wealth Partners',
    client: 'Strata Global Capital',
    location: 'Zurich · Singapore',
    industry: 'FinTech & Private Wealth',
    year: '2026',
    summary: 'Institutional-grade private wealth management portal with biometric authentication and real-time liquidity analytics.',
    challenge: 'High-net-worth investors were frustrated with cumbersome legacy banking portals that took days to update multi-asset valuations and lacked mobile responsiveness.',
    solution: 'Engineered a sovereign client dashboard featuring passkey biometric authentication, real-time FX & private equity valuations, and direct encrypted advisor communication.',
    impact: 'Achieved a 92% adoption rate across 450+ family office clients, tracking over $1.8B in capital with zero recorded security incidents.',
    metrics: [
      { label: 'Client Portal Adoption', value: '+92%', timeframe: 'Within 60 days of rollout' },
      { label: 'Assets Under Reporting', value: '$1.8B', timeframe: 'Verified real-time portfolios' },
      { label: 'Security Vulnerabilities', value: '0', timeframe: 'Audited by KPMG Cyber' },
    ],
    services: ['Web Development', 'UI/UX Design', 'SEO'],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'WebAuthn', 'PostgreSQL', 'Docker'],
    testimonial: {
      quote: 'Ryvora delivered banking-grade cryptographic security wrapped in an interface that feels as effortless as private aviation. Truly remarkable.',
      author: 'Beatriz Zimmerman',
      role: 'Managing Partner, Strata Global Capital',
    },
    mockupType: 'fintech',
    featured: false,
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    quote: 'Ryvora Digital operates at a level of technical depth and aesthetic refinement we have rarely seen. Our patients praise the clarity of our telemetry visualizer daily.',
    name: 'Dr. Henrik Vance',
    role: 'Chief Digital Officer',
    company: 'Aura BioLabs',
    location: 'Zurich',
    metric: '+214%',
    metricLabel: 'Qualified Conversion Rate',
    service: 'Web Development & AI',
  },
  {
    id: 't2',
    quote: 'Our buyers expect perfection. Ryvora built a digital showroom that matched the obsessive engineering of our cars down to the millimeter. $14.2M secured in 48 hours.',
    name: 'Marco Valenti',
    role: 'Head of Brand & DTC',
    company: 'Veloce Hypercars',
    location: 'Milan',
    metric: '$14.2M',
    metricLabel: 'Pre-Order Deposits',
    service: 'E-Commerce & 3D WebGL',
  },
  {
    id: 't3',
    quote: 'Ryvora turned our abstract AI engine into a tangible, beautiful enterprise software product that enterprise procurement teams love. Our ARR tripled in 9 months.',
    name: 'Sarah Jenkins',
    role: 'VP of Product',
    company: 'NexaFlow Systems',
    location: 'Boston',
    metric: '3.4x',
    metricLabel: 'ARR Growth',
    service: 'Enterprise AI & UI/UX',
  },
  {
    id: 't4',
    quote: 'They took over our Meta Ads and built custom landing pages tailored to each customer avatar. Our return on ad spend jumped from 2.1x to 4.8x within sixty days.',
    name: 'Laurent Dupont',
    role: 'Managing Director',
    company: 'Maison Soleil Paris',
    location: 'Paris',
    metric: '4.8x',
    metricLabel: 'Sustained ROAS',
    service: 'Meta Ads & E-Commerce',
  },
];

export const GLOBAL_HUBS: GlobalHub[] = [
  {
    city: 'London',
    country: 'United Kingdom',
    district: 'Mayfair, W1K',
    timezone: 'Europe/London',
    coordinates: '51.5074° N, 0.1278° W',
    focus: 'Global Headquarters & Creative Studio',
  },
  {
    city: 'New York',
    country: 'United States',
    district: 'SoHo, NY 10013',
    timezone: 'America/New_York',
    coordinates: '40.7128° N, 74.0060° W',
    focus: 'Performance Marketing & Brand Scaling',
  },
  {
    city: 'Dubai',
    country: 'United Arab Emirates',
    district: 'DIFC Gate Precinct',
    timezone: 'Asia/Dubai',
    coordinates: '25.2048° N, 55.2708° E',
    focus: 'Enterprise Solutions & MENA Growth',
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    district: 'Marina Bay Financial Centre',
    timezone: 'Asia/Singapore',
    coordinates: '1.3521° N, 103.8198° E',
    focus: 'AI Architecture & APAC Engineering Hub',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery & Strategic Value Mapping',
    duration: 'Week 1',
    description: 'We dissect your commercial unit economics, market positioning, audience friction points, and competitor blindspots before writing a single line of code.',
    deliverables: [
      'Commercial Opportunity Audit & Benchmark',
      'Technical Architecture Blueprint',
      'User Personas & High-Intent Funnel Architecture',
      'Quantified Project KPI Milestones',
    ],
  },
  {
    number: '02',
    title: 'High-Fidelity Architecture & Design Systems',
    duration: 'Weeks 2 – 3',
    description: 'We construct modular design systems and fluid interactive prototypes in Figma, establishing distinct typography, lighting, and physics tailored to your brand identity.',
    deliverables: [
      'Multi-tier Design System with Tokenized Components',
      'Full Interactive 60fps Clickable Prototypes',
      'Content Strategy & High-Conversion Copywriting',
      'Accessibility & Usability Verification',
    ],
  },
  {
    number: '03',
    title: 'Full-Stack Engineering & AI Integration',
    duration: 'Weeks 4 – 6',
    description: 'Our senior engineers build the platform using modern TypeScript, Next.js, and serverless edge runtimes, integrating custom AI workflows and headless APIs.',
    deliverables: [
      'Production-Ready Clean Codebase with Strict Types',
      'Custom AI Models & Semantic Search Pipelines',
      'Headless CMS & API Integration Layer',
      'Micro-animations & Fluid Interaction Physics',
    ],
  },
  {
    number: '04',
    title: 'Performance Hardening & Security Audits',
    duration: 'Week 7',
    description: 'Rigorous stress-testing across 50+ global device viewports, automated vulnerability scanning, Core Web Vitals optimization, and server-side tracking validation.',
    deliverables: [
      'Sub-50ms Global Edge Response Certification',
      'OWASP Top 10 Security & Penetration Testing',
      'Meta CAPI & Cross-Platform Tracking Verification',
      'Comprehensive Cross-Browser Staging Run',
    ],
  },
  {
    number: '05',
    title: 'Production Deployment & Growth Scaling',
    duration: 'Week 8 & Beyond',
    description: 'Zero-downtime global DNS rollout, real-time analytics monitoring, conversion rate optimization sprints, and dedicated ongoing growth iteration.',
    deliverables: [
      'Zero-Downtime Global Production Deployment',
      'Live Datadog / Telemetry Monitoring Alarms',
      'Post-Launch Conversion Rate Optimization (CRO)',
      'Dedicated Slack Channel & Engineering Support SLA',
    ],
  },
];

export const AGENCY_FAQS = [
  {
    q: 'How quickly can Ryvora Digital kick off a new engagement?',
    a: 'We onboard a strictly limited number of clients each quarter to guarantee partner-level involvement. Typically, sprint kickoffs take place within 7 to 10 business days following the mutual signing of the statement of work.',
  },
  {
    q: 'What makes Ryvora different from typical digital agencies?',
    a: 'We combine obsessive aesthetic craftsmanship with uncompromising full-stack engineering and AI capabilities. We do not use cookie-cutter templates, junior contractors, or generic bloated codebases. Everything is architected bespoke for commercial impact, verified with hard numbers.',
  },
  {
    q: 'Can Ryvora handle both design, engineering, and performance marketing?',
    a: 'Yes. That is our core advantage. When your design team, engineering architects, and paid acquisition specialists collaborate under one roof, there is zero translation loss. Your landing pages load in 48ms, your tracking is bulletproof via server-side CAPI, and your conversion rates reflect that precision.',
  },
  {
    q: 'Do you offer ongoing retainer partnerships after the initial launch?',
    a: 'Yes. Over 80% of our enterprise clients transition into monthly dedicated growth engineering retainers for continuous feature iterations, AI workflow expansions, and performance marketing scaling.',
  },
  {
    q: 'What is the typical investment range for an end-to-end project?',
    a: 'Our engagements typically start at $20,000 for focused flagship builds and scale up to $150,000+ for complex multi-platform architectures, custom AI agent swarms, and international enterprise commerce storefronts.',
  },
];
