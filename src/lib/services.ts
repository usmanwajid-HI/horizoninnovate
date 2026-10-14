export interface ServiceDetail {
  name: string;
  description: string;
}

export interface ServiceGroup {
  title: string;
  items: string[];
  slug?: string;
  intro?: string;
  details?: ServiceDetail[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  tagline: string;
  groups: ServiceGroup[];
}

export const services: Service[] = [
  {
    id: "dpp",
    number: "01",
    title: "Digital Product Passport",
    tagline:
      "Prepare your products and supply chains for the coming wave of transparency regulation — from regulatory mapping to audited, production-ready DPP systems.",
    groups: [
      {
        slug: "regulatory-strategy-gap-analysis",
        title: "Regulatory Strategy & Gap Analysis",
        intro:
          "Before writing code or collecting data, companies need to understand what applies to them, when, and where the missing pieces lie.",
        items: ["Regulatory Mapping", "Data Gap Assessment", "Compliance Roadmap"],
        details: [
          { name: "Regulatory Mapping", description: "Evaluating relevant mandates (e.g., EU Ecodesign for Sustainable Products Regulation / ESPR, EU Battery Regulation) across specific product lines and target markets." },
          { name: "Data Gap Assessment", description: "Auditing existing systems (ERP, PLM, PIM) against mandatory data fields, such as recycled content, carbon footprint (LCA), hazardous substances, and origin." },
          { name: "Compliance Roadmap", description: "Setting timeline milestones for pilot products, data readiness, and full rollouts prior to regulatory deadlines." },
        ],
      },
      {
        slug: "data-governance-architecture",
        title: "Data Governance & Architecture",
        intro:
          "A DPP is only as reliable as the underlying data layer. Services in this area turn disjointed data into audit-ready assets.",
        items: ["DPP Data Modeling", "Data Hygiene & Enrichment", "Role-Based Access & Granular Disclosure"],
        details: [
          { name: "DPP Data Modeling", description: "Defining standardized data models aligned with global and industry standards (e.g., GS1, ISO, CIRPASS framework)." },
          { name: "Data Hygiene & Enrichment", description: "Cleaning existing product datasets and using AI/automated tools to extract structured data from unstructured sources (such as Safety Data Sheets, technical spec sheets, and lab reports)." },
          { name: "Role-Based Access & Granular Disclosure", description: "Architecting access controls so different stakeholders (end consumers, custom authorities, recyclers, and business partners) see only what they are allowed to see without exposing trade secrets." },
        ],
      },
      {
        slug: "supply-chain-engagement-traceability",
        title: "Supply Chain Engagement & Traceability",
        intro:
          "The majority of DPP data originates deep within the upstream supply chain (Tier-N suppliers).",
        items: ["Supplier Onboarding & Training", "Traceability & Verification", "Automated Data Requests"],
        details: [
          { name: "Supplier Onboarding & Training", description: "Outreaching to suppliers, providing education, and setting up localized portals to request mandatory DPP attributes." },
          { name: "Traceability & Verification", description: "Verifying materials and claims using third-party compliance audits, lab test validation, and blockchain or decentralized ledger tracking where strict provenance is required." },
          { name: "Automated Data Requests", description: "Implementing automated workflows to manage missing records, request missing documentation, and trigger re-validations upon certificate expiry." },
        ],
      },
      {
        slug: "technical-integration-data-carriers",
        title: "Technical Integration & Data Carrier Deployment",
        intro: "This pillar connects software systems to physical products on the manufacturing floor.",
        items: ["System Integration", "Data Carrier Provisioning", "Platform Setup & Hosting"],
        details: [
          { name: "System Integration", description: "Connecting DPP platforms via APIs to existing Enterprise Resource Planning (ERP), Product Lifecycle Management (PLM), and Product Information Management (PIM) software." },
          { name: "Data Carrier Provisioning", description: "Implementing physical data carriers on products or packaging (e.g., QR codes, GS1 Digital Link, RFID/NFC chips)." },
          { name: "Platform Setup & Hosting", description: "Deploying SaaS DPP platforms or building custom microservice architectures that manage dynamic data resolvers and guarantee high uptime for public scans." },
        ],
      },
    ],
  },
  {
    id: "data-space",
    number: "02",
    title: "Data Space",
    tagline:
      "Design, launch, and operate trusted data-sharing ecosystems — governance, federation services, connectors, and day-to-day platform operations.",
    groups: [
      {
        title: "Governance, Ecosystem Framing & Legal Design",
        items: [
          "Governance Architecture",
          "Rulebook & Contractual Framework",
          "Business Model & Value Creation",
        ],
      },
      {
        title: "Infrastructure Setup & Core Federation Services",
        items: [
          "Identity & Trust Services",
          "Catalog & Discovery Services",
          "Compliance & Clearing Houses",
        ],
      },
      {
        title: "Participant Integration & Connector Deployment",
        items: [
          "Data Space Connector Provisioning",
          "Control Plane vs. Data Plane Setup",
          "Data Harmonization & Semantic Mapping",
        ],
      },
      {
        title: "Operational Management & Platform Support",
        items: [
          "Participant Onboarding & Verification",
          "Network Operations & Security",
          "Policy Enforcement Auditing",
        ],
      },
    ],
  },
  {
    id: "human-ai",
    number: "03",
    title: "Human-Centric AI",
    tagline:
      "Build AI systems people can understand, trust, and override — from cognitive task analysis to continuous human-AI teaming audits.",
    groups: [
      {
        title: "Human Factors, Ergonomics & Impact Assessment",
        items: [
          "Cognitive Task Analysis & Workflow Mapping",
          "Ethical & Human Rights Impact Assessments",
          "Regulatory Governance & Oversight Framing",
        ],
      },
      {
        title: "Co-Design & Interaction Architecture",
        items: [
          "Participatory Design Workshops",
          "Explainable AI (XAI) Interface Design",
          "Uncertainty & Confidence Visualization",
        ],
      },
      {
        title: "Decision Model Engineering & Alignment",
        items: [
          "Interactive Machine Learning & Human Feedback",
          "Context-Aware Decision Engines",
          "Guardrail & Safety Boundary Engineering",
        ],
      },
      {
        title: "Integration, Overrides & Governance Controls",
        items: [
          "System Integration",
          "Override & Escalation Workflows",
          "Auditability & Traceability Infrastructure",
        ],
      },
      {
        title: "Adoption, Workforce Upskilling & Continuous Auditing",
        items: [
          "AI Literacy & Capability Training",
          "Continuous Human-AI Teaming Performance Audits",
          "Model Drift & Human Adaptation Monitoring",
        ],
      },
    ],
  },
];
