/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "drive.google.com",
            pathname: "/uc*",
          },
          {
            protocol: "https",
            hostname: "lh3.googleusercontent.com",
          },
        ],
      },
      webpack(config, { dev, isServer }) {
        if (dev && !isServer) {
          config.module.rules.forEach((rule) => {
            if (Array.isArray(rule.use)) {
              rule.use.forEach((loader) => {
                if (
                  loader.loader &&
                  loader.loader.includes("css-loader") &&
                  loader.options &&
                  loader.options.sourceMap !== undefined
                ) {
                  loader.options.sourceMap = false;
                }
              });
            }
          });
        }
        return config;
      },
};

export default nextConfig;
