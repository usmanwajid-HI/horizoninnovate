import { TopicIcon } from "@/components/TopicIcon";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services";

export const Route = createFileRoute("/services_/human-centric-ai")({
  head: () => ({
    meta: [
      { title: "Human-Centric AI Services — Horizon Innovate Ltd" },
      { name: "description", content: "Human-Centric AI consultancy across human factors, ethical impact assessment, co-design, model alignment, integration, workforce training, and continuous auditing." },
      { property: "og:title", content: "Human-Centric AI Services — Horizon Innovate Ltd" },
      { property: "og:description", content: "Augment human intelligence with transparent, ethically aligned AI: explore our five phases of Human-Centric AI services." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HumanCentricAI,
});

function HumanCentricAI() {
  const service = services.find((item) => item.id === "human-ai");
  if (!service) throw notFound();

  return (
    <div>
      <section className="grid-bg border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Link to="/services" hash="human-ai" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft size={16} /> Back to Services
          </Link>
          <TopicIcon text={service.title} size="lg" className="mt-8" />
          <p className="section-tag mt-6">Our Services · {service.number}</p>
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">{service.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">{service.intro}</p>
        </div>
      </section>

      {service.groups.map((group, index) => (
        <section key={group.title} id={`phase-${index + 1}`} className={`scroll-mt-24 border-b border-border ${index % 2 === 1 ? "bg-surface" : ""}`}>
          <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
            <TopicIcon text={group.title} size="lg" className="mb-4" />
            <p className="section-tag">Phase {String(index + 1).padStart(2, "0")}</p>
            <h2 className="mt-4 max-w-3xl font-display text-2xl font-bold md:text-3xl">{group.title}</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{group.intro}</p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {group.details?.map((detail) => (
                <article key={detail.name} className="glow-card rounded-lg p-6">
                  <TopicIcon text={detail.name} className="mb-4" />
                  <h3 className="font-display text-lg font-semibold leading-snug text-primary">{detail.name}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{detail.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section>
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center">
          <Link to="/services" hash="human-ai" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft size={16} /> Back to Services
          </Link>
          <Button asChild size="lg" className="h-auto whitespace-normal py-3 text-center">
            <Link to="/contact">Discuss your Human-Centric AI needs</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}