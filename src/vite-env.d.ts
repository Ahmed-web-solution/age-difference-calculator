/// <reference types="vite/client" />

// Markdown module declarations for vite-plugin-markdown
declare module '*.md' {
    const content: string;
    export default content;
}
