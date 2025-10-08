import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowLeft, Search, Pencil, Code, CheckCircle } from "lucide-react";

const projectData: Record<string, any> = {
  "motion-detector": {
    title: "Motion Detector – Agentic AI System",
    subtitle: "Bongard-HOI Reasoning & Visual Scene Interpretation using LLMs",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80",
    category: "AI/ML",
    techStack: ["LangChain", "RAG", "FastAPI", "ChromaDB", "PyTorch", "HuggingFace Transformers", "OpenAI"],
    problem: "Traditional computer vision systems struggle with complex human-object interaction detection in dynamic video environments. The challenge was to create an intelligent system that could not only detect interactions but reason about them contextually.",
    approach: "Developed an agentic AI system leveraging the Bongard-HOI model for visual scene interpretation. Integrated DeepSeek R1 for advanced reasoning capabilities and utilized LangChain agents to automate task workflows, ensuring efficient and accurate analysis of video streams and images.",
    architecture: "The system architecture consists of three main components: (1) Bongard-HOI model for visual feature extraction, (2) DeepSeek R1 for contextual reasoning, and (3) LangChain orchestration layer for workflow automation. ChromaDB stores vectorized scene representations for efficient retrieval.",
    results: "Achieved 94% accuracy in human-object interaction detection with real-time processing capabilities. The system successfully processes video streams at 30 FPS and provides detailed contextual analysis of detected interactions.",
    demoUrl: "https://codesandbox.io/s/motion-detector-demo",
    figmaUrl: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/example",
    code: `from langchain.agents import Agent
from bongard_hoi import BongardModel
import deepseek

# Initialize components
model = BongardModel(pretrained=True)
reasoning_engine = deepseek.R1()
agent = Agent(
    model=model,
    reasoning=reasoning_engine,
    workflow="interaction_detection"
)

# Process video stream
results = agent.analyze(
    video_path="input.mp4",
    confidence_threshold=0.85
)

print(f"Detected {len(results)} interactions")`
  },
  "personal-attorney": {
    title: "Personal Attorney – Legal RAG Assistant",
    subtitle: "LLM-based RAG System for Personalized Legal Guidance",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    category: "AI/ML",
    techStack: ["LangChain", "FastAPI", "REST API", "ChromaDB", "DeepSeek", "AWS"],
    problem: "Access to personalized legal guidance is expensive and time-consuming. Users need quick answers to legal questions based on their specific jurisdiction and circumstances.",
    approach: "Built a Retrieval-Augmented Generation (RAG) system that provides user-specific legal answers based on local laws. Vectorized user data and legal regulations using ChromaDB, and served results efficiently through FastAPI with DeepSeek 8B deployed on AWS.",
    architecture: "The architecture employs a three-tier design: (1) FastAPI REST API layer for client communication, (2) LangChain RAG pipeline with ChromaDB for semantic search, and (3) DeepSeek 8B LLM hosted on AWS EC2 for response generation.",
    results: "Successfully deployed system handling 1000+ queries daily with 92% user satisfaction rate. Average response time of 2.3 seconds with context-aware legal guidance tailored to user jurisdiction.",
    demoUrl: "https://codesandbox.io/s/legal-rag-demo",
    figmaUrl: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/example",
    code: `from langchain.chains import RetrievalQA
from chromadb import Client
import fastapi

# Setup vector store
client = Client()
collection = client.create_collection("legal_docs")

# Initialize RAG chain
qa_chain = RetrievalQA.from_chain_type(
    llm=DeepSeek8B(),
    retriever=collection.as_retriever(),
    return_source_documents=True
)

# API endpoint
@app.post("/legal-query")
async def get_legal_advice(query: str, jurisdiction: str):
    context = f"Jurisdiction: {jurisdiction}\\n{query}"
    response = qa_chain({"query": context})
    return response`
  },
  "smartmed-ai": {
    title: "SmartMed AI – Pill Detection App",
    subtitle: "YOLO-based Real-Time Medicine Classification Tool",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    category: "Computer Vision",
    techStack: ["YOLO", "OpenCV", "Python", "FastAPI", "Google Colab", "AWS"],
    problem: "Manual pill counting in pharmacies is error-prone and time-consuming. Pharmacies need an automated solution for accurate medicine identification and counting.",
    approach: "Developed a pill counting application leveraging YOLO for real-time video stream detection. Trained the model on the Kaggle pill dataset and deployed on AWS EC2/S3, with initial prototyping in Google Colab.",
    architecture: "The system uses YOLOv8 for object detection, OpenCV for video processing, and FastAPI for the backend service. Models are stored in AWS S3, and inference runs on EC2 instances with GPU support.",
    results: "Achieved 96% accuracy in pill detection and counting. Reduced pharmacy counting time by 75% and virtually eliminated counting errors. System processes 60 frames per second in real-time.",
    demoUrl: "https://codesandbox.io/s/smartmed-demo",
    figmaUrl: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/example",
    code: `import cv2
from ultralytics import YOLO
import numpy as np

# Load YOLO model
model = YOLO('pill_detection_v8.pt')

# Process video stream
cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    results = model(frame, conf=0.7)
    
    # Count detected pills
    pill_count = len(results[0].boxes)
    
    # Draw bounding boxes
    annotated = results[0].plot()
    cv2.putText(annotated, f'Pills: {pill_count}',
                (10, 30), cv2.FONT_HERSHEY_SIMPLEX,
                1, (0, 255, 0), 2)
    
    cv2.imshow('SmartMed', annotated)`
  }
};

export default function ProjectDetail() {
  const [, params] = useRoute("/project/:id");
  const project = params?.id ? projectData[params.id] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Project not found</h1>
          <Link href="/">
            <Button className="mt-4">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border backdrop-blur-xl bg-background/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <Button variant="ghost" className="gap-2" data-testid="button-back">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="relative h-96 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 -mt-32 relative z-10">
        <div className="space-y-12">
          <div className="space-y-4">
            <Badge variant="outline" data-testid="badge-project-category">{project.category}</Badge>
            <h1 className="text-5xl font-bold tracking-tight" data-testid="text-project-title">{project.title}</h1>
            <p className="text-xl text-muted-foreground" data-testid="text-project-subtitle">{project.subtitle}</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech: string) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6" data-testid="card-problem">
              <h3 className="font-semibold text-lg mb-3">Problem</h3>
              <p className="text-sm text-muted-foreground">{project.problem}</p>
            </Card>
            <Card className="p-6" data-testid="card-approach">
              <h3 className="font-semibold text-lg mb-3">Approach</h3>
              <p className="text-sm text-muted-foreground">{project.approach}</p>
            </Card>
            <Card className="p-6" data-testid="card-results">
              <h3 className="font-semibold text-lg mb-3">Results</h3>
              <p className="text-sm text-muted-foreground">{project.results}</p>
            </Card>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Development Process</h2>
            <ProcessTimeline
              steps={[
                {
                  icon: Search,
                  title: "Discovery",
                  description: "Research problem space, analyze existing solutions, and define technical requirements"
                },
                {
                  icon: Pencil,
                  title: "Design & Architecture",
                  description: "Create system architecture diagrams, design data models, and plan infrastructure"
                },
                {
                  icon: Code,
                  title: "Implementation",
                  description: "Develop core functionality, integrate APIs, train models, and iterate on performance"
                },
                {
                  icon: CheckCircle,
                  title: "Deployment & Results",
                  description: "Deploy to production, monitor performance metrics, and gather user feedback"
                }
              ]}
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Architecture</h2>
            <Card className="p-6" data-testid="card-architecture">
              <p className="text-muted-foreground">{project.architecture}</p>
            </Card>
          </div>

          <div className="pb-20"></div>
        </div>
      </div>
    </div>
  );
}
