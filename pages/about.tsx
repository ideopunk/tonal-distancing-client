import { ReactNode } from "react";
import { useTheme } from "next-themes";
import MoonSvg from "../components/MoonSvg";
import SunSvg from "../components/SunSvg";

function Section({ question, answer }: { question: ReactNode; answer: ReactNode }) {
	return (
		<>
			<h3
				className={`my-2 text-3xl text-black dark:text-white whitespace-pre-line font-serif text-justify`}
			>
				{question}
			</h3>
			<p
				className={`my-2 text-2xl text-black dark:text-white whitespace-pre-line font-serif text-justify`}
			>
				{answer}
			</p>
		</>
	);
}

export default function About() {
	const { theme, setTheme } = useTheme();

	return (
		<main className="z-10 flex flex-col items-center w-full">
			<div className="max-w-[75ch] text-2xl text-justify pt-10">
				<Section
					question="uh"
					answer={
						<>
							<a
								className="hover:text-at-purple dark:hover:text-drac-orange transition-colors"
								href="https://github.com/ideopunk/tonal-distancing"
							>
								Server and CLI
							</a>
							<a
								className="hover:text-at-purple dark:hover:text-drac-orange transition-colors"
								href="https://github.com/ideopunk/tonal-distancing-client"
							>
								This web page
							</a>
						</>
					}
				/>
			</div>
			<button
				onClick={() => setTheme(theme === "light" ? "dark" : "light")}
				className="w-8 h-8 fixed bottom-8 right-8 z-10 hover:scale-125 transition-transform"
			>
				{theme === "light" ? <SunSvg /> : <MoonSvg />}
			</button>
		</main>
	);
}
