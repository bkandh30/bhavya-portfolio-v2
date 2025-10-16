export type EducationItem = {
	school: string;
	degree: string;
	dates: string;
	notes?: string[];
};

//Education Section with Placeholder text
export const education: EducationItem[] = [
	{
		school: "Arizona State University",
		degree: "MS, Computer Science",
		dates: "Aug 2023 - May 2025",
		notes: ["GPA: 3.93", "Selected coursework: Distributed Systems, Cloud, etc."]
	},
	{
		school: "Amity University",
		degree: "B.Tech Computer Science & Engineering",
		dates: "July 2017 -  2021",
		notes: ["GPA: 8.17", "Selected coursework: Theory of Computation etc."]
	}
];