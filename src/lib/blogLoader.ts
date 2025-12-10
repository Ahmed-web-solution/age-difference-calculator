/**
 * Blog Loader Utility
 * Dynamically loads blog posts from Markdown files in /content/blog/
 * Parses frontmatter manually to avoid dependency issues
 */

import { BlogPost } from '@/data/blogPosts';

// Import all markdown files from content/blog directory
const blogModules = import.meta.glob('/content/blog/*.md', {
    eager: true,
    query: '?raw',
    import: 'default'
});

/**
 * Parse frontmatter from markdown content
 * @param fileContent Raw markdown file content
 * @returns Object with data (frontmatter) and content (body)
 */
function parseFrontmatter(fileContent: string): { data: any; content: string } {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = fileContent.match(frontmatterRegex);

    if (!match) {
        return { data: {}, content: fileContent };
    }

    const [, frontmatterText, content] = match;
    const data: any = {};

    // Parse YAML-like frontmatter
    const lines = frontmatterText.split('\n');
    let currentKey = '';
    let inArray = false;
    let arrayItems: string[] = [];

    for (const line of lines) {
        const trimmedLine = line.trim();

        if (!trimmedLine) continue;

        // Check if it's an array item
        if (trimmedLine.startsWith('- ')) {
            if (inArray) {
                arrayItems.push(trimmedLine.substring(2).trim());
            }
            continue;
        }

        // Check if it's a key-value pair
        const colonIndex = trimmedLine.indexOf(':');
        if (colonIndex > 0) {
            // Save previous array if exists
            if (inArray && currentKey) {
                data[currentKey] = arrayItems;
                arrayItems = [];
                inArray = false;
            }

            const key = trimmedLine.substring(0, colonIndex).trim();
            const value = trimmedLine.substring(colonIndex + 1).trim();

            currentKey = key;

            if (value) {
                // Remove quotes if present
                data[key] = value.replace(/^["']|["']$/g, '');
            } else {
                // Empty value means array is coming
                inArray = true;
                arrayItems = [];
            }
        }
    }

    // Save last array if exists
    if (inArray && currentKey) {
        data[currentKey] = arrayItems;
    }

    return { data, content: content.trim() };
}

/**
 * Load all blog posts from markdown files
 * @returns Array of BlogPost objects sorted by date (newest first)
 */
export function loadBlogPosts(): BlogPost[] {
    const posts: BlogPost[] = [];

    for (const path in blogModules) {
        const fileContent = blogModules[path] as string;

        // Parse frontmatter and content
        const { data, content } = parseFrontmatter(fileContent);

        // Convert frontmatter to BlogPost format
        const post: BlogPost = {
            slug: data.slug || '',
            title: data.title || '',
            description: data.description || '',
            content: content || '',
            date: data.date || '',
            author: data.author || 'FinCalcBox Team',
            readTime: data.readTime || '5 min read',
            tags: data.tags || [],
            featuredImage: data.featuredImage || '',
        };

        posts.push(post);
    }

    // Sort by date (newest first)
    return posts.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
    });
}

/**
 * Get a single blog post by slug
 * @param slug The post slug
 * @returns BlogPost or undefined if not found
 */
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    const posts = loadBlogPosts();
    return posts.find(post => post.slug === slug);
}
