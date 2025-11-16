import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
              <Badge variant="neutral" className="bg-white/10 text-white ring-white/40">
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
              <Link
                href="/mission"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-lg font-semibold text-white transition hover:border-emerald-300 hover:bg-white/10 hover:text-emerald-100"
              >
                Read the mission
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 text-sm font-medium text-slate-300 sm:grid-cols-3">
              <div className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="break-words hyphens-auto text-3xl font-semibold text-white sm:text-2xl">100% independent</p>
              <p className="text-sm text-slate-200">No commissions, sponsorships, or referral payouts.</p>
              </div>
              <div className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="break-words hyphens-auto text-3xl font-semibold text-white sm:text-2xl">Privacy first</p>
                <p className="text-sm text-slate-200">We never collect donor data or track browsing behaviour.</p>
              </div>
              <div className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="break-words hyphens-autotext-3xl font-semibold text-white sm:text-2xl">Built for impact</p>
                <p className="text-sm text-slate-200">Curated listings help your support reach people faster.</p>
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
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:border-emerald-300 hover:bg-white/10 hover:text-emerald-100"
              >
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
