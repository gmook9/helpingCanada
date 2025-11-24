import type { ReactNode } from "react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const IconFrame = ({ children }: { children: ReactNode }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 text-emerald-700"
    aria-hidden
  >
    {children}
  </svg>
);

const ArrowUpRightIcon = () => (
  <IconFrame>
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </IconFrame>
);

const BuildingIcon = () => (
  <IconFrame>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h6M12 21v-4" />
  </IconFrame>
);

const LeafIcon = () => (
  <IconFrame>
    <path d="M5 13c0-5 4-9 7-9s7 4 7 9-4 9-7 9-7-4-7-9Z" />
    <path d="M12 4v16" />
  </IconFrame>
);

const HomeIcon = () => (
  <IconFrame>
    <path d="M4 11 12 5l8 6" />
    <path d="M5 10v10h14V10" />
    <path d="M10 20v-5h4v5" />
  </IconFrame>
);

const HeartIcon = () => (
  <IconFrame>
    <path d="M12 20s-7-4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6-7 10-7 10Z" />
  </IconFrame>
);

const UtensilsIcon = () => (
  <IconFrame>
    <path d="M5 4v8" />
    <path d="M9 4v8" />
    <path d="M5 12c0 4 4 4 4 0" />
    <path d="M13 4h4v6a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2Z" />
    <path d="M15 12v8" />
  </IconFrame>
);

const ShieldIcon = () => (
  <IconFrame>
    <path d="M12 21c-5-2-7-4.8-7-10V6l7-3 7 3v5c0 5.2-2 8-7 10Z" />
  </IconFrame>
);

const CatIcon = () => (
  <IconFrame>
    <path d="M5 7V4l3 2 4-2 4 2 3-2v3" />
    <path d="M6 12c0 5 3 8 6 8s6-3 6-8" />
    <path d="M9 13h.01M15 13h.01" />
    <path d="M9 17s1.5 1 3 1 3-1 3-1" />
  </IconFrame>
);

const BikeIcon = () => (
  <IconFrame>
    <circle cx="6.5" cy="17.5" r="3.5" />
    <circle cx="17.5" cy="17.5" r="3.5" />
    <path d="M6 17.5 10 8h4l3 6.5" />
    <path d="M10 8 8 13h6" />
  </IconFrame>
);

const CheckIcon = () => (
  <IconFrame>
    <path d="m5.5 12.5 3.5 3.5 9-9" />
  </IconFrame>
);

const iconComponents = {
  foundation: BuildingIcon,
  environment: LeafIcon,
  housing: HomeIcon,
  youth: HeartIcon,
  food: UtensilsIcon,
  mentalHealth: ShieldIcon,
  rescue: CatIcon,
  transport: BikeIcon,
  verification: CheckIcon,
} as const;

type IconName = keyof typeof iconComponents;

const organizations = [
  {
    name: "Vancouver Foundation",
    url: "https://www.vancouverfoundation.ca/",
    focus: "Community & Equity",
    description:
      "One of Canada's largest community foundations, investing in grassroots projects, scholarships, and systems change across BC.",
    impact: "Your gift strengthens generational programs that respond to emerging local needs quickly and transparently.",
    icon: "foundation",
  },
  {
    name: "David Suzuki Foundation",
    url: "https://davidsuzuki.org/",
    focus: "Environment",
    description: "Science-based advocacy and education campaigns that protect wildlife, climate, and clean air from a Vancouver base.",
    impact: "Support long-horizon policy work and community action that keeps BC's ecosystems resilient.",
    icon: "environment",
  },
  {
    name: "Union Gospel Mission",
    url: "https://www.ugm.ca/",
    focus: "Housing & Recovery",
    description: "Shelter, addiction recovery, and family programs rooted in the Downtown Eastside for more than 80 years.",
    impact: "Every donation supplies meals, warm beds, and wraparound support for neighbours experiencing homelessness.",
    icon: "housing",
  },
  {
    name: "Aunt Leah’s Community Foundation",
    url: "https://www.auntleahs.org/",
    focus: "Youth in Care",
    description: "Helps young people in and from foster care build independence with housing, training, and family-like networks.",
    impact: "Stabilize transitions to adulthood for youth who often age out of services without support.",
    icon: "youth",
  },
  {
    name: "Greater Vancouver Food Bank",
    url: "https://www.foodbank.bc.ca/",
    focus: "Food Security",
    description: "Procures and distributes nutritious food for tens of thousands of people each month across the Lower Mainland.",
    impact: "Multiply your dollar through bulk purchasing and community partnerships that fight hunger.",
    icon: "food",
  },
  {
    name: "Pathways Clubhouse Society",
    url: "https://www.pathwaysclubhouse.ca/",
    focus: "Mental Health",
    description: "A recovery-oriented clubhouse providing employment, social, and wellness programs for adults living with mental illness.",
    impact: "Help sustain peer-led spaces that reduce isolation and open pathways to meaningful work.",
    icon: "mentalHealth",
  },
  {
    name: "Quest Outreach Society",
    url: "https://www.questoutreach.ca/",
    focus: "Food Rescue",
    description: "Operates social supermarkets and outreach services that divert surplus food toward communities facing affordability gaps.",
    impact: "Reduce waste while making dignified, affordable shopping possible for thousands of families.",
    icon: "verification",
  },
  {
    name: "Vancouver Orphan Kitten Rescue Association (VOKRA)",
    url: "https://www.vokra.ca/",
    focus: "Animal Welfare",
    description: "A no-kill cat rescue that coordinates foster care, medical treatment, and trap-neuter-return programs citywide.",
    impact: "Fund emergency vet care and supplies that keep vulnerable animals safe until they find permanent homes.",
    icon: "rescue",
  },
  {
    name: "Better Environmentally Sound Transportation (BEST)",
    url: "https://best.bc.ca/",
    focus: "Sustainable Transit",
    description: "Advocates for cycling, transit, and accessible mobility solutions across Metro Vancouver.",
    impact: "Advance climate-friendly transportation options that connect communities without a car.",
    icon: "transport",
  },
  {
    name: "Portland Hotel Society",
    url: "https://www.phs.bc.ca/",
    focus: "Supportive Housing",
    description: "Delivers housing, harm reduction, and community health services with deep roots in the Downtown Eastside.",
    impact: "Keep life-saving front-line programs running for residents facing multiple systemic barriers.",
    icon: "mentalHealth",
  },
] satisfies {
  name: string;
  url: string;
  focus: string;
  description: string;
  impact: string;
  icon: IconName;
}[];

const givingPrinciples = [
  {
    title: "Prioritize transparency",
    copy: "Review annual reports and impact statements so you understand how funds get deployed.",
  },
  {
    title: "Support monthly",
    copy: "Recurring gifts help charities plan long-term services rather than reacting to spikes and dips.",
  },
  {
    title: "Match your values",
    copy: "Pick a mix of causes—environment, housing, youth—so your generosity mirrors the city you care about.",
  },
];

export default function DonatePage() {
  return (
     <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.3),_transparent_60%)]" />
        <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-24 pt-24 sm:px-10 lg:px-16">
        <section className="space-y-8">
          <div className="flex flex-wrap items-center gap-3">
            <Badge className="bg-white/10 text-emerald-200 ring-emerald-300/30">Trusted Vancouver Causes</Badge>
            <Badge variant="neutral" className="bg-white/10 text-white ring-white/40">
              Curated giving guide
            </Badge>
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Donate with confidence to organizations rooted in the community.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              Each nonprofit below is based in Metro Vancouver, registered, and known for transparent governance. Combine a few to
              balance urgent relief with long-term systems change.
            </p>
            <p className="text-sm text-slate-300">
              <a
              href="https://www.canada.ca/en/revenue-agency/services/charities-giving/list-charities/list-charities-other-qualified-donees.html"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-200 underline underline-offset-4 hover:text-emerald-100"
              >
              Check out info about tax credits for donations
              </a>
              .
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              Return home
            </Link>
            <Link href="/mission">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:border-emerald-300 hover:bg-white/10 hover:text-emerald-100"
              >
                Mission
              </Button>
            </Link>
          </div>
        </section>

        <section className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {organizations.map((organization) => {
            const Icon = iconComponents[organization.icon];
            return (
              <Card
                key={organization.name}
                className="group flex w-full max-w-xl flex-col justify-between border border-slate-200 bg-white text-slate-900 shadow-lg transition duration-300 hover:border-emerald-200 hover:shadow-emerald-200/40 md:max-w-none"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                        <Icon />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{organization.name}</CardTitle>
                        <CardDescription className="text-slate-600">{organization.focus}</CardDescription>
                      </div>
                    </div>
                    <Badge className="flex-shrink-0 whitespace-nowrap bg-emerald-50 text-emerald-700 ring-emerald-200">
                      CRA Registered
                    </Badge>
                  </div>
                  <p className="text-base text-slate-700">{organization.description}</p>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 border-t border-slate-100 pt-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-slate-700">{organization.impact}</p>
                  <Button variant="solid" className="bg-emerald-600 text-white hover:bg-emerald-500 group-hover:bg-emerald-500">
                    <a href={organization.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                      Donate now
                      <ArrowUpRightIcon />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </section>
      </main>
      <footer className="mx-auto w-full max-w-6xl px-6 pb-12 text-xs leading-6 text-slate-400 sm:px-10 lg:px-16">
        <p className="border-t border-white/10 pt-6">
          <span className="font-semibold text-slate-300">*CRA-registered charity*</span> means an organization officially
          recognized by the Canadian government that can issue tax-deductible donation receipts and must meet strict
          operational and reporting rules.{" "}
          <a
            href="https://www.canada.ca/en/revenue-agency/services/charities-giving/about-registered-charities/what-difference-between-a-registered-charity-a-non-profit-organization.html"
            className="text-emerald-200 underline underline-offset-4 hover:text-emerald-100"
          >
            More on CRA-registered organizations
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
