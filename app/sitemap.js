import { services } from "@/lib/services-data";
import { sectors } from "@/lib/sectors-data";

const routes = [
  "",
  "/company",
  "/services",
  ...services.map((service) => `/services/${service.slug}`),
  "/sectors",
  ...sectors.map((sector) => `/sectors/${sector.slug}`),
  "/resources",
  "/careers",
  "/contact",
  "/hub",
];

export default function sitemap() {
  const base = "https://www.htechsupports.com";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
