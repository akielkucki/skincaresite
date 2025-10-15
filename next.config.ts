import type { NextConfig } from "next";

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "i.pinimg.com",
            }
        ],
    },
};

module.exports = nextConfig;


export default nextConfig;
