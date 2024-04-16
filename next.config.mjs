/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		mongodb_username: process.env.mongodb_username,
		mongodb_password: process.env.mongodb_password,
	},
}

export default nextConfig
