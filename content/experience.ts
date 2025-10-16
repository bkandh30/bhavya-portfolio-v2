export type ExperienceItem = {
	company: string;
	title: string;
	start: string;
	end: string;
	bullets: string[];
	tags?: string[];
};

// Placeholder text for experience section
// Will change later
export const experience: ExperienceItem[] = [
	{
		company: "Ira A. Fulton Schools (ASU)",
		title: "Software Engineer",
		start: "Jun 2024",
		end: "Apr 2025",
		bullets: [
			"Built backend tooling in Python/C# and automated test pipelines.",
			"Improved grading workflow efficiency through automation.",
			"Led/assisted developer workshops."
		],
		tags: ["Python", "C#", "CI/CD"]
	},
	{
		company: "Ernst & Young (EY)",
		title: "Associate Software Engineer",
		start: "Sept 2021",
		end: "Jul 2023",
		bullets: [
			"Implemented IP enrichment and anomaly detection on AWS.",
			"Designed large-scale ETL and NLP clustering pipelines.",
			"Correlated NVD/CAPEC with MITRE ATT&CK for security insights."
		],
		tags: ["AWS", "ETL", "NLP"]
	}
];
