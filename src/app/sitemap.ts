import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://blankcanvascapital.co.za/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://blankcanvascapital.co.za/about-us',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://blankcanvascapital.co.za/investment-approach',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
		{
      url: 'https://blankcanvascapital.co.za/team',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
		{
      url: 'https://blankcanvascapital.co.za/portfolio',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
		{
      url: 'https://blankcanvascapital.co.za/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ]
}
