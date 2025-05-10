import { MetadataRoute } from 'next';

import { personalInfo } from '@/config/personal-info';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `https://${personalInfo.domain}/sitemap.xml`,
  };
}
