import { ProjectCard } from "../ProjectCard";
import { Router } from "wouter";

export default function ProjectCardExample() {
  return (
    <Router>
      <div className="p-4 max-w-sm">
        <ProjectCard
          id="motion-detector"
          title="Motion Detector AI"
          description="AI system leveraging Bongard-HOI model to detect human-object interactions"
          category="AI/ML"
          image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
          techStack={["LangChain", "PyTorch", "FastAPI", "ChromaDB", "OpenAI"]}
        />
      </div>
    </Router>
  );
}
