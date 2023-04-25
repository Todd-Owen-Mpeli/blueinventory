/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["blueinventory.local", "mydummysite.co.uk", "images.clerk.dev"],
	},
};

module.exports = nextConfig;
