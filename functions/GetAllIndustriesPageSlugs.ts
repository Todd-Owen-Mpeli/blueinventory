// Imports
import {client} from "../config/apollo";
import {DocumentNode, gql} from "@apollo/client";

type SlugResponse = {
	slug: string;
	modified: string;
};

interface ISlug extends Array<SlugResponse> {}

// Industries Page Slugs
export const getAllIndustriesPageSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				industriesPagesSlugs: industries(where: {status: PUBLISH}) {
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

		return response?.data?.industriesPagesSlugs?.nodes;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch the industries page slugs"
		);
	}
};
