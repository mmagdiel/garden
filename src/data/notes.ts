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
  eyebrow: string;
  lede: string;
  sidebarSummary: string;
  topics: string[];
  body: string[];
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
  eyebrow: "Mathematics / History of AI",
  lede: "A dispute over free will. A Russian novel. A new way to describe uncertainty. The surprising story behind Markov Chains.",
  sidebarSummary:
    "From ideological debate to mathematical proof — and the technology that followed.",
  topics: ["Mathematics", "Probability", "History of AI"],
  body: [
    "In the early 20th century, Russia was undergoing intense political and philosophical debates. While the Tsarist regime was trying to maintain control, tension was rising among academics and intellectuals. At the center of this atmosphere was a heated dispute between Pavel Nekrasov, a conservative mathematician who supported free will, and Andrey Markov, an atheist mathematician opposing religious dogmas.",
    "Nekrasov believed that the Law of Large Numbers required independent events to work, arguing that human decisions must be free and independent for statistics to predict social behavior. However, Markov set out to prove him wrong. At a specific moment in 1906, Markov was searching for a mathematical model to show that dependent events could also reach predictability.",
    "The decisive moment arrived through literature. While Markov was analyzing the sequence of letters in Alexander Pushkin's novel Eugene Onegin, he discovered a fascinating pattern. The probability of finding a vowel depends directly on whether the previous letter was a consonant or a vowel. While he was counting thousands of vowels and consonants by hand, he created the concept of 'Markov Chains.'",
    "Finally, Markov published his proof, defeated Nekrasov's ideological argument, and established a revolutionary theory. This mathematical breakthrough showed that future outcomes depend only on the present state, not on the entire history. Today, this exact principle powers modern technology: Large Language Models (LLMs) use Markovian probability to predict the next most likely word in a sentence, proving how a political and scientific debate in Tsarist Russia laid the foundations for modern artificial intelligence.",
  ],
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
    eyebrow: "Mathematics / Probability",
    lede: "Bayes’ rule is less a formula than a habit of thought: start with what you believe, weigh the evidence, and update in proportion to how surprising that evidence is.",
    sidebarSummary:
      "A working intuition for priors, likelihoods, and honest belief updates.",
    topics: ["Mathematics", "Probability"],
    body: [
      "Most of us update our beliefs badly: we anchor on a first impression and treat new evidence as noise. Bayes’ rule gives us a disciplined alternative — a way to ask, for every piece of evidence, how much more likely it is under one explanation than another.",
      "The practical move is simple: write down your prior, ask what you would expect to see if you were wrong, and then actually look. You rarely need the arithmetic — the discipline of asking the question does most of the work.",
    ],
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
    eyebrow: "AI / Representations",
    lede: "Embeddings compress meaning into geometry. Once words live in a vector space, similarity becomes distance — and search becomes arithmetic.",
    sidebarSummary:
      "How vector representations turn ‘similar meaning’ into ‘nearby points’.",
    topics: ["AI", "Embeddings", "Search"],
    body: [
      "Keyword search fails the moment your words differ from the document’s. Search for ‘canine’ and you miss every page that only says ‘dog’. Embeddings fix this by mapping text into a space where related meanings cluster together.",
      "Once your documents are vectors, retrieval is just a nearest-neighbor lookup — the same geometry that powers semantic search, recommendations, and retrieval-augmented generation.",
    ],
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
    eyebrow: "Engineering / API Design",
    lede: "Networks fail in the worst possible way: after the work is done but before the confirmation arrives. Idempotency is what lets you retry without fear.",
    sidebarSummary:
      "Why ‘safe to retry’ is a property you design in, not a bug you patch later.",
    topics: ["Engineering", "APIs", "Reliability"],
    body: [
      "Every distributed system eventually asks the same question: did that request actually go through? If a timeout means maybe, the only safe response is to try again — and that is only safe if repeating the request can’t charge the card twice or create duplicate records.",
      "The pattern is cheap to adopt: give each operation a unique key, store the result of the first execution, and return it on replay. One database constraint turns a whole class of retry bugs into a no-op.",
    ],
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
    eyebrow: "Mathematics / Optimization",
    lede: "You don’t need to see the whole landscape to find the valley — you only need to know which way is downhill from where you stand.",
    sidebarSummary:
      "The humble idea — follow the local slope — that trains every modern model.",
    topics: ["Mathematics", "Optimization", "Machine learning"],
    body: [
      "Gradient descent is almost embarrassingly simple: measure the slope of your error at the current point, take a small step in the opposite direction, repeat. There is no global plan — only a sequence of local improvements.",
      "What makes it remarkable is that this greedy local rule, run billions of times, is sufficient to train the largest models ever built. The lesson generalizes: a good local rule, applied relentlessly, often beats a clever global strategy you can’t afford to compute.",
    ],
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
    eyebrow: "AI / LLM Systems",
    lede: "A language model knows what was in its training data — nothing more. RAG fixes that by letting it look things up before it speaks.",
    sidebarSummary:
      "Retrieve first, generate second: grounding answers in your own documents.",
    topics: ["AI", "RAG", "LLMs"],
    body: [
      "Retrieval-augmented generation splits the problem in two. First, find the handful of documents relevant to the question — usually with embeddings and vector search. Then, hand those documents to the model as context and let it write the answer.",
      "The result is a system that can cite fresh, private, or niche sources without a single gradient update. When the answer is wrong, you can debug the retrieval — a much friendlier failure mode than a hallucinated fact baked into weights.",
    ],
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
    eyebrow: "Engineering / Performance",
    lede: "Every request has a budget. Spend it blindly and you’ll optimize the wrong thing; trace it first and the bottleneck names itself.",
    sidebarSummary:
      "A budget turns ‘make it faster’ into a concrete allocation problem.",
    topics: ["Engineering", "Performance", "Systems"],
    body: [
      "A latency budget starts with the number users actually feel — say, 200ms — and divides it across the stages of a request: DNS, TLS, server work, database queries, rendering. Until you do the division, every optimization is a guess.",
      "The exercise pays off immediately. Teams routinely discover their ‘slow API’ is actually fast and the time is vanishing in an unindexed query or a chatty third-party call. Measure first, then optimize — the budget tells you where the milliseconds went.",
    ],
  },
];

export const allNotes: Note[] = [featured, ...notes];

export const categories = ["Mathematics", "AI", "Engineering"].map((name) => ({
  name,
  count: allNotes.filter((n) => n.category === name).length,
}));

const byDateAsc = (a: Note, b: Note) => a.dateISO.localeCompare(b.dateISO);
const byDateDesc = (a: Note, b: Note) => b.dateISO.localeCompare(a.dateISO);

/** Numbered oldest → newest, so the newest note is NOTE 007. */
export function noteNumber(note: Note): string {
  const ordered = [...allNotes].sort(byDateAsc);
  return String(ordered.indexOf(note) + 1).padStart(3, "0");
}

/**
 * Related notes: prefer same-category peers, fill the rest by recency,
 * then display the selection newest-first.
 */
export function relatedNotes(note: Note, count = 3): Note[] {
  const others = allNotes.filter((n) => n.slug !== note.slug);
  const sameCategory = others
    .filter((n) => n.category === note.category)
    .sort(byDateDesc);
  const rest = others
    .filter((n) => n.category !== note.category)
    .sort(byDateDesc);
  return [...sameCategory, ...rest].slice(0, count).sort(byDateDesc);
}
