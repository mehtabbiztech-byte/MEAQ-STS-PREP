import React, { useState, useMemo } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Search, 
  Sparkles, 
  Award, 
  Play, 
  ChevronRight, 
  Clock, 
  FileText, 
  Brain, 
  Atom, 
  Calculator, 
  Languages, 
  Laptop, 
  Target, 
  FlaskConical, 
  Dna, 
  Binary, 
  Layers, 
  CheckCircle2, 
  Volume2, 
  VolumeX, 
  ShieldCheck, 
  TrendingUp, 
  Landmark, 
  Briefcase, 
  Users, 
  Sigma, 
  Zap, 
  Activity, 
  BarChart3, 
  Scale, 
  Building2, 
  Plus, 
  Trash2,
  BookMarked,
  Library,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export interface UniversitySubject {
  id: string;
  code: string;
  name: string;
  creditHours: string;
  semester: string;
  prerequisites?: string;
  description: string;
  recommendedBooks: string[];
  topics: {
    title: string;
    subtopics: string[];
    highYield: boolean;
  }[];
  careerApplication: string;
}

export interface UniversityDepartment {
  id: string;
  name: string;
  shortName: string;
  faculty: string;
  icon: any;
  color: string;
  bgLight: string;
  borderLight: string;
  accreditation: string;
  degreesOffered: string[];
  description: string;
  subjects: UniversitySubject[];
}

export const UNIVERSITY_DEPARTMENTS: UniversityDepartment[] = [
  {
    id: 'cs-it',
    name: 'Computer Science, Software Engineering & AI',
    shortName: 'CS & IT',
    faculty: 'Faculty of Computing & Information Technology',
    icon: Binary,
    color: 'from-indigo-600 to-blue-700',
    bgLight: 'bg-indigo-50 dark:bg-indigo-950/30',
    borderLight: 'border-indigo-200 dark:border-indigo-800',
    accreditation: 'National Computing Education Accreditation Council (NCEAC / HEC)',
    degreesOffered: ['BS Computer Science (BSCS)', 'BS Software Engineering (BSSE)', 'BS Artificial Intelligence (BSAI)', 'BS Data Science (BSDS)', 'BS Cyber Security'],
    description: 'Premier computing curricula aligned with ACM/IEEE and HEC guidelines. Encompasses algorithmic efficiency, low-level architecture, systems engineering, modern cloud frameworks, and machine intelligence.',
    subjects: [
      {
        id: 'dsa',
        code: 'CS-201',
        name: 'Data Structures & Algorithms (DSA)',
        creditHours: '3 + 1 (4 Cr.)',
        semester: 'Semester 3 (Core)',
        prerequisites: 'Programming Fundamentals & OOP',
        description: 'Design, analysis, and implementation of foundational data structures. Rigorous complexity analysis, memory optimization, and algorithmic paradigms.',
        recommendedBooks: ['"Introduction to Algorithms" (CLRS) by Cormen, Leiserson, Rivest, Stein', '"Data Structures and Algorithm Analysis in C++" by Mark Allen Weiss'],
        careerApplication: 'Vital for technical coding interviews at Google, Meta, Microsoft, Systems Ltd, and backend architectural design.',
        topics: [
          { title: 'Asymptotic Analysis & Recurrences', subtopics: ['Big-O, Big-Omega, Big-Theta bounds', 'Master Theorem for divide & conquer', 'Space-Time trade-offs'], highYield: true },
          { title: 'Linear Structures', subtopics: ['Dynamic arrays & amortized analysis', 'Singly, doubly, and circular linked lists', 'Stack applications (infix to postfix, parenthesis matching)', 'Queue, Deque & Priority Queue using Heaps'], highYield: true },
          { title: 'Non-Linear Structures: Trees & Graphs', subtopics: ['Binary Search Trees (BST), AVL trees & rotations', 'B-Trees and Red-Black trees overview', 'Graph representation (Adjacency matrix vs list)', 'BFS and DFS graph traversals'], highYield: true },
          { title: 'Graph Algorithms & Shortest Paths', subtopics: ['Dijkstra\'s shortest path algorithm', 'Bellman-Ford & Floyd-Warshall', 'Minimum Spanning Trees: Kruskal\'s and Prim\'s algorithms', 'Topological sort & Cycle detection'], highYield: true },
          { title: 'Algorithm Design Paradigms', subtopics: ['Divide and Conquer (Merge Sort, Quick Sort analysis)', 'Greedy Algorithms (Fractional Knapsack, Huffman coding)', 'Dynamic Programming (0/1 Knapsack, LCS, Matrix chain)', 'Backtracking (N-Queens, Sudoku solver)'], highYield: true }
        ]
      },
      {
        id: 'oop',
        code: 'CS-102',
        name: 'Object-Oriented Programming (OOP)',
        creditHours: '3 + 1 (4 Cr.)',
        semester: 'Semester 2 (Core)',
        prerequisites: 'Programming Fundamentals',
        description: 'Paradigm of building robust, extensible software models using real-world entity abstractions, inheritance hierarchies, polymorphism, and architectural design patterns.',
        recommendedBooks: ['"Object-Oriented Programming in C++" by Robert Lafore', '"Effective Java" by Joshua Bloch', '"Head First Design Patterns" by Eric Freeman'],
        careerApplication: 'Enterprise application architecture, Android/iOS native development, and large-scale modular software engineering.',
        topics: [
          { title: 'Core OOP Pillars', subtopics: ['Encapsulation & Data Hiding (getters/setters)', 'Abstraction through abstract classes & interfaces', 'Inheritance (Single, Multiple, Multilevel, Diamond problem)', 'Polymorphism (Method overloading vs overriding, Virtual tables)'], highYield: true },
          { title: 'Constructors, Destructors & Memory', subtopics: ['Default, Parameterized, Copy constructors', 'Deep copy vs Shallow copy pitfalls', 'Destructors and dynamic memory deallocation (RAII)'], highYield: true },
          { title: 'Operator Overloading & Templates', subtopics: ['Overloading unary & binary operators (+, -, ==, <<, >>)', 'Friend functions and friend classes', 'Generic programming with Function & Class Templates'], highYield: false },
          { title: 'SOLID Design Principles & Patterns', subtopics: ['Single Responsibility, Open/Closed, Liskov, Interface Segregation, Dependency Inversion', 'Creational Patterns: Singleton, Factory', 'Structural & Behavioral: Observer, Strategy'], highYield: true }
        ]
      },
      {
        id: 'dbms',
        code: 'CS-301',
        name: 'Database Management Systems (DBMS)',
        creditHours: '3 + 1 (4 Cr.)',
        semester: 'Semester 4 (Core)',
        prerequisites: 'Data Structures & Algorithms',
        description: 'Relational data modeling, advanced SQL queries, schema normalization, transaction management, indexing mechanisms, and non-relational (NoSQL) databases.',
        recommendedBooks: ['"Database System Concepts" by Silberschatz, Korth, Sudarshan', '"Fundamentals of Database Systems" by Elmasri & Navathe'],
        careerApplication: 'Backend database engineering, data warehousing, cloud data engineering (PostgreSQL, MySQL, MongoDB).',
        topics: [
          { title: 'Entity-Relationship (ER) Modeling', subtopics: ['Entities, attributes, primary & foreign keys', 'Cardinality ratios (1:1, 1:N, M:N)', 'Converting ER diagrams to relational schemas'], highYield: true },
          { title: 'Relational Algebra & Advanced SQL', subtopics: ['Selection, Projection, Cartesian Product, Joins (Inner, Left, Right, Full)', 'Nested subqueries, Correlated queries', 'Aggregate functions, GROUP BY, HAVING clauses', 'Views, Triggers, and Stored Procedures'], highYield: true },
          { title: 'Database Normalization', subtopics: ['Anomalies (Insertion, Deletion, Update)', 'Functional dependencies and Armstrong\'s Axioms', 'First (1NF), Second (2NF), Third (3NF) Normal Forms', 'Boyce-Codd Normal Form (BCNF)'], highYield: true },
          { title: 'Transactions & Concurrency Control', subtopics: ['ACID properties (Atomicity, Consistency, Isolation, Durability)', 'Schedules & Serializability (Conflict vs View serializable)', 'Two-Phase Locking (2PL) and Deadlock prevention', 'Crash recovery (WAL logging and Checkpoints)'], highYield: true },
          { title: 'Indexing & NoSQL Overview', subtopics: ['B-Tree and B+ Tree indexing mechanics', 'Hash indices', 'CAP Theorem and NoSQL systems (Document, Key-Value)'], highYield: false }
        ]
      },
      {
        id: 'os',
        code: 'CS-302',
        name: 'Operating Systems (OS)',
        creditHours: '3 + 1 (4 Cr.)',
        semester: 'Semester 5 (Core)',
        prerequisites: 'Computer Architecture & Assembly Language',
        description: 'Kernel architectures, multi-process management, synchronization primitives, virtual memory paging, device drivers, and POSIX system call interactions.',
        recommendedBooks: ['"Operating System Concepts" (Dinosaur Book) by Silberschatz, Galvin, Gagne', '"Modern Operating Systems" by Andrew S. Tanenbaum'],
        careerApplication: 'Systems programming, Linux infrastructure, cloud containerization (Docker, Kubernetes), embedded devices.',
        topics: [
          { title: 'Processes & Threads', subtopics: ['Process Control Block (PCB), Context switching', 'Process states and lifecycle transitions', 'POSIX fork(), exec(), wait() calls', 'User-level vs Kernel-level threads'], highYield: true },
          { title: 'CPU Scheduling Algorithms', subtopics: ['First-Come-First-Served (FCFS)', 'Shortest Job First (SJF / SRTF)', 'Round Robin (RR) with time quantum tuning', 'Multi-Level Feedback Queue (MLFQ) scheduling'], highYield: true },
          { title: 'Process Synchronization & Concurrency', subtopics: ['Critical Section problem requirements (Mutual exclusion, Progress, Bounded waiting)', 'Peterson\'s solution and hardware atomic instructions (Test-and-Set)', 'Semaphores (Binary vs Counting) & Mutexes', 'Classical problems: Producer-Consumer, Readers-Writers, Dining Philosophers'], highYield: true },
          { title: 'Deadlocks', subtopics: ['Four necessary conditions (Mutual exclusion, Hold & Wait, No Preemption, Circular Wait)', 'Resource Allocation Graph (RAG)', 'Banker\'s Algorithm for Deadlock Avoidance', 'Deadlock detection & recovery strategies'], highYield: true },
          { title: 'Memory Management & Virtual Memory', subtopics: ['Contiguous memory allocation & fragmentation (Internal vs External)', 'Paging mechanics and Page Table Entries', 'Translation Lookaside Buffer (TLB) hits and misses', 'Page Replacement algorithms: FIFO, Optimal, LRU'], highYield: true }
        ]
      },
      {
        id: 'networks',
        code: 'CS-305',
        name: 'Computer Networks & Security',
        creditHours: '3 + 1 (4 Cr.)',
        semester: 'Semester 5 (Core)',
        prerequisites: 'Operating Systems',
        description: 'Layered network architectures, packet switching, transport layer flow control, IP addressing & CIDR subnetting, routing protocols, and cryptographic network security.',
        recommendedBooks: ['"Computer Networking: A Top-Down Approach" by Kurose & Ross', '"Computer Networks" by Andrew S. Tanenbaum'],
        careerApplication: 'Network administration, DevOps engineering, cybersecurity defense, cloud infrastructure (AWS/GCP networking).',
        topics: [
          { title: 'Layered Architectures & Physical Layer', subtopics: ['OSI 7-Layer model vs TCP/IP 5-Layer stack', 'Transmission media, Packet switching vs Circuit switching', 'Bandwidth, Latency, and Throughput calculations'], highYield: true },
          { title: 'Data Link Layer & MAC', subtopics: ['Error detection (Parity, Checksum, Cyclic Redundancy Check CRC)', 'Framing and Flow control (Stop-and-Wait, Go-Back-N, Selective Repeat)', 'CSMA/CD (Ethernet) and CSMA/CA (Wi-Fi)'], highYield: true },
          { title: 'Network Layer & Subnetting', subtopics: ['IPv4 addressing, Subnetting with CIDR masks (/24, /27)', 'IPv6 transition & dual-stack features', 'Routing algorithms: Distance Vector (RIP) vs Link State (OSPF)', 'NAT (Network Address Translation) and ICMP protocol'], highYield: true },
          { title: 'Transport Layer Protocols', subtopics: ['UDP connectionless delivery and use-cases', 'TCP 3-way handshake and 4-way termination', 'TCP Flow control (Sliding Window) & Congestion control (Slow Start, AIMD)'], highYield: true },
          { title: 'Application Layer & Network Security', subtopics: ['DNS resolution hierarchy, HTTP/HTTPS protocols', 'Symmetric (AES) vs Asymmetric (RSA) encryption', 'SSL/TLS handshake and digital certificates', 'Firewalls, IDS/IPS, and common attacks (DDoS, MITM)'], highYield: true }
        ]
      },
      {
        id: 'ai-ml',
        code: 'CS-401',
        name: 'Artificial Intelligence & Machine Learning',
        creditHours: '3 + 1 (4 Cr.)',
        semester: 'Semester 6 or 7 (Elective/Core)',
        prerequisites: 'Data Structures, Probability & Linear Algebra',
        description: 'Heuristic search strategies, probabilistic reasoning, supervised/unsupervised machine learning models, deep neural networks, and modern LLM foundational concepts.',
        recommendedBooks: ['"Artificial Intelligence: A Modern Approach" (AIMA) by Russell & Norvig', '"Pattern Recognition and Machine Learning" by Christopher Bishop'],
        careerApplication: 'AI/ML Engineer, Data Scientist, Computer Vision & NLP Researcher.',
        topics: [
          { title: 'Informed & Uninformed Search', subtopics: ['Breadth-First, Depth-First, Uniform Cost Search', 'A* Search with admissible heuristics h(n)', 'Minimax search and Alpha-Beta pruning in games'], highYield: true },
          { title: 'Supervised Learning Algorithms', subtopics: ['Linear & Logistic Regression with Cost Functions', 'Gradient Descent optimization algorithms', 'Support Vector Machines (SVM) & Kernel trick', 'Decision Trees, Random Forests & Ensemble boosting'], highYield: true },
          { title: 'Unsupervised Learning & Clustering', subtopics: ['K-Means clustering algorithm & elbow method', 'Hierarchical clustering', 'Principal Component Analysis (PCA) dimensionality reduction'], highYield: true },
          { title: 'Deep Learning & Neural Networks', subtopics: ['Perceptrons and Multilayer Perceptrons (MLP)', 'Activation functions (ReLU, Sigmoid, Softmax)', 'Backpropagation algorithm & loss gradients', 'Convolutional Neural Networks (CNN) for computer vision', 'Transformers & Attention mechanism overview'], highYield: true }
        ]
      },
      {
        id: 'se-agile',
        code: 'CS-204',
        name: 'Software Engineering & Agile Methodologies',
        creditHours: '3 + 0 (3 Cr.)',
        semester: 'Semester 4 (Core)',
        prerequisites: 'OOP',
        description: 'Software development lifecycle, requirements elicitation, architectural blueprints, Unified Modeling Language (UML), and modern Scrum/Agile workflows.',
        recommendedBooks: ['"Software Engineering: A Practitioner\'s Approach" by Roger S. Pressman', '"Clean Architecture" by Robert C. Martin'],
        careerApplication: 'Scrum Master, Software Project Manager, Quality Assurance (QA) Automation Engineer.',
        topics: [
          { title: 'Software Process Models', subtopics: ['Waterfall, V-Model, Spiral Model', 'Agile manifesto and 12 principles', 'Scrum framework: Sprints, User Stories, Standups, Retrospectives', 'Kanban flow and WIP limits'], highYield: true },
          { title: 'Requirements Engineering', subtopics: ['Functional vs Non-Functional requirements (FURPS+)', 'Use Case diagrams and use case specifications', 'Software Requirements Specification (SRS) IEEE 830 standard'], highYield: true },
          { title: 'Software Architecture & UML', subtopics: ['UML Class diagrams, Sequence diagrams, State machine diagrams', 'Microservices vs Monolith architectures', 'Layered, Model-View-Controller (MVC) architecture'], highYield: true },
          { title: 'Software Testing & Quality Assurance', subtopics: ['Unit testing, Integration testing, System testing, Acceptance testing', 'Black-Box vs White-Box testing techniques (Cyclomatic complexity)', 'CI/CD pipeline automated deployments'], highYield: true }
        ]
      },
      {
        id: 'automata',
        code: 'CS-303',
        name: 'Theory of Automata & Formal Languages',
        creditHours: '3 + 0 (3 Cr.)',
        semester: 'Semester 5 (Core)',
        prerequisites: 'Discrete Mathematics',
        description: 'Mathematical models of computation, regular expressions, context-free grammars, pushdown automata, Turing machines, and undecidability theory.',
        recommendedBooks: ['"Introduction to the Theory of Computation" by Michael Sipser', '"Introduction to Automata Theory, Languages, and Computation" by Hopcroft, Motwani, Ullman'],
        careerApplication: 'Compiler construction, regular expression engines, static code analysis, theoretical research.',
        topics: [
          { title: 'Regular Languages & Finite Automata', subtopics: ['Deterministic Finite Automata (DFA) state tables', 'Non-Deterministic Finite Automata (NFA) and ε-transitions', 'Subset construction algorithm (NFA to DFA conversion)', 'Regular Expressions and Kleene\'s Theorem'], highYield: true },
          { title: 'Properties of Regular Languages', subtopics: ['Pumping Lemma for regular languages', 'Closure properties (Union, Intersection, Complement)', 'DFA state minimization algorithm'], highYield: true },
          { title: 'Context-Free Grammars & Pushdown Automata', subtopics: ['Context-Free Grammars (CFG) and Parse Trees', 'Chomsky Normal Form (CNF)', 'Pushdown Automata (PDA) using stack memory', 'Pumping Lemma for Context-Free Languages'], highYield: true },
          { title: 'Turing Machines & Decidability', subtopics: ['Turing Machine formal definition & tape operations', 'Church-Turing Thesis', 'The Halting Problem and undecidability proof'], highYield: true }
        ]
      }
    ]
  },
  {
    id: 'engineering',
    name: 'Electrical, Mechanical & Civil Engineering',
    shortName: 'Engineering',
    faculty: 'Faculty of Engineering & Technology',
    icon: Zap,
    color: 'from-sky-600 to-cyan-700',
    bgLight: 'bg-sky-50 dark:bg-sky-950/30',
    borderLight: 'border-sky-200 dark:border-sky-800',
    accreditation: 'Pakistan Engineering Council (PEC) / Washington Accord (Level II)',
    degreesOffered: ['BSc Electrical Engineering', 'BSc Mechanical Engineering', 'BSc Civil Engineering', 'BSc Chemical Engineering'],
    description: 'Accredited engineering disciplines grounded in physical laws, mathematical modeling, instrumentation, power distribution, thermofluids, structural analysis, and PEC capstone projects.',
    subjects: [
      {
        id: 'circuit-analysis',
        code: 'EE-111',
        name: 'Electric Circuit Analysis & Electronics',
        creditHours: '3 + 1 (4 Cr.)',
        semester: 'Semester 2 (Core)',
        prerequisites: 'Engineering Physics & Calculus',
        description: 'DC and AC circuit laws, nodal/mesh analysis, network theorems, transient RL/RC/RLC response, semiconductors, operational amplifiers, and transistor biasing.',
        recommendedBooks: ['"Fundamentals of Electric Circuits" by Alexander & Sadiku', '"Electronic Devices and Circuit Theory" by Boylestad & Nashelsky'],
        careerApplication: 'Hardware engineering, power grids (WAPDA/K-Electric), printed circuit board (PCB) design, consumer electronics.',
        topics: [
          { title: 'Fundamental Circuit Laws & Theorems', subtopics: ['Kirchhoff\'s Current Law (KCL) & Kirchhoff\'s Voltage Law (KVL)', 'Nodal analysis and Mesh analysis with dependent sources', 'Superposition theorem, Thevenin\'s and Norton\'s equivalents', 'Maximum Power Transfer theorem for DC and AC circuits'], highYield: true },
          { title: 'Transient Response in First & Second Order Circuits', subtopics: ['Source-free and step response of RL and RC circuits', 'Time constant τ calculations', 'Series and Parallel RLC circuits (Overdamped, Critically damped, Underdamped)'], highYield: true },
          { title: 'Sinusoidal Steady-State & Phasors', subtopics: ['Phasor representation of AC sinusoidal waves', 'Impedance and Admittance triangles', 'Apparent, Real, and Reactive Power (P, Q, S) and Power Factor correction'], highYield: true },
          { title: 'Semiconductor Diodes & Transistors', subtopics: ['PN Junction diode characteristics and Rectifier circuits (Half-wave & Full-wave Bridge)', 'Bipolar Junction Transistor (BJT) CE, CB, CC biasing configurations', 'Operational Amplifiers: Inverting, Non-inverting, Integrator, Differentiator'], highYield: true }
        ]
      },
      {
        id: 'signals-systems',
        code: 'EE-221',
        name: 'Signals & Systems',
        creditHours: '3 + 1 (4 Cr.)',
        semester: 'Semester 4 (Core)',
        prerequisites: 'Differential Equations & Circuit Analysis',
        description: 'Mathematical representations of continuous and discrete-time signals, linear time-invariant (LTI) systems, Fourier series, Fourier transform, Laplace, and Z-transform.',
        recommendedBooks: ['"Signals and Systems" by Oppenheim, Willsky, and Nawab'],
        careerApplication: 'Telecommunications, Digital Signal Processing (DSP), radar systems, audio/image filtering.',
        topics: [
          { title: 'Signal Classifications & Transformations', subtopics: ['Continuous vs Discrete time signals', 'Periodic, even/odd, energy vs power signals', 'Time-shifting, time-reversal, and time-scaling operations'], highYield: true },
          { title: 'Linear Time-Invariant (LTI) Systems & Convolution', subtopics: ['Properties of LTI systems: Memory, Invertibility, Causality, Stability (BIBO)', 'Convolution Integral for continuous-time signals', 'Convolution Sum for discrete-time signals', 'Unit impulse and unit step responses'], highYield: true },
          { title: 'Fourier Analysis of Signals', subtopics: ['Continuous-Time Fourier Series (CTFS) coefficients', 'Continuous-Time Fourier Transform (CTFT) and properties', 'Discrete-Time Fourier Transform (DTFT)'], highYield: true },
          { title: 'Laplace Transform & Z-Transform', subtopics: ['Laplace Transform with Region of Convergence (ROC)', 'Solving differential equations using unilateral Laplace', 'Z-Transform definition, ROC properties, and pole-zero plots for stability'], highYield: true }
        ]
      },
      {
        id: 'thermo-fluids',
        code: 'ME-201',
        name: 'Engineering Thermodynamics & Fluid Mechanics',
        creditHours: '3 + 1 (4 Cr.)',
        semester: 'Semester 3 (Core)',
        prerequisites: 'Calculus & General Physics',
        description: 'Thermodynamic cycles, First and Second Laws, entropy generation, fluid statics, Bernoulli equation, Navier-Stokes, and pipe flow head loss.',
        recommendedBooks: ['"Thermodynamics: An Engineering Approach" by Çengel & Boles', '"Fluid Mechanics" by Frank M. White'],
        careerApplication: 'Automotive powertrain design, HVAC systems, power plants (thermal/nuclear/hydro), aerospace aerodynamics.',
        topics: [
          { title: 'First & Second Law of Thermodynamics', subtopics: ['Closed and open systems (Control Volume energy balance)', 'Internal energy, Enthalpy, and Specific heat capacities (Cp, Cv)', 'Carnot heat engine and refrigerator COP calculations', 'Clausius inequality and Entropy generation principle'], highYield: true },
          { title: 'Thermodynamic Power & Refrigeration Cycles', subtopics: ['Rankine cycle with reheat and regeneration in thermal power plants', 'Otto and Diesel cycles for internal combustion engines', 'Brayton cycle for gas turbines and jet propulsion', 'Vapor-compression refrigeration cycle'], highYield: true },
          { title: 'Fluid Statics & Buoyancy', subtopics: ['Pressure variation in fluids at rest (P = ρgh)', 'Manometers and pressure measurement devices', 'Hydrostatic forces on submerged plane and curved surfaces', 'Archimedes principle, Buoyant force, and Metacentric height stability'], highYield: true },
          { title: 'Fluid Dynamics & Incompressible Flow', subtopics: ['Continuity equation and mass conservation', 'Bernoulli\'s equation and Venturi-meter velocity calculations', 'Laminar vs Turbulent flow in pipes (Reynolds number Re)', 'Darcy-Weisbach equation for major and minor head loss in pipe systems'], highYield: true }
        ]
      },
      {
        id: 'mechanics-materials',
        code: 'CE-202',
        name: 'Mechanics of Materials & Structural Analysis',
        creditHours: '3 + 1 (4 Cr.)',
        semester: 'Semester 3 (Core)',
        prerequisites: 'Engineering Statics',
        description: 'Internal stresses and deformations in structural members under axial, torsional, bending, and shear loads. Mohr\'s circle, beam deflection, and truss analysis.',
        recommendedBooks: ['"Mechanics of Materials" by Russell C. Hibbeler', '"Structural Analysis" by Aslam Kassimali'],
        careerApplication: 'Civil infrastructure engineering, bridge design, skyscraper construction, aerospace structural integrity.',
        topics: [
          { title: 'Stress, Strain & Axial Loading', subtopics: ['Normal and shear stress calculations (σ = P/A, τ = V/A)', 'Stress-strain diagrams for ductile vs brittle materials', 'Hooke\'s law, Modulus of Elasticity (E), and Poisson\'s ratio (ν)', 'Thermal stress and deformation in indeterminate bars'], highYield: true },
          { title: 'Torsion of Circular Shafts', subtopics: ['Torsional shear stress formula τ = Tr/J', 'Angle of twist φ = TL/GJ', 'Solid vs hollow circular shafts comparison'], highYield: true },
          { title: 'Shear Force & Bending Moment in Beams', subtopics: ['Support reactions for simply supported, cantilever, and overhanging beams', 'Shear Force Diagrams (SFD) and Bending Moment Diagrams (BMD)', 'Flexure formula for bending stress σ = My/I', 'Transverse shear stress formula τ = VQ/It'], highYield: true },
          { title: 'Stress Transformations & Mohr\'s Circle', subtopics: ['Plane stress transformation equations', 'Principal stresses (σ1, σ2) and maximum in-plane shear stress', 'Mohr\'s circle construction and graphical interpretation'], highYield: true },
          { title: 'Deflection of Beams & Buckling of Columns', subtopics: ['Double integration method and Moment-Area theorems', 'Euler\'s buckling formula for long columns Pcr = π²EI / (KL)²'], highYield: true }
        ]
      },
      {
        id: 'control-systems',
        code: 'EE-314',
        name: 'Linear Control Systems',
        creditHours: '3 + 1 (4 Cr.)',
        semester: 'Semester 6 (Core)',
        prerequisites: 'Signals & Systems',
        description: 'Modeling of dynamic systems, feedback theory, transfer function block diagram reduction, Root Locus design, frequency response (Bode & Nyquist), and PID tuning.',
        recommendedBooks: ['"Modern Control Engineering" by Katsuhiko Ogata', '"Control Systems Engineering" by Norman S. Nise'],
        careerApplication: 'Robotics, industrial automation (PLC/SCADA), drone flight controllers, autonomous vehicle steering.',
        topics: [
          { title: 'Mathematical Modeling & Block Diagrams', subtopics: ['Differential equations to Transfer Functions', 'Block diagram reduction algebra', 'Mason\'s Gain Formula for Signal Flow Graphs (SFG)'], highYield: true },
          { title: 'Time-Domain Analysis & Specifications', subtopics: ['First-order system step response and settling time', 'Second-order underdamped system parameters: Damping ratio (ζ), Natural frequency (ωn)', 'Rise time (tr), Peak time (tp), Percentage overshoot (%OS), Settling time (ts)', 'Steady-state error and system error constants (Kp, Kv, Ka)'], highYield: true },
          { title: 'Stability & Root Locus Technique', subtopics: ['Routh-Hurwitz stability criterion and special cases', 'Root Locus sketch rules (Asymptotes, Breakaway points, jω-axis crossings)', 'Compensator design using Root Locus (Lead, Lag)'], highYield: true },
          { title: 'Frequency Response & PID Tuning', subtopics: ['Bode plots: Gain Margin (GM) and Phase Margin (PM) for relative stability', 'Nyquist stability criterion and contour encirclements', 'Proportional-Integral-Derivative (PID) controller tuning (Ziegler-Nichols method)'], highYield: true }
        ]
      }
    ]
  },
  {
    id: 'medical-health',
    name: 'Medical, Dental & Allied Health Sciences',
    shortName: 'Medical & Health',
    faculty: 'Faculty of Medicine & Allied Health Sciences',
    icon: Dna,
    color: 'from-teal-600 to-emerald-700',
    bgLight: 'bg-teal-50 dark:bg-teal-950/30',
    borderLight: 'border-teal-200 dark:border-teal-800',
    accreditation: 'Pakistan Medical & Dental Council (PMDC) / Pharmacy Council of Pakistan (PCP)',
    degreesOffered: ['MBBS (Bachelor of Medicine & Surgery)', 'BDS (Dental Surgery)', 'Pharm-D (Doctor of Pharmacy)', 'DPT (Doctor of Physical Therapy)', 'BS Medical Lab Technology (BS-MLT)'],
    description: 'Rigorous healthcare curricula preparing future clinicians and pharmacologists through clinical rotations, human anatomy dissection, pathophysiology, and pharmacological therapies.',
    subjects: [
      {
        id: 'anatomy',
        code: 'MED-101',
        name: 'Human Gross Anatomy & Histology',
        creditHours: 'Clinical Modular Block',
        semester: '1st & 2nd Professional MBBS',
        description: 'Comprehensive study of human structural organization, cadaveric gross dissection, embryological development, and microscopic tissue histology.',
        recommendedBooks: ['"Clinical Anatomy by Regions" by Richard S. Snell', '"Gray\'s Anatomy for Students" by Drake, Vogl, Mitchell', '"diFiore\'s Atlas of Histology"'],
        careerApplication: 'Surgical specialties, radiology, orthopedics, physical rehabilitation.',
        topics: [
          { title: 'Upper & Lower Limb Anatomy', subtopics: ['Brachial plexus anatomy and nerve injury clinical signs (Erb\'s palsy, Klumpke\'s)', 'Shoulder, elbow, hip, and knee joint biomechanics', 'Femoral triangle boundaries and femoral hernia relations'], highYield: true },
          { title: 'Thorax & Cardiovascular Anatomy', subtopics: ['Mediastinal compartments (Superior, Anterior, Middle, Posterior)', 'Heart chambers, coronary circulation, and conducting system', 'Lungs bronchopulmonary segments and pleural recesses'], highYield: true },
          { title: 'Abdomen & Pelvis Anatomy', subtopics: ['Inguinal canal anatomy, direct vs indirect inguinal hernias', 'Peritoneal cavity, greater/lesser sac, and epiploic foramen', 'Blood supply of gastrointestinal tract (Celiac, SMA, IMA)'], highYield: true },
          { title: 'Neuroanatomy & Head-Neck', subtopics: ['Cranial nerves (I to XII) functional components and pathways', 'Circle of Willis cerebral arterial supply and stroke syndromes', 'Spinal cord ascending and descending tracts (Corticospinal, Spinothalamic)'], highYield: true },
          { title: 'Histology & Microscopic Anatomy', subtopics: ['Epithelial tissue types, junctions, and basement membrane', 'Cartilage and bone osteon microscopic architecture', 'Histology of lymph node, spleen, liver lobules, and kidney nephrons'], highYield: true }
        ]
      },
      {
        id: 'physiology',
        code: 'MED-102',
        name: 'General & Systemic Human Physiology',
        creditHours: 'Clinical Modular Block',
        semester: '1st & 2nd Professional MBBS',
        description: 'Cellular physiology, homeostatic regulation, cardiovascular hemodynamics, respiratory gas exchange, neurophysiology, and renal acid-base balance.',
        recommendedBooks: ['"Guyton and Hall Textbook of Medical Physiology" by John E. Hall', '"Ganong\'s Review of Medical Physiology" by Barrett et al.'],
        careerApplication: 'Internal medicine, intensive care units (ICU), cardiology, sports physiology.',
        topics: [
          { title: 'Cardiovascular Physiology & Hemodynamics', subtopics: ['Cardiac cycle phases, pressure-volume loops, and heart sounds', 'Electrocardiogram (ECG) interpretation: P wave, QRS complex, T wave, intervals', 'Regulation of arterial blood pressure (Baroreceptors, RAAS system)'], highYield: true },
          { title: 'Respiratory Physiology & Mechanics', subtopics: ['Mechanics of breathing: Compliance, Surfactant, Pleural pressure', 'Pulmonary lung volumes and capacities (FVC, FEV1 ratio in obstructive vs restrictive)', 'Oxygen-Hemoglobin dissociation curve shifts (Bohr effect, 2,3-DPG)'], highYield: true },
          { title: 'Renal Physiology & Fluid Balance', subtopics: ['Glomerular Filtration Rate (GFR) regulation and clearance tests', 'Tubular reabsorption and countercurrent multiplier in loop of Henle', 'Acid-base balance regulation (Bicarbonate buffer system, Henderson-Hasselbalch)'], highYield: true },
          { title: 'Nervous & Endocrine Physiology', subtopics: ['Synaptic transmission, neurotransmitter receptors, and action potentials', 'Hypothalamic-pituitary-adrenal/thyroid axes negative feedback', 'Insulin, glucagon, and calcium regulation (PTH, Calcitonin, Vitamin D)'], highYield: true }
        ]
      },
      {
        id: 'pharmacology',
        code: 'MED-301',
        name: 'Pharmacology & Therapeutics',
        creditHours: 'Clinical Modular Block',
        semester: '3rd Professional MBBS / 2nd Year Pharm-D',
        description: 'Drug mechanisms of action, pharmacokinetics (ADME), autonomic therapeutics, cardiovascular medications, antimicrobial chemotherapy, and adverse drug reactions.',
        recommendedBooks: ['"Basic and Clinical Pharmacology" by Bertram G. Katzung', '"Lippincott Illustrated Reviews: Pharmacology" by Karen Whalen'],
        careerApplication: 'Clinical pharmacy, hospital medicine, pharmaceutical formulation, clinical trials.',
        topics: [
          { title: 'General Pharmacokinetics & Pharmacodynamics', subtopics: ['Absorption, Distribution, Metabolism (Cytochrome P450), and Excretion (ADME)', 'Bioavailability (F), Volume of Distribution (Vd), Clearance (CL), Half-life (t½)', 'Agonists, Antagonists (Competitive vs Non-competitive), Therapeutic Index (TI)'], highYield: true },
          { title: 'Autonomic Nervous System Drugs', subtopics: ['Cholinergic agonists (Bethanechol, Neostigmine) and Antagonists (Atropine)', 'Adrenergic agonists (Epinephrine, Norepinephrine, Salbutamol)', 'Beta-blockers (Propranolol, Atenolol) and Alpha-blockers'], highYield: true },
          { title: 'Cardiovascular Drugs', subtopics: ['Antihypertensive agents (ACE inhibitors, ARBs, Calcium Channel Blockers, Diuretics)', 'Antiarrhythmic drugs (Vaughan-Williams classes I-IV)', 'Lipid-lowering statins (HMG-CoA reductase inhibitors) and Anticoagulants (Heparin, Warfarin)'], highYield: true },
          { title: 'Antimicrobial Chemotherapy', subtopics: ['Cell-wall inhibitors (Penicillins, Cephalosporins, Vancomycin)', 'Protein synthesis inhibitors (Aminoglycosides, Macrolides, Tetracyclines)', 'Antifungal (Amphotericin B, Fluconazole) and Antiviral regimens'], highYield: true }
        ]
      },
      {
        id: 'pathology',
        code: 'MED-302',
        name: 'General & Systemic Pathology',
        creditHours: 'Clinical Modular Block',
        semester: '3rd Professional MBBS',
        description: 'Mechanisms of cell injury, acute/chronic inflammation, hemodynamic disorders, neoplasia biology, and systemic diseases affecting liver, heart, and kidneys.',
        recommendedBooks: ['"Robbins and Cotran Pathologic Basis of Disease" (Robbins)', '"Robbins Basic Pathology" by Kumar, Abbas, Aster'],
        careerApplication: 'Diagnostic pathology, oncological staging, clinical histology, laboratory medicine.',
        topics: [
          { title: 'Cellular Injury, Adaptation & Death', subtopics: ['Reversible injury vs Irreversible cell death (Necrosis types vs Apoptosis pathways)', 'Cellular adaptations: Hypertrophy, Hyperplasia, Atrophy, Metaplasia', 'Free radicals, oxidative stress, and intracellular accumulations'], highYield: true },
          { title: 'Inflammation & Wound Healing', subtopics: ['Vascular and cellular events of acute inflammation (Margination, Diapedesis, Chemotaxis)', 'Chemical mediators (Histamine, Prostaglandins, Leukotrienes, Cytokines)', 'Granulomatous inflammation (Caseating vs Non-caseating tuberculosis granulomas)'], highYield: true },
          { title: 'Neoplasia & Tumor Biology', subtopics: ['Benign vs Malignant tumors differentiation and anaplasia', 'Proto-oncogenes, Tumor suppressor genes (p53, Rb), and Hallmarks of Cancer', 'Metastasis routes, TNM cancer staging and histological grading'], highYield: true },
          { title: 'Hemodynamic Disorders & Systemic Pathology', subtopics: ['Edema pathophysiology, Hyperemia, Hemostasis, and Thrombosis (Virchow\'s triad)', 'Atherosclerosis pathogenesis and Myocardial Infarction complications', 'Chronic Kidney Disease, Glomerulonephritis, and Cirrhosis'], highYield: true }
        ]
      }
    ]
  },
  {
    id: 'business-mgmt',
    name: 'Business Administration, Accounting & Economics',
    shortName: 'Business & Management',
    faculty: 'Faculty of Management Sciences & Economics',
    icon: Briefcase,
    color: 'from-amber-600 to-orange-700',
    bgLight: 'bg-amber-50 dark:bg-amber-950/30',
    borderLight: 'border-amber-200 dark:border-amber-800',
    accreditation: 'National Business Education Accreditation Council (NBEAC / HEC)',
    degreesOffered: ['BBA (Bachelor of Business Administration)', 'BS Accounting & Finance', 'BS Economics', 'MBA / MS Management'],
    description: 'Comprehensive business disciplines covering corporate valuation, financial accounting standards (IFRS), quantitative econometric modeling, strategic marketing, and organizational leadership.',
    subjects: [
      {
        id: 'financial-accounting',
        code: 'ACT-101',
        name: 'Financial Accounting & Reporting',
        creditHours: '3 + 0 (3 Cr.)',
        semester: 'Semester 1 (Core)',
        description: 'The accounting cycle, double-entry bookkeeping, adjusting entries, financial statement preparation, IFRS compliance, inventory valuation, and cash flow analysis.',
        recommendedBooks: ['"Financial Accounting: IFRS Edition" by Weygandt, Kimmel, Kieso', '"Intermediate Accounting" by Kieso, Weygandt, Warfield'],
        careerApplication: 'Chartered Accountancy (CA / ACCA), audit associate, corporate financial controller.',
        topics: [
          { title: 'Accounting Cycle & Double Entry', subtopics: ['Debit and credit conventions, General Journal, and General Ledger', 'Trial balance preparation and correction of errors', 'Adjusting entries (Accruals, Prepayments, Depreciation calculations)'], highYield: true },
          { title: 'Financial Statements Preparation', subtopics: ['Income Statement (Statement of Profit or Loss)', 'Balance Sheet (Statement of Financial Position)', 'Statement of Cash Flows (Operating, Investing, Financing activities - Direct vs Indirect)'], highYield: true },
          { title: 'Asset Valuation & Inventories', subtopics: ['Inventory valuation methods: FIFO, LIFO, Weighted Average cost', 'Depreciation methods: Straight-line, Reducing balance, Units of production', 'Bank Reconciliation Statements (BRS)'], highYield: true },
          { title: 'Partnership & Corporation Accounting', subtopics: ['Partnership profit sharing, Goodwill adjustment, Dissolution', 'Issuance of common and preferred stock, Treasury shares, Cash and Stock Dividends'], highYield: true }
        ]
      },
      {
        id: 'corporate-finance',
        code: 'FIN-201',
        name: 'Corporate Finance & Valuation',
        creditHours: '3 + 0 (3 Cr.)',
        semester: 'Semester 4 (Core)',
        prerequisites: 'Financial Accounting & Business Math',
        description: 'Time value of money, discounted cash flow (DCF) valuation, capital budgeting rules, risk-return tradeoffs (CAPM), cost of capital (WACC), and capital structure theory.',
        recommendedBooks: ['"Corporate Finance" by Ross, Westerfield, Jaffe', '"Principles of Corporate Finance" by Brealey, Myers, Allen'],
        careerApplication: 'Investment banking, financial analyst, private equity, treasury management.',
        topics: [
          { title: 'Time Value of Money (TVM)', subtopics: ['Present Value (PV) and Future Value (FV) of single sums', 'Ordinary Annuities and Annuity Due calculations', 'Perpetuities, Growing Perpetuities, and Effective Annual Rate (EAR)'], highYield: true },
          { title: 'Capital Budgeting Decisions', subtopics: ['Net Present Value (NPV) decision criteria and advantages', 'Internal Rate of Return (IRR) and Multiple IRR pitfalls', 'Payback Period and Profitability Index (PI)'], highYield: true },
          { title: 'Risk, Return & Asset Pricing (CAPM)', subtopics: ['Expected return, variance, and standard deviation of portfolios', 'Systematic risk vs Unsystematic risk (Diversification)', 'Capital Asset Pricing Model (CAPM): E(R) = Rf + β(Rm - Rf)'], highYield: true },
          { title: 'Cost of Capital & Capital Structure', subtopics: ['Cost of Equity (CAPM / Dividend Discount Model)', 'Weighted Average Cost of Capital (WACC) calculation', 'Modigliani-Miller theorem (with and without corporate taxes)'], highYield: true }
        ]
      },
      {
        id: 'micro-macro-econ',
        code: 'ECO-101',
        name: 'Microeconomics & Macroeconomics',
        creditHours: '3 + 0 (3 Cr.)',
        semester: 'Semester 2 & 3 (Core)',
        description: 'Price theory, consumer utility, production costs, market structures (monopoly vs competition), national income accounting (GDP), inflation, unemployment, and monetary policy.',
        recommendedBooks: ['"Principles of Economics" by N. Gregory Mankiw', '"Economics" by Paul Samuelson & William Nordhaus'],
        careerApplication: 'Economic research analyst, State Bank of Pakistan policy officer, development organizations (UN, World Bank).',
        topics: [
          { title: 'Demand, Supply & Elasticity', subtopics: ['Law of demand & supply, Market equilibrium, Surplus and Shortages', 'Price Elasticity of Demand (PED), Cross-price, Income elasticity', 'Consumer Surplus and Producer Surplus'], highYield: true },
          { title: 'Consumer Behavior & Firm Costs', subtopics: ['Indifference curves and Budget line tangency condition', 'Short-run vs Long-run cost curves (MC, ATC, AVC)', 'Law of Diminishing Marginal Returns'], highYield: true },
          { title: 'Market Structures', subtopics: ['Perfect Competition: Profit maximization P = MC, Long-run normal profits', 'Monopoly: Deadweight loss, Price discrimination', 'Monopolistic Competition and Oligopoly (Cournot, Game theory prisoner\'s dilemma)'], highYield: true },
          { title: 'Macroeconomic Aggregate Measures', subtopics: ['GDP calculation (Expenditure, Income, and Output approaches)', 'Nominal vs Real GDP and GDP deflator', 'Inflation measurement using Consumer Price Index (CPI)', 'Unemployment types: Frictional, Structural, Cyclical'], highYield: true },
          { title: 'Fiscal & Monetary Policy', subtopics: ['IS-LM Model equilibrium in goods and money markets', 'Central bank tools: Interest rate, Reserve requirements, Open Market Operations', 'Government spending multiplier and crowding-out effect'], highYield: true }
        ]
      },
      {
        id: 'marketing-mgmt',
        code: 'MKT-201',
        name: 'Marketing Management & Digital Strategy',
        creditHours: '3 + 0 (3 Cr.)',
        semester: 'Semester 3 (Core)',
        description: 'Customer-centric value propositions, Market segmentation (STP), the 4 Ps marketing mix, brand equity development, consumer buyer behavior, and digital performance marketing.',
        recommendedBooks: ['"Marketing Management" by Philip Kotler & Kevin Lane Keller', '"Consumer Behavior" by Michael R. Solomon'],
        careerApplication: 'Brand manager, digital marketing director, product marketing strategist.',
        topics: [
          { title: 'Strategic Marketing & STP Framework', subtopics: ['Market Segmentation (Demographic, Psychographic, Behavioral)', 'Targeting strategies (Undifferentiated, Differentiated, Niche)', 'Brand Positioning and Perceptual mapping'], highYield: true },
          { title: 'The Marketing Mix (4 Ps)', subtopics: ['Product lifecycle stages and BCG Growth-Share matrix', 'Pricing strategies (Penetration, Skimming, Cost-plus, Dynamic)', 'Place / Channels of distribution and supply chain logistics', 'Promotion Mix: Advertising, PR, Sales Promotion, Personal Selling'], highYield: true },
          { title: 'Consumer Buying Decision Process', subtopics: ['Problem recognition, Information search, Evaluation of alternatives, Purchase decision, Post-purchase dissonance', 'Cultural, social, and psychological determinants of buying'], highYield: false },
          { title: 'Digital Marketing & Growth Metrics', subtopics: ['Search Engine Optimization (SEO) & Search Engine Marketing (SEM)', 'Social media conversion funnels and Customer Lifetime Value (CLV)', 'Customer Acquisition Cost (CAC) and Retention rates'], highYield: true }
        ]
      }
    ]
  },
  {
    id: 'law-legal',
    name: 'Law & Legal Studies (LLB / LLM)',
    shortName: 'Law & Jurisprudence',
    faculty: 'Faculty of Law & Shariah',
    icon: Scale,
    color: 'from-amber-800 to-yellow-900',
    bgLight: 'bg-amber-50 dark:bg-amber-950/20',
    borderLight: 'border-amber-300 dark:border-amber-800',
    accreditation: 'Pakistan Bar Council (PBC) & Higher Education Commission (HEC)',
    degreesOffered: ['5-Year LLB (Bachelor of Laws)', 'LLM (Master of Laws)', 'PhD in Law'],
    description: 'Comprehensive legal education structured under the Pakistan Bar Council curriculum. Prepares advocates for High Court licensing, judiciary competitive examinations (Civil Judge / Judicial Magistrate), and corporate legal practice.',
    subjects: [
      {
        id: 'constitutional-law',
        code: 'LAW-101',
        name: 'Constitutional Law of Pakistan',
        creditHours: '4 + 0 (4 Cr.)',
        semester: 'Year 1 & 2 LLB (Core)',
        description: 'Detailed analysis of the 1973 Constitution of Pakistan, constitutional history (1956, 1962), Fundamental Rights (Articles 8–28), Federation and Provinces, Judicial Review (Article 199 & 184(3)).',
        recommendedBooks: ['"The Constitution of the Islamic Republic of Pakistan" by Justice (R) Munir', '"Constitutional and Political History of Pakistan" by Hamid Khan'],
        careerApplication: 'Constitutional litigation advocate, judicial services exam, legislative draftsman.',
        topics: [
          { title: 'Constitutional History of Pakistan', subtopics: ['Objectives Resolution 1949 and its constitutional significance', '1956 and 1962 Constitutions overview & causes of failure', 'Enactment of 1973 Constitution and key democratic pillars'], highYield: true },
          { title: 'Fundamental Rights & Principles of Policy', subtopics: ['Article 8: Laws inconsistent with fundamental rights to be void', 'Article 9 (Right to Life), Article 10A (Right to Fair Trial)', 'Article 19 & 19A (Freedom of Speech and Right to Information)', 'Enforceability of Principles of Policy (Articles 29–40)'], highYield: true },
          { title: 'Federation & Distribution of Legislative Powers', subtopics: ['Federal structure: President, Prime Minister, National Assembly & Senate', 'Abolition of Concurrent List via 18th Constitutional Amendment', 'Council of Common Interests (CCI) and National Finance Commission (NFC)'], highYield: true },
          { title: 'Judiciary & Powers of Judicial Review', subtopics: ['High Court Constitutional Writ jurisdiction under Article 199 (Habeas Corpus, Mandamus, Prohibition, Quo-Warranto, Certiorari)', 'Supreme Court Original Jurisdiction under Article 184(3) (Public importance & fundamental rights)', 'Appointment and removal of judges (Article 175A & Supreme Judicial Council Article 209)'], highYield: true }
        ]
      },
      {
        id: 'jurisprudence',
        code: 'LAW-102',
        name: 'Jurisprudence & Legal Theory',
        creditHours: '4 + 0 (4 Cr.)',
        semester: 'Year 1 LLB (Core)',
        description: 'Philosophical foundation of law, nature of justice, historical, analytical, and sociological schools of jurisprudence, legal concepts of rights, duties, ownership, possession, and personality.',
        recommendedBooks: ['"Salmond on Jurisprudence" by P.J. Fitzgerald', '"Jurisprudence" by Dias', '"The Concept of Law" by H.L.A. Hart'],
        careerApplication: 'Judicial exams, legal scholarship, appellate court research assistance.',
        topics: [
          { title: 'Major Schools of Jurisprudence', subtopics: ['Natural Law School (St. Thomas Aquinas, Grotius, Fuller\'s inner morality)', 'Analytical Positivism (John Austin\'s command theory, Bentham, H.L.A. Hart\'s primary & secondary rules)', 'Pure Theory of Law (Hans Kelsen\'s Grundnorm)', 'Historical School (Savigny\'s Volksgeist) and Sociological School (Roscoe Pound\'s social engineering)'], highYield: true },
          { title: 'Sources of Law', subtopics: ['Legislation (Supreme vs Subordinate legislation)', 'Judicial Precedent (Doctrine of Stare Decisis, Ratio Decidendi, Obiter Dicta)', 'Custom as a source of law and essential requisites of valid custom'], highYield: true },
          { title: 'Core Legal Concepts', subtopics: ['Legal Rights and Duties: Hohfeldian analysis of jural opposites & correlatives', 'Ownership: Characteristics and types (Sole, Co-ownership, Corporeal, Incorporeal)', 'Possession: Corpus possessionis and Animus possidendi, Possession in law vs fact', 'Legal Personality: Status of unborn child, dead person, and corporations'], highYield: true }
        ]
      },
      {
        id: 'criminal-law',
        code: 'LAW-201',
        name: 'Criminal Law & Pakistan Penal Code (PPC)',
        creditHours: '4 + 0 (4 Cr.)',
        semester: 'Year 2 LLB (Core)',
        description: 'Substantive criminal law, elements of crime (Actus Reus and Mens Rea), general exceptions, offences against the human body (Qisas and Diyat), offences against property, and criminal conspiracies.',
        recommendedBooks: ['"The Pakistan Penal Code, 1860" with commentary by M. Mahmood', '"Principles of Criminal Law" by Andrew Ashworth'],
        careerApplication: 'Criminal defense lawyer, public prosecutor, state litigation counsel.',
        topics: [
          { title: 'Elements of Criminal Liability', subtopics: ['Actus Reus (Guilty act) and Mens Rea (Guilty mind)', 'Doctrine of Strict Liability in criminal jurisprudence', 'Stages of Crime: Intention, Preparation, Attempt (Section 511 PPC), Execution'], highYield: true },
          { title: 'General Exceptions to Criminal Liability', subtopics: ['Judicial acts and mistake of fact (Sections 76 & 79)', 'Infancy / Doli Incapax (Sections 82 & 83)', 'Insanity / M\'Naghten rules (Section 84)', 'Intoxication (Sections 85 & 86) and Private Defence (Sections 96–106)'], highYield: true },
          { title: 'Offences Against Human Body (Qisas & Diyat)', subtopics: ['Qatl-i-Amd (Section 302) definition, proof, and punishments', 'Qatl-i-Shibh-i-Amd, Qatl-i-Khata, Qatl-bi-Sabab', 'Hurt offences: Itlaf-i-Udw, Itlaf-i-Salahiyyat-i-Udw, Shajjah, Jaifah'], highYield: true },
          { title: 'Offences Against Property & Public Peace', subtopics: ['Theft (Section 378), Extortion (Section 383), Robbery (Section 390), Dacoity (Section 391)', 'Criminal misappropriation of property and Criminal Breach of Trust', 'Unlawful assembly, Rioting (Section 146), and Sedition (Section 124A)'], highYield: true }
        ]
      },
      {
        id: 'qso-evidence',
        code: 'LAW-301',
        name: 'Qanun-e-Shahadat Order 1984 (Law of Evidence)',
        creditHours: '4 + 0 (4 Cr.)',
        semester: 'Year 3 LLB (Core)',
        description: 'Relevancy of facts, admissions, confessions, dying declarations, competence of witnesses, burden of proof, examination of witnesses, and cross-examination strategies.',
        recommendedBooks: ['"Qanun-e-Shahadat Order, 1984" commentary by Justice (R) Dr. Munir Ahmad Mughal', '"Law of Evidence" by Woodroffe & Ameer Ali'],
        careerApplication: 'Trial court advocacy, civil judge exam, criminal and civil litigation.',
        topics: [
          { title: 'Relevancy of Facts & Doctrine of Res Gestae', subtopics: ['Fact, Fact in issue, Relevant fact definitions', 'Doctrine of Res Gestae (Article 19): Facts forming part of same transaction', 'Alibi defense under Article 24', 'Motive, preparation, and previous/subsequent conduct (Article 21)'], highYield: true },
          { title: 'Admissions & Confessions', subtopics: ['Admissions definition and against whom proved (Articles 30–36)', 'Confession before police officer (Article 38 & 39 inadmissibility)', 'Retracted confessions and evidentiary value', 'Dying Declaration (Article 46(1)) requirements and probative value'], highYield: true },
          { title: 'Witnesses & Privileged Communications', subtopics: ['Competence and number of witnesses according to Tazkiya-al-Shahood', 'Privileged communications: Spousal communication, Professional attorney-client privilege', 'Accomplice evidence and corroboration requirement (Article 16)'], highYield: true },
          { title: 'Burden of Proof & Examination of Witnesses', subtopics: ['Burden of proof in civil vs criminal cases (Articles 117–129)', 'Examination-in-Chief, Cross-Examination, and Re-Examination (Articles 132–134)', 'Leading questions when permissible (Article 136 & 137)', 'Impeaching credit of witness (Article 151) and refreshing memory'], highYield: true }
        ]
      }
    ]
  },
  {
    id: 'social-sciences',
    name: 'Social Sciences, Humanities & Psychology',
    shortName: 'Social Sciences',
    faculty: 'Faculty of Social Sciences & Humanities',
    icon: Users,
    color: 'from-purple-600 to-pink-700',
    bgLight: 'bg-purple-50 dark:bg-purple-950/30',
    borderLight: 'border-purple-200 dark:border-purple-800',
    accreditation: 'Higher Education Commission (HEC Pakistan)',
    degreesOffered: ['BS International Relations (BS-IR)', 'BS Political Science', 'BS Psychology (Clinical/Applied)', 'BS English Literature & Linguistics'],
    description: 'Disciplines exploring geopolitical strategies, global governance, behavioral psychology, cognitive functioning, comparative political systems, and sociological frameworks.',
    subjects: [
      {
        id: 'ir-theories',
        code: 'IR-201',
        name: 'International Relations: Theories & Foreign Policy',
        creditHours: '3 + 0 (3 Cr.)',
        semester: 'Semester 3 (Core)',
        description: 'Classical and contemporary IR theories, anarchy and security dilemma, nuclear deterrence, foreign policy decision-making models, and major power dynamics (US-China-Pakistan).',
        recommendedBooks: ['"The Globalization of World Politics" by Baylis, Smith, Owens', '"Theories of International Relations" by Scott Burchill et al.'],
        careerApplication: 'Foreign Service of Pakistan (CSS), diplomatic embassies, think tanks (ISSI, IPRI), geopolitical risk consulting.',
        topics: [
          { title: 'Core Theoretical Paradigms in IR', subtopics: ['Classical Realism (Morgenthau\'s six principles of political realism)', 'Neorealism / Structural Realism (Waltz\'s defensive vs Mearsheimer\'s offensive realism)', 'Liberalism & Neoliberal Institutionalism (Keohane, democratic peace theory)', 'Constructivism (Alexander Wendt: Anarchy is what states make of it)', 'Critical Theories: Marxism, Dependency Theory, Feminist IR'], highYield: true },
          { title: 'Security, Anarchy & Nuclear Deterrence', subtopics: ['Security Dilemma in international anarchy', 'Balance of Power vs Bandwagoning', 'Nuclear deterrence theory and Mutually Assured Destruction (MAD)', 'Cold War historical dynamics and post-Cold War multipolarity'], highYield: true },
          { title: 'Foreign Policy Analysis (FPA)', subtopics: ['Rational Actor Model, Bureaucratic Politics Model', 'Determinants of Pakistan\'s Foreign Policy (Geostrategy, Kashmir, CPEC)', 'Relations with United States, China, India, and Afghanistan'], highYield: true }
        ]
      },
      {
        id: 'psychology',
        code: 'PSY-101',
        name: 'General & Clinical Psychology',
        creditHours: '3 + 0 (3 Cr.)',
        semester: 'Semester 2 (Core)',
        description: 'Foundations of cognitive processing, biological bases of behavior, learning and memory, psychological disorders classification (DSM-5), and cognitive behavioral therapies.',
        recommendedBooks: ['"Psychology" by David G. Myers', '"Abnormal Psychology" by Barlow, Durand, Hofmann'],
        careerApplication: 'Clinical psychologist, organizational HR counselor, behavioral therapist.',
        topics: [
          { title: 'Biological Bases & Cognitive Psychology', subtopics: ['Structure of neuron, action potential, and neurotransmitters (Serotonin, Dopamine)', 'Limbic system and cerebral cortex functional specialization', 'Memory stages: Sensory, Working/Short-term, Long-term memory encoding & retrieval', 'Learning theories: Classical conditioning (Pavlov), Operant conditioning (Skinner)'], highYield: true },
          { title: 'Psychological Disorders (DSM-5)', subtopics: ['Anxiety disorders (GAD, Panic disorder, Phobias)', 'Major Depressive Disorder and Bipolar disorders', 'Schizophrenia spectrum disorders (Positive vs Negative symptoms)', 'Personality disorders (Borderline, Narcissistic, Antisocial)'], highYield: true },
          { title: 'Psychotherapeutic Interventions', subtopics: ['Cognitive Behavioral Therapy (CBT) cognitive restructuring', 'Psychoanalysis (Freud\'s Id, Ego, Superego & defense mechanisms)', 'Humanistic therapy (Carl Rogers client-centered unconditional positive regard)'], highYield: true }
        ]
      }
    ]
  },
  {
    id: 'natural-sciences',
    name: 'Natural & Applied Sciences (Physics, Chem, Math)',
    shortName: 'Natural Sciences',
    faculty: 'Faculty of Natural & Applied Sciences',
    icon: FlaskConical,
    color: 'from-emerald-600 to-teal-700',
    bgLight: 'bg-emerald-50 dark:bg-emerald-950/30',
    borderLight: 'border-emerald-200 dark:border-emerald-800',
    accreditation: 'Higher Education Commission (HEC Pakistan)',
    degreesOffered: ['BS Physics', 'BS Chemistry', 'BS Mathematics', 'BS Biotechnology'],
    description: 'Fundamental theoretical sciences investigating subatomic quantum mechanics, chemical reaction kinetics and spectroscopy, advanced mathematical analysis, and recombinant DNA biology.',
    subjects: [
      {
        id: 'quantum-physics',
        code: 'PHY-301',
        name: 'Quantum Mechanics & Modern Physics',
        creditHours: '3 + 0 (3 Cr.)',
        semester: 'Semester 5 (Core)',
        prerequisites: 'Classical Mechanics & Calculus III',
        description: 'Wave-particle duality, Heisenberg uncertainty principle, Schrödinger wave equation, particle in a box, quantum harmonic oscillator, and hydrogen atom eigenstates.',
        recommendedBooks: ['"Introduction to Quantum Mechanics" by David J. Griffiths', '"Principles of Quantum Mechanics" by R. Shankar'],
        careerApplication: 'Quantum computing research, semiconductor fabrication, materials science.',
        topics: [
          { title: 'Foundations & Wave Mechanics', subtopics: ['Wave-particle duality and De Broglie hypothesis', 'Heisenberg uncertainty principle (Δx Δp ≥ ħ/2)', 'Wave function Born statistical interpretation and normalization condition'], highYield: true },
          { title: 'Schrödinger Equation & 1D Potentials', subtopics: ['Time-Dependent and Time-Independent Schrödinger equations', 'Infinite square well (Particle in a 1D Box) energy quantization', 'Finite potential well and Quantum Tunneling through barriers', 'Quantum Harmonic Oscillator creation and annihilation ladder operators'], highYield: true },
          { title: 'Hydrogen Atom & Angular Momentum', subtopics: ['Orbital angular momentum operators (L², Lz) and commutation relations', 'Radial wavefunctions and principal, orbital, magnetic quantum numbers', 'Electron spin and Pauli Exclusion Principle'], highYield: true }
        ]
      },
      {
        id: 'advanced-calc-algebra',
        code: 'MTH-201',
        name: 'Multivariable Calculus & Linear Algebra',
        creditHours: '4 + 0 (4 Cr.)',
        semester: 'Semester 3 (Core)',
        prerequisites: 'Calculus I & II',
        description: 'Partial derivatives, directional derivatives, multiple integrals, vector calculus (Green\'s, Stokes\', Divergence theorems), vector spaces, eigenvalues, and diagonalization.',
        recommendedBooks: ['"Calculus: Early Transcendentals" by James Stewart', '"Linear Algebra and Its Applications" by David C. Lay'],
        careerApplication: 'Quantitative finance, 3D graphics rendering engines, optimization algorithms, data science.',
        topics: [
          { title: 'Partial Derivatives & Optimization', subtopics: ['Functions of several variables, Limits and continuity', 'Gradient vector and Directional derivatives', 'Tangent planes to surfaces and linear approximations', 'Extreme values and Lagrange multipliers with constraints'], highYield: true },
          { title: 'Multiple Integrals & Vector Calculus', subtopics: ['Double integrals over general regions and polar coordinates', 'Triple integrals in cylindrical and spherical coordinates', 'Line integrals, Conservative vector fields and potential functions', 'Green\'s Theorem, Stokes\' Theorem, and Gauss Divergence Theorem'], highYield: true },
          { title: 'Vector Spaces & Matrix Diagonalization', subtopics: ['Vector spaces, Subspaces, Linear independence, Basis and Dimension', 'Null space, Column space, and Rank-Nullity Theorem', 'Characteristic equation, Eigenvalues and Eigenvectors', 'Diagonalization of matrices and symmetric matrix properties'], highYield: true }
        ]
      }
    ]
  }
];

export const UniversityHub: React.FC = () => {
  const { setTab, setSelectedCategorySlug, setSelectedExamId } = useApp();

  const [activeDeptId, setActiveDeptId] = useState<string>('cs-it');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('dsa');
  const [searchQuery, setSearchQuery] = useState('');
  const [readingTextIndex, setReadingTextIndex] = useState<string | null>(null);

  // Live CGPA Calculator State
  const [cgpaCourses, setCgpaCourses] = useState<Array<{ id: number; name: string; credits: number; gradePoint: number }>>([
    { id: 1, name: 'Data Structures (CS-201)', credits: 4, gradePoint: 4.0 },
    { id: 2, name: 'Computer Networks (CS-305)', credits: 4, gradePoint: 3.67 },
    { id: 3, name: 'Multivariable Calculus (MTH-201)', credits: 3, gradePoint: 3.33 },
    { id: 4, name: 'Technical Report Writing (ENG-102)', credits: 3, gradePoint: 4.0 }
  ]);
  const [newCourseName, setNewCourseName] = useState('');
  const [newCourseCredits, setNewCourseCredits] = useState<number>(3);
  const [newCourseGrade, setNewCourseGrade] = useState<number>(4.0);

  const activeDept = useMemo(() => {
    return UNIVERSITY_DEPARTMENTS.find(d => d.id === activeDeptId) || UNIVERSITY_DEPARTMENTS[0];
  }, [activeDeptId]);

  // Ensure active subject belongs to active dept
  const activeSubject = useMemo(() => {
    const found = activeDept.subjects.find(s => s.id === selectedSubjectId);
    return found || activeDept.subjects[0];
  }, [activeDept, selectedSubjectId]);

  // Search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    const results: Array<{ dept: UniversityDepartment; subject: UniversitySubject; matchingTopics: string[] }> = [];

    UNIVERSITY_DEPARTMENTS.forEach(dept => {
      dept.subjects.forEach(subject => {
        const matchesSub = subject.name.toLowerCase().includes(q) || subject.code.toLowerCase().includes(q);
        const matchingTopics: string[] = [];
        subject.topics.forEach(t => {
          if (t.title.toLowerCase().includes(q) || t.subtopics.some(st => st.toLowerCase().includes(q))) {
            matchingTopics.push(t.title);
          }
        });

        if (matchesSub || matchingTopics.length > 0) {
          results.push({ dept, subject, matchingTopics });
        }
      });
    });

    return results;
  }, [searchQuery]);

  // CGPA calculation
  const calculatedGPA = useMemo(() => {
    let totalQualityPoints = 0;
    let totalCredits = 0;
    cgpaCourses.forEach(c => {
      totalQualityPoints += c.credits * c.gradePoint;
      totalCredits += c.credits;
    });
    return totalCredits > 0 ? (totalQualityPoints / totalCredits).toFixed(2) : '0.00';
  }, [cgpaCourses]);

  const handleAddCgpaCourse = () => {
    if (!newCourseName.trim()) return;
    setCgpaCourses(prev => [
      ...prev,
      {
        id: Date.now(),
        name: newCourseName,
        credits: newCourseCredits,
        gradePoint: newCourseGrade
      }
    ]);
    setNewCourseName('');
  };

  const handleRemoveCgpaCourse = (id: number) => {
    setCgpaCourses(prev => prev.filter(c => c.id !== id));
  };

  const handleSpeak = (text: string, id: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      if (readingTextIndex === id) {
        setReadingTextIndex(null);
        return;
      }
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.onend = () => setReadingTextIndex(null);
      utterance.onerror = () => setReadingTextIndex(null);
      setReadingTextIndex(id);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleLaunchPractice = (subject: UniversitySubject) => {
    let slug = 'general-knowledge';
    const subLower = subject.name.toLowerCase();
    if (subLower.includes('data') || subLower.includes('program') || subLower.includes('network') || subLower.includes('operating') || subLower.includes('software') || subLower.includes('database')) {
      slug = 'computer';
    } else if (subLower.includes('anatom') || subLower.includes('physiol') || subLower.includes('pathol') || subLower.includes('bio')) {
      slug = 'biology';
    } else if (subLower.includes('circuit') || subLower.includes('signal') || subLower.includes('thermo') || subLower.includes('physic')) {
      slug = 'physics';
    } else if (subLower.includes('calculus') || subLower.includes('algebra') || subLower.includes('math')) {
      slug = 'mathematics';
    } else if (subLower.includes('account') || subLower.includes('finance') || subLower.includes('econom') || subLower.includes('market')) {
      slug = 'general-knowledge';
    } else if (subLower.includes('law') || subLower.includes('constitut') || subLower.includes('jurisprud')) {
      slug = 'pakistan-affairs';
    }

    setSelectedCategorySlug(slug);
    setSelectedExamId('university-semester');
    setTab('mcqs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-white rounded-3xl p-6 sm:p-8 md:p-10 border border-indigo-700/40 shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                HEC Recognized Degree Curricula
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30 text-xs font-bold">
                Undergraduate & Graduate Portal
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight font-display text-white">
              University Departments & Subjects Hub
            </h2>
            <p className="text-sm sm:text-base text-indigo-100/90 mt-2 leading-relaxed">
              Explore academic departments, semester course outlines, and core subjects across Computer Science, Engineering, Medicine, Business, Law, Social Sciences, and Natural Sciences. Complete with HEC credit hours, high-yield exam chapters, recommended textbooks, and a real-time CGPA calculator.
            </p>

            {/* Global Search Input */}
            <div className="mt-5 relative max-w-lg">
              <Search className="w-4 h-4 text-indigo-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search any university subject, course code, or topic (e.g., DSA, OS, Constitutional Law)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-indigo-200/60 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-purple-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-indigo-300 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Quick Academic Navigation Badge */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 p-5 rounded-2xl shrink-0 flex flex-col gap-3 min-w-[260px]">
            <div className="flex items-center justify-between text-xs text-indigo-200">
              <span>Faculties / Departments</span>
              <span className="font-bold text-white">{UNIVERSITY_DEPARTMENTS.length} Specialized</span>
            </div>
            <div className="flex items-center justify-between text-xs text-indigo-200">
              <span>Total Core Subjects</span>
              <span className="font-bold text-white">
                {UNIVERSITY_DEPARTMENTS.reduce((acc, d) => acc + d.subjects.length, 0)} Courses
              </span>
            </div>
            <div className="flex items-center justify-between text-xs text-indigo-200">
              <span>HEC Standard Grading</span>
              <span className="font-bold text-emerald-300">4.0 GPA Scale</span>
            </div>

            <button
              onClick={() => {
                setSelectedExamId('university-semester');
                setTab('exams');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-2 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white text-xs font-black shadow-md transition cursor-pointer flex items-center justify-center gap-2"
            >
              <Library className="w-3.5 h-3.5" />
              <span>Explore Semester Exam Bank</span>
            </button>
          </div>
        </div>
      </div>

      {/* Search Results Display if Query Exists */}
      {searchResults && (
        <div className="bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-900 rounded-3xl p-6 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Search className="w-4 h-4 text-purple-600" />
              <span>Search Results for "{searchQuery}" ({searchResults.length} found)</span>
            </h3>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-purple-600 dark:text-purple-400 font-bold hover:underline"
            >
              Close Search
            </button>
          </div>

          {searchResults.length === 0 ? (
            <div className="text-center py-8 text-slate-500 text-sm">
              No university subjects or topics matched "{searchQuery}". Try searching for terms like "Algorithms", "Anatomy", "Accounting", or "Law".
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {searchResults.map(({ dept, subject, matchingTopics }, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveDeptId(dept.id);
                    setSelectedSubjectId(subject.id);
                    setSearchQuery('');
                  }}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:border-purple-500 transition cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-purple-600 dark:text-purple-400">{dept.shortName}</span>
                    <span className="text-[11px] font-mono bg-purple-100 dark:bg-purple-950 px-2 py-0.5 rounded text-purple-800 dark:text-purple-300 font-bold">
                      {subject.code}
                    </span>
                  </div>
                  <h4 className="font-extrabold text-sm text-slate-900 dark:text-white mt-1">
                    {subject.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                    {subject.description}
                  </p>
                  {matchingTopics.length > 0 && (
                    <div className="mt-2 text-[11px] text-teal-600 dark:text-teal-400 font-semibold">
                      Matching topic: {matchingTopics.slice(0, 2).join(', ')}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Departments Selector Tabs */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Select University Department / Faculty
          </span>
          <span className="text-xs text-purple-600 dark:text-purple-400 font-bold">
            {activeDept.faculty}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2.5">
          {UNIVERSITY_DEPARTMENTS.map((dept) => {
            const Icon = dept.icon;
            const isSelected = activeDept.id === dept.id;
            return (
              <button
                key={dept.id}
                onClick={() => {
                  setActiveDeptId(dept.id);
                  setSelectedSubjectId(dept.subjects[0]?.id || '');
                }}
                className={`p-3.5 rounded-2xl flex flex-col items-center text-center gap-2 transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-gradient-to-b from-purple-600 to-indigo-700 text-white border-purple-500 shadow-md scale-[1.02]'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <div className={`p-2 rounded-xl ${isSelected ? 'bg-white/20 text-white' : 'bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold leading-tight line-clamp-1">{dept.shortName}</div>
                  <div className={`text-[10px] mt-0.5 ${isSelected ? 'text-purple-200' : 'text-slate-400'}`}>
                    {dept.subjects.length} Subjects
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Department Header Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                {activeDept.faculty}
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Accreditation: <strong className="text-slate-700 dark:text-slate-300">{activeDept.accreditation}</strong>
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display mt-1">
              Department of {activeDept.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-3xl leading-relaxed">
              {activeDept.description}
            </p>

            {/* Degrees Offered Chips */}
            <div className="mt-3 flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-bold text-slate-400 mr-1">Degree Programs:</span>
              {activeDept.degreesOffered.map((deg, dIdx) => (
                <span
                  key={dIdx}
                  className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-semibold border border-slate-200 dark:border-slate-700"
                >
                  {deg}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                setSelectedExamId('university-semester');
                setTab('past-papers');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs transition cursor-pointer flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Semester Past Papers</span>
            </button>
          </div>
        </div>

        {/* Master-Detail Layout: Subject List on Left (Desktop), Subject Outlines & Topics on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Subjects in this Department */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between pb-1">
              <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Department Subjects ({activeDept.subjects.length})
              </span>
              <span className="text-[11px] text-slate-400">Click to view syllabus</span>
            </div>

            <div className="space-y-2">
              {activeDept.subjects.map((subj) => {
                const isSelected = activeSubject.id === subj.id;
                return (
                  <div
                    key={subj.id}
                    onClick={() => setSelectedSubjectId(subj.id)}
                    className={`p-3.5 rounded-2xl border transition cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-purple-50 dark:bg-purple-950/40 border-purple-500 shadow-xs'
                        : 'bg-white dark:bg-slate-850 border-slate-200 dark:border-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-1.5 py-0.5 rounded">
                          {subj.code}
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                          {subj.creditHours}
                        </span>
                      </div>
                      <h4 className={`text-xs sm:text-sm font-bold mt-1 ${isSelected ? 'text-purple-700 dark:text-purple-300' : 'text-slate-900 dark:text-white'}`}>
                        {subj.name}
                      </h4>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        {subj.semester}
                      </div>
                    </div>

                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-purple-600 translate-x-1' : 'text-slate-400'}`} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Subject Detailed Syllabus & Topics */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-700/80 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-700">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-extrabold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-950/80 px-2 py-0.5 rounded">
                      {activeSubject.code}
                    </span>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                      {activeSubject.creditHours}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-slate-600 dark:text-slate-300 font-semibold">
                      {activeSubject.semester}
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-display mt-1">
                    {activeSubject.name}
                  </h4>
                  {activeSubject.prerequisites && (
                    <div className="text-[11px] text-amber-600 dark:text-amber-400 font-medium mt-0.5">
                      Prerequisites: <strong>{activeSubject.prerequisites}</strong>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleSpeak(`${activeSubject.name}. ${activeSubject.description}`, activeSubject.id)}
                    className="p-2 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 transition cursor-pointer"
                    title="Listen to course overview"
                  >
                    {readingTextIndex === activeSubject.id ? (
                      <VolumeX className="w-4 h-4 text-rose-500" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-purple-600" />
                    )}
                  </button>
                  <button
                    onClick={() => handleLaunchPractice(activeSubject)}
                    className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-xs transition cursor-pointer flex items-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Practice Subject MCQs</span>
                  </button>
                </div>
              </div>

              {/* Course Description */}
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {activeSubject.description}
              </p>

              {/* Real World Application Strip */}
              <div className="p-3 rounded-xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200/60 dark:border-purple-800/40 text-xs">
                <span className="font-bold text-purple-900 dark:text-purple-300">Industry & Career Relevance: </span>
                <span className="text-slate-700 dark:text-slate-300">{activeSubject.careerApplication}</span>
              </div>

              {/* Recommended Textbooks */}
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <BookMarked className="w-3.5 h-3.5 text-purple-600" />
                  <span>Recommended Standard Textbooks & HEC Readings:</span>
                </div>
                <ul className="space-y-1">
                  {activeSubject.recommendedBooks.map((book, bIdx) => (
                    <li key={bIdx} className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      <span className="font-medium">{book}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Course Modules & Chapters */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Syllabus Modules & High-Yield Exam Topics
                  </div>
                  <span className="text-[11px] text-slate-400">
                    {activeSubject.topics.length} Core Modules
                  </span>
                </div>

                <div className="space-y-2.5">
                  {activeSubject.topics.map((topic, tIdx) => (
                    <div
                      key={tIdx}
                      className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-2">
                          <span className="text-xs text-purple-600 dark:text-purple-400 font-mono">Module {tIdx + 1}:</span>
                          <span>{topic.title}</span>
                        </h5>
                        {topic.highYield && (
                          <span className="px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 text-[10px] font-bold border border-rose-200 dark:border-rose-900">
                            ★ Exam Favorite
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                        {topic.subtopics.map((sub, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                            <span className="text-purple-500 font-bold">•</span>
                            <span>{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive HEC Semester CGPA / GPA Calculator */}
        <div className="mt-8 p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white border border-slate-700/80 shadow-md space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-400/30">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-white font-display">
                  Interactive HEC Semester GPA & CGPA Calculator
                </h4>
                <p className="text-xs text-indigo-200/80">
                  Standard Pakistani HEC 4.0 scale (A = 4.0, B = 3.0, C = 2.0, D = 1.0, F = 0.0).
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-2xl border border-white/15">
              <span className="text-xs text-indigo-200">Calculated GPA:</span>
              <span className="text-2xl font-black text-purple-300 font-display">
                {calculatedGPA} / 4.00
              </span>
            </div>
          </div>

          {/* Add Course Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-end">
            <div className="sm:col-span-6">
              <label className="text-[11px] font-bold text-indigo-200 uppercase tracking-wider block mb-1">
                Course Name / Code:
              </label>
              <input
                type="text"
                placeholder="e.g., Operating Systems (CS-302)"
                value={newCourseName}
                onChange={(e) => setNewCourseName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-indigo-300/50 text-xs focus:outline-hidden focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-[11px] font-bold text-indigo-200 uppercase tracking-wider block mb-1">
                Credits:
              </label>
              <select
                value={newCourseCredits}
                onChange={(e) => setNewCourseCredits(Number(e.target.value))}
                className="w-full px-2 py-2 rounded-xl bg-slate-800 border border-white/20 text-white text-xs cursor-pointer focus:outline-hidden"
              >
                <option value={1}>1 Cr.</option>
                <option value={2}>2 Cr.</option>
                <option value={3}>3 Cr.</option>
                <option value={4}>4 Cr.</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="text-[11px] font-bold text-indigo-200 uppercase tracking-wider block mb-1">
                Grade:
              </label>
              <select
                value={newCourseGrade}
                onChange={(e) => setNewCourseGrade(Number(e.target.value))}
                className="w-full px-2 py-2 rounded-xl bg-slate-800 border border-white/20 text-white text-xs cursor-pointer focus:outline-hidden"
              >
                <option value={4.0}>A+ / A (4.00 - 85%+)</option>
                <option value={3.67}>A- (3.67 - 80-84%)</option>
                <option value={3.33}>B+ (3.33 - 75-79%)</option>
                <option value={3.0}>B (3.00 - 70-74%)</option>
                <option value={2.67}>B- (2.67 - 65-69%)</option>
                <option value={2.33}>C+ (2.33 - 61-64%)</option>
                <option value={2.0}>C (2.00 - 58-60%)</option>
                <option value={1.67}>C- (1.67 - 54-57%)</option>
                <option value={1.0}>D (1.00 - 50-53%)</option>
                <option value={0.0}>F (0.00 - Fail)</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <button
                onClick={handleAddCgpaCourse}
                disabled={!newCourseName.trim()}
                className="w-full py-2 px-3 rounded-xl bg-purple-500 hover:bg-purple-600 disabled:opacity-50 text-white text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Course</span>
              </button>
            </div>
          </div>

          {/* Course Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead>
                <tr className="border-b border-white/10 text-[11px] font-bold text-indigo-300 uppercase">
                  <th className="py-2">Course</th>
                  <th className="py-2 text-center">Credit Hours</th>
                  <th className="py-2 text-center">Grade Point</th>
                  <th className="py-2 text-center">Quality Points</th>
                  <th className="py-2 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {cgpaCourses.map((c) => (
                  <tr key={c.id}>
                    <td className="py-2.5 font-medium text-white">{c.name}</td>
                    <td className="py-2.5 text-center">{c.credits}</td>
                    <td className="py-2.5 text-center font-mono font-bold text-purple-300">{c.gradePoint.toFixed(2)}</td>
                    <td className="py-2.5 text-center font-mono text-emerald-300">{(c.credits * c.gradePoint).toFixed(2)}</td>
                    <td className="py-2.5 text-right">
                      <button
                        onClick={() => handleRemoveCgpaCourse(c.id)}
                        className="text-rose-400 hover:text-rose-300 p-1 transition cursor-pointer"
                        title="Remove course"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Semester Exam Structure & Grading Policy Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200/70 dark:border-slate-800 text-xs">
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Sessional / Quizzes</div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5">
              15% to 20% Total Weightage
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Surprise quizzes, lab reports, assignments</div>
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Mid-Term Examination</div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5">
              25% to 30% Total Weightage
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Evaluates first 8 weeks of syllabus</div>
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Final Examination</div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5">
              45% to 50% Total Weightage
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Comprehensive whole-semester paper</div>
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">HEC Degree Requirement</div>
            <div className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
              Min 2.00 CGPA for Graduation
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">130–136 Credit Hours for 4-year BS</div>
          </div>
        </div>
      </div>
    </div>
  );
};
