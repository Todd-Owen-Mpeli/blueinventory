import Link from "next/link";
import {FunctionComponent} from "react";
import styles from "../../styles/components/Hero.module.scss";

interface IProps {
	title: string;
	subtitle: string;
	inUsersView: boolean;
	menuActive: boolean;
	backgroundImage: string;
}

const NavForthContent: FunctionComponent<IProps> = ({
	title,
	subtitle,
	menuActive,
	inUsersView,
	backgroundImage,
}) => {
	// Full Screen Nav Revealed Styling
	const nav: string = styles.nav;
	const navReveal: string = styles.navReveal;

	let contentStyling: string = `${nav} forthContent min-h-[100vh] flex flex-row justify-center item-center bg-darkOrange bg-cover bg-bottom bg-no-repeat`;

	return (
		<nav
			className={
				menuActive && inUsersView
					? `${navReveal} ${contentStyling}`
					: `hidden ${contentStyling}`
			}
			style={{
				backgroundImage: `url("/svg/backgroundSVG/backgroundWaveOne.svg")`,
			}}
		>
			<div className="w-full lg:w-[35%]">
				<ul className="header__menu">
					<li className="header__menu-item">
						<Link href="#">Works</Link>
					</li>
					<li className="header__menu-item">
						<Link href="#">News</Link>
					</li>
					<li className="header__menu-item">
						<Link href="#">About</Link>
					</li>
					<li className="header__menu-item">
						<Link href="#">Help</Link>
					</li>
					<li className="header__menu-item">
						<Link href="#">Contacts</Link>
					</li>
				</ul>
			</div>
			<div className="w-full lg:w-[65%] my-auto overflow-hidden p-4">
				<div className="container px-4 mx-auto">
					<div
						className="px-8 py-16 overflow-hidden bg-center bg-no-repeat bg-cover rounded-lg md:px-16"
						style={{
							backgroundImage: `url("${backgroundImage}")`,
						}}
					>
						<div className="max-w-lg">
							<h2 className="mb-6 text-4xl font-black tracking-tight text-white font-heading md:text-5xl">
								{title}
							</h2>
							<p className="mb-10 text-lg font-bold text-white">{subtitle}</p>
						</div>
						<div className="md:max-w-xl">
							<div className="flex flex-wrap -m-5">
								<div className="w-full p-5 md:w-1/2">
									<h3 className="mb-4 text-2xl font-black text-blue font-heading">
										65%
									</h3>
									<p className="text-sm font-bold text-white">
										Build with raw ingredients lorem ipsum dolor sit amet,
										consectetur adipiscing elit.
									</p>
								</div>
								<div className="w-full p-5 md:w-1/2">
									<h3 className="mb-4 text-2xl font-black text-blue font-heading">
										95%
									</h3>
									<p className="text-sm font-bold text-white">
										Build with raw ingredients lorem ipsum dolor sit amet,
										consectetur adipiscing elit.
									</p>
								</div>
								<div className="w-full p-5 md:w-1/2">
									<h3 className="mb-4 text-2xl font-black text-blue font-heading">
										14k+
									</h3>
									<p className="text-sm font-bold text-white">
										Build with raw ingredients lorem ipsum dolor sit amet,
										consectetur adipiscing elit.
									</p>
								</div>
								<div className="w-full p-5 md:w-1/2">
									<h3 className="mb-4 text-2xl font-black text-blue font-heading">
										1,000.000
									</h3>
									<p className="text-sm font-bold text-white">
										Build with raw ingredients lorem ipsum dolor sit amet,
										consectetur adipiscing elit.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavForthContent;
