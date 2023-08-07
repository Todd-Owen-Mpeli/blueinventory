// Imports
import {Readable} from "stream";
import {NextApiRequest, NextApiResponse} from "next";
import {SitemapStream, streamToPromise} from "sitemap";

// Queries
import {getAllPagesSlugs} from "@/functions/Frontend/graphql/Queries/GetAllPagesSlugs";
import {getAllIndustriesPageSlugs} from "@/functions/Frontend/graphql/Queries/GetAllIndustriesPageSlugs";
import {getAllOperationalInsightsPostsSlugs} from "@/functions/Frontend/graphql/Queries/GetAllOperationalInsightsPostsSlugs";

const sitemap = async (req: NextApiRequest, res: NextApiResponse) => {
	const [pagesSlugs, industriesSlugs, operationalInsightsSlugs] =
		await Promise.all([
			getAllPagesSlugs(),
			getAllIndustriesPageSlugs(),
			getAllOperationalInsightsPostsSlugs(),
		]);

	/* Pages & Operational Insights & 
	Industries Pages Arrays */
	const pagesLinks: any = [];
	const OperationalInsightsLinks: any = [];
	const industriesLinks: any = [];
	const signInAndSignUpLinks: any = [
		{
			url: `sign-in`,
			changefreq: "monthly",
			lastmod: `2023-06-08T18:45:02.000Z`,
			priority: 0.8,
		},
		{
			url: `sign-up`,
			changefreq: "monthly",
			lastmod: `2023-06-08T18:45:02.000Z`,
			priority: 0.8,
		},
	];

	// Pages Dynamic Links
	pagesSlugs?.map((keys: any) => {
		const object = {
			url: `${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		pagesLinks.push(object);
	});

	// Industries Pages Dynamic Links
	industriesSlugs?.map((keys: any) => {
		const object = {
			url: `/industries/${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		industriesLinks.push(object);
	});

	// Operational Insights Dynamic Links
	operationalInsightsSlugs?.map((keys: any) => {
		const object = {
			url: `/operational-insights/${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		OperationalInsightsLinks.push(object);
	});

	// Arrays with your all dynamic links
	const allLinks: any = [
		...pagesLinks,
		...industriesLinks,
		...signInAndSignUpLinks,
		...OperationalInsightsLinks,
	];

	// Create a stream to write to
	const stream = new SitemapStream({hostname: process.env.CMS_SITE_URL});

	req;

	res.writeHead(200, {
		"Content-Type": "application/xml",
	});

	const xmlString = await streamToPromise(
		Readable.from(allLinks).pipe(stream)
	).then((data: any) => data.toString());

	res.end(xmlString);
};

export default sitemap;
