export const mockData = {
  hero: {
    title: "Samvit Labs",
    subtitle: "End-to-End AI Solutions",
    description: "Transform your vision into reality with our comprehensive AI services—from data collection to model deployment."
  },
  services: [
    {
      id: "data-collection",
      title: "Data Collection",
      icon: "database",
      shortDesc: "High-quality, scalable data acquisition for AI training",
      fullDesc: "Our data collection services provide you with clean, diverse, and representative datasets tailored to your specific AI needs. We employ advanced web scraping, API integrations, IoT sensors, and crowdsourcing methodologies to gather data at scale.",
      features: [
        "Multi-source data aggregation from web, APIs, and IoT devices",
        "Real-time data streaming and batch processing capabilities",
        "Custom data collection pipelines with quality validation",
        "Compliance with GDPR, CCPA, and industry-specific regulations",
        "Scalable infrastructure handling millions of data points daily"
      ],
      benefits: "Reduce data acquisition time by 70% while ensuring quality and compliance."
    },
    {
      id: "data-labelling",
      title: "Data Labelling & Annotation",
      icon: "tag",
      shortDesc: "Precise annotation services for supervised learning",
      fullDesc: "Our expert annotation team delivers pixel-perfect labels for computer vision, NLP, and multimodal AI projects. We combine human expertise with AI-assisted tools to ensure accuracy and consistency at scale.",
      features: [
        "Image annotation: Bounding boxes, polygons, semantic segmentation",
        "Text annotation: Named entity recognition, sentiment analysis, intent classification",
        "Audio annotation: Transcription, speaker diarization, emotion tagging",
        "Video annotation: Object tracking, action recognition, scene understanding",
        "Quality assurance with multi-layer validation and inter-annotator agreement metrics"
      ],
      benefits: "Achieve 99.5% labeling accuracy with 3x faster turnaround times."
    },
    {
      id: "model-development",
      title: "Model Development",
      icon: "brain",
      shortDesc: "Custom AI models engineered for your unique challenges",
      fullDesc: "We design and train state-of-the-art machine learning models tailored to your business requirements. From classical ML to deep learning and foundation model fine-tuning, our engineers deliver production-ready solutions.",
      features: [
        "Architecture design: CNNs, Transformers, GANs, Reinforcement Learning",
        "Transfer learning and fine-tuning of foundation models (GPT, BERT, CLIP)",
        "Model optimization: Quantization, pruning, knowledge distillation",
        "Hyperparameter tuning with automated ML (AutoML) frameworks",
        "Explainability and interpretability analysis for regulated industries"
      ],
      benefits: "Deploy models that outperform industry benchmarks by 15-25%."
    },
    {
      id: "model-deployment",
      title: "Model Deployment & MLOps",
      icon: "rocket",
      shortDesc: "Seamless integration from development to production",
      fullDesc: "Our deployment services ensure your AI models run reliably at scale. We build robust MLOps pipelines with monitoring, versioning, and continuous improvement capabilities.",
      features: [
        "Cloud-agnostic deployment (AWS, Azure, GCP) and on-premise solutions",
        "Containerization with Docker and orchestration with Kubernetes",
        "Real-time inference APIs with <50ms latency and 99.9% uptime",
        "Model monitoring: Drift detection, performance tracking, anomaly alerts",
        "CI/CD pipelines for automated retraining and A/B testing"
      ],
      benefits: "Scale from prototype to production serving 1M+ requests daily."
    }
  ],
  capabilities: [
    {
      title: "Industry Expertise",
      items: ["Healthcare & Life Sciences", "Financial Services", "Retail & E-commerce", "Manufacturing & IoT", "Media & Entertainment"]
    },
    {
      title: "Technology Stack",
      items: ["PyTorch & TensorFlow", "Hugging Face Transformers", "AWS SageMaker & GCP Vertex AI", "MLflow & Kubeflow", "FastAPI & GraphQL"]
    },
    {
      title: "AI Specializations",
      items: ["Computer Vision", "Natural Language Processing", "Generative AI", "Predictive Analytics", "Reinforcement Learning"]
    }
  ],
  stats: [
    { label: "AI Models Deployed", value: 500, suffix: "+" },
    { label: "Data Points Processed", value: 10, suffix: "B+" },
    { label: "Accuracy Rate", value: 99.5, suffix: "%" },
    { label: "Client Satisfaction", value: 98, suffix: "%" }
  ],
  caseStudies: [
    {
      title: "Healthcare Diagnostics AI",
      client: "Global Health Network",
      challenge: "Automated medical image analysis for early disease detection",
      result: "95% diagnostic accuracy, reducing analysis time from hours to seconds"
    },
    {
      title: "Financial Fraud Detection",
      client: "Leading Banking Institution",
      challenge: "Real-time transaction monitoring and anomaly detection",
      result: "87% reduction in false positives, saving $12M annually"
    },
    {
      title: "Smart Manufacturing QA",
      client: "Industrial Equipment Manufacturer",
      challenge: "Automated quality inspection with computer vision",
      result: "99.8% defect detection rate, 60% cost reduction in QA processes"
    }
  ],
  testimonials: [
    {
      quote: "Samvit Labs transformed our data infrastructure and delivered models that exceeded our performance targets. Their end-to-end approach saved us months of development time.",
      author: "Sarah Chen",
      title: "CTO, HealthTech Innovations"
    },
    {
      quote: "The quality of their data labeling services is unmatched. We've seen a 40% improvement in our model accuracy since partnering with Samvit Labs.",
      author: "Michael Rodriguez",
      title: "Head of AI, FinServe Global"
    }
  ]
};

export const mockBookingSlots = [
  { date: "2025-08-15", time: "10:00 AM", available: true },
  { date: "2025-08-15", time: "2:00 PM", available: true },
  { date: "2025-08-16", time: "11:00 AM", available: false },
  { date: "2025-08-16", time: "3:00 PM", available: true },
  { date: "2025-08-17", time: "9:00 AM", available: true },
  { date: "2025-08-17", time: "1:00 PM", available: true }
];
