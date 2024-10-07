/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

module.exports = {
    async redirects(){
        return[
            // Basic redirect
            {
                source: '/about',
                destination: '/',
                permanent: true,
            },
            // Willcard path matching
            {
                souce: '/blog/:slug',
                destination: '/new/:slug',
                permanent: true,
            },
        ]
    },
}