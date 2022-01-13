import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import ArrowDownSvg from "./ArrowDownSvg";
import ArrowUpSvg from "./ArrowUpSvg";
import MoonSvg from "./MoonSvg";
import QuestionMark from "./QuestionMark";
import SunSvg from "./SunSvg";

export default function Menu({ positions }: { positions: number[] }) {
	const [arrowPosition, setArrowPosition] = useState(0);
	const router = useRouter();
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);
	}, []);

	const { theme, setTheme } = useTheme();

	useEffect(() => {
		if (positions) {
			setArrowPosition(0);
		}
	}, [positions]);

	function scrollTo(dir: "up" | "down") {
		if (dir === "down" && arrowPosition !== 0) {
			window.scrollTo({ top: positions[arrowPosition - 1] - 40 });
			setArrowPosition((a) => (a ? a - 1 : a));
		} else if (dir === "up" && arrowPosition !== positions.length - 1) {
			window.scrollTo({ top: positions[arrowPosition + 1] - 40 });
			setArrowPosition((a) => (a !== positions.length ? a + 1 : a));
		}
	}

	return (
		<div className="fixed bottom-0 py-2 px-6 lg:px-10  left-0 w-full flex justify-between backdrop-blur-sm lg:backdrop-blur-0 ">
			{/* SELECTORS */}
			<div className="flex lg:flex-col items-center lg:h-20 justify-between ">
				{!!positions.length && (
					<>
						<button
							title="Jump to the previous clump"
							className="block w-8 h-8 hover:scale-125 transition-transform mx-10 lg:mx-0"
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
					</>
				)}
			</div>
			<div className="flex lg:flex-col items-center lg:h-20 justify-between ">
				{loaded && (
					<>
						{router.pathname.includes("about") ? (
							<Link href="/">
								<a className="w-8 h-8  hover:scale-125 transition-transform -rotate-90">
									<ArrowUpSvg />
								</a>
							</Link>
						) : (
							<Link href="/about">
								<a className="w-8 h-8  hover:scale-125 transition-transform">
									<QuestionMark />
								</a>
							</Link>
						)}
						<button
							title="Toggle theme"
							onClick={() => setTheme(theme === "light" ? "dark" : "light")}
							className="w-8 h-8 hover:scale-125 transition-transform mx-10 lg:mx-0"
						>
							{theme === "light" ? <SunSvg /> : <MoonSvg />}
						</button>
					</>
				)}
			</div>
		</div>
	);
}
