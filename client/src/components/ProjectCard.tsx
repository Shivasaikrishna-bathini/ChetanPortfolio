import { useState, useRef } from "react";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  techStack: string[];
}

export function ProjectCard({ id, title, description, category, image, techStack }: ProjectCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const getGradientAngle = () => {
    const centerX = 50;
    const centerY = 50;
    const angle = Math.atan2(mousePosition.y - centerY, mousePosition.x - centerX) * (180 / Math.PI);
    return angle;
  };

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:scale-[1.02]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`card-project-${id}`}
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(20px)',
        border: '2px solid transparent',
        backgroundImage: isHovered 
          ? `linear-gradient(${getGradientAngle()}deg, rgba(255, 0, 255, 0.3), rgba(0, 255, 255, 0.3), rgba(255, 255, 0, 0.3), rgba(255, 0, 255, 0.3))`
          : 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        backgroundClip: 'padding-box, border-box',
        backgroundOrigin: 'padding-box, border-box'
      }}
    >
      {/* Rainbow gradient border */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(${getGradientAngle()}deg, #ff00ff, #00ffff, #ffff00, #ff00ff)`,
          padding: '2px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude'
        }}
      />

      {/* Holographic reflection */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.8) 0%, transparent 50%)`,
          mixBlendMode: 'overlay'
        }}
      />

      {/* Prismatic overlay */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(${getGradientAngle() + 45}deg, 
            rgba(255, 0, 128, 0.3) 0%, 
            rgba(128, 0, 255, 0.3) 25%, 
            rgba(0, 128, 255, 0.3) 50%, 
            rgba(0, 255, 128, 0.3) 75%, 
            rgba(255, 255, 0, 0.3) 100%)`,
        }}
      />

      {/* Inner glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_60px_rgba(255,255,255,0.1)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <Badge 
            variant="outline" 
            className="text-xs backdrop-blur-sm bg-white/10 border-white/20"
            data-testid={`badge-category-${id}`}
          >
            {category}
          </Badge>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-tight text-foreground" data-testid={`text-title-${id}`}>
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3" data-testid={`text-description-${id}`}>
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge 
              key={tech} 
              variant="secondary" 
              className="text-xs backdrop-blur-sm bg-white/5 border border-white/10"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Dynamic shadow simulation */}
      <div 
        className="absolute -inset-4 -z-10 opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-2xl"
        style={{
          background: `radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, 
            rgba(139, 92, 246, 0.4), 
            rgba(59, 130, 246, 0.3), 
            transparent 70%)`
        }}
      />
    </div>
  );
}
