import Link from "next/link";

export default function ErrorPage() {
	return (
		<div className="w-full h-screen pb-8 flex justify-center items-center">
			<Link href="/">
				<a className="transition-colors hover:text-at-yellow dark:hover:text-drac-orange text-xl font-bold">
					Take me back, Clarence.{" "}
				</a>
			</Link>
		</div>
	);
}
