import { ReactNode } from "react";
import Anchor from "../components/Anchor";

function Section({ question, answer }: { question: ReactNode; answer: ReactNode }) {
	return (
		<div className="mb-12">
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
		</div>
	);
}

export default function About() {
	return (
		<main className="z-10 flex flex-col items-center w-full">
			<div className="max-w-[75ch] text-2xl text-justify pt-10">
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
							At{" "}
							<Anchor href="mailto:conorbarnes93@gmail.com" target={"_blank"}>
								conorbarnes93@gmail.com
							</Anchor>{" "}
							or on{" "}
							<Anchor href="twitter.com/ideopunk" target="_blank">
								Twitter
							</Anchor>
							.
						</span>
					}
				/>
			</div>
		</main>
	);
}
