/**
 * Blog Posts Data Layer
 * Now dynamically loaded from Markdown files in /content/blog/
 * Managed via Decap CMS at /admin
 */

import { loadBlogPosts, getBlogPostBySlug as getPostBySlug } from '@/lib/blogLoader';

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    content: string;
    date: string;
    author: string;
    readTime: string;
    tags: string[];
    featuredImage: string;
}

// Load blog posts dynamically from markdown files
export const blogPosts: BlogPost[] = loadBlogPosts();

// Helper function to get a single blog post by slug
export { getPostBySlug as getBlogPostBySlug };
