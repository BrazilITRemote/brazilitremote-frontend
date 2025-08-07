const nextConfig = {
  images: {
    // domains: ["placehold.co", "fakeimg.pl"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "fakeimg.pl",
        port: "",
        pathname: "/**",
      },
    ],
    dangerouslyAllowSVG: true,
    // necessário por segurança ao habilitar SVG
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
