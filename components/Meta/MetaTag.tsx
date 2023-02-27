import Head from "next/head";
import {FunctionComponent} from "react";

interface IProps {
	title: string;
	seo: {
		canonical: string;
		cornerstone: Boolean;
		focuskw: string;
		fullHead: string;
		metaDesc: string;
		metaKeywords: string;
		metaRobotsNofollow: string;
		metaRobotsNoindex: string;
		opengraphAuthor: string;
		opengraphDescription: string;
		opengraphImage: {
			mediaItemUrl: string;
		};
		opengraphModifiedTime: string;
		opengraphPublishedTime: string;
		opengraphPublisher: string;
		opengraphSiteName: string;
		opengraphTitle: string;
		opengraphType: string;
		opengraphUrl: string;
		readingTime: number;
		title: string;
		twitterDescription: string;
		twitterTitle: string;
		twitterImage: {
			mediaItemUrl: string;
		};
	};
}

const MetaTag: FunctionComponent<IProps> = ({seo, title}) => {
	return (
		<Head>
			{/* <!-- Website Title --> */}
			<title key="title">{`${title} | Inventory Management Software`}</title>
			<meta name="description" content={seo?.metaDesc} />
			<link rel="icon" href="/img/Logos/BlueInventory favicon Two.png" />
			<meta
				name="robots"
				content={`${seo?.metaRobotsNoindex} , ${seo?.metaRobotsNofollow}`}
				key="metaRobots"
			/>
			<link rel="canonical" href={seo?.canonical} key="metaCanonical" />

			{/* OpenGraph */}
			<meta property="og:title" content={seo?.opengraphTitle} key="ogTitle" />
			<meta name="og:url" content={seo?.opengraphUrl} key="ogUrl" />
			<meta
				name="og:image"
				content={seo?.opengraphImage?.mediaItemUrl}
				key="ogImage"
			/>
			<meta
				name="image"
				property="og:image"
				content={seo?.opengraphImage?.mediaItemUrl}
				key="ogLinkedInImage"
			/>
			<meta
				name="og:description"
				content={seo?.opengraphDescription}
				key="ogDesc"
			/>

			{/* Twitter */}
			<meta
				name="twitter:title"
				content={seo?.twitterTitle}
				key="twitterTitle"
			/>
			<meta
				name="twitter:description"
				content={seo?.twitterDescription}
				key="twitterDesc"
			/>
			<meta
				name="twitter:image"
				content={seo?.twitterImage?.mediaItemUrl}
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
