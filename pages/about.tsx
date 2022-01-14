import { ReactNode } from "react";
import Anchor from "../components/Anchor";
import Menu from "../components/Console";

function Section({ question, answer }: { question: ReactNode; answer: ReactNode }) {
	return (
		<div className="mb-12 max-w-[85%] md:max-w-screen-md lg:max-w-screen-lg">
			<h3
				className={`my-2 text-lg md:text-xl lg:text-3xl text-black dark:text-white whitespace-pre-line font-serif`}
			>
				{question}
			</h3>
			<p
				className={`my-2 text-base md:text-lg lg:text-2xl text-black dark:text-white whitespace-pre-line font-serif`}
			>
				{answer}
			</p>
		</div>
	);
}

export default function About() {
	return (
		<main className="z-10 flex flex-col items-center w-full pb-20">
			<h1 className="text-4xl lg:text-5xl font-serif pt-10">Tonal Distancing</h1>
			<div className="max-w-[75ch] lg:text-2xl flex flex-col pt-10">
				<Section
					question="What does this do?"
					answer="It highlights words you use repetitively in the file you've submitted! You can choose how many words ahead the program 'looks' for a duplicate. The program uses an internal stop-word list so you don't get yelled at for reusing 'the'."
				/>
				<Section
					question="Why?"
					answer="Firstly, because I wanted to practice coding in Rust. Secondly, because I only belatedly notice myself getting repetitive when writing fiction, and want help."
				/>
				<Section
					question="Can I see this code?"
					answer={
						<span>
							Yes! The server and CLI code is{" "}
							<Anchor href="https://github.com/ideopunk/tonal-distancing">
								here
							</Anchor>
							. You can download the CLI to use on your own. The code for this web
							page is{" "}
							<Anchor href="https://github.com/ideopunk/tonal-distancing-client">
								here
							</Anchor>
							.
						</span>
					}
				/>

				<Section
					question="Where is the stop-word list? Can I use my own?"
					answer={
						<span>
							The stop-word list is{" "}
							<Anchor href="https://github.com/ideopunk/tonal-distancing/blob/main/stop_words.txt">
								here
							</Anchor>
							{
								". You can with the CLI! If you'd like that feature in the website, ping me and I'll add it in sooner rather than later."
							}
						</span>
					}
				/>

				<Section
					question="Where do I contact you?"
					answer={
						<span>
							Give me a <em>shout</em> at{" "}
							<Anchor href="mailto:conorbarnes93@gmail.com" target={"_blank"}>
								conorbarnes93@gmail.com
							</Anchor>{" "}
							or on{" "}
							<Anchor href="https://twitter.com/ideopunk" target="_blank">
								Twitter
							</Anchor>
							.
						</span>
					}
				/>

				<Section
					question="Where did you get your dark theme?    "
					answer={
						<span>
							<Anchor href="https://draculatheme.com/" target={"_blank"}>
								Dracula
							</Anchor>
							{"!"}
						</span>
					}
				/>
			</div>
			<Menu positions={[]} />
		</main>
	);
}
