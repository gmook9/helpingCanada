import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const featureHighlights = [
  {
    title: "Verified Vancouver charities",
    description:
      "Every organization is vetted against public records and first-party confirmations so you know exactly who you are helping.",
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
    title: "Privacy-first infrastructure",
    description:
      "No tracking scripts, retargeting pixels, or ad networks. Decisions happen without compromising your data.",
  },
];

const pillars = [
  {
    title: "Clarity",
    copy: "Plain-language write-ups and accessible data sources mean anyone can evaluate an organization in minutes.",
    gradient: "from-emerald-500/30 via-emerald-400/20 to-slate-900/80",
  },
  {
    title: "Community",
    copy: "Grassroots initiatives, mutual aid groups, and established charities share the same stage.",
    gradient: "from-emerald-400/30 via-sky-400/20 to-slate-900/80",
  },
  {
    title: "Care",
    copy: "We build software with the people most affected — service providers, volunteers, and neighbours in need.",
    gradient: "from-teal-400/30 via-emerald-400/20 to-slate-900/80",
  },
];

const vancouverScenes = [
  {
    title: "Stanley Park at dusk",
    description: "Evergreen canopy, seawall, and ocean meet — a reminder that stewardship is both local and generational.",
    src: "/images/stanley_park.jpg",
    alt: "Stanley Park seawall at sunset",
  },
  {
    title: "Granville Street in the rain",
    description: "Downtown corridors stay vibrant because neighbours continue to show up for each other.",
    src: "/images/granville-street-rain.jpg",
    alt: "Rain-soaked Granville Street in Vancouver",
  },
  {
    title: "Vancouver from above",
    description: "An aerial skyline anchors our scope: every borough matters, not only the downtown core.",
    src: "/images/2023-Vancouver-Aerial-Skyline-Photography-Copyright-Photographer-Ian-Kobylanski-32.jpg",
    alt: "Aerial view of Vancouver skyline",
  },
];

const missionStats = [
  { label: "Neighbourhoods highlighted", value: "30+" },
  { label: "Causes under review", value: "120+" },
  { label: "Community contributors", value: "80+" },
];

export default function MissionPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.35),_transparent_60%)]" />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-24 sm:px-10 lg:px-16">
        <section className="space-y-10 text-center">
          <Badge variant="neutral" className="mx-auto w-fit bg-white/10 text-white ring-white/40">
            Our mission
          </Badge>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Empowering Canadians to give confidently.
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              We surface local knowledge, vet every listing, and keep the platform distraction-free so you can focus on helping people —
              not navigating red tape.
            </p>
          </div>
          <div className="grid gap-4 text-left sm:grid-cols-3">
            {missionStats.map((stat) => (
              <Card key={stat.label} className="bg-white/5 text-slate-100 shadow-lg shadow-emerald-500/10">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-3xl font-semibold text-white">{stat.value}</CardTitle>
                  <CardDescription className="text-slate-200/80">{stat.label}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-sm transition hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              Back to home
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-lg font-semibold text-white transition hover:border-emerald-300 hover:bg-white/10 hover:text-emerald-100"
            >
              Explore donations
            </Link>
          </div>
        </section>

        <section className="space-y-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-emerald-500/10">
          <div className="space-y-4 text-center sm:text-left">
            <Badge variant="neutral" className="mx-auto w-fit bg-white/10 text-white ring-white/40 sm:mx-0">
              Grounded in the places people care about
            </Badge>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Real Vancouver stories shape every update.</h2>
            <p className="text-lg text-slate-200">
              We listen to neighbourhood organizers, outreach teams, and donors to learn what support actually looks like on the ground.
              The photography below is more than decoration — it&apos;s a reminder of who benefits from accurate information.
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

        <section className="space-y-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-emerald-500/10">
          <div className="space-y-4 text-center sm:text-left">
            <Badge variant="neutral" className="mx-auto w-fit bg-white/10 text-white ring-white/40 sm:mx-0">
              Everything you need to make an informed decision
            </Badge>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">A giving guide that feels modern and calm.</h2>
            <p className="text-lg text-slate-200">
              Whether you&apos;re searching on mobile or a desktop, every card prioritizes what matters: mission, impact, and how to help.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {featureHighlights.map((feature, index) => (
              <Card
              key={feature.title}
              className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-emerald-500/20 text-white shadow-lg shadow-emerald-500/10 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/60"
              >
              <span className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-emerald-300/80 to-emerald-500/80" aria-hidden />
              <CardHeader className="space-y-3">
                <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs">0{index + 1}</span> Detail
                </div>
                <CardTitle className="text-2xl text-white">{feature.title}</CardTitle>
                <CardDescription className="text-white">{feature.description}</CardDescription>
              </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <Badge variant="neutral" className="w-fit bg-white/10 text-white ring-white/40">
              Empowering Canadians to give confidently
            </Badge>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Mission, process, and accountability.</h2>
            <p className="text-lg text-slate-200">
              HelpingCanada is an open-source public-good initiative. Every line of code and every copy update runs through the same
              lens: Does this make it easier to trust Vancouver charities?
            </p>
            <Card className="bg-white/90 text-slate-900">
              <CardHeader>
                <CardTitle className="text-2xl">Who builds this</CardTitle>
                <CardDescription className="text-slate-600">
                  A software developer and a rotating bench of volunteers maintain the platform. Contributors share research, design, and
                  code improvements via GitHub, ensuring nothing happens behind closed doors.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                <p>Roadmaps, issues, and discussions stay public so anyone can suggest fixes or highlight new organizations.</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <Card
                key={pillar.title}
                className={`overflow-hidden border border-white/10 bg-gradient-to-br ${pillar.gradient} text-white shadow-lg shadow-emerald-500/10`}
              >
                <CardHeader className="space-y-3">
                  <CardTitle className="text-2xl">{pillar.title}</CardTitle>
                  <CardDescription className="text-slate-100/90">{pillar.copy}</CardDescription>
                </CardHeader>
              </Card>
            ))}
            <Card className="overflow-hidden border border-white/10 bg-gradient-to-br from-emerald-500/25 via-emerald-200/70 to-slate-350 text-white shadow-lg shadow-emerald-500/10">
              <CardHeader className="space-y-3">
                <CardTitle className="text-2xl">Status</CardTitle>
                <CardDescription className="text-slate-100/90">
                  Upcoming releases include expanded coverage for the North Shore, improved API docs, and more transparent verification
                  tags.
                </CardDescription>
              </CardHeader>
              
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
