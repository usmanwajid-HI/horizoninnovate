export interface ServiceGroup {
  title: string;
  items: string[];
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
        title: "Setting the Scene for Digital Product Passport",
        items: ["Regulatory Mapping", "Data Gap Assessment", "Compliance Roadmap"],
      },
      {
        title: "Data Governance and Architecture",
        items: ["Data Curation and Enrichment", "Role-Based Access & Granular Disclosure"],
      },
      {
        title: "Supply Chain Engagement and Traceability",
        items: [
          "Supply Chain Onboarding and Training",
          "Traceability and Verification",
          "Automated Data Requests",
        ],
      },
      {
        title: "Technical Integrations and Value Chain Creation",
        items: ["System Integration", "Pilot Testing and Roll Out", "Monitoring and Auditing"],
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
