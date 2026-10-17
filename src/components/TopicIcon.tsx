import {
  Activity, BadgeCheck, Boxes, Brain, BrainCircuit, Cable, ClipboardCheck, Cloud, Cpu, Database,
  Eye, FileText, Fingerprint, GraduationCap, Handshake, Landmark, Layers, LineChart, Link2,
  Map, Network, Plug, QrCode, Scale, ScanSearch, Search, Server, Shield, ShieldCheck, Sparkles,
  Truck, Users, Workflow, Wrench, type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const rules: [RegExp, LucideIcon][] = [
  [/passport/i, Fingerprint],
  [/data space/i, Network],
  [/human-centric/i, Brain],
  [/regulat|compliance roadmap|legal|rulebook|contract/i, Scale],
  [/gap|audit|assessment/i, ScanSearch],
  [/roadmap|mapping|workflow/i, Map],
  [/model(ing)?|harmoni|semantic/i, Layers],
  [/hygiene|enrich|curation/i, Sparkles],
  [/access|disclosure|security|guardrail|safety/i, ShieldCheck],
  [/supplier|onboarding|participant|supply chain/i, Truck],
  [/traceab|verification|provenance/i, Link2],
  [/automated|request/i, Workflow],
  [/integration|connect/i, Plug],
  [/carrier|qr/i, QrCode],
  [/hosting|platform|infrastructure/i, Server],
  [/governance|oversight/i, Landmark],
  [/business|value|monetis/i, LineChart],
  [/identity|trust/i, BadgeCheck],
  [/catalog|discovery/i, Search],
  [/clearing|policy|enforcement/i, ClipboardCheck],
  [/control plane|data plane/i, Cable],
  [/operations|network|monitor|drift/i, Activity],
  [/federated|privacy|computing|analytics/i, Cpu],
  [/apps?\b|application/i, Boxes],
  [/human factors|cognitive|ergonom/i, Brain],
  [/ethic|rights/i, Shield],
  [/participatory|co-design|workshop|teaming/i, Users],
  [/explainab|xai|interface|visuali|uncertainty/i, Eye],
  [/machine learning|feedback|decision|engine/i, BrainCircuit],
  [/override|escalation/i, Handshake],
  [/literacy|training|upskilling|adoption/i, GraduationCap],
  [/pilot|technical/i, Wrench],
  [/data/i, Database],
  [/cloud/i, Cloud],
];

export function iconFor(text: string): LucideIcon {
  return rules.find(([re]) => re.test(text))?.[1] ?? FileText;
}

export function TopicIcon({ text, size = "md", className }: { text: string; size?: "md" | "lg"; className?: string }) {
  const Icon = iconFor(text);
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary",
        size === "lg" ? "h-16 w-16" : "h-12 w-12",
        className,
      )}
      aria-hidden="true"
    >
      <Icon size={size === "lg" ? 32 : 24} strokeWidth={1.75} />
    </span>
  );
}
