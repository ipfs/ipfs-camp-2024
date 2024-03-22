import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://2024.ipfs.camp/',
      lastModified: new Date(),
    },
  ];
}
