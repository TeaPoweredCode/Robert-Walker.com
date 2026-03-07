import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const projects = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/projects" }),
	schema: ({ image }) => z.object({
		title: z.string(),
		projectType: z.string(),
		stack: z.array(z.string()),
		images: z.object({
			grid: image(),
			banner: image(),
			gallery: z.array(image()).optional()
		}),
		links: z.object({
			gitHub: z.string().optional(),
			chrome: z.string().optional(),
			firefox: z.string().optional(),
			curseForge: z.string().optional(),
		}).optional(),
	})
});

export const collections = { projects };
