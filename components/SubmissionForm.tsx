import { FormEvent, useEffect, useRef, useState } from "react";
import fetcher from "../library/fetcher";

type Run = { text: string; repeated: boolean };

// domain
const domain =
	process.env.NODE_ENV !== "development"
		? "http://localhost:8000"
		: "https://tonal-distancing-production.up.railway.app";

export default function SubmissionForm({ handleReport }: { handleReport: (runs: Run[]) => void }) {
	const [loading, setLoading] = useState(false);
	const [selectedFile, setSelectedFile] = useState<File>();
	const [lookaheadLength, setLookaheadLength] = useState<number | string>(50);
	const ref = useRef<HTMLInputElement>(null);

	useEffect(() => {
		// ref.current?.setSelectionRange(10, 10);
	}, []);
	function handleLookAhead(prenum: string) {
		if (prenum.includes(".")) return;

		const num = Number(prenum);
		const roundedNum = Math.round(num);

		if (roundedNum > 1000) return;

		if (roundedNum > 0) {
			setLookaheadLength(roundedNum);
		} else {
			setLookaheadLength("");
		}
	}

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();
		if (selectedFile) {
			setLoading(true);
			handleReport([]);
			const formFile = new FormData();
			formFile.append("file", selectedFile);
			const res = await fetcher<Run[]>(
				`${domain}/report?lookahead=${lookaheadLength}`,
				"POST",
				selectedFile
			);

			console.log(res);
			if ("message" in res) {
				handleReport([{ text: res.message, repeated: true }]);
			} else {
				handleReport(res);
			}
			setLoading(false);
		} else {
			handleReport([{ text: "Please pick a file.", repeated: true }]);
		}
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col items-center">
			<label className="invisible" htmlFor="fileinput">
				Upload File
			</label>
			<input
				id="fileinput"
				name="fileinput"
				type="file"
				onChange={(e) => {
					if (e.target.files) {
						setSelectedFile(e.target.files[0]);
					}
				}}
				className="file:border-0 file:bg-at-pink dark:file:bg-drac-green dark:file:text-drac-black  file:rounded-full hover:file:underline file:p-3 file:font-bold file:opacity-90 hover:file:opacity-100 transition-opacity file:w-full file:cursor-pointer"
			/>

			<p aria-label="Selected file name" className="mt-6">
				{selectedFile?.name}
			</p>

			<label
				className={`flex justify-between 
					dark:text-drac-black 
						border-0 opacity-90 hover:opacity-100 transition-all
						font-sans font-bold py-3  rounded-full w-full px-6 hover:underline focus:no-underline
						 dark:bg-drac-yellow cursor-pointer bg-at-ice	
						`}
			>
				Lookahead Length
				<input
					ref={ref}
					type="number"
					value={lookaheadLength}
					min={1}
					max={1000}
					step={1}
					onClick={() => ref.current?.select()}
					onChange={(e) => handleLookAhead(e.currentTarget.value)}
					className="bg-transparent font-bold w-2/5 text-right outline-none focus:underline h-6 selection:bg-at-ice dark:selection:bg-drac-purple"
				/>
			</label>
			<label htmlFor="submit" className="invisible">
				{loading ? "Just a sec..." : "Submit"}
			</label>
			<input
				type="submit"
				id="submit"
				value={loading ? "Just a sec..." : "Submit"}
				name="submit"
				disabled={loading}
				className={`block 
							dark:text-drac-black 
								border-0 opacity-90 hover:opacity-100 transition-all
								font-sans font-bold p-3 px-4 rounded-full w-full 
								hover:underline cursor-pointer 
								${
									loading
										? "bg-at-yellow dark:bg-drac-orange animate-pulse hover:no-underline"
										: "bg-at-blue dark:bg-drac-purple"
								}
								`}
			/>
		</form>
	);
}
