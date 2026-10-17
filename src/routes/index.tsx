import { TopicIcon } from "@/components/TopicIcon";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Layers, Users } from "lucide-react";
import { services } from "../lib/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Horizon Innovate Ltd — Innovative ICT Consultancy" },
      {
        name: "description",
        content:
          "Horizon Innovate Ltd is an innovative SME helping organisations navigate digital transformation through Digital Product Passports, Data Spaces, and Human-Centric AI.",
      },
      { property: "og:title", content: "Horizon Innovate Ltd — Innovative ICT Consultancy" },
      {
        property: "og:description",
        content:
          "An innovative SME consultancy for Digital Product Passports, Data Spaces, and Human-Centric AI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pillars = [
  {
    icon: Compass,
    title: "Regulatory Foresight",
    text: "We track emerging EU digital regulation so our clients are compliant before deadlines arrive — not after.",
  },
  {
    icon: Layers,
    title: "Deep Technical Delivery",
    text: "From data architectures to connector deployment, we implement what we design. No hand-offs, no gaps.",
  },
  {
    icon: Users,
    title: "People at the Centre",
    text: "Technology only succeeds when people trust it. Human factors and adoption are built into every engagement.",
  },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="grid-bg relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, var(--glow), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-36">
          <p className="section-tag">ICT Consultancy · SME</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Navigating the next horizon of{" "}
            <span className="text-gradient">digital transformation</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Horizon Innovate Ltd is an innovative SME consultancy helping organisations turn
            complex digital regulation and emerging technology into competitive advantage. We
            specialise in Digital Product Passports, trusted Data Spaces, and Human-Centric AI —
            guiding clients from strategy through to working systems.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explore our services <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-input px-6 py-3 font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="section-tag">Who we are</p>
          <div className="mt-6 grid gap-12 md:grid-cols-2">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              A small team with an outsized impact
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                As an SME, we bring the agility, senior expertise, and personal commitment that
                larger consultancies can't. Every engagement is led by specialists who have
                delivered digital transformation across industry, research, and the public sector.
              </p>
              <p>
                We work at the intersection of policy, data, and people — helping manufacturers,
                supply-chain networks, and public organisations prepare for a future where
                transparency, interoperability, and trustworthy AI are non-negotiable.
              </p>
            </div>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="glow-card rounded-xl p-6">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary"><p.icon size={28} strokeWidth={1.75} /></span>
                <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="section-tag">What we do</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Three areas of specialisation
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              View all services <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.id}
                to="/services"
                hash={s.id}
                className="glow-card group rounded-xl p-6"
              >
                <div className="flex items-center justify-between"><TopicIcon text={s.title} size="lg" /><span className="font-mono text-sm text-primary">{s.number}</span></div>
                <h3 className="mt-3 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            Ready to innovate beyond the horizon?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Tell us about your challenge — we'll respond within one business day.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contact us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
