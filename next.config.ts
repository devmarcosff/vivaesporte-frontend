// next.config.ts
import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.google.com"], // Adicione os domínios permitidos aqui
  },
};

export default withNextIntl(nextConfig);
