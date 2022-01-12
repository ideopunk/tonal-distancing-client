import Head from "next/head";
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import PointerSystem from "../components/PointerSystem";
import Problem from "../components/Problem";
import SubmissionForm from "../components/SubmissionForm";

type Run = { text: string; repeated: boolean };

export default function Home() {
	const [report, setReport] = useState<Run[]>([]);
	const [positions, setPositions] = useState<number[]>([]);

	function handleReport(runs: Run[]) {
		setPositions([]);
		setReport(runs);
	}

	const handleLoadProblem = useCallback((n: number) => {
		setPositions((pre) => {
			const latest = pre[pre.length - 1];
			if (n - latest < 150) return pre;
			return [...pre, n];
		});
	}, []);

	return (
		<div className="w-full h-full pb-8">
			<Head>
				<meta name="description" content="Find yr repetitive words" />
				<meta property="og:title" content="Tonal Distancing" />
				<meta property="og:description" content="Find yr repetitive words" />
			</Head>
			<aside className="flex flex-col items-center p-4 mb-2">
				<SubmissionForm handleReport={handleReport} />
			</aside>
			<main className="z-10 flex flex-col items-center w-full">
				<div className="w-[75ch] max-w-[85%] text-lg lg:text-2xl text-justify">
					{Boolean(report) &&
						report.map((run, i) =>
							run.repeated ? (
								<Problem
									key={run.text + i}
									text={run.text}
									onLoad={handleLoadProblem}
								/>
							) : (
								<span
									className={` my-2 text-black dark:text-drac-white whitespace-pre-line font-serif text-justify inline
										dark:selection:bg-drac-white`}
									key={run.text + i}
								>
									{run.text}
								</span>
							)
						)}
				</div>
			</main>

			<PointerSystem positions={positions} />
		</div>
	);
}
