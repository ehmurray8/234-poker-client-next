/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        pokerServerUrl: 'http://localhost:8080',
        websocketUrl: 'ws://localhost:8080/socket',
    },
};

module.exports = nextConfig;
