// Add Apollo Client
import {ApolloClient, InMemoryCache} from "@apollo/client";

export const client: any = new ApolloClient({
	uri: `${process.env.WORDPRESS_API_URL}`,
	cache: new InMemoryCache(),
});

export const clerkClient: any = new ApolloClient({
	uri: `${process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}`,
	cache: new InMemoryCache(),
});
