import { CodeBlock } from "../CodeBlock";

export default function CodeBlockExample() {
  const code = `from langchain.agents import Agent
from bongard_hoi import BongardModel

# Initialize the model
model = BongardModel()
agent = Agent(model=model)

# Detect interactions
results = agent.analyze(video_path)`;

  return (
    <div className="p-4 max-w-2xl">
      <CodeBlock
        code={code}
        language="python"
        title="agent_setup.py"
      />
    </div>
  );
}
