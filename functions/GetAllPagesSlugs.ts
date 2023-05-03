// Import
import {client} from "../config/apollo";
import {DocumentNode, gql} from "@apollo/client";

// Fetches All Pages Slugs
export async function fetchAllPagesSlugs() {
	try {
		const content: DocumentNode = gql`
			{
				pages: pages(where: {status: PUBLISH}) {
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
