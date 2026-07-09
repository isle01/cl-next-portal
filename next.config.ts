import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// 本番環境（デプロイ後）では実行しないようにガードするよ
if (process.env.NODE_ENV === 'development') {
  import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
}

export default nextConfig;
