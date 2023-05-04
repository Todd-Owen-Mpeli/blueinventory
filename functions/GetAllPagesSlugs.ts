// Import
import {client} from "../config/apollo";
import {DocumentNode, gql} from "@apollo/client";

type SlugResponse = {
	slug: string;
	modified: string;
};

interface ISlug extends Array<SlugResponse> {}

// Fetches All Pages Slugs
export async function fetchAllPagesSlugs(): Promise<ISlug> {
	try {
		const content: DocumentNode = gql`
			{
				pages: pages(first: 100, where: {status: PUBLISH}) {
					nodes {
						slug
						modified
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.pages?.nodes;
	} catch (error) {
		console.log(error);
		throw new Error("Something went wrong trying to fetch the pages slug");
	}
}
