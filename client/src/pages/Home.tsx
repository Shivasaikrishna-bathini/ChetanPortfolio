import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/ProjectCard";
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
  GraduationCap,
  Zap,
  Sparkles
} from "lucide-react";
import { SiPython, SiTensorflow, SiFastapi, SiAmazon, SiOpencv, SiPytorch, SiDocker, SiPostgresql } from "react-icons/si";

const projects = [
  {
    id: "motion-detector",
    title: "Motion Detector – Agentic AI System",
    description: "AI system leveraging Bongard-HOI model to detect human-object interactions in videos and images. Integrated DeepSeek R1 for reasoning and LangChain agents.",
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80",
    techStack: ["LangChain", "RAG", "FastAPI", "ChromaDB", "PyTorch", "HuggingFace", "OpenAI"]
  },
  {
    id: "personal-attorney",
    title: "Personal Attorney – Legal RAG Assistant",
    description: "LLM-based RAG System for personalized legal guidance. Vectorized user data and regulations using ChromaDB, served through FastAPI.",
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    techStack: ["LangChain", "FastAPI", "REST API", "ChromaDB", "DeepSeek", "AWS"]
  },
  {
    id: "smartmed-ai",
    title: "SmartMed AI – Pill Detection App",
    description: "YOLO-based real-time medicine classification tool. Developed pill counting application for pharmacies with real-time video stream detection.",
    category: "Computer Vision",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    techStack: ["YOLO", "OpenCV", "Python", "FastAPI", "Google Colab", "AWS"]
  }
];

const techStack = [
  { icon: SiPython, label: "Python", category: "Languages", color: "text-blue-400" },
  { icon: SiTensorflow, label: "TensorFlow", category: "AI/ML", color: "text-orange-400" },
  { icon: Code, label: "LangChain", category: "AI/ML", color: "text-green-400" },
  { icon: SiFastapi, label: "FastAPI", category: "Frameworks", color: "text-teal-400" },
  { icon: Database, label: "ChromaDB", category: "Database", color: "text-purple-400" },
  { icon: SiAmazon, label: "AWS", category: "Cloud", color: "text-yellow-500" },
  { icon: SiPytorch, label: "PyTorch", category: "AI/ML", color: "text-red-400" },
  { icon: SiOpencv, label: "OpenCV", category: "Computer Vision", color: "text-blue-500" },
  { icon: SiDocker, label: "Docker", category: "DevOps", color: "text-blue-400" },
  { icon: SiPostgresql, label: "PostgreSQL", category: "Database", color: "text-blue-600" },
  { icon: Cpu, label: "VHDL", category: "Hardware", color: "text-indigo-400" },
  { icon: Cloud, label: "EC2/S3", category: "Cloud", color: "text-orange-500" }
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
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTechClick = (e: React.MouseEvent<HTMLDivElement>, techName: string) => {
    const element = e.currentTarget;
    element.classList.add('animate-bounce');
    
    const ripple = document.createElement('div');
    ripple.className = 'absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 animate-ping';
    element.appendChild(ripple);
    
    setTimeout(() => {
      element.classList.remove('animate-bounce');
      ripple.remove();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-background to-background pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-yellow-500/20 via-background to-background pointer-events-none"></div>
      
      <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl animate-pulse-glow animate-blob pointer-events-none"></div>
      <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-yellow-500/30 rounded-full blur-3xl animate-pulse-glow animate-blob pointer-events-none" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow animate-blob pointer-events-none" style={{ animationDelay: '2s' }}></div>
      
      <header className="sticky top-0 z-50 border-b border-border backdrop-blur-xl bg-background/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl tracking-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Chetan Chhetri
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-2">
              <Button 
                variant="ghost" 
                className="rounded-full hover-elevate" 
                onClick={() => scrollToSection('about')}
                data-testid="button-nav-about"
              >
                About
              </Button>
              <Button 
                variant="ghost" 
                className="rounded-full hover-elevate" 
                onClick={() => scrollToSection('projects')}
                data-testid="button-nav-projects"
              >
                Projects
              </Button>
              <Button 
                variant="ghost" 
                className="rounded-full hover-elevate" 
                onClick={() => scrollToSection('skills')}
                data-testid="button-nav-skills"
              >
                Skills
              </Button>
              <Button 
                variant="ghost" 
                className="rounded-full hover-elevate" 
                onClick={() => window.open('/Chetan_Chhetri_Resume.pdf', '_blank')}
                data-testid="button-nav-resume"
              >
                Resume
              </Button>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <section id="about" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full relative z-10">
          <div className="space-y-12 text-center max-w-4xl mx-auto">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-blue-500 via-primary to-yellow-500 bg-clip-text text-transparent animate-gradient">
                  AI/ML Engineer
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Full Stack Developer
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Computer Engineering graduate specializing in AI/ML, RAG systems, computer vision, and cloud deployment. 
                Experienced in LangChain, TensorFlow, YOLO, and AWS.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2 hover:scale-105 transition-transform" onClick={() => scrollToSection('projects')} data-testid="button-view-projects">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 hover:scale-105 transition-transform" data-testid="button-contact">
                <Mail className="h-4 w-4" />
                Contact Me
              </Button>
            </div>
            <div className="flex justify-center items-center gap-4">
              <a href="https://github.com/Chetan-chhetri" target="_blank" rel="noopener noreferrer" data-testid="link-github">
                <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://linkedin.com/in/chetanchhetri" target="_blank" rel="noopener noreferrer" data-testid="link-linkedin">
                <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:cchhetri@my.bridgeport.edu" data-testid="link-email">
                <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 lg:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore my work in AI/ML, computer vision, and full-stack development
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 lg:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Skills & Technologies
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expertise across AI/ML, cloud platforms, and modern development tools
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
              </div>
              
              <div className="relative flex flex-wrap justify-center items-center gap-4 min-h-[400px]">
                {techStack.map((tech, index) => {
                  const angle = (index / techStack.length) * Math.PI * 2;
                  const radius = 180;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <div
                      key={tech.label}
                      className="absolute group animate-float"
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                        animationDelay: `${index * 0.2}s`,
                      }}
                    >
                      <div 
                        className="relative hover-elevate active-elevate-2 cursor-pointer transition-all duration-300 hover:scale-125"
                        data-testid={`card-tech-${tech.label.toLowerCase()}`}
                        onClick={(e) => handleTechClick(e, tech.label)}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-4 min-w-[100px] text-center overflow-hidden">
                          <div className="mb-2 flex justify-center">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:animate-spin-slow transition-transform group-active:scale-90">
                              <tech.icon className={`h-6 w-6 ${tech.color}`} />
                            </div>
                          </div>
                          <h3 className="font-semibold text-xs mb-1">{tech.label}</h3>
                          <p className="text-[10px] text-muted-foreground">{tech.category}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 pt-8">
              {techStack.map((tech, index) => (
                <div
                  key={tech.label}
                  className="group flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border hover-elevate transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  data-testid={`badge-tech-${tech.label.toLowerCase()}`}
                >
                  <tech.icon className={`h-4 w-4 ${tech.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-sm font-medium">{tech.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 relative z-10 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-primary/20">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Experience</h2>
              </div>
              {experience.map((exp, idx) => (
                <Card key={idx} className="p-6 hover-elevate transition-all hover:scale-105" data-testid={`card-experience-${idx}`}>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg">{exp.role}</h3>
                      <p className="text-muted-foreground">{exp.company} • {exp.location}</p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-2">
                          <Sparkles className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
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
                <div className="p-3 rounded-lg bg-gradient-to-br from-yellow-500/20 to-accent/20">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-3xl font-bold">Education</h2>
              </div>
              <Card className="p-6 hover-elevate transition-all hover:scale-105" data-testid="card-education-msc">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">MSc Computer Engineering</h3>
                  <p className="text-muted-foreground">University of Bridgeport</p>
                  <p className="text-sm text-muted-foreground">2024 – Present</p>
                  <div className="pt-2">
                    <p className="text-sm text-muted-foreground">Machine Learning, Deep Learning, LangChain, Web Development</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 hover-elevate transition-all hover:scale-105" data-testid="card-education-btech">
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
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Certifications</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="hover:scale-105 transition-transform cursor-pointer">Game Development with Spring Boot</Badge>
                  <Badge variant="secondary" className="hover:scale-105 transition-transform cursor-pointer">Networking Fundamentals (CCNA)</Badge>
                  <Badge variant="secondary" className="hover:scale-105 transition-transform cursor-pointer">VSD Physical Design Flow</Badge>
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
