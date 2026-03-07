// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { defineCollection } from "astro:content";
// Import Zod
import { z } from "astro/zod";
// Define a `loader` and `schema` for each collection
const projects = defineCollection({
	loader: glob({ pattern: '**/[^_]*.md', base: "./src/projects" }),
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
// Export a single `collections` object to register your collection(s)
export const collections = { projects };
