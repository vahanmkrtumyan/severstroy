import Prismic from "prismic-javascript";

// Prismic API endpoint
export const apiEndpoint = "https://trade-invest.prismic.io/api/v2";

// Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private

// Client method to query Prismic
export const client = Prismic.client(apiEndpoint);
