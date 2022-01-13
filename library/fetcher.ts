import catcher from "./catcher";

export default async function fetcher<T>(
	domain: string,
	method?: "POST" | "GET" | "PUT",
	body?: BodyInit,
	docx?: boolean
): Promise<T | { message: string }> {
	try {
		const response = await fetch(domain, {
			method: method || "GET",
			mode: "cors",
			headers: {
				Accept: "application/json",
				"Accept-encoding": "gzip, deflate",
				"Content-Type": docx ? "application/msword" : "text/plain",
			},
			body,
		});

		const type = response.headers.get("content-type");
		if (typeof type === "string" && type.includes("text")) {
			const rt = await response.text();
			return { message: rt };
		}

		const rj = await response.json();

		if (typeof rj === "string") return { message: rj };

		return rj;
	} catch (e) {
		const err = catcher(e);
		return { message: err };
	}
}
