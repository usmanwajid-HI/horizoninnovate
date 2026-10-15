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
  intro?: string;
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
        items: [
          "Federated Learning & Privacy-Preserving Analytics",
          "Data Apps & Application Integration",
        ],
        details: [
          { name: "Federated Learning & Privacy-Preserving Analytics", description: "Implementing Secure Multi-Party Computation (SMC), Differential Privacy, or Federated AI engines that perform computations across node data without transferring raw underlying datasets." },
          { name: "Data Apps & Application Integration", description: "Developing specialized business applications (e.g., carbon footprint calculators, predictive supply chain algorithms) that consume federated data streams." },
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
    intro: "Implementing Human-Centric AI (HCAI) focuses on augmenting human intelligence rather than replacing it. Our services ensure AI systems are transparent, ethically aligned, ergonomically integrated into human workflows, and compliant with evolving global regulations, such as the EU AI Act’s mandatory human oversight provisions.",
    groups: [
      {
        title: "Human Factors, Ergonomics & Impact Assessment",
        intro: "Before deploying AI-driven decision tools, companies must understand how human operators make decisions and where cognitive strain or bias occurs.",
        details: [
          { name: "Cognitive Task Analysis & Workflow Mapping", description: "Mapping current human decision-making workflows to identify cognitive bottlenecks, information overload, and ideal intervention points for AI assistance." },
          { name: "Ethical & Human Rights Impact Assessments", description: "Evaluating potential bias, discrimination, and psychological impact of automated recommendations on workforce and end-users." },
          { name: "Regulatory Governance & Oversight Framing", description: "Classifying AI risk levels (e.g., EU AI Act high-risk categories) and establishing mandatory Human-in-the-Loop (HITL) or Human-on-the-Loop (HOTL) protocol boundaries." },
        ],
        items: [
          "Cognitive Task Analysis & Workflow Mapping",
          "Ethical & Human Rights Impact Assessments",
          "Regulatory Governance & Oversight Framing",
        ],
      },
      {
        title: "Co-Design & Interaction Architecture (UX/UI)",
        intro: "HCAI services prioritize the interface between the algorithm and the operator, making model outputs understandable, actionable, and non-intrusive.",
        details: [
          { name: "Participatory Design Workshops", description: "Conducting co-design sessions involving domain experts (e.g., clinicians, underwriters, plant managers) to align model design with real-world needs." },
          { name: "Explainable AI (XAI) Interface Design", description: "Building dashboards that explain why a decision was recommended (e.g., SHAP/LIME visualizers, feature importance charts, counterfactual reasoning)." },
          { name: "Uncertainty & Confidence Visualization", description: "Designing UI elements that visually convey prediction confidence levels and error margins, preventing automation bias (blind trust) or automation distrust (system rejection)." },
        ],
        items: [
          "Participatory Design Workshops",
          "Explainable AI (XAI) Interface Design",
          "Uncertainty & Confidence Visualization",
        ],
      },
      {
        title: "Decision Model Engineering & Alignment",
        intro: "Developing and tuning analytical models specifically tailored to collaborate with human operators.",
        details: [
          { name: "Interactive Machine Learning & Human Feedback", description: "Embedding active learning loops where human corrections continuously fine-tune model accuracy and context-awareness." },
          { name: "Context-Aware Decision Engines", description: "Integrating real-time contextual data (e.g., situational constraints, operator stress, shift changes) into the model’s recommendation logic." },
          { name: "Guardrail & Safety Boundary Engineering", description: "Building deterministic rules and policy constraints into the AI pipeline to prevent harmful or out-of-bounds recommendations." },
        ],
        items: [
          "Interactive Machine Learning & Human Feedback",
          "Context-Aware Decision Engines",
          "Guardrail & Safety Boundary Engineering",
        ],
      },
      {
        title: "Integration, Overrides & Governance Controls",
        intro: "Connecting decision support algorithms into active enterprise IT systems with clear audit trails and control mechanics.",
        details: [
          { name: "System Integration", description: "Connecting decision engines with core operational software (e.g., EHR, CRM, MES, ERP) via real-time APIs to present insights directly inside existing toolsets." },
          { name: "Override & Escalation Workflows", description: "Configuring friction-free mechanisms for human operators to reject or override AI recommendations, complete with reason-logging for continuous auditing." },
          { name: "Auditability & Traceability Infrastructure", description: "Building logs that track model inputs, generated recommendations, and the final human action taken for legal compliance and accountability." },
        ],
        items: [
          "System Integration",
          "Override & Escalation Workflows",
          "Auditability & Traceability Infrastructure",
        ],
      },
      {
        title: "Adoption, Workforce Upskilling & Continuous Auditing",
        intro: "Ensuring operators are empowered to use AI effectively and monitoring the system’s long-term impact on operational outcomes.",
        details: [
          { name: "AI Literacy & Capability Training", description: "Upskilling non-technical staff on how to evaluate AI confidence, spot model hallucinations/biases, and effectively prompt or query decision tools." },
          { name: "Continuous Human-AI Teaming Performance Audits", description: "Tracking performance metrics (e.g., decision speed, error rate reductions, operator satisfaction, override frequency) post-deployment." },
          { name: "Model Drift & Human Adaptation Monitoring", description: "Continuously monitoring for model degradation and tracking how human behavior adapts over time to prevent over-reliance." },
        ],
        items: [
          "AI Literacy & Capability Training",
          "Continuous Human-AI Teaming Performance Audits",
          "Model Drift & Human Adaptation Monitoring",
        ],
      },
    ],
  },
];
