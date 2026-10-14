import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Horizon Innovate Ltd" },
      {
        name: "description",
        content:
          "Get in touch with Horizon Innovate Ltd to discuss Digital Product Passports, Data Spaces, or Human-Centric AI for your organisation.",
      },
      { property: "og:title", content: "Contact Us — Horizon Innovate Ltd" },
      {
        property: "og:description",
        content: "Start a conversation with Horizon Innovate Ltd about your digital transformation challenge.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const inputClass =
  "w-full rounded-lg border border-input bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div>
      <section className="grid-bg border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="section-tag">Contact Us</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Let's start a <span className="text-gradient">conversation</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Whether you're preparing for Digital Product Passport regulation, building a data
            space, or making AI work for your people — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-5 md:py-20">
          <div className="space-y-8 md:col-span-2">
            <div>
              <h2 className="font-display text-xl font-semibold">Get in touch</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Fill in the form and we'll respond within one business day, or reach us directly:
              </p>
            </div>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 text-primary" size={20} />
                <div>
                  <p className="text-sm font-semibold">Email</p>
                  <a
                    href="mailto:info@horizoninnovate.co.uk"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    info@horizoninnovate.co.uk
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 text-primary" size={20} />
                <div>
                  <p className="text-sm font-semibold">Phone</p>
                  <a href="tel:+442071234567" className="text-sm text-muted-foreground hover:text-primary">
                    +44 (0)20 7123 4567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 text-primary" size={20} />
                <div>
                  <p className="text-sm font-semibold">Office</p>
                  <p className="text-sm text-muted-foreground">
                    Horizon Innovate Ltd
                    <br />
                    London, United Kingdom
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            {sent ? (
              <div className="glow-card flex h-full flex-col items-center justify-center rounded-xl p-12 text-center">
                <CheckCircle2 className="text-accent" size={48} />
                <h2 className="mt-4 font-display text-2xl font-semibold">Message sent</h2>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Thank you for reaching out. A member of our team will get back to you within one
                  business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glow-card rounded-xl p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                      Name
                    </label>
                    <input id="name" name="name" required placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="company" className="mb-1.5 block text-sm font-medium">
                      Company
                    </label>
                    <input id="company" name="company" placeholder="Your organisation" className={inputClass} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="topic" className="mb-1.5 block text-sm font-medium">
                      I'm interested in
                    </label>
                    <select id="topic" name="topic" className={inputClass} defaultValue="">
                      <option value="" disabled>
                        Select a service…
                      </option>
                      <option>Digital Product Passport</option>
                      <option>Data Space</option>
                      <option>Human-Centric AI</option>
                      <option>Something else</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your project or challenge…"
                      className={inputClass}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Send message <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
