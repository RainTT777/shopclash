import { defineCollection, reference } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const sourceSchema = z.object({
  title: z.string(),
  url: z.url(),
  publisher: z.string(),
  accessedAt: z.coerce.date()
});

const editorialSchema = z.object({
  author: reference('authors'),
  reviewer: reference('authors').optional(),
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  reviewStatus: z.enum(['draft', 'reviewed', 'needs-review']),
  lastVerifiedAt: z.coerce.date(),
  sources: z.array(sourceSchema).default([])
});

const seoSchema = z.object({
  title: z.string().max(70).optional(),
  description: z.string().min(50).max(180),
  noindex: z.boolean().default(false),
  image: z.string().optional()
});

const authors = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/authors' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    expertise: z.array(z.string()),
    avatar: z.string().optional(),
    profileUrl: z.url().optional(),
    disclosure: z.string().optional()
  })
});

const providers = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/providers' }),
  schema: z.object({
    name: z.string(),
    summary: z.string(),
    platforms: z.array(z.string()),
    protocols: z.array(z.string()),
    priceSummary: z.string(),
    refundPolicy: z.string(),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    recommendedFor: z.array(z.string()),
    notFor: z.array(z.string()),
    officialUrl: z.url(),
    affiliateKey: z.string().optional(),
    dataNotice: z.string().optional(),
    featured: z.boolean().default(false),
    ...editorialSchema.shape,
    seo: seoSchema
  })
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum(['privacy', 'proxy', 'troubleshooting', 'vpn']),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    ...editorialSchema.shape,
    seo: seoSchema
  })
});

const comparisons = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/comparisons' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    providers: z.array(reference('providers')).min(2),
    dimensions: z.array(z.string()),
    verdict: z.string(),
    ...editorialSchema.shape,
    seo: seoSchema
  })
});

export const collections = { authors, providers, posts, comparisons };
