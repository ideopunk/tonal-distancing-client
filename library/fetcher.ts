export default async function fetcher<T>(
	domain: string,
	method?: "POST" | "GET" | "PUT",
	body?: any
): Promise<T | { message: string }> {
	const response = await fetch(domain, {
		method: method || "GET",
		headers: {
			Accept: "application/json",
			"Accept-encoding": "gzip, deflate",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	});

	const rj = await response.json();
	return { message: rj.message };
}
