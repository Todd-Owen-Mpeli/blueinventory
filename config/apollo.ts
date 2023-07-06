// Add Apollo Client
import {ApolloClient, InMemoryCache} from "@apollo/client";

// Define a custom merge function for Query.post field
const customMergeFunction = (existing: any, incoming: any) => {
	// Your logic to merge the existing and incoming data goes here
	// Make sure to return the merged data

	// If there is no existing data, simply return the incoming data
	if (!existing) {
		return incoming;
	}

	// Merge the fields from the existing and incoming data
	const mergedData = {
		// ...existing,
		...incoming,
	};

	// Perform any additional merging or custom logic based on your data structure
	// For example, if there are nested fields within the post object,
	// you may need to merge them separately or apply specific rules.
	// Modify this part according to your data structure and merging requirements.

	// Return the merged data
	return mergedData;
};

const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				post: {
					merge: customMergeFunction,
				},
				page: {
					merge: customMergeFunction,
				},
			},
		},
	},
});

export const client: any = new ApolloClient({
	uri: `${process.env.WORDPRESS_API_URL}`,
	cache: cache,
});
