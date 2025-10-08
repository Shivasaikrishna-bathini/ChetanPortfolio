import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/ProjectCard";
import { FilterTabs } from "@/components/FilterTabs";
import { GitHubRepoCard } from "@/components/GitHubRepoCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { 
  ArrowRight, 
  Brain, 
  Code, 
  Database, 
  Cloud, 
  Cpu, 
  Mail, 
  Github, 
  Linkedin,
  FileText,
  Award,
  Briefcase,
  GraduationCap
} from "lucide-react";
import { SiPython, SiTensorflow, SiFastapi, SiAmazon, SiOpencv } from "react-icons/si";
import heroImage from "@assets/generated_images/AI_neural_network_hero_image_16561568.png";
import motionDetectorImage from "@assets/generated_images/Motion_Detector_AI_project_319c4ec7.png";
import legalAssistantImage from "@assets/generated_images/Personal_Attorney_RAG_assistant_f02b6336.png";
import pillDetectionImage from "@assets/generated_images/SmartMed_AI_pill_detection_b3d1497a.png";

const projects = [
  {
    id: "motion-detector",
    title: "Motion Detector – Agentic AI System",
    description: "AI system leveraging Bongard-HOI model to detect human-object interactions in videos and images. Integrated DeepSeek R1 for reasoning and LangChain agents.",
    category: "AI/ML",
    image: motionDetectorImage,
    techStack: ["LangChain", "RAG", "FastAPI", "ChromaDB", "PyTorch", "HuggingFace", "OpenAI"]
  },
  {
    id: "personal-attorney",
    title: "Personal Attorney – Legal RAG Assistant",
    description: "LLM-based RAG System for personalized legal guidance. Vectorized user data and regulations using ChromaDB, served through FastAPI.",
    category: "AI/ML",
    image: legalAssistantImage,
    techStack: ["LangChain", "FastAPI", "REST API", "ChromaDB", "DeepSeek", "AWS"]
  },
  {
    id: "smartmed-ai",
    title: "SmartMed AI – Pill Detection App",
    description: "YOLO-based real-time medicine classification tool. Developed pill counting application for pharmacies with real-time video stream detection.",
    category: "Computer Vision",
    image: pillDetectionImage,
    techStack: ["YOLO", "OpenCV", "Python", "FastAPI", "Google Colab", "AWS"]
  }
];

const categories = ["All", "AI/ML", "Computer Vision", "Web Dev", "VLSI"];

const techStack = [
  { icon: SiPython, label: "Python", category: "Languages" },
  { icon: Brain, label: "TensorFlow", category: "AI/ML" },
  { icon: Code, label: "LangChain", category: "AI/ML" },
  { icon: SiFastapi, label: "FastAPI", category: "Frameworks" },
  { icon: Database, label: "ChromaDB", category: "Database" },
  { icon: SiAmazon, label: "AWS", category: "Cloud" },
  { icon: SiOpencv, label: "YOLO", category: "AI/ML" },
  { icon: Cpu, label: "VHDL", category: "Hardware" }
];

const githubRepos = [
  {
    name: "motion-detector-ai",
    description: "Agentic AI system for human-object interaction detection using Bongard-HOI model and DeepSeek reasoning",
    stars: 124,
    forks: 23,
    language: "Python",
    url: "https://github.com/Chetan-chhetri"
  },
  {
    name: "legal-rag-assistant",
    description: "RAG-based legal assistant providing personalized guidance using local regulations and ChromaDB vectorization",
    stars: 89,
    forks: 15,
    language: "Python",
    url: "https://github.com/Chetan-chhetri"
  },
  {
    name: "smartmed-pill-detection",
    description: "Real-time pill counting application using YOLO for pharmacy automation deployed on AWS",
    stars: 67,
    forks: 12,
    language: "Python",
    url: "https://github.com/Chetan-chhetri"
  }
];

const experience = [
  {
    company: "VLSI First",
    role: "RTL Design Engineer",
    location: "Hyderabad, India",
    period: "2022-2023",
    highlights: [
      "Designed digital systems using VHDL with focus on performance and scalability",
      "Verified designs using UVM test benches and functional coverage analysis"
    ]
  },
  {
    company: "University of Bridgeport",
    role: "E-Commerce and Digital Operations Associate",
    location: "Bridgeport, CT",
    period: "Present",
    highlights: [
      "Managed inventory using SQL-based tools and digital cataloging systems",
      "Streamlined workflows improving accuracy and reducing errors"
    ]
  }
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border backdrop-blur-xl bg-background/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl tracking-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Chetan Chhetri
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors" data-testid="link-nav-projects">
                Projects
              </a>
              <a href="#github" className="text-sm font-medium hover:text-primary transition-colors" data-testid="link-nav-github">
                GitHub
              </a>
              <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors" data-testid="link-nav-skills">
                Skills
              </a>
              <Link href="/style-guide">
                <a className="text-sm font-medium hover:text-primary transition-colors" data-testid="link-nav-styleguide">
                  Style Guide
                </a>
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    AI/ML Engineer
                  </span>
                  <br />
                  <span>Full Stack Developer</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl">
                  Computer Engineering graduate specializing in AI/ML, RAG systems, computer vision, and cloud deployment. 
                  Experienced in LangChain, TensorFlow, YOLO, and AWS.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2" data-testid="button-view-projects">
                  <a href="#projects" className="flex items-center gap-2">
                    View Projects
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" data-testid="button-contact">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://github.com/Chetan-chhetri" target="_blank" rel="noopener noreferrer" data-testid="link-github">
                  <Button variant="ghost" size="icon">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a href="https://linkedin.com/in/chetanchhetri" target="_blank" rel="noopener noreferrer" data-testid="link-linkedin">
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a href="mailto:cchhetri@my.bridgeport.edu" data-testid="link-email">
                  <Button variant="ghost" size="icon">
                    <Mail className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl"></div>
              <img
                src={heroImage}
                alt="AI Neural Network Visualization"
                className="relative rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">Featured Projects</h2>
              <p className="text-lg text-muted-foreground">
                Explore my work in AI/ML, computer vision, and full-stack development
              </p>
            </div>
            <FilterTabs
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="github" className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">GitHub Activity</h2>
              <p className="text-lg text-muted-foreground">
                Recent repositories and contributions
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Pinned Repositories</h3>
                {githubRepos.map((repo) => (
                  <GitHubRepoCard key={repo.name} {...repo} />
                ))}
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Contribution Graph</h3>
                <Card className="p-6" data-testid="card-github-contribution">
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      GitHub contribution data will be loaded from the public API
                    </p>
                    <div className="h-32 rounded bg-muted flex items-center justify-center">
                      <p className="text-sm text-muted-foreground">Contribution graph placeholder</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">Skills & Technologies</h2>
              <p className="text-lg text-muted-foreground">
                Core competencies and tech stack
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.map((tech) => (
                <Card key={tech.label} className="p-6 hover-elevate transition-all" data-testid={`card-tech-${tech.label.toLowerCase()}`}>
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <tech.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{tech.label}</h3>
                      <p className="text-sm text-muted-foreground">{tech.category}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <Briefcase className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Experience</h2>
              </div>
              {experience.map((exp, idx) => (
                <Card key={idx} className="p-6" data-testid={`card-experience-${idx}`}>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg">{exp.role}</h3>
                      <p className="text-muted-foreground">{exp.company} • {exp.location}</p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Education</h2>
              </div>
              <Card className="p-6" data-testid="card-education-msc">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">MSc Computer Engineering</h3>
                  <p className="text-muted-foreground">University of Bridgeport</p>
                  <p className="text-sm text-muted-foreground">2024 – Present</p>
                  <div className="pt-2">
                    <p className="text-sm text-muted-foreground">Machine Learning, Deep Learning, LangChain, Web Development</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6" data-testid="card-education-btech">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">BTech</h3>
                  <p className="text-muted-foreground">JNTUH</p>
                  <p className="text-sm text-muted-foreground">2017-2021</p>
                  <div className="pt-2">
                    <p className="text-sm text-muted-foreground">Digital Logic Design, VLSI Systems, Microprocessors, VHDL</p>
                  </div>
                </div>
              </Card>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Certifications</h3>
                </div>
                <div className="space-y-2">
                  <Badge variant="secondary" className="text-xs">Game Development with Spring Boot</Badge>
                  <Badge variant="secondary" className="text-xs">Complete Networking Fundamentals (CCNA)</Badge>
                  <Badge variant="secondary" className="text-xs">VSD Physical Design Flow</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Chetan Chhetri</h3>
              <p className="text-sm text-muted-foreground">
                AI/ML Engineer & Full Stack Developer
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</a>
                <a href="#github" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
                <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Skills</a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Contact</h4>
              <div className="flex flex-col gap-2">
                <a href="mailto:cchhetri@my.bridgeport.edu" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  cchhetri@my.bridgeport.edu
                </a>
                <p className="text-sm text-muted-foreground">Connecticut, USA</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Social</h4>
              <div className="flex gap-3">
                <a href="https://github.com/Chetan-chhetri" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Github className="h-4 w-4" />
                  </Button>
                </a>
                <a href="https://linkedin.com/in/chetanchhetri" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 Chetan Chhetri. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
