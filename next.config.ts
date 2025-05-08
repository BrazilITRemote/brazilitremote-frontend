const nextConfig = {
  images: {
    domains: ["placehold.co", "fakeimg.pl"],
    dangerouslyAllowSVG: true,
    // necessário por segurança ao habilitar SVG
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
