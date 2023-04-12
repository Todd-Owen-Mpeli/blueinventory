import {FC} from "react";
import Link from "next/link";

interface FooterProps {
	email: string;
	phoneNumber: string;
	phoneNumberTwo: string;
	twitterLink: string;
	facebookLink: string;
	linkedinLink: string;
	copyRightText: string;

	// Menu Links
	footerMenuLinks: [
		{
			node: {
				id: string;
				url: string;
				label: string;
			};
		}
	];
}

const Footer: FC<FooterProps> = ({
	email,
	phoneNumber,
	phoneNumberTwo,
	twitterLink,
	facebookLink,
	linkedinLink,
	footerMenuLinks,
	copyRightText,
}) => {
	return <section className="py-20 bg-darkerBlueTwo"></section>;
};

export default Footer;
