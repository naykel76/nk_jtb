import './src/build.scss'
import './src/play.scss'
import './src/extras/_nk-docs.scss'
import 'highlight.js/styles/github-dark.css'

import { marked } from 'marked'
import hljs from 'highlight.js'

// Configure markdown parser
marked.setOptions({
    highlight: function (code, lang) {
        if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(code, { language: lang }).value
        }
        return hljs.highlightAuto(code).value
    }
})

// Import all markdown files at once
const markdownFiles = import.meta.glob('./docs/*.md', { query: '?raw', import: 'default', eager: true })

// Load and display a markdown file
function loadMarkdown(filename) {
    const content = markdownFiles[`./docs/${filename}`]

    if (!content) {
        document.querySelector('#app').innerHTML = '<h1>File not found or it\'s empty</h1>'
        return
    }

    const html = marked.parse(content)
    document.querySelector('#app').innerHTML = html

    // Highlight code blocks
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block)
    })
}

// Create navigation
document.querySelector('#nav').innerHTML = `
<nav>
    <button class="btn xs primary" data-doc="wip.md">WIP</button>
    <button class="btn xs primary" data-doc="installation.md">Installation</button>
    <button class="btn xs primary" data-doc="introduction.md">Introduction</button>
</nav>
`

// Get current doc from URL or default
function getCurrentDoc() {
    const hash = window.location.hash.slice(1) // Remove #
    return hash || 'installation.md'
}

// Add navigation event listeners (after nav is created)
document.querySelectorAll('[data-doc]').forEach(button => {
    button.addEventListener('click', (e) => {
        const file = e.target.getAttribute('data-doc')
        window.location.hash = file // Update URL
        loadMarkdown(file)
    })
})

// Listen for hash changes (back/forward buttons)
window.addEventListener('hashchange', () => {
    loadMarkdown(getCurrentDoc())
})

// Load page from URL
loadMarkdown(getCurrentDoc())