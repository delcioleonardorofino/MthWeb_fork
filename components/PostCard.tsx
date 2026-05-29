'use client'

import MobileNavMenu from '@/components/MobileNavMenu';
import { NewPostButton } from '@/components/NewPostButton'
import Sidebar from '@/components/LoggedDrawer';
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
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
import Link from 'next/link';


const AVATAR_PALETTE = [
  "bg-teal-600",
  "bg-violet-600",
  "bg-amber-600",
  "bg-sky-600",
  "bg-rose-600",
  "bg-emerald-600",
  "bg-indigo-600",
  "bg-orange-600",
  "bg-pink-600",
];



function avatarColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++)
    hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  return AVATAR_PALETTE[hash % AVATAR_PALETTE.length];
}



function initials(name: string): string {
  const parts = name
    .replace(/[^a-zA-Z\s-]/g, "")
    .trim()
    .split(/[\s-]+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}



function VoteButton({
  direction,
  active,
  onClick,
}: {
  direction: "up" | "down";
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`p-0.5 rounded transition-colors ${
        active
          ? direction === "up"
            ? "text-primary"
            : "text-blue-400"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {direction === "up" ? (
        <ChevronUp className="h-4 w-4" strokeWidth={active ? 3 : 2} />
      ) : (
        <ChevronDown className="h-4 w-4" strokeWidth={active ? 3 : 2} />
      )}
    </button>
  );
}


function AuthorBadge({ author }: { author: string }) {
  return (
    <span className="flex items-center gap-1">
      <span
        className={`inline-flex items-center justify-center w-4 h-4 rounded-full text-white text-[9px] font-bold shrink-0 ${avatarColor(author)}`}
      >
        {initials(author)}
      </span>
      <span className="text-[11px] text-muted-foreground">{author}</span>
    </span>
  );
}




export default function PostCard({ post }: { post: (typeof feedPosts)[number] }) {
  const [vote, setVote] = useState<"up" | "down" | null>(null);
  const [saved, setSaved] = useState(false);
  const typeInfo = typeConfig[post.type];
  const accentColor =
    disciplineAccent[post.discipline] ?? "bg-muted-foreground";

  const voteCount = post.votes + (vote === "up" ? 1 : vote === "down" ? -1 : 0);

  const handleVote = (dir: "up" | "down") => {
    setVote((prev) => (prev === dir ? null : dir));
  };

  const inner = (
    <div className="flex gap-2.5 px-3 py-2.5 hover:bg-accent/40 transition-colors active:bg-accent/60">
      {/* Discipline accent bar */}
      <div
        className={`w-0.5 shrink-0 rounded-full self-stretch ${accentColor} opacity-60`}
      />

      {/* Vote column */}
      <div
        className="flex flex-col items-center shrink-0 pt-0.5"
        onClick={(e) => e.preventDefault()}
      >
        <VoteButton
          direction="up"
          active={vote === "up"}
          onClick={() => handleVote("up")}
        />
        <span
          className={`text-[11px] font-bold leading-none my-0.5 tabular-nums ${
            vote === "up"
              ? "text-primary"
              : vote === "down"
                ? "text-blue-400"
                : "text-muted-foreground"
          }`}
        >
          {voteCount >= 1000 ? `${(voteCount / 1000).toFixed(1)}k` : voteCount}
        </span>
        <VoteButton
          direction="down"
          active={vote === "down"}
          onClick={() => handleVote("down")}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 min-w-0">
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-1.5 mb-1">
          <span
            className={`px-1.5 py-0.5 text-[10px] font-medium rounded border ${typeInfo.color}`}
          >
            {typeInfo.label}
          </span>
          <span className="text-[11px] text-muted-foreground">
            {post.discipline}
          </span>
          <span className="text-[11px] text-muted-foreground">·</span>
          <AuthorBadge author={post.author} />
          <span className="text-[11px] text-muted-foreground">·</span>
          <span className="text-[11px] text-muted-foreground">
            {post.timeAgo}
          </span>
          {post.pinned && (
            <>
              <span className="text-[11px] text-muted-foreground">·</span>
              <span className="flex items-center gap-0.5 text-[10px] text-primary font-medium">
                <Pin className="h-2.5 w-2.5" /> Pinned
              </span>
            </>
          )}
        </div>

        {/* Title */}
        <p className="text-sm font-semibold text-foreground leading-snug mb-1">
          {post.title}
        </p>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-1.5">
            {post.excerpt}
          </p>
        )}

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-1.5 py-0.5 text-[10px] rounded bg-muted text-muted-foreground border border-border font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer actions */}
        <div
          className="flex items-center gap-1 -ml-1"
          onClick={(e) => e.preventDefault()}
        >
          <button className="flex items-center gap-1 px-1.5 py-1 text-[11px] text-muted-foreground hover:text-foreground hover:bg-accent rounded transition-colors">
            <MessageSquare className="h-3.5 w-3.5" />
            {post.comments} comments
          </button>
          <button className="flex items-center gap-1 px-1.5 py-1 text-[11px] text-muted-foreground hover:text-foreground hover:bg-accent rounded transition-colors">
            <Share2 className="h-3.5 w-3.5" />
            Share
          </button>
          <button
            onClick={() => setSaved(!saved)}
            className={`flex items-center gap-1 px-1.5 py-1 text-[11px] rounded transition-colors ${
              saved
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            }`}
          >
            <Bookmark
              className={`h-3.5 w-3.5 ${saved ? "fill-primary" : ""}`}
            />
            {saved ? "Saved" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );

  if (post.href) {
    return (
      <Link href={post.href}>
        <div
          className="border-b border-border"
          data-testid={`feed-post-${post.id}`}
        >
          {inner}
        </div>
      </Link>
    );
  }

  return (
    <div
      className="border-b border-border"
      data-testid={`feed-post-${post.id}`}
    >
      {inner}
    </div>
  );
}