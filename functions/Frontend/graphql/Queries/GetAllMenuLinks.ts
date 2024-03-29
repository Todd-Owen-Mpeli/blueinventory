import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

// Main Menu Links
export async function getMainMenuLinks() {
	try {
		const content: DocumentNode = gql`
			{
				mainMenuLinks: menuItems(where: {location: PRIMARY}) {
					edges {
						node {
							id
							url
							label
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return {
			mainMenuLinks: response?.data?.mainMenuLinks?.edges,
		};
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch main menu links content"
		);
	}
}

// Navbar Menu Links
export async function getNavbarMenuLinks() {
	try {
		const content: DocumentNode = gql`
			{
				navbarMenuLinks: menuItems(where: {location: SECONDARY}) {
					edges {
						node {
							id
							url
							label
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return {
			navbarMenuLinks: response?.data?.navbarMenuLinks?.edges,
		};
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch main menu links content"
		);
	}
}

// Footer Menu Links
export async function getFooterMenuLinks() {
	try {
		const content: DocumentNode = gql`
			{
				footerMenuLinks: menuItems(where: {location: FOOTER}) {
					edges {
						node {
							id
							url
							label
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return {
			footerMenuLinks: response?.data?.footerMenuLinks?.edges,
		};
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch footer menu links content"
		);
	}
}

// Industries Menu Links
export async function getIndustriesMenuLinks() {
	try {
		const content: DocumentNode = gql`
			{
				industriesMenuLinks: menuItems(where: {location: INDUSTRIES}) {
					edges {
						node {
							id
							url
							label
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return {
			industriesMenuLinks: response?.data?.industriesMenuLinks?.edges,
		};
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch footer menu links content"
		);
	}
}
