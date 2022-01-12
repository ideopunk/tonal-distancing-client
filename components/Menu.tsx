import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArrowDownSvg from "./ArrowDownSvg";
import ArrowUpSvg from "./ArrowUpSvg";
import MoonSvg from "./MoonSvg";
import QuestionMark from "./QuestionMark";
import SunSvg from "./SunSvg";

export default function Menu() {
	const router = useRouter();
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		console.log(process.env.NODE_ENV);
		setLoaded(true);
	}, []);

	const { theme, setTheme } = useTheme();

	return (
		<div className="flex flex-col lg:flex-row items-center fixed bottom-8 right-0 lg:right-8 z-10">
			{loaded && (
				<>
					{router.pathname.includes("about") ? (
						<Link href="/">
							<a className="mb-4 lg:mb-0 lg:mr-4 hover:scale-125 transition-transform w-5 h-5 lg:w-8 lg:h-8 -rotate-90">
								<ArrowUpSvg />
							</a>
						</Link>
					) : (
						<Link href="/about">
							<a className="w-5 h-5 lg:w-8 lg:h-8 mb-4 lg:mb-0 lg:mr-4 hover:scale-125 transition-transform">
								<QuestionMark />
							</a>
						</Link>
					)}
					<button
						title="Toggle theme"
						onClick={() => setTheme(theme === "light" ? "dark" : "light")}
						className="w-5 h-5 lg:w-8 lg:h-8 hover:scale-125 transition-transform"
					>
						{theme === "light" ? <SunSvg /> : <MoonSvg />}
					</button>
				</>
			)}
		</div>
	);
}
