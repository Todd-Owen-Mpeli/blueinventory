import Link from "next/link";
import Image from "next/image";
import {FunctionComponent} from "react";
import styles from "../../styles/components/Hero.module.scss";

interface IProps {
	menuActive: boolean;
	inUsersView: boolean;
}

const NavThirdContent: FunctionComponent<IProps> = ({
	inUsersView,
	menuActive,
}) => {
	// Full Screen Nav Revealed Styling
	const nav: string = styles.nav;
	const navReveal: string = styles.navReveal;

	let contentStyling: string = `${nav} thirdContent min-h-[100vh] flex justify-center item-center bg-darkBlue bg-cover bg-bottom bg-no-repeat`;

	return (
		<nav
			className={
				menuActive && inUsersView
					? `${navReveal} ${contentStyling}`
					: `hidden ${contentStyling}`
			}
			style={{
				backgroundImage: `url("/svg/backgroundSVG/backgroundHeroTriangles.svg")`,
			}}
		>
			<div className="w-full h-full lg:w-[35%]">
				<ul className="header__menu">
					<li>
						<Link href="#" className="text-white text-4xl">
							Works
						</Link>
					</li>
					<li>
						<Link href="#" className="text-white text-4xl">
							News
						</Link>
					</li>
					<li>
						<Link href="#" className="text-white text-4xl">
							About
						</Link>
					</li>
					<li>
						<Link href="#" className="text-white text-4xl">
							Help
						</Link>
					</li>
					<li>
						<Link href="#" className="text-white text-4xl">
							Contacts
						</Link>
					</li>
				</ul>
			</div>
			<div className="w-full my-auto bg-white flex flex-col justify-center items-center p-4">
				<section className="lg:flex lg:flex-col lg:items-center pt-24 lg:pt-0">
					<div className="lg:flex justify-between">
						<div className="mb-20 lg:mb-0">
							<span className="block mb-9 text-xs font-medium uppercase leading-4 text-gray-300 tracking-widest">
								How it works
							</span>
							<h2 className="mb-12 text-9xl md:text-10xl xl:text-11xl font-medium leading-none">
								Easy to use. Really
							</h2>
							<p className="2xl:pr-36 mb-16 lg:mb-20 text-xl lg:text-2xl leading-relaxed font-medium">
								Phasellus eget pretium mi, vestibulum lobortis neque. Nulla
								bibendum tempor velit, at hendrerit massa fringilla.
							</p>
							<div className="mb-12">
								<button
									className="py-5 px-10 mb-4 md:mb-0 mr-0 md:mr-5 w-full md:w-auto text-xl leading-none font-medium tracking-tighter bg-gray-50 hover:bg-gray focus:ring-2 focus:ring-gray-50 focus:ring-opacity-50 rounded-xl"
									type="button"
								>
									More
								</button>
								<button
									className="py-5 px-10 w-full md:w-auto text-xl leading-none text-white font-medium tracking-tighter bg-blue hover:bg-blue-600 focus:ring-2 focus:ring-blue focus:ring-opacity-50 rounded-xl"
									type="button"
								>
									Get started
								</button>
							</div>
							<p className="text-lg leading-6 text-darkBlue font-normal">
								Explore the plaftorm right here.
							</p>
						</div>
					</div>
					<div className="flex flex-wrap justify-between py-14">
						<div className="flex flex-col lg:flex-row py-10 px-8 xl:px-14 mb-2 rounded-lg">
							<div>
								<div className="relative inline-flex items-center justify-center mb-8 w-12 h-12 leading-6 text-white bg-blue rounded-full">
									<span className="text-2xl font-bold">1</span>
								</div>
							</div>
							<div className="lg:ml-4 xl:ml-12">
								<h2 className="mb-6 font-medium text-7xl leading-tight">
									Choose application
								</h2>
								<p className="lg:max-w-sm text-medium leading-6 text-darkBlue">
									The nulla commodo, commodo eros a tristique lectus.
								</p>
							</div>
						</div>
						<div className="flex flex-col lg:flex-row py-10 px-8 xl:px-14 mb-2 rounded-lg">
							<div>
								<div className="relative inline-flex items-center justify-center mb-8 w-12 h-12 leading-6 text-white bg-blue rounded-full">
									<span className="text-2xl font-bold">2</span>
								</div>
							</div>
							<div className="lg:ml-4 xl:ml-12">
								<h2 className="mb-6 font-medium text-7xl leading-tight">
									Feel free take all
								</h2>
								<p className="lg:max-w-sm text-medium leading-6 text-darkBlue">
									Proin nec nunc felis. In non tellus ultricies, rutrum lacus
									et, pharetra elit.
								</p>
							</div>
						</div>
						<div className="flex flex-col lg:flex-row py-10 px-8 xl:px-14 rounded-lg">
							<div>
								<div className="relative inline-flex items-center justify-center mb-8 w-12 h-12 leading-6 text-white bg-blue rounded-full">
									<span className="text-2xl font-bold">3</span>
								</div>
							</div>
							<div className="lg:ml-4 xl:ml-12">
								<h2 className="mb-6 font-medium text-7xl leading-tight">
									Download app
								</h2>
								<p className="lg:max-w-sm text-medium leading-6 text-darkBlue">
									Vestibulum ante ipsum primis in faucibus orci luctus et
									ultrices.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</nav>
	);
};

export default NavThirdContent;
