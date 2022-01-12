import { useEffect, useRef } from "react";

export default function Problem({ text, onLoad }: { text: string; onLoad: (n: number) => void }) {
	const ref = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		const offset = ref.current?.offsetTop;
		if (offset) {
			onLoad(offset);
		} else {
			console.log("that didn't work @ Problem.tsx");
		}
	}, []);

	return (
		<p
			ref={ref}
			className="my-2 whitespace-pre-line font-serif text-justify inline
                     dark:selection:bg-drac-white text-at-red dark:text-drac-red"
		>
			{text}
		</p>
	);
}
