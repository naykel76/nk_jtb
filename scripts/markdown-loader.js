import { marked } from './markdown-renderer.js'
import hljs from 'highlight.js'
import Alpine from 'alpinejs'

// Import all markdown files at once (support subdirectories)
const markdownFiles = import.meta.glob('../docs/**/*.md', { query: '?raw', import: 'default', eager: true })

// Load and display a markdown file
export function loadMarkdown(filename) {
    const content = markdownFiles[`../docs/${filename}`]

    if (!content) {
        document.querySelector('#app').innerHTML = '<h1>File not found or it\'s empty</h1>'
        return
    }

    const html = marked.parse(content)
    document.querySelector('#app').innerHTML = html

    // Highlight code blocks (for non-custom rendered blocks)
    document.querySelectorAll('pre code:not(.hljs)').forEach((block) => {
        hljs.highlightElement(block)
    })

    // Re-initialize Alpine for the new content
    Alpine.initTree(document.querySelector('#app'))
}