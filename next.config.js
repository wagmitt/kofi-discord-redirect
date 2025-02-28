/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/',
                destination: 'https://discord.gg/usvqf8WE',
                permanent: false,
            },
        ];
    },
};

module.exports = nextConfig; 