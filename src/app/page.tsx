import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const featureHighlights = [
  {
    title: "Verified Vancouver charities",
    description:
      "Every organization on the platform is vetted against public records, ensuring your support goes to legitimate community partners.",
  },
  {
    title: "Zero referral incentives",
    description:
      "HelpingCanada never takes a cut, sells placements, or profits from your generosity — neutrality is a core principle.",
  },
  {
    title: "Transparent information",
    description:
      "Get a clear snapshot of each nonprofit, including focus areas, community impact, and direct ways to give or get involved.",
  },
  {
    title: "Built with privacy in mind",
    description:
      "No donor tracking, cookies, or intrusive analytics. You stay in control of your data and your decisions.",
  },
];

const pillars = [
  {
    title: "Clarity",
    copy: "Plain-language descriptions, trustworthy sources, and a distraction-free experience help donors choose with confidence.",
  },
  {
    title: "Community",
    copy: "HelpingCanada elevates grassroots initiatives, mutual-aid groups, and established charities working across Vancouver neighborhoods.",
  },
  {
    title: "Care",
    copy: "The platform is maintained by people who believe technology should reduce friction in doing good and amplify human connection.",
  },
];

const vancouverScenes = [
  {
    title: "Stanley Park at dusk",
    description: "Towering evergreens and seawall views remind us who benefits when generosity meets the land.",
    src: "/images/stanley_park.jpg",
    alt: "Stanley Park seawall at sunset",
  },
  {
    title: "Granville Street in the rain",
    description: "Downtown streets stay vibrant because neighbours continue to show up for one another.",
    src: "/images/granville-street-rain.jpg",
    alt: "Rain-soaked Granville Street in Vancouver",
  },
  {
    title: "Vancouver from above",
    description: "A wider skyline view keeps the mission focused on helping every community across the region.",
    src: "/images/2023-Vancouver-Aerial-Skyline-Photography-Copyright-Photographer-Ian-Kobylanski-32.jpg",
    alt: "Aerial view of Vancouver skyline",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.25),_transparent_60%)]" />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-32 pt-24 sm:px-10 lg:px-16">
        <section className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-emerald-500/15">
          <div className="relative h-[220px] overflow-hidden sm:h-[280px] lg:h-[320px]">
            <Image
              src="/images/canadian_flag.jpeg"
              alt="Canadian flag waving in the wind"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/70 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-between gap-4 p-6 sm:p-10">
              <Badge className="bg-emerald-500/20 text-emerald-200 ring-emerald-300/40">Proudly Canadian</Badge>
              <div className="space-y-2 text-white">
                <p className="text-xs uppercase tracking-[0.35em] text-emerald-200">Giving starts at home</p>
                <h2 className="text-3xl font-semibold sm:text-4xl">A flag for everyone we support.</h2>
                <p className="max-w-2xl text-sm text-slate-100 sm:text-base">
                  HelpingCanada lifts up causes from coast to coast, beginning with trusted organizations across Vancouver&apos;s communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-10">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-white/10 text-emerald-200 ring-emerald-300/30">Community-Led Initiative</Badge>
              <Badge variant="neutral" className="bg-white/5 text-slate-200 ring-white/20">
                Vancouver, British Columbia
              </Badge>
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                HelpingCanada connects donors with the most trustworthy causes in Vancouver.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
                Discover verified nonprofits, community services, and mutual-aid groups without ads, paywalls, or hidden motives.
                HelpingCanada exists for one purpose: to make it easier for people to help people.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">Explore verified causes</Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white">
                Read the mission
              </Button>
            </div>
            <div className="grid gap-6 text-sm font-medium text-slate-300 sm:grid-cols-3">
              <div>
                <p className="text-4xl font-semibold text-white">100% independent</p>
                <p className="mt-2 text-sm text-slate-300">No commissions, sponsorships, or referral payouts.</p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-white">Privacy first</p>
                <p className="mt-2 text-sm text-slate-300">We never collect donor data or track browsing behaviour.</p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-white">Built for impact</p>
                <p className="mt-2 text-sm text-slate-300">Curated listings help your support reach people faster.</p>
              </div>
            </div>
          </div>
          <Card className="bg-white/95 text-slate-900 shadow-2xl">
            <CardHeader>
              <Badge variant="neutral" className="w-fit bg-emerald-50 text-emerald-700">
                Why this exists
              </Badge>
              <CardTitle className="text-3xl">Giving should feel clear and trustworthy</CardTitle>
              <CardDescription>
                Donors want to help their community but often do not know where to begin or which organizations to trust. HelpingCanada
                simplifies the journey, highlighting verified, transparent causes with no distractions.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base text-slate-600">
              <p>
                The platform guides you to reputable charities and mutual-aid groups so you can give confidently. Each profile is
                sourced from public records, community insight, and direct collaboration with organizations doing the work.
              </p>
              <p>
                Whether you are a long-time donor or someone who wants to start giving, HelpingCanada helps you act quickly, safely,
                and meaningfully.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-emerald-500/10">
          <div className="space-y-4 text-center sm:text-left">
            <Badge variant="neutral" className="mx-auto w-fit bg-white/10 text-slate-200 ring-white/30 sm:mx-0">
              Vancouver in focus
            </Badge>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Grounded in the places people care about.</h2>
            <p className="text-lg text-slate-200">
              Real neighbourhoods, real stories, and real needs — the imagery mirrors the communities that HelpingCanada connects donors
              with every day.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {vancouverScenes.map((scene) => (
              <Card key={scene.title} className="overflow-hidden border border-white/10 bg-white/10 text-slate-100">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={scene.src}
                    alt={scene.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader className="space-y-2">
                  <CardTitle className="text-2xl text-white">{scene.title}</CardTitle>
                  <CardDescription className="text-slate-200/90">{scene.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-12">
          <div className="max-w-3xl space-y-4">
            <Badge variant="neutral" className="bg-white/5 text-slate-200 ring-white/20">
              What the platform offers
            </Badge>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Everything you need to make an informed decision.</h2>
            <p className="text-lg text-slate-200">
              HelpingCanada curates information that matters — no marketing fluff, no referral schemes. Just a clear path to vetted
              organizations and the people they support.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {featureHighlights.map((feature) => (
              <Card key={feature.title} className="bg-white/10 text-slate-100 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">{feature.title}</CardTitle>
                  <CardDescription className="text-slate-200/90">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <Badge variant="neutral" className="bg-white/5 text-slate-200 ring-white/20">
              Mission
            </Badge>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Empowering Canadians to give confidently.</h2>
            <p className="text-lg leading-8 text-slate-200">
              HelpingCanada is a public-good initiative built to strengthen communities. We amplify organizations doing vital work,
              remove uncertainty for donors, and keep the focus on real impact across Vancouver and beyond.
            </p>
            <Card className="bg-white/90 text-slate-900">
              <CardHeader>
                <CardTitle className="text-2xl">Who built this</CardTitle>
                <CardDescription>
                  HelpingCanada is maintained by a software developer committed to technology that serves people, not platforms. The
                  project is open-source (MIT) and always evolving with community input.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="bg-white/10 text-slate-100">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">{pillar.title}</CardTitle>
                  <CardDescription className="text-slate-200/90">{pillar.copy}</CardDescription>
                </CardHeader>
              </Card>
            ))}
            <Card className="bg-emerald-500 text-emerald-50">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Status</CardTitle>
                <CardDescription className="text-emerald-50/90">
                  HelpingCanada is growing with new categories, improved verification, and broader coverage on the roadmap. Your
                  feedback helps shape what comes next.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-emerald-50/90">
                <p>Share recommendations, community leads, or corrections via GitHub Issues to keep the platform accurate.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center shadow-2xl shadow-emerald-500/10">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <Badge className="mx-auto bg-emerald-500/10 text-emerald-200 ring-emerald-400/30">
              Join the mission
            </Badge>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Have a charity to recommend?</h2>
            <p className="text-lg text-slate-200">
              HelpingCanada thrives on local insight. If you&apos;re part of a nonprofit or know a group making a difference, share it on
              GitHub so the community can discover and support them.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-200">
                Submit via GitHub Issues
              </Button>
              <Button variant="ghost" size="lg" className="text-emerald-200">
                View project license
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
