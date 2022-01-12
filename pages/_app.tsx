import "../public/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Menu from "../components/Menu";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="UTF-8" />
				<link rel="icon" href="/sun.svg" />
			</Head>
			<ThemeProvider attribute="class">
				<Component {...pageProps} />
				<Menu />
			</ThemeProvider>
		</>
	);
}
export default MyApp;
