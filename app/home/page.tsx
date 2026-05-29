'use client'

import MobileNavMenu from '@/components/MobileNavMenu';
import { NewPostButton } from '@/components/NewPostButton'
import Sidebar from '@/components/LoggedDrawer';
import { ThemeToggler } from '@/components/ui/themeToggler';
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import PostCard from '@/components/PostCard'
import {
  ChevronUp,
  ChevronDown,
  MessageSquare,
  Share2,
  Bookmark,
  Pin,
  Search,
  X,
  SlidersHorizontal,
} from "lucide-react";
import {
  feedPosts,
  typeConfig,
  disciplineAccent,
  type PostType,
} from '@/data/feed';
import Link from 'next/link'



const disciplineFilters = [
  "All",
  "Mechanical",
  "Electrical",
  "Firmware",
  "Civil",
  "Biomedical",
  "Software",
  "Aerospace",
];

const typeFilters: Array<"all" | PostType> = [
  "all",
  "article",
  "post",
  "project",
  "question",
];




export default function HomePage() {
    const [search, setSearch] = useState("");
  const [discipline, setDiscipline] = useState("All");
  const [type, setType] = useState<"all" | PostType>("all");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return feedPosts.filter((p) => {
      const matchSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt?.toLowerCase().includes(search.toLowerCase()) ||
        p.author.toLowerCase().includes(search.toLowerCase());
      const matchDiscipline =
        discipline === "All" || p.discipline === discipline;
      const matchType = type === "all" || p.type === type;
      return matchSearch && matchDiscipline && matchType;
    });
  }, [search, discipline, type]);

  const hasFilters = search || discipline !== "All" || type !== "all";


    return (
        <main className='flex-1'>
        <div className='fixed top-0 w-full bg-background flex justify-between align-center p-3 h-14'>

            <div className='flex justify-center self-center align-center gap-1.5'>
                <Sidebar/>
                <h2 className='text-sm self-center'>Home</h2>
            </div>
            <div className='flex gap-1.5'>
                <ThemeToggler />
                <NewPostButton />
            </div>            
        </div>

        {/* Sticky filter bar — flush to edges */}
        <div className="sticky top-12 z-30 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="flex items-center gap-2 px-3 py-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
              <input
                type="search"
                placeholder="Search feed…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-card border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                data-testid="input-feed-search"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`p-1.5 rounded border transition-colors ${
                hasFilters
                  ? "border-primary text-primary bg-primary/10"
                  : "border-border text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
              data-testid="btn-feed-filters"
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
            </button>
            {hasFilters && (
              <button
                onClick={() => {
                  setSearch("");
                  setDiscipline("All");
                  setType("all");
                }}
                className="p-1.5 rounded border border-border text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                data-testid="btn-clear-feed-filters"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Expanded filter row */}
          {showFilters && (
            <div className="border-t border-border px-3 py-2 flex flex-col gap-2">
              {/* Type pills */}
              <div className="flex gap-1.5 overflow-x-auto pb-0.5 scrollbar-none">
                {typeFilters.map((t) => (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    className={`px-2.5 py-1 text-[11px] font-medium rounded-full border whitespace-nowrap transition-colors ${
                      type === t
                        ? "bg-primary/10 text-primary border-primary/30"
                        : "border-border text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`}
                  >
                    {t === "all" ? "All types" : typeConfig[t].label}
                  </button>
                ))}
              </div>
              {/* Discipline pills */}
              <div className="flex gap-1.5 overflow-x-auto pb-0.5 scrollbar-none">
                {disciplineFilters.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDiscipline(d)}
                    className={`px-2.5 py-1 text-[11px] font-medium rounded-full border whitespace-nowrap transition-colors ${
                      discipline === d
                        ? "bg-primary/10 text-primary border-primary/30"
                        : "border-border text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Feed — no side padding, no gap between cards */}
        <div className="md:max-w-2xl pt-14 md:mx-auto md:border-x md:border-border">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-sm">No posts match your filters.</p>
            </div>
          ) : (
            filtered.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.15, delay: i * 0.02 }}
              >
                <PostCard post={post} />
              </motion.div>
            ))
          )}

          {filtered.length > 0 && (
            <div className="py-8 text-center text-xs text-muted-foreground border-b border-border">
              Youre all caught up · {filtered.length} posts
            </div>
          )}
        </div>
      
        <MobileNavMenu />
        </main>
    )
}
