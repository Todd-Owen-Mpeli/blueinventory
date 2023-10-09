// Imports
import Image from "next/image";
import {FC, useState} from "react";
import {useFirebaseContext} from "@/context/Firebase";

// Components
import SignOutModal from "./SignOutModal";

const NavUserSignOut: FC = () => {
	const styling: string =
		"flex flex-col items-center justify-center gap-0 2xl:gap-2 2xl:gap-x-4 3xl:flex-row";
	const firebaseContext = useFirebaseContext();

	// Handles User Sign Out Modal
	const [revealSignOut, setRevealSignOut] = useState(false);

	const handleSignOut = () => {
		setRevealSignOut(true);
	};

	return (
		<>
			<div
				className={
					revealSignOut
						? styling + ` xl:justify-between`
						: styling + ` xl:justify-start`
				}
			>
				<button onClick={handleSignOut}>
					<Image
						width={500}
						height={500}
						id="avatarButton"
						data-dropdown-toggle="userDropdown"
						data-dropdown-placement="bottom-start"
						className="object-cover object-top min-w-10 min-h-10 w-10 h-10 transition-all duration-200 ease-in-out rounded-full cursor-pointer ring-[3px] ring-blue"
						src={
							firebaseContext?.userData?.photoURL
								? firebaseContext?.userData?.photoURL
								: `/img/Logos/default-avatar-profile.jpg`
						}
						alt={`${firebaseContext?.userData?.displayName} profile image`}
					/>
				</button>
				<div className="flex-col items-center justify-center hidden px-0 lg:flex">
					<div className={revealSignOut ? "block mt-4 2xl:mt-0" : "hidden"}>
						<SignOutModal
							isOpen={revealSignOut}
							onClose={() => setRevealSignOut(false)}
						/>
					</div>
					<div
						className={
							revealSignOut ? "hidden" : "mt-4 3xl:mt-0 flex gap-1 flex-col"
						}
					>
						<h3 className="font-bold text-center text-white text-tiny 3xl:text-left">
							{firebaseContext?.userData?.displayName}
						</h3>
						<span className="hidden text-xs text-center text-white xl:block 2xl:text-left">
							{firebaseContext?.userData?.email}
						</span>
					</div>
				</div>
				<div
					className={
						revealSignOut
							? "block px-4 mt-8 lg:hidden"
							: "block px-4 mt-0 lg:hidden"
					}
				>
					<SignOutModal
						isOpen={revealSignOut}
						onClose={() => setRevealSignOut(false)}
					/>
				</div>
			</div>
		</>
	);
};

export default NavUserSignOut;
