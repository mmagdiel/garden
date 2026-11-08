export interface Note {
  slug: string;
  title: string;
  excerpt: string;
  category: "Mathematics" | "AI" | "Engineering";
  tags: string[];
  date: string;
  dateISO: string;
  readTime: string;
  imageLabel: string;
}

export const featured: Note & { author: string } = {
  slug: "the-ideological-clash-that-shaped-modern-ai",
  title: "The Ideological Clash That Shaped Modern AI",
  excerpt:
    "How a dispute over free will, a Russian novel, and a mathematician’s persistence gave rise to Markov Chains.",
  category: "Mathematics",
  tags: ["Markov Chains", "AI", "History"],
  date: "Oct 12, 2026",
  dateISO: "2026-10-12",
  readTime: "3 min read",
  imageLabel: "Markov Chains",
  author: "Magdiel Márquez",
};

export const notes: Note[] = [
  {
    slug: "bayes-rule-a-better-way-to-change-your-mind",
    title: "Bayes’ Rule: A Better Way to Change Your Mind",
    excerpt:
      "A practical intuition for updating beliefs when new evidence arrives.",
    category: "Mathematics",
    tags: ["Probability", "Bayesian thinking"],
    date: "Oct 8, 2026",
    dateISO: "2026-10-08",
    readTime: "3 min read",
    imageLabel: "Bayesian Thinking",
  },
  {
    slug: "embeddings-meaning-as-distance",
    title: "Embeddings: Meaning as Distance",
    excerpt:
      "Why turning words into vectors makes semantic search possible.",
    category: "AI",
    tags: ["Embeddings", "Search"],
    date: "Oct 5, 2026",
    dateISO: "2026-10-05",
    readTime: "4 min read",
    imageLabel: "Embeddings",
  },
  {
    slug: "idempotency-the-retry-safe-api",
    title: "Idempotency: The Retry-Safe API",
    excerpt:
      "One small design decision that keeps repeated requests from causing chaos.",
    category: "Engineering",
    tags: ["APIs", "Reliability"],
    date: "Sep 29, 2026",
    dateISO: "2026-09-29",
    readTime: "3 min read",
    imageLabel: "Idempotency",
  },
  {
    slug: "gradient-descent-one-small-step-at-a-time",
    title: "Gradient Descent, One Small Step at a Time",
    excerpt: "How a local slope guides a model toward a better answer.",
    category: "Mathematics",
    tags: ["Optimization", "Machine learning"],
    date: "Sep 24, 2026",
    dateISO: "2026-09-24",
    readTime: "4 min read",
    imageLabel: "Gradient Descent",
  },
  {
    slug: "rag-give-your-model-a-reference-desk",
    title: "RAG: Give Your Model a Reference Desk",
    excerpt:
      "Connecting language models to useful context, without retraining them.",
    category: "AI",
    tags: ["RAG", "LLMs"],
    date: "Sep 18, 2026",
    dateISO: "2026-09-18",
    readTime: "3 min read",
    imageLabel: "Retrieval + Generation",
  },
  {
    slug: "latency-budgets-before-optimization",
    title: "Latency Budgets Before Optimization",
    excerpt:
      "Trace where the milliseconds go before deciding what to make faster.",
    category: "Engineering",
    tags: ["Performance", "Systems"],
    date: "Sep 11, 2026",
    dateISO: "2026-09-11",
    readTime: "4 min read",
    imageLabel: "Latency Budgets",
  },
];

export const allNotes: Note[] = [featured, ...notes];

export const categories = ["Mathematics", "AI", "Engineering"].map((name) => ({
  name,
  count: allNotes.filter((n) => n.category === name).length,
}));
