// Imports
import Head from "next/head";
import {useContentContext} from "@/context/context";

const MetaTag = () => {
	const content = useContentContext();

	return (
		<Head>
			{/* Website Title */}
			<title key="title">{`${content.seo.title} | Inventory Management Software`}</title>
			<meta name="description" content={content.seo?.metaDesc} />
			{/* Website Icon */}
			<link rel="icon" href="/img/Logos/BlueInventory favicon Two.png" />
			{/* Meta Robots */}
			<meta
				name="robots"
				content={`${content.seo?.metaRobotsNoindex} , ${content.seo?.metaRobotsNofollow}`}
				key="metaRobots"
			/>
			<link rel="canonical" href={content.seo?.canonical} key="metaCanonical" />

			{/* OpenGraph */}
			<meta
				property="og:title"
				content={content.seo?.opengraphTitle}
				key="ogTitle"
			/>
			<meta name="og:url" content={content.seo?.opengraphUrl} key="ogUrl" />
			<meta
				name="og:image"
				content={content.seo?.opengraphImage?.mediaItemUrl}
				key="ogImage"
			/>
			<meta
				name="image"
				property="og:image"
				content={content.seo?.opengraphImage?.mediaItemUrl}
				key="ogLinkedInImage"
			/>
			<meta
				name="og:description"
				content={content.seo?.opengraphDescription}
				key="ogDesc"
			/>

			{/* Twitter */}
			<meta
				name="twitter:title"
				content={content.seo?.twitterTitle}
				key="twitterTitle"
			/>
			<meta
				name="twitter:description"
				content={content.seo?.twitterDescription}
				key="twitterDesc"
			/>
			<meta
				name="twitter:image"
				content={content.seo?.twitterImage?.mediaItemUrl}
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
