import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "../lib/services";

export const Route = createFileRoute("/services_/data-space/$slug")({
  loader: ({ params }) => {
    const service = services.find((item) => item.id === "data-space");
    const index = service?.groups.findIndex((group) => group.slug === params.slug) ?? -1;
    const group = service?.groups[index];
    if (!service || !group) throw notFound();
    const next = service.groups[(index + 1) % service.groups.length];
    return { index, group, next };
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.group.title} — Data Space | Horizon Innovate` : "Unavailable — Horizon Innovate";
    const description = loaderData?.group.intro ?? "Data Space services from Horizon Innovate Ltd.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(loaderData ? [] : [{ name: "robots", content: "noindex" }]),
      ],
    };
  },
  component: DataSpaceDetail,
});

function DataSpaceDetail() {
  const { index, group, next } = Route.useLoaderData();
  return (
    <div>
      <section className="grid-bg border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <Link to="/services" hash="data-space" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft size={16} /> Back to Data Space
          </Link>
          <p className="section-tag mt-8">Data Space · {String(index + 1).padStart(2, "0")}</p>
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">{group.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{group.intro}</p>
        </div>
      </section>
      <section>
        <div className="mx-auto grid max-w-4xl gap-6 px-6 py-16">
          {group.details?.map((detail, detailIndex) => (
            <div key={detail.name} className="glow-card rounded-lg p-6 md:p-8">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-sm text-primary">{String(detailIndex + 1).padStart(2, "0")}</span>
                <h2 className="font-display text-xl font-semibold">{detail.name}</h2>
              </div>
              <p className="mt-3 leading-relaxed text-muted-foreground">{detail.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="border-t border-border">
        <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center">
          {next?.slug && (
            <Link to="/services/data-space/$slug" params={{ slug: next.slug }} className="group inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Next: {next.title}
              <ArrowRight size={16} className="shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
          <Button asChild size="lg" className="shrink-0">
            <Link to="/contact">Discuss your Data Space needs</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}