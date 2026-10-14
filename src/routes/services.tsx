import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { services } from "../lib/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Horizon Innovate Ltd" },
      {
        name: "description",
        content:
          "Digital Product Passport, Data Space, and Human-Centric AI & Decision Support consultancy services from Horizon Innovate Ltd.",
      },
      { property: "og:title", content: "Services — Horizon Innovate Ltd" },
      {
        property: "og:description",
        content:
          "Digital Product Passport, Data Space, and Human-Centric AI & Decision Support consultancy services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <div>
      <section className="grid-bg border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="section-tag">Our Services</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Expertise across the <span className="text-gradient">digital value chain</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Three specialised service lines, each delivered end-to-end — from regulatory strategy
            and governance design to technical implementation and continuous auditing.
          </p>
        </div>
      </section>

      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={i % 2 === 1 ? "border-t border-border bg-surface" : "border-t border-border"}
        >
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="flex flex-wrap items-baseline gap-4">
              <span className="font-mono text-2xl text-primary">{service.number}</span>
              <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                {service.title}
              </h2>
            </div>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              {service.tagline}
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {service.groups.map((group) => (
                <div key={group.title} className="glow-card rounded-xl p-6">
                  <h3 className="font-display text-base font-semibold leading-snug text-primary">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/90">
                        <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Not sure which service fits your challenge?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Let's talk it through — initial consultations are free and without obligation.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book a consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
