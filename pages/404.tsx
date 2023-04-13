// Import
import Head from "next/head";
import ErrorPage from "../components/Elements/ErrorPage";
import {getFooterMenuLinks} from "../functions/MenuLinks";
import {getThemesOptionsContent} from "../functions/themesOptions";
import Footer from "../components/Footer";

const noPageExits = ({footerMenuLinks, themesOptionsContent}: any) => {
	return (
		<>
			<Head>
				<title>404 Page Not Found | Inventory Management Software</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/img/Logo.png" />
			</Head>

			<main>
				<ErrorPage
					title={themesOptionsContent?.errorPageContent?.title}
					paragraph={themesOptionsContent?.errorPageContent?.paragraph}
					buttonLink={themesOptionsContent?.errorPageContent?.buttonLink}
					backgroundImage={
						themesOptionsContent?.errorPageContent?.backgroundImage?.sourceUrl
					}
				/>
			</main>
		</>
	);
};

export default noPageExits;

export async function getStaticProps() {
	const footerMenuLinks: object = await getFooterMenuLinks();
	const themesOptionsContent: object = await getThemesOptionsContent();

	return {
		props: {
			footerMenuLinks,
			themesOptionsContent,
		},
		revalidate: 60,
	};
}
