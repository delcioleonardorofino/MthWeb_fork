export type Level = "Beginner" | "Intermediate" | "Advanced";

export interface Lesson {
  title: string;
  duration: string;
  free?: boolean;
}

export interface Section {
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  instructor: string;
  instructorRole: string;
  instructorBio: string;
  discipline: string;
  level: Level;
  duration: string;
  lessons: number;
  enrolled: number;
  rating: number;
  reviews: number;
  price: number;
  coverColor: string;
  tags: string[];
  description: string;
  whatYouLearn: string[];
  requirements: string[];
  curriculum: Section[];
}

export const courses: Course[] = [
  {
    id: "embedded-systems-101",
    title: "Embedded Systems Fundamentals",
    subtitle: "From bare-metal C to real-time OS — a practical guide for hardware engineers.",
    instructor: "Carlos Moiane",
    instructorRole: "Firmware Engineer @ Bosch",
    instructorBio: "10+ years building production embedded systems for automotive and industrial applications. Author of the open-source RTOS toolkit used in 3 of the platform's top projects.",
    discipline: "Firmware",
    level: "Beginner",
    duration: "18h 30m",
    lessons: 64,
    enrolled: 3241,
    rating: 4.8,
    reviews: 412,
    price: 0,
    coverColor: "from-teal-600 to-emerald-800",
    tags: ["C", "RTOS", "ARM", "Microcontrollers"],
    description: "A hands-on introduction to embedded systems development. You'll go from writing your first bare-metal blink program to scheduling tasks with FreeRTOS, handling interrupts safely, and communicating over UART, SPI, and I2C. Every lesson ships with hardware-in-the-loop examples you can run on a $4 STM32 board.",
    whatYouLearn: [
      "Write and debug bare-metal C for ARM Cortex-M microcontrollers",
      "Understand memory-mapped registers, clock trees, and GPIO configuration",
      "Implement interrupt service routines and priority management",
      "Use FreeRTOS tasks, queues, semaphores, and mutexes",
      "Design and implement UART, SPI, I2C, and CAN communication stacks",
      "Profile and optimise firmware for power and latency",
    ],
    requirements: [
      "Basic knowledge of C programming",
      "A computer (Windows/macOS/Linux)",
      "Optional: STM32 Nucleo board ($4 on AliExpress)",
    ],
    curriculum: [
      {
        title: "Getting Started",
        lessons: [
          { title: "Course overview and toolchain setup", duration: "12m", free: true },
          { title: "How a microcontroller boots", duration: "18m", free: true },
          { title: "Your first blink — no HAL, no Arduino", duration: "22m", free: true },
          { title: "Reading the datasheet", duration: "15m" },
        ],
      },
      {
        title: "Memory and Peripherals",
        lessons: [
          { title: "Memory map and address spaces", duration: "20m" },
          { title: "GPIO: input, output, alternate functions", duration: "25m" },
          { title: "Clock trees and RCC configuration", duration: "30m" },
          { title: "DMA: offloading the CPU", duration: "28m" },
        ],
      },
      {
        title: "Interrupts and Timing",
        lessons: [
          { title: "NVIC and interrupt priority", duration: "22m" },
          { title: "SysTick and hardware timers", duration: "20m" },
          { title: "Debouncing buttons in hardware and software", duration: "18m" },
          { title: "PWM generation for motor control", duration: "26m" },
        ],
      },
      {
        title: "Communication Protocols",
        lessons: [
          { title: "UART: theory and implementation", duration: "28m" },
          { title: "SPI: master and slave modes", duration: "30m" },
          { title: "I2C: addressing, ACK, and clock stretching", duration: "32m" },
          { title: "CAN bus for automotive applications", duration: "35m" },
        ],
      },
      {
        title: "FreeRTOS",
        lessons: [
          { title: "RTOS concepts: scheduler, tasks, context switching", duration: "25m" },
          { title: "Creating and managing tasks", duration: "22m" },
          { title: "Queues, semaphores, and mutexes", duration: "28m" },
          { title: "Interrupts and RTOS: ISR-safe APIs", duration: "20m" },
          { title: "Power management with tickless idle", duration: "18m" },
        ],
      },
    ],
  },
  {
    id: "cad-for-engineers",
    title: "CAD for Mechanical Engineers",
    subtitle: "Parametric design, assemblies, and FEA-ready models using FreeCAD.",
    instructor: "Ana Sitoe",
    instructorRole: "Mechanical Design Lead @ IMATEC",
    instructorBio: "Structural engineer with 8 years in aerospace and civil infrastructure. Lead designer of the parametric bridge project with 287 stars on EngLink.",
    discipline: "Mechanical",
    level: "Beginner",
    duration: "22h",
    lessons: 78,
    enrolled: 5102,
    rating: 4.7,
    reviews: 731,
    price: 29,
    coverColor: "from-amber-600 to-orange-800",
    tags: ["FreeCAD", "CAD", "FEA", "Parametric Design"],
    description: "Master parametric 3D modelling from scratch using open-source tools. You'll design real-world parts, build assemblies with proper constraints, run basic FEA simulations, and export manufacturing-ready drawings — all without paying for a licence.",
    whatYouLearn: [
      "Create fully parametric 3D parts and assemblies in FreeCAD",
      "Apply geometric and dimensional constraints correctly",
      "Design for manufacturing: tolerances, fits, and material selection",
      "Run linear static FEA and interpret stress/displacement results",
      "Generate engineering drawings with proper GD&T annotations",
      "Export to STEP, STL, and DXF for manufacturing and 3D printing",
    ],
    requirements: [
      "No prior CAD experience needed",
      "Basic understanding of geometry",
      "FreeCAD (free, cross-platform)",
    ],
    curriculum: [
      {
        title: "FreeCAD Fundamentals",
        lessons: [
          { title: "Installing FreeCAD and interface tour", duration: "10m", free: true },
          { title: "Workbenches overview", duration: "12m", free: true },
          { title: "Sketcher: lines, constraints, and dimensions", duration: "25m" },
          { title: "Part Design: pads, pockets, and fillets", duration: "30m" },
        ],
      },
      {
        title: "Parametric Modelling",
        lessons: [
          { title: "Spreadsheet-driven parameters", duration: "20m" },
          { title: "Expressions and model equations", duration: "18m" },
          { title: "Design tables for variants", duration: "22m" },
        ],
      },
      {
        title: "Assemblies and Constraints",
        lessons: [
          { title: "Assembly4 workbench setup", duration: "15m" },
          { title: "Attachment modes: axis, plane, face", duration: "28m" },
          { title: "Motion simulation basics", duration: "22m" },
        ],
      },
      {
        title: "FEA with FreeCAD FEM",
        lessons: [
          { title: "Meshing strategies and quality", duration: "25m" },
          { title: "Boundary conditions and loads", duration: "22m" },
          { title: "Running a static analysis", duration: "20m" },
          { title: "Reading results: von Mises, displacement", duration: "18m" },
        ],
      },
    ],
  },
  {
    id: "python-for-engineers",
    title: "Python for Engineers",
    subtitle: "Data processing, automation, and simulation for non-software engineers.",
    instructor: "Dinis Cossa",
    instructorRole: "Control Systems Engineer",
    instructorBio: "Control engineer turned data scientist. Teaches Python to engineers who don't want to become software developers — just more effective at their actual job.",
    discipline: "Software",
    level: "Beginner",
    duration: "14h",
    lessons: 52,
    enrolled: 8934,
    rating: 4.9,
    reviews: 1203,
    price: 0,
    coverColor: "from-blue-600 to-indigo-800",
    tags: ["Python", "NumPy", "Pandas", "Matplotlib", "SciPy"],
    description: "Python taught specifically for engineering workflows. Skip the web development detours — this course covers data acquisition, signal processing, numerical methods, FEA post-processing, and automation scripts that make your existing tools faster.",
    whatYouLearn: [
      "Write clean, readable Python without a CS background",
      "Process sensor data and time-series with NumPy and Pandas",
      "Visualise engineering data with Matplotlib and Plotly",
      "Implement numerical methods: ODE solvers, optimisation, interpolation",
      "Automate repetitive CAD and simulation workflows",
      "Interface with hardware via serial, USB, and REST APIs",
    ],
    requirements: [
      "No programming experience required",
      "A computer with Python 3.10+ (installation covered in lesson 1)",
    ],
    curriculum: [
      {
        title: "Python Foundations",
        lessons: [
          { title: "Installation and first script", duration: "10m", free: true },
          { title: "Variables, types, and operators", duration: "18m", free: true },
          { title: "Lists, tuples, and dictionaries", duration: "20m" },
          { title: "Functions and modules", duration: "22m" },
        ],
      },
      {
        title: "Engineering Data",
        lessons: [
          { title: "NumPy arrays and vectorised operations", duration: "28m" },
          { title: "Reading CSV, Excel, and binary data", duration: "20m" },
          { title: "Signal filtering with SciPy", duration: "25m" },
          { title: "FFT and frequency domain analysis", duration: "22m" },
        ],
      },
      {
        title: "Visualisation",
        lessons: [
          { title: "Matplotlib: line, scatter, bar charts", duration: "20m" },
          { title: "Subplots and figure composition", duration: "18m" },
          { title: "Interactive charts with Plotly", duration: "22m" },
        ],
      },
      {
        title: "Numerical Methods",
        lessons: [
          { title: "Root finding and optimisation", duration: "25m" },
          { title: "ODE integration with scipy.integrate", duration: "28m" },
          { title: "Linear algebra for structural problems", duration: "22m" },
        ],
      },
    ],
  },
  {
    id: "pcb-design",
    title: "PCB Design with KiCad",
    subtitle: "From schematic capture to Gerber files — professional PCB design, open source.",
    instructor: "Fatima Nhantumbo",
    instructorRole: "Electronics Design Engineer",
    instructorBio: "Designer of 40+ production PCBs across automotive, medical, and consumer products. Contributor to the IoT Mesh Controller project.",
    discipline: "Electrical",
    level: "Intermediate",
    duration: "20h",
    lessons: 70,
    enrolled: 2187,
    rating: 4.6,
    reviews: 289,
    price: 49,
    coverColor: "from-green-600 to-teal-800",
    tags: ["KiCad", "PCB", "Schematics", "EMC", "Manufacturing"],
    description: "A complete walkthrough of professional PCB design using KiCad 8. From reading datasheets to creating symbols and footprints, laying out multi-layer boards, running DRC/ERC, and generating Gerber files for a real PCB fabrication house.",
    whatYouLearn: [
      "Create custom schematic symbols and PCB footprints from datasheets",
      "Capture multi-sheet schematics with hierarchical design",
      "Plan PCB stackup, controlled impedance, and layer assignments",
      "Route differential pairs, high-speed signals, and power planes",
      "Apply EMC best practices: decoupling, ground planes, guard rings",
      "Generate Gerber, drill, and assembly files for manufacturing",
    ],
    requirements: [
      "Basic understanding of electronics (resistors, capacitors, ICs)",
      "KiCad 8 (free download)",
      "Completion of a basic electronics course recommended",
    ],
    curriculum: [
      {
        title: "KiCad Environment",
        lessons: [
          { title: "KiCad 8 overview and project structure", duration: "15m", free: true },
          { title: "Symbol editor: creating from scratch", duration: "28m" },
          { title: "Footprint editor: IPC-7351 standards", duration: "30m" },
        ],
      },
      {
        title: "Schematic Capture",
        lessons: [
          { title: "Hierarchical schematics and reuse blocks", duration: "25m" },
          { title: "Power symbols and net classes", duration: "20m" },
          { title: "Running ERC and fixing violations", duration: "18m" },
        ],
      },
      {
        title: "PCB Layout",
        lessons: [
          { title: "Board outline and stackup definition", duration: "22m" },
          { title: "Component placement strategy", duration: "25m" },
          { title: "Routing: manual, interactive, and length-tuning", duration: "35m" },
          { title: "Power planes and thermal management", duration: "28m" },
          { title: "3D view and mechanical integration", duration: "20m" },
        ],
      },
      {
        title: "Manufacturing Outputs",
        lessons: [
          { title: "DRC and design verification", duration: "18m" },
          { title: "Gerber, drill, and fab notes", duration: "22m" },
          { title: "BOM and pick-and-place files", duration: "18m" },
          { title: "Ordering from JLCPCB/PCBWay walkthrough", duration: "15m" },
        ],
      },
    ],
  },
  {
    id: "structural-analysis",
    title: "Structural Analysis Fundamentals",
    subtitle: "Statics, stress analysis, and failure criteria for practising engineers.",
    instructor: "Hélder Zunguze",
    instructorRole: "Structural Engineer, MSc",
    instructorBio: "Structural engineer with 12 years across bridges, buildings, and offshore structures. Specialises in making structural mechanics accessible to non-specialists.",
    discipline: "Civil",
    level: "Intermediate",
    duration: "16h",
    lessons: 58,
    enrolled: 1876,
    rating: 4.7,
    reviews: 203,
    price: 39,
    coverColor: "from-slate-600 to-gray-800",
    tags: ["Statics", "FEA", "Steel", "Concrete", "Eurocode"],
    description: "A rigorous but practical treatment of structural analysis covering statics, internal forces, beam theory, stress and strain, buckling, and an introduction to Eurocode design. Built for mechanical and civil engineers who need to design load-bearing structures confidently.",
    whatYouLearn: [
      "Draw free body diagrams and calculate reactions for any support condition",
      "Construct shear force and bending moment diagrams by hand and with software",
      "Apply Euler-Bernoulli and Timoshenko beam theory",
      "Calculate normal, shear, and principal stresses in cross-sections",
      "Identify failure modes: yielding, fracture, buckling, and fatigue",
      "Apply Eurocode 3 (steel) and Eurocode 2 (concrete) design checks",
    ],
    requirements: [
      "Engineering mathematics: calculus and linear algebra",
      "Basic statics knowledge helpful but not required",
    ],
    curriculum: [
      {
        title: "Statics Review",
        lessons: [
          { title: "Forces, moments, and equilibrium", duration: "22m", free: true },
          { title: "Support types and reactions", duration: "20m" },
          { title: "Trusses: method of joints and sections", duration: "28m" },
        ],
      },
      {
        title: "Internal Forces",
        lessons: [
          { title: "Shear force and bending moment diagrams", duration: "30m" },
          { title: "Distributed loads and superposition", duration: "25m" },
          { title: "Influence lines for moving loads", duration: "22m" },
        ],
      },
      {
        title: "Stress and Strain",
        lessons: [
          { title: "Normal and shear stress in beams", duration: "28m" },
          { title: "Principal stresses and Mohr's circle", duration: "25m" },
          { title: "Failure criteria: von Mises, Tresca", duration: "22m" },
          { title: "Fatigue and stress concentration factors", duration: "20m" },
        ],
      },
    ],
  },
  {
    id: "control-systems",
    title: "Control Systems Engineering",
    subtitle: "PID, state-space, and modern control for physical systems.",
    instructor: "Dinis Cossa",
    instructorRole: "Control Systems Engineer",
    instructorBio: "Control engineer turned data scientist, with a focus on bridging simulation and hardware implementation.",
    discipline: "Software",
    level: "Advanced",
    duration: "24h",
    lessons: 88,
    enrolled: 1342,
    rating: 4.8,
    reviews: 178,
    price: 59,
    coverColor: "from-violet-600 to-purple-800",
    tags: ["PID", "State-Space", "MATLAB", "Python", "Robotics"],
    description: "From Laplace transforms to modern state-space control, this course gives you the mathematical tools and practical implementation skills to control real physical systems. Covers both continuous and discrete-time systems, with MATLAB and Python implementations side by side.",
    whatYouLearn: [
      "Derive transfer functions from differential equations",
      "Analyse stability using Routh-Hurwitz, root locus, and Bode plots",
      "Design and tune PID controllers for real plants",
      "Implement state-space representations and pole placement",
      "Design observers and Kalman filters for noisy systems",
      "Discretise continuous controllers for digital implementation",
    ],
    requirements: [
      "Differential equations and Laplace transforms",
      "Basic Python or MATLAB",
      "Linear algebra fundamentals",
    ],
    curriculum: [
      {
        title: "System Modelling",
        lessons: [
          { title: "Differential equations to transfer functions", duration: "28m", free: true },
          { title: "Block diagrams and signal flow graphs", duration: "22m" },
          { title: "Mechanical, electrical, and thermal systems", duration: "30m" },
        ],
      },
      {
        title: "Stability Analysis",
        lessons: [
          { title: "Poles, zeros, and time response", duration: "25m" },
          { title: "Routh-Hurwitz stability criterion", duration: "22m" },
          { title: "Root locus design", duration: "30m" },
          { title: "Bode plots and gain/phase margin", duration: "28m" },
        ],
      },
      {
        title: "PID Control",
        lessons: [
          { title: "P, I, D actions and their effects", duration: "25m" },
          { title: "Ziegler-Nichols and Cohen-Coon tuning", duration: "22m" },
          { title: "Anti-windup and derivative filter", duration: "20m" },
          { title: "PID implementation in C and Python", duration: "28m" },
        ],
      },
      {
        title: "State-Space Methods",
        lessons: [
          { title: "State-space representation and canonical forms", duration: "25m" },
          { title: "Controllability and observability", duration: "22m" },
          { title: "Full-state feedback and pole placement", duration: "28m" },
          { title: "Observer design and separation principle", duration: "25m" },
          { title: "Kalman filter fundamentals", duration: "30m" },
        ],
      },
    ],
  },
];

export const disciplines = ["All", "Civil", "Electrical", "Firmware", "Mechanical", "Software"];
export const levels: Array<Level | "All"> = ["All", "Beginner", "Intermediate", "Advanced"];
