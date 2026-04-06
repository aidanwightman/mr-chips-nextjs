import type { NextConfig } from "next";

// Preview server starts from parent dir — ensure CWD is the project root
// so PostCSS plugins resolve modules correctly
try {
  process.chdir('/Users/aidanmcdermottwightman/Desktop/clients/danilio/mr-chips-nextjs');
} catch {}

const nextConfig: NextConfig = {
  turbopack: {
    root: '/Users/aidanmcdermottwightman/Desktop/clients/danilio/mr-chips-nextjs',
  },
};

export default nextConfig;
