import { TechBadge } from "../TechBadge";
import { Brain, Code, Database } from "lucide-react";

export default function TechBadgeExample() {
  return (
    <div className="flex flex-wrap gap-2 p-4">
      <TechBadge icon={Brain} label="TensorFlow" />
      <TechBadge icon={Code} label="Python" />
      <TechBadge icon={Database} label="ChromaDB" />
    </div>
  );
}
