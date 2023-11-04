/** @type {import('next').NextConfig} */

// const withImages = require("next-images");

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add a rule for processing GraphQL files using the graphql-tag/loader
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      use: ["graphql-tag/loader"],
    });

    return config;
  },
};

module.exports = nextConfig;
