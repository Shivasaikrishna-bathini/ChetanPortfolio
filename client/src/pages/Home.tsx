import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/ProjectCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Sparkles as SparklesComponent } from "@/components/Sparkles";
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
import { 
  SiPython, 
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiTensorflow, 
  SiPytorch, 
  SiOpencv, 
  SiScikitlearn,
  SiKeras,
  SiNumpy,
  SiPandas,
  SiFastapi,
  SiFlask,
  SiReact,
  SiNodedotjs,
  SiDocker, 
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiAmazon,
  SiGit,
  SiPostman
} from "react-icons/si";

// TODO: UPDATE PROJECT DETAILS BELOW
// Update project titles, descriptions, images, tech stacks, and add GitHub/live links
const projects = [
  {
    id: "motion-detector",
    title: "Motion Detector – Agentic AI System",
    description: "AI system leveraging Bongard-HOI model to detect human-object interactions in videos and images. Integrated DeepSeek R1 for reasoning and LangChain agents.",
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80",
    techStack: ["LangChain", "RAG", "FastAPI", "ChromaDB", "PyTorch", "HuggingFace", "OpenAI"]
    // TODO: Add githubUrl: "https://github.com/yourusername/project-repo"
    // TODO: Add liveUrl: "https://your-project-demo.com" (if applicable)
  },
  {
    id: "personal-attorney",
    title: "Personal Attorney – Legal RAG Assistant",
    description: "LLM-based RAG System for personalized legal guidance. Vectorized user data and regulations using ChromaDB, served through FastAPI.",
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    techStack: ["LangChain", "FastAPI", "REST API", "ChromaDB", "DeepSeek", "AWS"]
    // TODO: Add githubUrl: "https://github.com/yourusername/project-repo"
    // TODO: Add liveUrl: "https://your-project-demo.com" (if applicable)
  },
  {
    id: "smartmed-ai",
    title: "SmartMed AI – Pill Detection App",
    description: "YOLO-based real-time medicine classification tool. Developed pill counting application for pharmacies with real-time video stream detection.",
    category: "Computer Vision",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    techStack: ["YOLO", "OpenCV", "Python", "FastAPI", "Google Colab", "AWS"]
    // TODO: Add githubUrl: "https://github.com/yourusername/project-repo"
    // TODO: Add liveUrl: "https://your-project-demo.com" (if applicable)
  }
];

const techStack = [
  { icon: SiPython, label: "Python", category: "Languages", color: "text-blue-400" },
  { icon: SiJavascript, label: "JavaScript", category: "Languages", color: "text-yellow-400" },
  { icon: SiTypescript, label: "TypeScript", category: "Languages", color: "text-blue-500" },
  { icon: SiCplusplus, label: "C++", category: "Languages", color: "text-blue-600" },
  { icon: SiTensorflow, label: "TensorFlow", category: "AI/ML", color: "text-orange-400" },
  { icon: SiPytorch, label: "PyTorch", category: "AI/ML", color: "text-red-400" },
  { icon: Code, label: "LangChain", category: "AI/ML", color: "text-green-400" },
  { icon: SiScikitlearn, label: "Scikit-Learn", category: "AI/ML", color: "text-orange-500" },
  { icon: SiKeras, label: "Keras", category: "AI/ML", color: "text-red-600" },
  { icon: SiOpencv, label: "OpenCV", category: "Computer Vision", color: "text-blue-500" },
  { icon: SiNumpy, label: "NumPy", category: "Data Science", color: "text-blue-300" },
  { icon: SiPandas, label: "Pandas", category: "Data Science", color: "text-purple-400" },
  { icon: SiFastapi, label: "FastAPI", category: "Frameworks", color: "text-teal-400" },
  { icon: SiFlask, label: "Flask", category: "Backend", color: "text-gray-400" },
  { icon: SiReact, label: "React", category: "Frontend", color: "text-blue-400" },
  { icon: SiNodedotjs, label: "Node.js", category: "Backend", color: "text-green-600" },
  { icon: Database, label: "ChromaDB", category: "Database", color: "text-purple-400" },
  { icon: SiPostgresql, label: "PostgreSQL", category: "Database", color: "text-blue-600" },
  { icon: SiMysql, label: "MySQL", category: "Database", color: "text-blue-500" },
  { icon: SiMongodb, label: "MongoDB", category: "Database", color: "text-green-500" },
  { icon: SiAmazon, label: "AWS", category: "Cloud", color: "text-yellow-500" },
  { icon: Cloud, label: "EC2/S3", category: "Cloud", color: "text-orange-500" },
  { icon: SiDocker, label: "Docker", category: "DevOps", color: "text-blue-400" },
  { icon: SiGit, label: "Git", category: "Tools", color: "text-orange-500" },
  { icon: SiPostman, label: "Postman", category: "Tools", color: "text-orange-600" },
  { icon: Cpu, label: "VHDL", category: "Hardware", color: "text-indigo-400" }
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
      <SparklesComponent />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-background to-background pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-yellow-500/20 via-background to-background pointer-events-none"></div>
      
      <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl animate-pulse-glow animate-blob pointer-events-none"></div>
      <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-yellow-500/30 rounded-full blur-3xl animate-pulse-glow animate-blob pointer-events-none" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow animate-blob pointer-events-none" style={{ animationDelay: '2s' }}></div>
      
      <header className="sticky top-0 z-50 border-b border-border backdrop-blur-xl bg-background/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-2xl tracking-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                CC
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
              {/* TODO: UPDATE RESUME PDF PATH - currently set to '/Chetan_Chhetri_Resume.pdf' */}
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
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full relative z-10">
          <div className="space-y-12 text-center max-w-5xl mx-auto">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none">
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500 bg-clip-text text-transparent animate-gradient">
                    CHETAN CHHETRI
                  </span>
                </h1>
              </div>
              <div className="space-y-3">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  AI/ML Engineer & Full Stack Developer
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Computer Engineering graduate specializing in AI/ML, RAG systems, computer vision, and cloud deployment. 
                  Experienced in LangChain, TensorFlow, YOLO, and AWS.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2 hover:scale-105 transition-transform" onClick={() => scrollToSection('projects')} data-testid="button-view-projects">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 hover:scale-105 transition-transform" onClick={() => scrollToSection('connect')} data-testid="button-contact">
                <Mail className="h-4 w-4" />
                Contact Me
              </Button>
            </div>
            {/* TODO: UPDATE GITHUB AND LINKEDIN LINKS BELOW */}
            <div className="flex justify-center items-center gap-4">
              {/* TODO: Change GitHub username - currently set to 'Chetan-chhetri' */}
              <a href="https://github.com/Chetan-chhetri" target="_blank" rel="noopener noreferrer" data-testid="link-github">
                <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              {/* TODO: Change LinkedIn username - currently set to 'chetanchhetri' */}
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
            
            <div className="flex flex-wrap justify-center gap-3">
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

      {/* TODO: UPDATE CONTACT LINKS BELOW - GitHub and LinkedIn */}
      <section id="connect" className="py-20 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Let's Connect
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <Card className="p-8 hover-elevate transition-all hover:scale-105" data-testid="card-contact-email">
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-primary/20 flex items-center justify-center">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <a 
                      href="mailto:cchhetri@my.bridgeport.edu" 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-email"
                    >
                      cchhetri@my.bridgeport.edu
                    </a>
                  </div>
                </div>
              </Card>

              {/* TODO: Change GitHub username below - currently set to 'Chetan-chhetri' */}
              <Card className="p-8 hover-elevate transition-all hover:scale-105" data-testid="card-contact-github">
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-primary/20 flex items-center justify-center">
                    <Github className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">GitHub</h3>
                    <a 
                      href="https://github.com/Chetan-chhetri" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-github"
                    >
                      @Chetan-chhetri
                    </a>
                  </div>
                </div>
              </Card>

              {/* TODO: Change LinkedIn username below - currently set to 'chetanchhetri' */}
              <Card className="p-8 hover-elevate transition-all hover:scale-105" data-testid="card-contact-linkedin">
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500/20 to-accent/20 flex items-center justify-center">
                    <Linkedin className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">LinkedIn</h3>
                    <a 
                      href="https://linkedin.com/in/chetanchhetri" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-linkedin"
                    >
                      Chetan Chhetri
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            <div className="pt-8">
              <a href="mailto:cchhetri@my.bridgeport.edu">
                <Button size="lg" className="gap-2" data-testid="button-send-message">
                  <Mail className="h-4 w-4" />
                  Send me a message
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm font-semibold">Chetan Chhetri</p>
              <p className="text-xs text-muted-foreground">AI/ML Engineer & Full Stack Developer</p>
            </div>
            <div className="text-center text-xs text-muted-foreground">
              <p>© 2024 Chetan Chhetri. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
