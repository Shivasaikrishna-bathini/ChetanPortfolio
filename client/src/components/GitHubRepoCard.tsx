import { Card } from "@/components/ui/card";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface GitHubRepoCardProps {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
}

export function GitHubRepoCard({ name, description, stars, forks, language, url }: GitHubRepoCardProps) {
  return (
    <Card className="p-6 hover-elevate active-elevate-2 transition-all" data-testid={`card-repo-${name}`}>
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1 flex-1">
            <h3 className="font-semibold text-lg" data-testid={`text-repo-name-${name}`}>{name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2" data-testid={`text-repo-description-${name}`}>
              {description}
            </p>
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid={`link-repo-${name}`}
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4" />
            <span data-testid={`text-stars-${name}`}>{stars}</span>
          </div>
          <div className="flex items-center gap-1">
            <GitFork className="h-4 w-4" />
            <span data-testid={`text-forks-${name}`}>{forks}</span>
          </div>
          <Badge variant="outline" className="text-xs">
            {language}
          </Badge>
        </div>
      </div>
    </Card>
  );
}
