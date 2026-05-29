export type ProjectStatus = "active" | "completed" | "seeking";

export interface Project {
  id: string;
  title: string;
  owner: string;
  description: string;
  disciplines: string[];
  status: ProjectStatus;
  stars: number;
  contributors: number;
  commits: number;
  updatedDaysAgo: number;
  langs: string[];
  coverColor: string;
}

export const projects: Project[] = [
  {
    id: "micro-turbine",
    title: "next-gen-micro-turbine",
    owner: "aero-team",
    description: "High-efficiency micro-turbine for autonomous drones, developed by aerospace engineers and materials scientists. Targets 40% efficiency improvement over current gen.",
    disciplines: ["Aerospace", "Materials", "Mechanical"],
    status: "active",
    stars: 412,
    contributors: 5,
    commits: 284,
    updatedDaysAgo: 2,
    langs: ["C++", "Python", "MATLAB"],
    coverColor: "from-sky-600 to-blue-800",
  },
  {
    id: "parametric-bridge",
    title: "parametric-bridge-gen",
    owner: "structurelab",
    description: "Generative algorithms to optimise structural integrity while minimising material use in pedestrian bridges. FEA-verified with real load data.",
    disciplines: ["Civil", "Structural", "Software"],
    status: "completed",
    stars: 287,
    contributors: 3,
    commits: 156,
    updatedDaysAgo: 14,
    langs: ["Python", "Grasshopper", "Rust"],
    coverColor: "from-amber-600 to-orange-800",
  },
  {
    id: "iot-mesh",
    title: "iot-mesh-controller",
    owner: "embeddedcrew",
    description: "Custom PCB design paired with a real-time OS for robust industrial IoT mesh networking. Supports 256-node topologies at sub-5ms latency.",
    disciplines: ["Electrical", "Firmware", "Software"],
    status: "active",
    stars: 634,
    contributors: 7,
    commits: 519,
    updatedDaysAgo: 1,
    langs: ["C", "TypeScript", "KiCad"],
    coverColor: "from-teal-600 to-emerald-800",
  },
  {
    id: "prosthetic-arm",
    title: "open-prosthetic-arm",
    owner: "biomed-collective",
    description: "Low-cost 3D-printable prosthetic arm with EMG-based control. Designed for sub-Saharan Africa manufacturing constraints and local material availability.",
    disciplines: ["Biomedical", "Mechanical", "Electrical"],
    status: "seeking",
    stars: 1243,
    contributors: 12,
    commits: 891,
    updatedDaysAgo: 3,
    langs: ["Python", "C++", "OpenSCAD"],
    coverColor: "from-violet-600 to-purple-800",
  },
  {
    id: "solar-tracker",
    title: "dual-axis-solar-tracker",
    owner: "greeneng",
    description: "Dual-axis photovoltaic tracker with ML-based cloud prediction for pre-positioning. 18% yield improvement in field tests over fixed-tilt installations.",
    disciplines: ["Electrical", "Mechanical", "Software"],
    status: "active",
    stars: 389,
    contributors: 4,
    commits: 302,
    updatedDaysAgo: 5,
    langs: ["Python", "C", "TensorFlow"],
    coverColor: "from-yellow-500 to-orange-700",
  },
  {
    id: "hydro-monitor",
    title: "river-hydro-monitor",
    owner: "civildata",
    description: "Open-source river level and flow monitoring system using ultrasonic sensors + LoRa. Deployed in 3 Mozambican river basins for flood early warning.",
    disciplines: ["Civil", "Electrical", "Environmental"],
    status: "active",
    stars: 198,
    contributors: 6,
    commits: 173,
    updatedDaysAgo: 7,
    langs: ["C++", "Python", "PostgreSQL"],
    coverColor: "from-blue-600 to-cyan-800",
  },
  {
    id: "wind-lidar",
    title: "low-cost-wind-lidar",
    owner: "atmoslab",
    description: "Coherent Doppler wind lidar prototype targeting <$5k BOM. Combines aerospace optics with embedded DSP for real-time wind profile extraction.",
    disciplines: ["Aerospace", "Optical", "Firmware"],
    status: "seeking",
    stars: 521,
    contributors: 3,
    commits: 97,
    updatedDaysAgo: 10,
    langs: ["C", "MATLAB", "VHDL"],
    coverColor: "from-slate-600 to-gray-800",
  },
  {
    id: "agri-robot",
    title: "autonomous-agri-robot",
    owner: "agritech-moz",
    description: "Autonomous weeding robot for smallholder farms. Uses computer vision for crop-weed discrimination, designed for uneven terrain in East Africa.",
    disciplines: ["Mechanical", "Software", "Electrical"],
    status: "seeking",
    stars: 764,
    contributors: 9,
    commits: 448,
    updatedDaysAgo: 4,
    langs: ["Python", "ROS2", "C++"],
    coverColor: "from-green-600 to-lime-800",
  },
];

export const disciplines = [
  "All",
  "Aerospace",
  "Biomedical",
  "Civil",
  "Electrical",
  "Environmental",
  "Firmware",
  "Mechanical",
  "Software",
  "Structural",
];

export const langColors: Record<string, string> = {
  "C++": "bg-blue-500",
  "Python": "bg-yellow-400",
  "MATLAB": "bg-orange-500",
  "Grasshopper": "bg-green-500",
  "Rust": "bg-orange-600",
  "C": "bg-gray-400",
  "TypeScript": "bg-blue-400",
  "KiCad": "bg-teal-500",
  "OpenSCAD": "bg-purple-500",
  "TensorFlow": "bg-yellow-600",
  "PostgreSQL": "bg-blue-600",
  "VHDL": "bg-red-500",
  "ROS2": "bg-gray-500",
};
