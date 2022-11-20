// Gets the contentful content environment
const client = require("contentful").createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function contentfulContent(pageRestApiID) {
	const content = await client.getEntry(pageRestApiID);

	return content.fields;
}
