export type PostType = "article" | "post" | "project" | "question";

export interface FeedPost {
  id: string;
  type: PostType;
  title: string;
  excerpt?: string;
  author: string;
  discipline: string;
  timeAgo: string;
  votes: number;
  comments: number;
  href?: string;
  tags: string[];
  pinned?: boolean;
}

export const feedPosts: FeedPost[] = [
  {
    id: "f1",
    type: "article",
    title: "How cross-disciplinary teams build better hardware",
    excerpt: "When software engineers collaborate with mechanical designers from day one, the result is hardware that's both manufacturable and maintainable.",
    author: "Ana Sitoe",
    discipline: "Mechanical",
    timeAgo: "2h",
    votes: 412,
    comments: 38,
    href: "/articles",
    tags: ["Collaboration", "Hardware"],
  },
  {
    id: "f2",
    type: "project",
    title: "Open Prosthetic Arm just hit 1,200 stars — looking for a bioelectronics engineer",
    excerpt: "We've reached a major milestone and are now actively seeking someone with EMG signal processing experience to join the core team.",
    author: "biomed-collective",
    discipline: "Biomedical",
    timeAgo: "4h",
    votes: 891,
    comments: 74,
    href: "/projects",
    tags: ["Open Source", "Seeking"],
    pinned: true,
  },
  {
    id: "f3",
    type: "question",
    title: "Best approach for controlling a brushless motor without a dedicated ESC at low speeds?",
    excerpt: "Working on a micro-turbine project and our off-the-shelf ESCs are too large. Looking for firmware approaches using bare STM32.",
    author: "aero-team",
    discipline: "Firmware",
    timeAgo: "5h",
    votes: 156,
    comments: 29,
    tags: ["Embedded", "Motor Control"],
  },
  {
    id: "f4",
    type: "article",
    title: "PCB layout mistakes that cost us three respins",
    excerpt: "A post-mortem on the IoT Mesh Controller project's hardware revision cycle — and what design rules we now enforce before routing a single trace.",
    author: "Fatima Nhantumbo",
    discipline: "Electrical",
    timeAgo: "14h",
    votes: 634,
    comments: 51,
    href: "/articles",
    tags: ["PCB", "Lessons Learned"],
  },
  {
    id: "f5",
    type: "post",
    title: "Just finished a 3-month sprint on our dual-axis solar tracker — here's what surprised us",
    excerpt: "18% yield improvement confirmed in field tests. The ML cloud prediction model was the real game-changer, not the mechanical redesign we expected.",
    author: "greeneng",
    discipline: "Electrical",
    timeAgo: "1d",
    votes: 389,
    comments: 43,
    href: "/projects",
    tags: ["Solar", "ML", "Field Report"],
  },
  {
    id: "f6",
    type: "question",
    title: "Is FreeCAD's FEM solver accurate enough for load-bearing structural checks?",
    excerpt: "Comparing FreeCAD FEM results against ANSYS on a simple bracket — getting within 8%. Is that acceptable for preliminary design?",
    author: "structurelab",
    discipline: "Civil",
    timeAgo: "1d",
    votes: 203,
    comments: 47,
    tags: ["FEA", "FreeCAD", "Structural"],
  },
  {
    id: "f7",
    type: "article",
    title: "FreeRTOS vs bare-metal: when to choose each",
    excerpt: "For most embedded systems under 64KB of RAM, an RTOS adds complexity without meaningful benefit.",
    author: "Carlos Moiane",
    discipline: "Firmware",
    timeAgo: "2d",
    votes: 521,
    comments: 62,
    href: "/articles",
    tags: ["Embedded", "RTOS"],
  },
  {
    id: "f8",
    type: "post",
    title: "River hydro monitor deployed in the Zambezi basin — first flood early warning data",
    excerpt: "3 sensors online, 47 days of continuous data. Sharing raw CSV and initial analysis for anyone working on hydrological modelling.",
    author: "civildata",
    discipline: "Civil",
    timeAgo: "2d",
    votes: 287,
    comments: 34,
    href: "/projects",
    tags: ["Environmental", "Data", "Open Data"],
  },
  {
    id: "f9",
    type: "question",
    title: "Anyone using KiCad 8's new differential pair router in production?",
    excerpt: "Moved to KiCad 8 and the new interactive router feels different. Curious if others are happy with it for GHz-speed differential pairs.",
    author: "embeddedcrew",
    discipline: "Electrical",
    timeAgo: "3d",
    votes: 178,
    comments: 56,
    tags: ["KiCad", "PCB"],
  },
  {
    id: "f10",
    type: "article",
    title: "Python for structural load calculations — a practical guide",
    excerpt: "Replacing Excel with Python for beam calculations isn't just faster — it's auditable, version-controlled, and extensible.",
    author: "Hélder Zunguze",
    discipline: "Civil",
    timeAgo: "4d",
    votes: 312,
    comments: 28,
    href: "/articles",
    tags: ["Python", "Structural"],
  },
  {
    id: "f11",
    type: "project",
    title: "Autonomous agri-robot v2: terrain adaptation added, seeking field-test sites in Mozambique",
    excerpt: "The new suspension handles 30cm obstacles. Looking for smallholder farms willing to host a 2-week field trial this dry season.",
    author: "agritech-moz",
    discipline: "Mechanical",
    timeAgo: "4d",
    votes: 764,
    comments: 88,
    href: "/projects",
    tags: ["Robotics", "Agriculture", "Seeking"],
  },
  {
    id: "f12",
    type: "post",
    title: "Why we scrapped our custom mesh protocol and went back to LoRa",
    excerpt: "Six months building a proprietary mesh stack. Then we benchmarked LoRaWAN and realised we'd reinvented a worse wheel. Lessons inside.",
    author: "embeddedcrew",
    discipline: "Firmware",
    timeAgo: "5d",
    votes: 634,
    comments: 91,
    tags: ["IoT", "LoRa", "Architecture"],
  },
];

export const typeConfig: Record<PostType, { label: string; color: string }> = {
  article:  { label: "Article",  color: "text-blue-400  bg-blue-400/10  border-blue-400/20"  },
  post:     { label: "Post",     color: "text-muted-foreground bg-muted border-border"       },
  project:  { label: "Project",  color: "text-primary   bg-primary/10  border-primary/20"   },
  question: { label: "Question", color: "text-amber-400 bg-amber-400/10 border-amber-400/20" },
};

export const disciplineAccent: Record<string, string> = {
  Mechanical: "bg-amber-500",
  Electrical: "bg-green-500",
  Firmware:   "bg-teal-500",
  Civil:      "bg-blue-500",
  Biomedical: "bg-violet-500",
  Software:   "bg-indigo-500",
  Aerospace:  "bg-sky-500",
};
