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
			<div className="w-full lg:w-[65%] h-full flex flex-col justify-center items-center bg-white p-4">
				<div className="flex flex-wrap -mx-3">
					<div className="w-full px-3 mb-12 lg:w-1/3">
						<Link href="#">
							<Image
								width={550}
								height={550}
								className="object-cover w-full rounded h-[300px]"
								src="http://blueinventory.local/wp-content/uploads/2023/03/2019-Hungarian-Grand-Prix.jpg"
								alt=""
							/>
							<p className="flex mt-6 text-sm text-blue gap-x-2">
								<span>CATEGORY</span>
								<span className="text-darkGrey">24 Jan, 2020</span>
							</p>
							<h3 className="my-2 text-2xl font-bold font-heading">
								Lorem ipsum dolor sit amet.
							</h3>
							<p className="leading-loose text-darkGrey">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
								luctus eget justo et iaculis.
							</p>
						</Link>
					</div>
					<div className="w-full px-3 mb-12 lg:w-2/3">
						<Link href="#">
							<Image
								width={550}
								height={550}
								className="object-cover w-full rounded h-[300px]"
								src="http://blueinventory.local/wp-content/uploads/2023/03/pexels-jenda-kubes-13641535-scaled.jpg"
								alt=""
							/>
							<p className="flex mt-6 text-sm text-blue gap-x-2">
								<span>CATEGORY</span>
								<span className="text-darkGrey">24 Jan, 2020</span>
							</p>
							<h3 className="my-2 text-2xl font-bold font-heading">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</h3>
							<p className="leading-loose text-darkGrey">
								Aenean tempus orci eu est ultrices hendrerit. Fusce suscipit,
								leo a semper venenatis, felis urna pulvinar nibh, vitae porta
								erat risus sed mauris. Vestibulum vehicula leo eget libero
								eleifend.
							</p>
						</Link>
					</div>
					<div className="w-full px-3">
						<Link href="#" className="flex items-center justify-center gap-4">
							<Image
								width={550}
								height={550}
								className="object-cover w-full rounded h-[300px]"
								src="http://blueinventory.local/wp-content/uploads/2023/03/pexels-martin-tuithof-10105625-scaled.jpg"
								alt=""
							/>
							<div className="flex flex-col items-center justify-center">
								<p className="flex mt-6 text-sm text-blue gap-x-2">
									<span>CATEGORY</span>
									<span className="text-darkGrey">24 Jan, 2020</span>
								</p>
								<h3 className="my-2 text-2xl font-bold font-heading">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</h3>
								<p className="leading-loose text-darkGrey">
									Aenean tempus orci eu est ultrices hendrerit. Fusce suscipit,
									leo a semper venenatis, felis urna pulvinar nibh, vitae porta
									erat risus sed mauris. Vestibulum vehicula leo eget libero
									eleifend.
								</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavThirdContent;
