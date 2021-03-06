import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					{/* <meta charSet="UTF-8" /> */}
					<meta name="twitter:card" content="summary" />
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="website" />
					<meta name="theme-color" content="#F61E61" />

					<meta
						property="og:image"
						content="https://upload.wikimedia.org/wikipedia/commons/e/e6/Tom_Thomson_-_The_Jack_Pine_1916.jpg"
					/>

					<meta property="og:image:alt" content="Tom Thomson's Jack Pine, 1916" />
					<meta property="og:image:width" content="2604" />
					<meta property="og:image:height" content="2380" />

					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Murecho:wght@400;900&family=Noto+Serif&display=swap"
						rel="stylesheet"
					/>

					<link rel="icon" href="/sun.svg" />
				</Head>
				<body className="w-screen h-screen bg-white dark:bg-drac-black overflow-y-scroll scroll-smooth">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
