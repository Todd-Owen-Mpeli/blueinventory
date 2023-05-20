/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"blueinventory.local",
			"mydummysite.co.uk",
			"images.clerk.dev",
			"lh3.googleusercontent.com",
		],
	},
};

module.exports = nextConfig;
