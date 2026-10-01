import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.quesoselconsuelo.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.quesoselconsuelo.com/empresa",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.quesoselconsuelo.com/elaboracion",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.quesoselconsuelo.com/queso",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://www.quesoselconsuelo.com/quesos",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://www.quesoselconsuelo.com/quesos/el-consuelo",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.quesoselconsuelo.com/quesos/el-cordel",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.quesoselconsuelo.com/quesos/el-redil",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.quesoselconsuelo.com/aviso-legal",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: "https://www.quesoselconsuelo.com/privacidad",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: "https://www.quesoselconsuelo.com/contacto",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.75,
    },
    {
      url: "https://www.quesoselconsuelo.com/faq",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.65,
    },
  ];
}
