"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";

import DotGrid from "@/components/DotGrid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  HiOutlineBuildingOffice2,
  HiOutlineHome,
  HiOutlineHeart,
  HiOutlineShieldCheck,
  HiOutlineCheckCircle,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";
import { FaUtensils, FaCat } from "react-icons/fa";
import { FaLeaf, FaBicycle } from "react-icons/fa6";

const BuildingIcon = () => (
  <IconBadge>
    <HiOutlineBuildingOffice2 className="h-7 w-7" />
  </IconBadge>
);

const LeafIcon = () => (
  <IconBadge>
    <FaLeaf className="h-7 w-7" />
  </IconBadge>
);

const HomeIcon = () => (
  <IconBadge>
    <HiOutlineHome className="h-7 w-7" />
  </IconBadge>
);

const HeartIcon = () => (
  <IconBadge>
    <HiOutlineHeart className="h-7 w-7" />
  </IconBadge>
);

const UtensilsIcon = () => (
  <IconBadge>
    <FaUtensils className="h-6 w-6" />
  </IconBadge>
);

const ShieldIcon = () => (
  <IconBadge>
    <HiOutlineShieldCheck className="h-7 w-7" />
  </IconBadge>
);

const CatIcon = () => (
  <IconBadge>
    <FaCat className="h-6 w-6" />
  </IconBadge>
);

const BikeIcon = () => (
  <IconBadge>
    <FaBicycle className="h-6 w-6" />
  </IconBadge>
);

const CheckIcon = () => (
  <IconBadge>
    <HiOutlineCheckCircle className="h-7 w-7" />
  </IconBadge>
);

const SearchIcon = () => (
  <HiOutlineMagnifyingGlass className="h-5 w-5 text-emerald-200" aria-hidden />
);

const IconFrame = ({ children, className }: { children: ReactNode; className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className || "h-4 w-4"}
    aria-hidden
  >
    {children}
  </svg>
);

const IconBadge = ({ children }: { children: ReactNode }) => (
  <div
    className="
      grid h-12 w-12 place-items-center shrink-0
      rounded-2xl border border-white/12
      bg-white/80 text-emerald-600
      shadow-[0_10px_40px_rgba(0,0,0,0.22)]
    "
  >
    {children}
  </div>
);

const ArrowUpRightIcon = ({ className }: { className?: string }) => (
  <IconFrame className={className}>
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
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
    impact:
      "Your gift strengthens generational programs that respond to emerging local needs quickly and transparently.",
    icon: "foundation",
  },
  {
    name: "David Suzuki Foundation",
    url: "https://davidsuzuki.org/",
    focus: "Environment",
    description:
      "Science-based advocacy and education campaigns that protect wildlife, climate, and clean air from a Vancouver base.",
    impact:
      "Support long-horizon policy work and community action that keeps BC's ecosystems resilient.",
    icon: "environment",
  },
  {
    name: "Union Gospel Mission",
    url: "https://www.ugm.ca/",
    focus: "Housing & Recovery",
    description:
      "Shelter, addiction recovery, and family programs rooted in the Downtown Eastside for more than 80 years.",
    impact:
      "Every donation supplies meals, warm beds, and wraparound support for neighbours experiencing homelessness.",
    icon: "housing",
  },
  {
    name: "Aunt Leah’s Community Foundation",
    url: "https://www.auntleahs.org/",
    focus: "Youth in Care",
    description:
      "Helps young people in and from foster care build independence with housing, training, and family-like networks.",
    impact:
      "Stabilize transitions to adulthood for youth who often age out of services without support.",
    icon: "youth",
  },
  {
    name: "Greater Vancouver Food Bank",
    url: "https://www.foodbank.bc.ca/",
    focus: "Food Security",
    description:
      "Procures and distributes nutritious food for tens of thousands of people each month across the Lower Mainland.",
    impact:
      "Multiply your dollar through bulk purchasing and community partnerships that fight hunger.",
    icon: "food",
  },
  {
    name: "Pathways Clubhouse Society",
    url: "https://www.pathwaysclubhouse.ca/",
    focus: "Mental Health",
    description:
      "A recovery-oriented clubhouse providing employment, social, and wellness programs for adults living with mental illness.",
    impact:
      "Help sustain peer-led spaces that reduce isolation and open pathways to meaningful work.",
    icon: "mentalHealth",
  },
  {
    name: "Quest Outreach Society",
    url: "https://www.questoutreach.ca/",
    focus: "Food Rescue",
    description:
      "Operates social supermarkets and outreach services that divert surplus food toward communities facing affordability gaps.",
    impact:
      "Reduce waste while making dignified, affordable shopping possible for thousands of families.",
    icon: "verification",
  },
  {
    name: "Vancouver Orphan Kitten Rescue Association (VOKRA)",
    url: "https://www.vokra.ca/",
    focus: "Animal Welfare",
    description:
      "A no-kill cat rescue that coordinates foster care, medical treatment, and trap-neuter-return programs citywide.",
    impact:
      "Fund emergency vet care and supplies that keep vulnerable animals safe until they find permanent homes.",
    icon: "rescue",
  },
  {
    name: "Better Environmentally Sound Transportation (BEST)",
    url: "https://best.bc.ca/",
    focus: "Sustainable Transit",
    description:
      "Advocates for cycling, transit, and accessible mobility solutions across Metro Vancouver.",
    impact:
      "Advance climate-friendly transportation options that connect communities without a car.",
    icon: "transport",
  },
  {
    name: "Portland Hotel Society",
    url: "https://www.phs.bc.ca/",
    focus: "Supportive Housing",
    description:
      "Delivers housing, harm reduction, and community health services with deep roots in the Downtown Eastside.",
    impact:
      "Keep life-saving front-line programs running for residents facing multiple systemic barriers.",
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

export default function DonatePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOrganizations = useMemo(() => {
    const term = searchQuery.trim().toLowerCase();
    if (!term) return organizations;
    return organizations.filter((organization) =>
      organization.name.toLowerCase().includes(term)
    );
  }, [searchQuery]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      {/* background layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="
            absolute inset-0
            opacity-[0.28]
            mask-[radial-gradient(circle_at_50%_30%,black_0%,black_55%,transparent_80%)]
          "
        >
          <DotGrid
            dotSize={10}
            gap={22}
            baseColor="#22d3ee"
            activeColor="#67e8f9"
            proximity={140}
            shockRadius={240}
            shockStrength={5}
            resistance={850}
            returnDuration={1.6}
            className="p-0"
          />
        </div>

        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-0 opacity-60 [background:radial-gradient(900px_circle_at_50%_0%,rgba(16,185,129,0.18),transparent_60%)]" />
      </div>

      {/* content layer */}
      <div className="relative z-10">
        <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-24 pt-24 sm:px-10 lg:px-16">
          <section className="space-y-8">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-white/10 text-emerald-200 ring-emerald-300/30">
                Trusted Vancouver Causes
              </Badge>
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

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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

              <div className="relative w-full max-w-md overflow-hidden rounded-full border border-white/15 bg-white/5 shadow-[0_10px_50px_rgba(0,0,0,0.35)] backdrop-blur">
                <label className="sr-only" htmlFor="organization-search">
                  Search organizations
                </label>
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
                  <SearchIcon />
                </span>
                <input
                  id="organization-search"
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search organizations"
                  className="w-full bg-transparent px-12 py-3 text-sm text-white placeholder:text-slate-300/70 focus:outline-none focus:ring-2 focus:ring-emerald-300/50"
                />
              </div>
            </div>
          </section>

          <section className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            {filteredOrganizations.length === 0 && (
              <div className="col-span-full rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-sm text-slate-200 shadow-inner">
                No organizations match your search. Try a different name.
              </div>
            )}

            {filteredOrganizations.map((organization) => {
              const Icon = iconComponents[organization.icon];
              return (
                <Card
                  key={organization.name}
                  className="
                    group flex w-full max-w-xl flex-col justify-between
                    rounded-3xl border bg-blue-950/90 border-white/12
                    bg-linear-to-b from-white/15 via-white/10 to-white/4
                    text-slate-100 backdrop-blur-xl
                    shadow-[0_18px_70px_rgba(0,0,0,0.38)]
                    transition duration-300
                    hover:border-emerald-200/35
                    hover:from-slate-900/62 hover:via-slate-950/40 hover:to-slate-950/25
                    hover:shadow-[0_22px_80px_rgba(16,185,129,0.16)]
                    md:max-w-none
                  "
                >
                  <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                      <div className="mt-0.5 shrink-0">
                        <Icon />
                      </div>

                      <div className="min-w-0 space-y-0.5">
                        <CardTitle className="text-2xl leading-snug text-white">
                          {organization.name}
                        </CardTitle>
                        <CardDescription className="text-slate-200/85">
                          {organization.focus}
                        </CardDescription>
                      </div>
                    </div>

                      <Badge className="shrink-0 whitespace-nowrap bg-emerald-500/12 text-emerald-100 ring-emerald-300/30">
                        CRA Registered
                      </Badge>
                    </div>

                    <p className="text-base leading-relaxed text-slate-100/80">
                      {organization.description}
                    </p>
                  </CardHeader>

                  <CardContent className="flex flex-col gap-4 border-t border-white/10 pt-4 text-sm sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-slate-100/75">
                      {organization.impact}
                    </p>

                    <Button
                      variant="solid"
                      className="
                        h-10 rounded-full
                        bg-emerald-600 text-white
                        px-4 text-sm font-semibold
                        shadow-[0_10px_26px_rgba(16,185,129,0.30)]
                        transition
                        hover:bg-emerald-500
                        focus-visible:ring-2 focus-visible:ring-emerald-300/60 focus-visible:ring-offset-0
                      "
                    >
                      <a
                        href={organization.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        Donate
                        <ArrowUpRightIcon className="h-4 w-4 text-white" />
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
    </div>
  );
}
