import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import ArrowDownSvg from "../components/ArrowDownSvg";
import ArrowUpSvg from "../components/ArrowUpSvg";

export default function PointerSystem({ positions }: { positions: number[] }) {
	const [arrowPosition, setArrowPosition] = useState(0);

	useEffect(() => {
		if (positions) {
			setArrowPosition(0);
		}
	}, [positions]);

	function scrollTo(dir: "up" | "down") {
		if (dir === "down" && arrowPosition !== 0) {
			window.scrollTo({ top: positions[arrowPosition - 1] - 20 });
			setArrowPosition((a) => (a ? a - 1 : a));
		} else if (dir === "up" && arrowPosition !== positions.length - 1) {
			window.scrollTo({ top: positions[arrowPosition + 1] - 20 });
			setArrowPosition((a) => (a !== positions.length ? a + 1 : a));
		}
	}

	return (
		<>
			{/* POINTER */}
			{!!positions.length && (
				<div
					className="absolute text-at-red dark:text-drac-red flex justify-center w-full -rotate-90 h-8 right-[65ch]"
					style={{ top: positions[arrowPosition] }}
				>
					<ArrowDownSvg />
				</div>
			)}

			{/* SELECTORS */}
			<div className="flex lg:flex-col items-center fixed bottom-0 lg:bottom-8 left-2 w-full bg-opacity-80  lg:left-8">
				<button
					title="Jump to the previous clump"
					className="block w-8 h-8 hover:scale-125 transition-transform"
					onClick={() => scrollTo("down")}
				>
					<ArrowUpSvg />
				</button>
				<button
					title="Jump to the next clump"
					className="block w-8 h-8 hover:scale-125 transition-transform"
					onClick={() => scrollTo("up")}
				>
					<ArrowDownSvg />
				</button>
			</div>
		</>
	);
}
