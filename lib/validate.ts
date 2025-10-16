export function isNonEmpty(str: unknown): str is string {
	return typeof str === "string" && str.trim().length > 0;
}

export function isValidUrl(url?: string): boolean {
	if (!url)
		return false;

	try {
		const u = new URL(url);
		return ["http:", "https:"].includes(u.protocol);
	} catch {
		return false;
	}
}