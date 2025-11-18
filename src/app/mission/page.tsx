import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const featureHighlights = [
  {
    title: "Verified Vancouver charities",
    description:
      "Every organization is vetted against public records.",
  },
  {
    title: "Zero referral incentives",
    description:
      "HelpingCanada never sells placement or takes a cut of donations. Neutrality is the default, not an upgrade.",
  },
  {
    title: "Transparent information",
    description:
      "Each profile focuses on mission, impact, and ways to support — no dark patterns or marketing fluff to wade through.",
  },
  {
    title: "Privacy-first design",
    description:
      "No tracking scripts, retargeting pixels, or ad networks. Decisions happen without compromising your data.",
  },
];

const pillars = [
  {
    title: "Clarity",
    copy: "Plain-language snapshots plus cited sources keep decisions quick.",
    gradient: "from-emerald-500/30 via-emerald-400/20 to-slate-900/80",
  },
  {
    title: "Community",
    copy: "Grassroots groups and established charities share the exact same spotlight.",
    gradient: "from-emerald-400/30 via-sky-400/20 to-slate-900/80",
  },
  {
    title: "Care",
    copy: "The product is shaped with service providers, volunteers, and neighbours who rely on it.",
    gradient: "from-teal-400/30 via-emerald-400/20 to-slate-900/80",
  },
];

const builderHighlights = [
  {
    title: "Public repo",
    detail: "Source code, copy, and issues live on GitHub for anyone to fork.",
  },
  {
    title: "Community QA",
    detail: "Issues and pull requests from volunteers keep listings accurate.",
  },
  {
    title: "No sponsors",
    detail: "Listings cannot be bought or boosted—neutrality stays by default.",
  },
  {
    title: "Local feedback",
    detail: "Updates prioritize requests from people working on the ground.",
  },
];

const roadmapSteps = [
  {
    label: "Now",
    detail: "Expand coverage across Metro Vancouver and tighten profile data.",
  },
  {
    label: "Next",
    detail: "Ship fast search, saved filters, and an easy request form.",
  },
  {
    label: "Later",
    detail: "Open a lightweight API so other civic projects can reuse the data.",
  },
];

const vancouverScenes = [
  {
    title: "Stanley Park at dusk",
    description: "A peaceful spot where nature and city life blend, highlighting the importance of protecting local environments.",
    src: "/images/stanley_park.jpg",
    alt: "Stanley Park seawall at sunset",
  },
  {
    title: "Granville Street in the rain",
    description: "Busy downtown streets that thrive thanks to community support and neighborly help.",
    src: "/images/granville-street-rain.jpg",
    alt: "Rain-soaked Granville Street in Vancouver",
  },
  {
    title: "Vancouver from above",
    description: "A view of the city skyline, reminding us that all areas of Vancouver are important, not just the center.",
    src: "/images/Vancouver-Skyline.jpg",
    alt: "Aerial view of Vancouver skyline",
  },
];

const heroStats = [
  {
    value: "10",
    label: "Verified local orgs",
  },
  {
    value: "$0",
    label: "No referral payments",
  },
  {
    value: "0%",
    label: "No additional fees",
  },
];

const trustLayers = [
  {
    title: "Clear summaries",
    description:
      "Each listing includes a simple, plain-language overview created from reputable public info.",
  },
  {
    title: "Reliable sources",
    description:
      "All recommendations come from verified organizations and publicly available data.",
  },
  {
    title: "Community-focused",
    description:
      "The goal is to highlight groups doing real work in their local areas—nothing sponsored, nothing paid.",
  },
];


export default function MissionPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.35),_transparent_60%)]" />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-24 sm:px-10 lg:px-16">
        <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] px-8 py-16 shadow-[0_20px_60px_rgba(15,23,42,0.45)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%)]" />
          <div className="pointer-events-none absolute -top-12 right-12 h-32 w-32 rounded-full bg-emerald-400/40 blur-[120px]" />
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-emerald-300/10 blur-[140px]" />
          <div className="relative grid gap-16 lg:grid-cols-[1.05fr,0.95fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-slate-950/50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.45em] text-emerald-200/90">
                <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(16,185,129,0.9)]" />
                Mission
              </div>
              <div className="space-y-4">
                <h1 className="text-left text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Empowering Canadians to give confidently.
                </h1>
                <p className="text-lg leading-8 text-slate-200/90 sm:text-xl">
                  We combine local expertise, transparent reporting, and privacy-first design so you can direct generosity where it matters most without friction.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/"
                  className="inline-flex min-w-[180px] flex-1 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_15px_35px_rgba(6,95,70,0.35)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                >
                  Back to home
                </Link>
                <Link
                  href="/donate"
                  className="inline-flex min-w-[180px] flex-1 items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition hover:border-emerald-200 hover:text-emerald-100"
                >
                  Explore donations
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-slate-950/50 px-5 py-6 text-left backdrop-blur-xl"
                  >
                    <p className="text-3xl font-semibold text-white">{stat.value}</p>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-transparent p-8 text-left backdrop-blur-2xl">
              <div className="pointer-events-none absolute -top-10 right-8 h-16 w-16 rounded-full bg-sky-400/30 blur-[80px]" />
              <div className="pointer-events-none absolute bottom-6 left-6 h-24 w-24 rounded-full bg-emerald-400/20 blur-[90px]" />
              <div className="relative space-y-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200/80">
                  <span className="h-1.5 w-6 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400" />
                  Trust Architecture
                </div>
                <p className="text-2xl font-semibold text-white">
                  Futuristic transparency built for modern philanthropy.
                </p>
                <div className="space-y-4">
                  {trustLayers.map((layer) => (
                    <div
                      key={layer.title}
                      className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 backdrop-blur-xl transition hover:border-emerald-200/60"
                    >
                      <p className="text-lg font-semibold text-white">{layer.title}</p>
                      <p className="text-sm text-slate-300">{layer.description}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-emerald-200/40 bg-gradient-to-r from-emerald-500/20 via-emerald-400/10 to-sky-500/20 px-5 py-6 text-sm text-emerald-100 shadow-[0_15px_40px_rgba(16,185,129,0.25)]">
                  No advertising, no pay-to-play, and no surprise data collection—just glassy clarity for every Canadian donor.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-emerald-500/10">
          <div className="space-y-4 text-center sm:text-left">
            <Badge variant="neutral" className="mx-auto w-fit bg-white/10 text-white ring-white/40 sm:mx-0">
              Grounded in the places people care about
            </Badge>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Real Vancouver stories shape every update.</h2>
            <p className="text-lg text-slate-200">
              This is our way of giving back to the beautiful city of Vancouver, celebrating its communities and supporting those who make it thrive.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {vancouverScenes.map((scene) => (
              <Card key={scene.title} className="overflow-hidden border border-white/10">
                <div className="relative h-64 w-full">
                  <Image
                    src={scene.src}
                    alt={scene.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 space-y-2 p-6">
                    <p className="text-sm uppercase tracking-[0.25em] text-emerald-200">{scene.title}</p>
                    <p className="text-base text-slate-100">{scene.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="rounded-[32px] border border-white/15 bg-gradient-to-br from-slate-950/70 via-slate-900/70 to-slate-950/40 p-8 shadow-[0_25px_60px_rgba(15,23,42,0.65)] sm:p-10">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-slate-950/70 p-6 text-center shadow-[0_20px_45px_rgba(15,23,42,0.45)] backdrop-blur-2xl">
              <div className="pointer-events-none absolute -top-10 right-6 h-24 w-24 rounded-full bg-emerald-400/30 blur-[100px]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 w-full bg-gradient-to-t from-emerald-500/10 to-transparent" />

              <div className="relative flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em] text-emerald-100">
              <span>Status</span>
              <span>Live roadmap</span>
              </div>

              <div className="relative mt-6 space-y-5">
              {[
              {
                label: "Now",
                detail: "Expanding the available donation list.",
              },
              {
                label: "Next",
                detail: "Expanding coverage to more areas.",
              },
              {
                label: "Later",
                detail: "Implementing expanded verification techniques.",
              },
              ].map((step, index) => (
              <div key={step.label} className="relative pl-8 text-left">
                <span
                aria-hidden="true"
                className="absolute left-0 top-2 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.85)]"
                />
                {index < [
                {
                label: "Now",
                detail: "Expanding the available donation list.",
                },
                {
                label: "Next",
                detail: "Expanding coverage to more areas.",
                },
                {
                label: "Later",
                detail: "Implementing expanded verification techniques.",
                },
                ].length - 1 && (
                <span aria-hidden="true" className="absolute left-0 top-5 h-9 w-px bg-white/10" />
                )}
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-200">{step.label}</p>
                <p className="text-base text-slate-100">{step.detail}</p>
              </div>
              ))}
              </div>
              </div>
            </div>
            </div>
            </section>

      </main>
    </div>
  );
}
