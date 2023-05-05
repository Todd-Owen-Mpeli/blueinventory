import {Dropdown, Text} from "@nextui-org/react";
import React, {useState} from "react";
import {AcmeIcon} from "../icons/acme-icon";
import {AcmeLogo} from "../icons/acmelogo";
import {BottomIcon} from "../icons/sidebar/bottom-icon";
import {Box} from "../styles/box";
import {Flex} from "../styles/flex";

interface Company {
	name: string;
	location: string;
	logo: React.ReactNode;
}

export const CompaniesDropdown = () => {
	const [company, setCompany] = useState<Company>({
		name: "MponjoliMpeliApartments",
		location: "Dar Es Salaam, TZ",
		logo: <AcmeIcon />,
	});
	return (
		<Dropdown placement="bottom-right" borderWeight={"extrabold"}>
			<Dropdown.Trigger css={{cursor: "pointer"}}>
				<div className="flex flex-row items-center justify-between gap-4 overflow-hidden">
					{/* {company.logo} */}
					<div>
						<h3 className="m-0 mb-[0.5] font-normal leading-relaxed tracking-wider text-white text-medium">
							{company.name}
						</h3>
						<span className="text-sm font-normal tracking-wider text-white">
							{company.location}
						</span>
					</div>
					<BottomIcon />
				</div>
			</Dropdown.Trigger>
			<Dropdown.Menu
				onAction={(e) => {
					if (e === "1") {
						setCompany({
							name: "Facebook",
							location: "San Fransico, CA",
							logo: <AcmeIcon />,
						});
					}
					if (e === "2") {
						setCompany({
							name: "Instagram",
							location: "Austin, Tx",
							logo: <AcmeLogo />,
						});
					}
					if (e === "3") {
						setCompany({
							name: "Twitter",
							location: "Brooklyn, NY",
							logo: <AcmeIcon />,
						});
					}
					if (e === "4") {
						setCompany({
							name: "Acme Co.",
							location: "Palo Alto, CA",
							logo: <AcmeIcon />,
						});
					}
				}}
				aria-label="Avatar Actions"
				css={{
					$$dropdownMenuWidth: "340px",
					$$dropdownItemHeight: "60px",
					"& .nextui-dropdown-item": {
						py: "$2",
						// dropdown item left icon
						svg: {
							color: "$secondary",
							mr: "$4",
						},
						// dropdown item title
						"& .nextui-dropdown-item-content": {
							w: "100%",
							fontWeight: "$semibold",
						},
					},
				}}
			>
				<Dropdown.Section title="Companies">
					<Dropdown.Item
						key="1"
						icon={<AcmeIcon />}
						description="San Fransico, CA"
					>
						Facebook
					</Dropdown.Item>
					<Dropdown.Item key="2" icon={<AcmeLogo />} description="Austin, Tx">
						Instagram
					</Dropdown.Item>
					<Dropdown.Item key="3" icon={<AcmeIcon />} description="Brooklyn, NY">
						Twitter
					</Dropdown.Item>
					<Dropdown.Item
						key="4"
						icon={<AcmeIcon />}
						description="Palo Alto, CA"
					>
						Acme Co.
					</Dropdown.Item>
				</Dropdown.Section>
			</Dropdown.Menu>
		</Dropdown>
	);
};
