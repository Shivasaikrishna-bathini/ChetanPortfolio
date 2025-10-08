import { ProcessTimeline } from "../ProcessTimeline";
import { Search, Pencil, Code, CheckCircle } from "lucide-react";

export default function ProcessTimelineExample() {
  return (
    <div className="p-4 max-w-2xl">
      <ProcessTimeline
        steps={[
          {
            icon: Search,
            title: "Discovery",
            description: "Research and analyze the problem space, gather requirements"
          },
          {
            icon: Pencil,
            title: "Design",
            description: "Create wireframes and architecture diagrams"
          },
          {
            icon: Code,
            title: "Implementation",
            description: "Build and iterate on the solution"
          },
          {
            icon: CheckCircle,
            title: "Results",
            description: "Deploy and measure outcomes"
          }
        ]}
      />
    </div>
  );
}
