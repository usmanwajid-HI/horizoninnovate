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
        slug: "governance-ecosystem-legal-design",
        title: "Governance, Ecosystem Framing & Legal Design",
        intro: "Establishing a data space begins with defining the legal rules, trust mechanisms, and business models that dictate how participants collaborate.",
        items: [
          "Governance Architecture",
          "Rulebook & Contractual Framework",
          "Business Model & Value Creation",
        ],
        details: [
          { name: "Governance Architecture", description: "Defining participation rules, organizational roles (Data Providers, Consumers, Intermediaries, Service Providers), and voting/decision-making frameworks." },
          { name: "Rulebook & Contractual Framework", description: "Drafting legal agreements, standard data-sharing contracts, and Usage Policies (e.g., ODRL policy definitions specifying time, purpose, and pricing limits for data use)." },
          { name: "Business Model & Value Creation", description: "Designing monetisation models (pay-per-use, subscription, freemium) and incentive mechanisms for participants to publish valuable data assets." },
        ],
      },
      {
        slug: "infrastructure-core-federation-services",
        title: "Infrastructure Setup & Core Federation Services",
        intro: "Building the central federated trust layer that allows disparate participants to discover, trust, and execute data transactions.",
        items: [
          "Identity & Trust Services",
          "Catalog & Discovery Services",
          "Compliance & Clearing Houses",
        ],
        details: [
          { name: "Identity & Trust Services", description: "Deploying Decentralized Identifiers (DIDs), Verifiable Credentials (VCs), and Public Key Infrastructure (PKI) to manage trust, identity verification, and participant credentialing." },
          { name: "Catalog & Discovery Services", description: "Deploying federated catalog services where data providers publish asset metadata so consumers can search and discover offerings." },
          { name: "Compliance & Clearing Houses", description: "Implementing compliance engines that validate participants against specific framework standards (e.g., Gaia-X Trust Framework) and log transactions for auditing and settlement without seeing raw data." },
        ],
      },
      {
        slug: "participant-integration-connector-deployment",
        title: "Participant Integration & Connector Deployment",
        intro: "Connecting individual enterprise systems (ERPs, Data Warehouses, IoT hubs) securely to the data space environment.",
        items: [
          "Data Space Connector Provisioning",
          "Control Plane vs. Data Plane Setup",
          "Data Harmonization & Semantic Mapping",
        ],
        details: [
          { name: "Data Space Connector Provisioning", description: "Deploying and configuring standard protocol connectors (e.g., Eclipse Dataspace Components / EDC, FIWARE, or IDSA Connectors) on participant premises or secure clouds." },
          { name: "Control Plane vs. Data Plane Setup", description: "Setting up control mechanisms for policy negotiation alongside secure peer-to-peer data plane transport channels (HTTPS, S3, MQTT)." },
          { name: "Data Harmonization & Semantic Mapping", description: "Mapping internal data schemas to common vocabulary standards (e.g., Asset Administration Shell, Schema.org) to ensure semantic interoperability between participants." },
        ],
      },
      {
        slug: "operational-management-platform-support",
        title: "Operational Management & Platform Support",
        intro: "Ensuring high availability, security monitoring, and continuous participant onboarding across the live network.",
        items: [
          "Participant Onboarding & Verification",
          "Network Operations & Security (24/7)",
          "Policy Enforcement Auditing",
        ],
        details: [
          { name: "Participant Onboarding & Verification", description: "Managing credential issuance, background checks, and automated onboarding workflows for new members." },
          { name: "Network Operations & Security (24/7)", description: "Monitoring connector health, endpoint availability, credential revocation lists (CRLs), and zero-trust security postures." },
          { name: "Policy Enforcement Auditing", description: "Providing transaction logging, usage policy enforcement verification, and dispute resolution technical evidence." },
        ],
      },
      {
        slug: "value-added-data-computing-services",
        title: "Value-Added Data & Computing Services",
        intro: "Services built on top of the data space infrastructure to extract insights without compromising data sovereignty.",
        items: ["Federated Learning & Privacy-Preserving Analytics"],
        details: [
          { name: "Federated Learning & Privacy-Preserving Analytics", description: "Implementing Secure Multi-Party Computation (SMC), Differential Privacy, or Federated AI engines that perform computations across node data without transferring raw underlying datasets." },
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
