import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { services } from "../lib/services";

const dpp = services.find((s) => s.id === "dpp")!;

export const Route = createFileRoute("/services_/dpp/$slug")({
  loader: ({ params }) => {
    const index = dpp.groups.findIndex((g) => g.slug === params.slug);
    if (index === -1) throw notFound();
    return { index };
  },
  head: ({ loaderData }) => {
    const g = loaderData ? dpp.groups[loaderData.index] : undefined;
    const title = g ? `${g.title} — Digital Product Passport | Horizon Innovate` : "Unavailable";
    const desc = g?.intro ?? "Digital Product Passport services from Horizon Innovate Ltd.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(g ? [] : [{ name: "robots", content: "noindex" }]),
      ],
    };
  },
  component: DppDetail,
});

function DppDetail() {
  const { index } = Route.useLoaderData();
  const group = dpp.groups[index];
  const next = dpp.groups[(index + 1) % dpp.groups.length];
  return (
    <div>
      <section className="grid-bg border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <Link
            to="/services"
            hash="dpp"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} /> Back to Digital Product Passport
          </Link>
          <p className="section-tag mt-8">Digital Product Passport · {String(index + 1).padStart(2, "0")}</p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">{group.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{group.intro}</p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-4xl gap-6 px-6 py-16">
          {group.details?.map((d, i) => (
            <div key={d.name} className="glow-card rounded-xl p-6 md:p-8">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="font-display text-xl font-semibold">{d.name}</h2>
              </div>
              <p className="mt-3 leading-relaxed text-muted-foreground">{d.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center">
          <Link
            to="/services/dpp/$slug"
            params={{ slug: next.slug! }}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            Next: {next.title}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Discuss your DPP needs
          </Link>
        </div>
      </section>
    </div>
  );
}
