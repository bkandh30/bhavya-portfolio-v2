export type ProjectItem = {
  name: string;
  summary?: string;
  stack: string[];
  links?: { github?: string; live?: string };
  bullets?: string[];
};

// Placeholder content for projects section
export const projects: ProjectItem[] = [
  {
    name: "URL Shortener Webapp",
    stack: ["Next.js 15", "TypeScript", "Turso", "Upstash Redis", "Tailwind", "Vercel", "CI/CD"],
    links: { github: "", live: "" },
    bullets: [
      "Feature-complete short links with analytics.",
      "Deployed on Vercel with CI/CD."
    ]
  },
  {
    name: "Metered API Server",
    stack: ["Rust", "Warp", "Tokio", "SQLx", "Postgres", "Docker", "OpenAPI"],
    bullets: ["Health probes and CI/CD."]
  },
  {
    name: "GoFlix API",
    stack: ["Go", "Postgres", "JWT", "Docker", "Metrics"],
    bullets: ["12+ endpoints, metrics hooks."]
  },
  {
    name: "AWS Cloud Resume Challenge",
    stack: ["S3", "CloudFront", "Route 53", "Lambda", "DynamoDB", "IaC", "CI/CD"]
  },
  {
    name: "Async Text Summarization Microservice",
    stack: ["FastAPI", "Docker", "Tortoise ORM", "NLTK", "Tests/CI"]
  }
];
