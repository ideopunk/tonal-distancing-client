import "../public/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="UTF-8" />
				<link rel="icon" href="/images/sun.svg" />
			</Head>
			<ThemeProvider attribute="class">
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
export default MyApp;
