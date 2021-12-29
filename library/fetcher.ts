export default async function fetcher<T>(
	domain: string,
	method?: "POST" | "GET" | "PUT",
	file?: FormData
): Promise<T | { message: string }> {
	try {
		const response = await fetch(domain, {
			method: method || "GET",
			mode: "cors",
			headers: {
				Accept: "application/json",
				"Accept-encoding": "gzip, deflate",
				"Content-Type": "text/plain",
			},
			body: file
		});

		const rj = await response.json();
		console.log(rj);
		return rj;
	} catch (e: any) {
		console.log(e);
		return { message: e.message };
	}
}
