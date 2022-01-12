import { AnchorHTMLAttributes, HTMLAttributes } from "react";

export default function Anchor(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
	return (
		<a
			{...props}
			className={`text-at-red hover:text-at-purple dark:hover:text-drac-orange transition-colors
            ${props.className}
        `}
		>
			{props.children}
		</a>
	);
}
