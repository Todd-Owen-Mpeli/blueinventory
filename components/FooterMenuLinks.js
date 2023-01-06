import Link from "next/link";

const FooterMenuLinks = (props) => {
	return (
		<>
			<Link
				href={`${props?.link}`}
				className="mb-4 inline-block text-decoration-none text-black"
			>
				Enter {props?.text}
			</Link>
		</>
	);
};

export default FooterMenuLinks;
