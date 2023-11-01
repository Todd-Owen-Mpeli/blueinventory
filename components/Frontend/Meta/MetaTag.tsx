// Imports
import Head from "next/head";
import {useContentContext} from "@/context/context";

const MetaTag = () => {
	const context = useContentContext();

	return (
		<Head>
			{/* Website Title */}
			<title key="title">{`${context?.seo?.title} | Inventory Management Software`}</title>
			<meta name="description" content={context?.seo?.metaDesc} />
			{/* Website Icon */}
			<link rel="icon" href="/img/Logos/BlueInventory favicon Two.png" />
			{/* Meta Robots */}
			<meta
				name="robots"
				content={`${context.seo?.metaRobotsNoindex} , ${context?.seo?.metaRobotsNofollow}`}
				key="metaRobots"
			/>
			<link
				rel="canonical"
				href={context?.seo?.canonical}
				key="metaCanonical"
			/>

			{/* OpenGraph */}
			<meta
				property="og:title"
				content={context?.seo?.opengraphTitle}
				key="ogTitle"
			/>
			<meta name="og:url" content={context?.seo?.opengraphUrl} key="ogUrl" />
			<meta
				name="og:image"
				content={context?.seo?.opengraphImage?.mediaItemUrl}
				key="ogImage"
			/>
			<meta
				name="image"
				property="og:image"
				content={context?.seo?.opengraphImage?.mediaItemUrl}
				key="ogLinkedInImage"
			/>
			<meta
				name="og:description"
				content={context?.seo?.opengraphDescription}
				key="ogDesc"
			/>

			{/* Twitter */}
			<meta
				name="twitter:title"
				content={context.seo?.twitterTitle}
				key="twitterTitle"
			/>
			<meta
				name="twitter:description"
				content={context.seo?.twitterDescription}
				key="twitterDesc"
			/>
			<meta
				name="twitter:image"
				content={context.seo?.twitterImage?.mediaItemUrl}
				key="twitterImage"
			/>
			<meta
				name="twitter:card"
				content="summary_large_image"
				key="twitterCard"
			/>
		</Head>
	);
};

export default MetaTag;
