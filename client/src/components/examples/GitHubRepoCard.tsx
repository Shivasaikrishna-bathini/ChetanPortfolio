import { GitHubRepoCard } from "../GitHubRepoCard";

export default function GitHubRepoCardExample() {
  return (
    <div className="p-4 max-w-md">
      <GitHubRepoCard
        name="motion-detector-ai"
        description="Agentic AI system for human-object interaction detection using Bongard-HOI"
        stars={124}
        forks={23}
        language="Python"
        url="https://github.com/Chetan-chhetri/motion-detector"
      />
    </div>
  );
}
