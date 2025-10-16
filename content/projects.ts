export type ProjectLink = { github?: string; live?: string };

export type ProjectItem = {
  slug: string;
  name: string;
  summary?: string;
  stack: string[];
  links?: ProjectLink;
  bullets?: string[];
  year?: string;
};

// Placeholder content for projects section
export const projects: ProjectItem[] = [
  {
    slug: "url-shortener-webapp",
    name: "URL Shortener Webapp",
    stack: ["Next.js 15", "TypeScript", "Turso", "Upstash Redis", "Tailwind", "Vercel", "CI/CD"],
    links: { github: "", live: "" },
    bullets: [
      "Feature-complete short links with analytics.",
      "Deployed on Vercel with CI/CD."
    ],
    year: "2025"
  },
  {
    slug: "metered-api-server",
    name: "Metered API Server",
    stack: ["Rust", "Warp", "Tokio", "SQLx", "Postgres", "Docker", "OpenAPI"],
    bullets: ["Health probes and CI/CD."],
    year: "2025"
  },
  {
    slug: "goflix-api",
    name: "GoFlix API",
    stack: ["Go", "Postgres", "JWT", "Docker", "Metrics"],
    bullets: ["12+ endpoints, metrics hooks."],
    year: "2025"
  },
  {
    slug: "aws-cloud-resume-challenge",
    name: "AWS Cloud Resume Challenge",
    stack: ["S3", "CloudFront", "Route 53", "Lambda", "DynamoDB", "IaC", "CI/CD"]
  },
  {
    slug: "async-text-summarization-microservice",
    name: "Async Text Summarization Microservice",
    stack: ["FastAPI", "Docker", "Tortoise ORM", "NLTK", "Tests/CI"]
  }
];
