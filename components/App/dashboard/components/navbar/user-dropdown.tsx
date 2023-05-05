// Import
import React from "react";
import {UserButton} from "@clerk/nextjs";

export const UserDropdown = () => {
	return (
		<section className="p-[3px] rounded-full bg-pinkRedDash">
			<UserButton />
		</section>
	);
};
