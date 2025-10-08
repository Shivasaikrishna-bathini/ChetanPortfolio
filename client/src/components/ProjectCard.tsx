import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  techStack: string[];
}

export function ProjectCard({ id, title, description, category, image, techStack }: ProjectCardProps) {
  return (
    <Link href={`/project/${id}`}>
      <Card className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer" data-testid={`card-project-${id}`}>
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="text-xs" data-testid={`badge-category-${id}`}>
              {category}
            </Badge>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold tracking-tight" data-testid={`text-title-${id}`}>
              {title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2" data-testid={`text-description-${id}`}>
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {techStack.slice(0, 5).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex items-center text-sm text-primary font-medium pt-2">
            View Case Study
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
