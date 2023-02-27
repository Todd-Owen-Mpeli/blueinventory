import Link from "next/link";
import {FunctionComponent} from "react";

interface IProps {
	text: string;
	link: string;
}

const FooterMenuLinks: FunctionComponent<IProps> = ({text, link}) => {
	return (
		<>
			<Link
				href={`${link}`}
				className="mb-4 inline-block text-decoration-none text-black"
			>
				Enter {text}
			</Link>
		</>
	);
};

export default FooterMenuLinks;
