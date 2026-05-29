'use client'

import { useState } from "react";
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Calendar, Link2, Star, GitBranch, BookOpen,
  Zap, Award, Users, Settings, Edit2, ExternalLink,
  ChevronRight, ArrowUpRight,
} from "lucide-react";

/* ─── mock data ─── */
const DISCIPLINES = ["Firmware", "Electrical", "Embedded Systems", "IoT"];

const STATS = [
  { label: "Projects",   value: 12,   suffix: "" },
  { label: "Articles",   value: 8,    suffix: "" },
  { label: "Reputation", value: 2847, suffix: "" },
];

const BADGES = [
  { icon: Star,  label: "Top Contributor", color: "text-amber-400",  bg: "bg-amber-400/10"  },
  { icon: Award, label: "Beta Tester",     color: "text-violet-400", bg: "bg-violet-400/10" },
  { icon: Users, label: "Mentor",          color: "text-teal-400",   bg: "bg-teal-400/10"   },
];

const PROJECTS = [
  {
    id: "iot-mesh",
    repo: "embeddedcrew/iot-mesh-controller",
    description: "Self-healing LoRa mesh network for remote sensor clusters.",
    tags: ["Firmware", "LoRa", "C"],
    stars: 412, forks: 58,
    status: "Active",
    accentColor: "bg-emerald-400",
  },
  {
    id: "solar-tracker",
    repo: "greeneng/dual-axis-solar-tracker",
    description: "ML-based dual-axis tracker with 18% yield improvement.",
    tags: ["Electrical", "Python", "ML"],
    stars: 389, forks: 41,
    status: "Active",
    accentColor: "bg-emerald-400",
  },
  {
    id: "agri-robot",
    repo: "agritech-moz/autonomous-agri-robot",
    description: "Terrain-adaptive autonomous robot for smallholder farms.",
    tags: ["Mechanical", "ROS", "Python"],
    stars: 764, forks: 93,
    status: "In Progress",
    accentColor: "bg-amber-400",
  },
  {
    id: "hydro-monitor",
    repo: "civildata/river-hydro-monitor",
    description: "Early flood warning system deployed in the Zambezi basin.",
    tags: ["Civil", "Sensors", "Python"],
    stars: 287, forks: 29,
    status: "Completed",
    accentColor: "bg-border",
  },
];

const ARTICLES = [
  {
    id: "a1",
    title: "How cross-disciplinary teams build better hardware",
    discipline: "Mechanical",
    readTime: "6 min",
    views: 1820,
    timeAgo: "2h",
    href: "/articles",
  },
  {
    id: "a2",
    title: "FreeRTOS vs bare-metal: when to choose each",
    discipline: "Firmware",
    readTime: "9 min",
    views: 3410,
    timeAgo: "4d",
    href: "/articles",
  },
  {
    id: "a3",
    title: "Python for structural load calculations — a practical guide",
    discipline: "Civil",
    readTime: "7 min",
    views: 2105,
    timeAgo: "1w",
    href: "/articles",
  },
];

const ACTIVITY = [
  { type: "article",  text: 'Published "FreeRTOS vs bare-metal"',              timeAgo: "4d"  },
  { type: "project",  text: "Opened PR #47 on iot-mesh-controller",            timeAgo: "6d"  },
  { type: "question", text: 'Asked "Best ESC approach for micro-turbines?"',    timeAgo: "1w"  },
  { type: "post",     text: "Shared field report on dual-axis solar tracker",   timeAgo: "2w"  },
  { type: "project",  text: "Merged terrain-adaptation module into agri-robot", timeAgo: "3w"  },
];

const ACTIVITY_DOT: Record<string, string> = {
  article:  "bg-blue-400",
  project:  "bg-primary",
  question: "bg-amber-400",
  post:     "bg-muted-foreground",
};

const SKILLS = ["C / C++", "Python", "FreeRTOS", "STM32", "ESP32", "LoRa", "KiCad", "Linux", "Git", "Docker"];

type Tab = "activity" | "projects" | "articles" | "about";

/* ─── sub-components ─── */

function StatCol({ label, value }: { label: string; value: number }) {
  const display = value >= 1000 ? `${(value / 1000).toFixed(1)}k` : String(value);
  return (
    <div className="flex flex-col items-center gap-0.5 py-5">
      <span className="font-display font-bold text-[28px] leading-none tabular-nums text-foreground">
        {display}
      </span>
      <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-medium mt-1">
        {label}
      </span>
    </div>
  );
}

function ProjectRow({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <Link href="/projects">
      <div className="group flex gap-4 px-5 py-4 border-b border-border/60 hover:bg-accent/30 transition-colors">
        <div className={`w-0.5 rounded-full shrink-0 ${project.accentColor} opacity-70`} />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <p className="text-[12px] font-mono text-primary leading-snug truncate">{project.repo}</p>
            <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
          </div>
          <p className="text-sm text-foreground/80 leading-snug mb-2.5">{project.description}</p>
          <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <Star className="h-3 w-3" />
              {project.stars}
            </span>
            <span className="flex items-center gap-1">
              <GitBranch className="h-3 w-3" />
              {project.forks}
            </span>
            <span className="ml-auto text-[10px] uppercase tracking-wider font-medium opacity-60">
              {project.status}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ArticleRow({ article }: { article: (typeof ARTICLES)[number] }) {
  return (
    <Link href={article.href}>
      <div className="group flex items-start gap-4 px-5 py-4 border-b border-border/60 hover:bg-accent/30 transition-colors">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground leading-snug mb-1.5 group-hover:text-primary transition-colors">
            {article.title}
          </p>
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
            <span className="text-[10px] uppercase tracking-wider font-medium text-primary/70">
              {article.discipline}
            </span>
            <span className="text-border">·</span>
            <span>{article.readTime} read</span>
            <span className="text-border">·</span>
            <span>{article.views.toLocaleString()} views</span>
          </div>
        </div>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
      </div>
    </Link>
  );
}

/* ─── main page ─── */
export default function Profile() {
  const [tab, setTab] = useState<Tab>("activity");

  const displayName = "Engenheiro";
  const handle ="engenheiro";
  const initials = "EN";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* <Navbar /> */}

      <main className="flex-1 pt-14">
        <div className="md:max-w-2xl md:mx-auto md:border-x md:border-border min-h-full">

          {/* ── Identity block ── */}
          <div className="border-b border-border">
            <div className="px-5 pt-7 pb-5">

              {/* Avatar row */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3.5">
                  <div className="relative shrink-0">
                    <div className="h-[54px] w-[54px] rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-[17px] shadow-lg shadow-primary/20">
                      {initials}
                    </div>
                    <span className="absolute bottom-0.5 right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 border-2 border-background" />
                  </div>
                  <div>
                    <h1
                      className="text-[22px] font-bold leading-tight text-foreground"
                      style={{ fontFamily: "var(--app-font-display)" }}
                    >
                      {displayName}
                    </h1>
                    <p className="text-[13px] text-muted-foreground mt-0.5">@{handle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-accent transition-all"
                  >
                    <Edit2 className="h-3 w-3" />
                    Edit
                  </button>
                  <button className="p-1.5 border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-accent transition-all">
                    <Settings className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Bio */}
              <p className="text-[13.5px] text-foreground/70 leading-relaxed mb-5 pl-3.5 border-l-2 border-primary/40">
                Embedded systems engineer building open-source hardware for the African engineering community. Based in Maputo.
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11.5px] text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3 w-3 shrink-0" />
                  Maputo, Mozambique
                </span>
                <span className="text-border/80">·</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3 w-3 shrink-0" />
                  Since Jan 2025
                </span>
                <span className="text-border/80">·</span>
                <a className="flex items-center gap-1 text-primary/80 hover:text-primary transition-colors">
                  <Link2 className="h-3 w-3 shrink-0" />
                  englink.mth.mz/@{handle}
                </a>
              </div>
            </div>

            {/* Stats — editorial numbers */}
            <div className="grid grid-cols-3 border-t border-border">
              {STATS.map(({ label, value }, i) => (
                <div
                  key={label}
                  className={`${i < STATS.length - 1 ? "border-r border-border" : ""}`}
                >
                  <StatCol label={label} value={value} />
                </div>
              ))}
            </div>

            {/* Disciplines as small-caps text */}
            <div className="border-t border-border px-5 py-3 flex items-center justify-between">
              <p className="text-[11px] uppercase tracking-[0.14em] font-medium text-primary/80">
                {DISCIPLINES.join(" · ")}
              </p>
              {/* Recognition icons */}
              <div className="flex items-center gap-1.5">
                {BADGES.map((b) => (
                  <div
                    key={b.label}
                    title={b.label}
                    className={`h-6 w-6 rounded-md flex items-center justify-center ${b.bg} ${b.color}`}
                  >
                    <b.icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Tab bar ── */}
          <div className="sticky top-14 z-20 bg-background/95 backdrop-blur-md border-b border-border flex">
            {(["activity", "projects", "articles", "about"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] relative transition-colors ${
                  tab === t ? "text-foreground" : "text-muted-foreground hover:text-foreground/70"
                }`}
              >
                {t}
                {tab === t && (
                  <motion.div
                    layoutId="profile-tab-indicator"
                    className="absolute bottom-0 inset-x-0 h-[2px] bg-primary"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.35 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* ── Tab content ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.14 }}
            >

              {/* ── Activity ── */}
              {tab === "activity" && (
                <div className="py-2">
                  <div className="relative ml-5 pl-4 border-l border-border/60">
                    {ACTIVITY.map((item, i) => (
                      <div key={i} className="relative flex items-start gap-3 py-3 pr-5 group">
                        {/* Timeline dot */}
                        <div className={`absolute -left-[18.5px] top-[17px] h-2 w-2 rounded-full ring-2 ring-background ${ACTIVITY_DOT[item.type] ?? "bg-muted"}`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-[13.5px] text-foreground leading-snug">
                            {item.text}
                          </p>
                        </div>
                        <span className="shrink-0 text-[11px] text-muted-foreground tabular-nums pt-0.5">
                          {item.timeAgo} ago
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 pb-6 text-center text-[11px] text-muted-foreground/50 uppercase tracking-wider">
                    {ACTIVITY.length} events
                  </div>
                </div>
              )}

              {/* ── Projects ── */}
              {tab === "projects" && (
                <div>
                  {PROJECTS.map((p) => <ProjectRow key={p.id} project={p} />)}
                  <div className="py-5 text-center">
                    <Link href="/projects">
                      <span className="inline-flex items-center gap-1 text-[12px] text-primary hover:underline uppercase tracking-wider font-medium">
                        All projects <ChevronRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  </div>
                </div>
              )}

              {/* ── Articles ── */}
              {tab === "articles" && (
                <div>
                  {ARTICLES.map((a) => <ArticleRow key={a.id} article={a} />)}
                  <div className="py-5 text-center">
                    <Link href="/articles">
                      <span className="inline-flex items-center gap-1 text-[12px] text-primary hover:underline uppercase tracking-wider font-medium">
                        All articles <ChevronRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  </div>
                </div>
              )}

              {/* ── About ── */}
              {tab === "about" && (
                <div className="divide-y divide-border/60">

                  {/* Skills */}
                  <div className="px-5 py-5">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground font-medium mb-3">
                      Technical Stack
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {SKILLS.map((s) => (
                        <span
                          key={s}
                          className="px-2.5 py-1 text-[12px] font-mono rounded-md bg-muted/60 border border-border/60 text-foreground/80"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Recognition */}
                  <div className="px-5 py-5">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground font-medium mb-3">
                      Recognition
                    </p>
                    <div className="space-y-2">
                      {BADGES.map((b) => (
                        <div key={b.label} className="flex items-center gap-2.5">
                          <div className={`h-6 w-6 rounded-md flex items-center justify-center ${b.bg} ${b.color}`}>
                            <b.icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                          </div>
                          <span className="text-[13px] text-foreground/80">{b.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="px-5 py-5">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground font-medium mb-3">
                      Links
                    </p>
                    <div className="space-y-2.5">
                      {[
                        { label: "GitHub",   url: `github.com/${handle}` },
                        { label: "LinkedIn", url: `linkedin.com/in/${handle}` },
                      ].map((l) => (
                        <div key={l.label} className="flex items-center gap-3">
                          <span className="text-[11px] uppercase tracking-wider text-muted-foreground w-16 shrink-0">
                            {l.label}
                          </span>
                          <span className="text-[13px] text-primary hover:underline cursor-pointer flex items-center gap-1">
                            {l.url}
                            <ExternalLink className="h-3 w-3 opacity-60" />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Account */}
                  <div className="px-5 py-5">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground font-medium mb-3">
                      Account
                    </p>
                    <p className="text-[13px] text-foreground/70 mb-0.5">user@email.com</p>
                    <p className="text-[12px] text-muted-foreground mb-4">Member since January 2025</p>
                    <button
                      className="w-full py-2.5 text-[13px] font-medium text-red-500 border border-red-500/20 rounded-xl hover:bg-red-500/8 transition-colors"
                    >
                      Sign out
                    </button>
                  </div>

                </div>
              )}

            </motion.div>
          </AnimatePresence>

        </div>
      </main>
    </div>
  );
}
