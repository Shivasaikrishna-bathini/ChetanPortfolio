import { Link } from "wouter";
import { useState, useEffect } from "react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  techStack: string[];
}

export function ProjectCard({ id, title, description, category, image, techStack }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);

  const projectNumber = id.split('-').map((_, i) => i).reduce((a, b) => a + b, 0).toString().padStart(3, '0');
  
  const lines = [
    `> run ${title.toLowerCase().replace(/\s+/g, '_')}.py`,
    `Loading model... ████████ 100%`,
    `Status: Production Ready`,
    `Tech: [${techStack.slice(0, 3).join('] [')}]`,
    `$ view_details --verbose`
  ];

  useEffect(() => {
    setShowContent(true);
  }, []);

  useEffect(() => {
    if (showContent && lineIndex < lines.length) {
      const timer = setTimeout(() => {
        setLineIndex(lineIndex + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [showContent, lineIndex, lines.length]);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 600);
  };

  return (
    <Link href={`/project/${id}`} onClick={handleClick}>
      <div 
        className="group relative font-mono text-sm border-2 border-green-500/30 bg-black/90 p-6 transition-all duration-300 hover:border-green-500/60 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-testid={`card-project-${id}`}
      >
        <div className="text-green-500/80 mb-4 flex items-center justify-between">
          <span>┌─ [PROJECT_{projectNumber}] ────────────────┐</span>
        </div>
        
        <div className="space-y-2 min-h-[140px]">
          {lines.slice(0, lineIndex).map((line, i) => (
            <div key={i} className={`text-green-400 ${isClicked && i === lines.length - 1 ? 'animate-pulse' : ''}`}>
              │ {line}
              {i === lineIndex - 1 && isHovered && (
                <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse" />
              )}
            </div>
          ))}
        </div>

        <div className="text-green-500/80 mt-4">
          <span>└────────────────────────────────┘</span>
        </div>

        {isClicked && (
          <div className="absolute inset-0 bg-green-500/10 pointer-events-none animate-pulse" />
        )}
      </div>
    </Link>
  );
}
