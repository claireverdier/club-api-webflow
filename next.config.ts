import type { NextConfig } from "next";

const mountPath = process.env.WEBFLOW_MOUNT_PATH || "/app";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // @ts-expect-error – Webflow Cloud dynamic basePath
  assetPrefix:
    "https://4673958c-f79f-4c4d-bc6b-da3d64cfe2fb.wf-app-prod.cosmic.webflow.services/app",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
