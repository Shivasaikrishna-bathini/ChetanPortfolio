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
    techStack: ["YOLO", "ResNet", "OpenCV", "Docker", "FastAPI", "AWS", "GradCAM"],
    problem: "Manual pill counting in pharmacies is error-prone and time-consuming. Pharmacies need an automated solution for accurate medicine identification and counting.",
    approach: "Developed a pill counting application leveraging YOLO (v5-v12), ResNet, and attention modules for real-time video stream detection. Implemented multi-scale object detection and tracking algorithms with explainability tools like GradCAM.",
    architecture: "The system uses YOLO for object detection, ResNet for classification, OpenCV for video processing, and FastAPI for the backend service. Models are containerized with Docker and deployed on AWS with GPU support. Attention modules enhance detection accuracy.",
    results: "Raised detection accuracy from 76% to 91%, processing 10,000+ images monthly. Reduced pharmacy counting time by 75% and improved operational reliability by 25%. System processes 60 frames per second in real-time.",
    demoUrl: "https://codesandbox.io/s/smartmed-demo",
    figmaUrl: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/example",
    code: `import cv2
from ultralytics import YOLO
import numpy as np

# Load YOLO model
model = YOLO('pill_detection_v12.pt')

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
  },
  "sanskrit-transformer": {
    title: "Sanskrit Transformer",
    subtitle: "Optimized NLP Model for Ancient Sanskrit Vedic Texts",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
    category: "NLP",
    techStack: ["Transformers", "TensorRT", "CUDA", "cuDNN", "NLP", "Performance Optimization"],
    problem: "Processing ancient Sanskrit texts requires specialized NLP models with high performance and low latency. Traditional models struggle with the complex grammatical structure and limited vocabulary of Vedic Sanskrit.",
    approach: "Built and trained a custom Transformer-based NLP model with a 25,000-token vocabulary specifically designed for ancient Sanskrit Vedic texts. Leveraged NVIDIA GPUs, CUDA, cuDNN, and TensorRT for kernel-level optimizations to achieve production-grade performance.",
    architecture: "The architecture employs a custom Transformer model with specialized tokenization for Sanskrit. Model inference is optimized using TensorRT for GPU acceleration, with CUDA and cuDNN for matrix operations. Performance profiling ensures sub-75ms inference times.",
    results: "Reduced inference latency by 46% and boosted throughput by 39% through kernel-level optimization. Achieved sub-75ms inference times suitable for real-time applications. Successfully deployed production-grade pipeline for large-scale language processing.",
    demoUrl: "https://codesandbox.io/s/sanskrit-transformer-demo",
    figmaUrl: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/example",
    code: `import torch
from transformers import AutoTokenizer, AutoModel
import tensorrt as trt

# Load custom Sanskrit tokenizer
tokenizer = AutoTokenizer.from_pretrained(
    'sanskrit_vocab_25k'
)

# Load optimized model
model = AutoModel.from_pretrained(
    'sanskrit_transformer'
)

# TensorRT optimization
trt_model = trt.optimize(
    model,
    precision='fp16',
    max_batch_size=32
)

# Inference
text = "वेदानां सामवेदोऽस्मि"
inputs = tokenizer(text, return_tensors='pt')
outputs = trt_model(**inputs)

print(f"Inference time: {outputs.latency}ms")`
  },
  "time-series-forecasting": {
    title: "Time Series Forecasting",
    subtitle: "Advanced Financial Data Prediction System",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    category: "Machine Learning",
    techStack: ["ARIMA", "Prophet", "XGBoost", "MLflow", "Feature Engineering", "Financial Data"],
    problem: "Financial markets are highly volatile and unpredictable. Traditional forecasting methods fail during market swings, leading to poor investment decisions and significant financial losses.",
    approach: "Designed comprehensive time-series forecasting solutions combining ARIMA for trend analysis, Meta Prophet for seasonality, and XGBoost ensemble models for complex pattern recognition. Implemented automated feature engineering and reliability analysis using prediction intervals.",
    architecture: "The system employs a three-model ensemble: (1) ARIMA for baseline trends, (2) Meta Prophet for seasonal patterns, and (3) XGBoost for non-linear relationships. MLflow tracks experiments and deployments. Feature engineering pipeline processes 100,000+ monthly data points.",
    results: "Enhanced accuracy from 68% to 84% and reduced error by 31% during volatile market conditions. Successfully processed and analyzed 100,000+ monthly data points. Scalable deployment with MLflow enables rapid model iteration and A/B testing.",
    demoUrl: "https://codesandbox.io/s/timeseries-forecast-demo",
    figmaUrl: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/example",
    code: `import pandas as pd
from prophet import Prophet
from xgboost import XGBRegressor
from statsmodels.tsa.arima.model import ARIMA
import mlflow

# Load financial data
df = pd.read_csv('market_data.csv')

# ARIMA baseline
arima = ARIMA(df['price'], order=(5,1,0))
arima_model = arima.fit()

# Prophet for seasonality
prophet = Prophet()
prophet.fit(df[['ds', 'y']])

# XGBoost ensemble
xgb = XGBRegressor(n_estimators=100)
xgb.fit(X_train, y_train)

# MLflow tracking
with mlflow.start_run():
    mlflow.log_metric("accuracy", 0.84)
    mlflow.log_metric("error_reduction", 0.31)
    
predictions = ensemble_predict(arima_model, 
                               prophet, xgb, 
                               test_data)`
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated prismatic background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-500 to-blue-500 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-background/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <Button 
                variant="ghost" 
                className="gap-2 backdrop-blur-sm bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 hover:scale-105" 
                data-testid="button-back"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold">Back</span>
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-cyan-500/20 to-pink-500/20" />
        <div className="absolute inset-0 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        
        {/* Holographic overlay */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
          <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-br from-cyan-400 to-transparent animate-pulse-glow" />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-tr from-purple-400 to-transparent animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        </div>
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
            <div className="group relative rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 p-6 transition-all duration-500 hover:scale-[1.02]" data-testid="card-problem">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/20 to-purple-500/20" />
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_60px_rgba(0,255,255,0.1)]" />
              <h3 className="font-semibold text-lg mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent relative z-10">Problem</h3>
              <p className="text-sm text-muted-foreground relative z-10">{project.problem}</p>
            </div>
            <div className="group relative rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 p-6 transition-all duration-500 hover:scale-[1.02]" data-testid="card-approach">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_60px_rgba(255,0,255,0.1)]" />
              <h3 className="font-semibold text-lg mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative z-10">Approach</h3>
              <p className="text-sm text-muted-foreground relative z-10">{project.approach}</p>
            </div>
            <div className="group relative rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 p-6 transition-all duration-500 hover:scale-[1.02]" data-testid="card-results">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-pink-500/20 to-yellow-500/20" />
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_60px_rgba(255,255,0,0.1)]" />
              <h3 className="font-semibold text-lg mb-3 bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent relative z-10">Results</h3>
              <p className="text-sm text-muted-foreground relative z-10">{project.results}</p>
            </div>
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
