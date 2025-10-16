"use client";

import { useEffect, useMemo, useState } from "react";

export function useActiveSection(ids: string[]) {
	const [active, setActive] = useState(ids[0] ?? "");

	const observer = useMemo(
		() =>
			new IntersectionObserver(
				(entries) => {
					for (const e of entries) {
						if (e.isIntersecting) {
							setActive(e.target.id);
						}
					}
				},
				{
					rootMargin: "0px 0px -70% 0px",
					threshold: [0, 0.3, 1]
				}
			),
		[]
	);

	useEffect(() => {
		const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
		
		els.forEach((el) => observer.observe(el));

		return () => {
			els.forEach((el) => observer.unobserve(el));
			observer.disconnect();
		};
	}, [ids, observer])

	return active;
}