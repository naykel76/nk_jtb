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


// 
// 
// 
// 
// 
// wip.md
// components\accordion.md
// components\menu.md
// components\table.md
// jtb-for review\color-and-themes.md
// jtb-for review\conventions.md
// jtb-for review\faqs.md
// jtb-for review\layout-techniques.md
// jtb-for review\magic-classes.md
// jtb-for review\responsive-design.md
// jtb-for review\components\forms.md
// jtb-for review\components\navbar.md
// jtb-for review\utilities\alignment.md
// jtb-for review\utilities\border.md
// jtb-for review\utilities\display-and-visibility.md
// jtb-for review\utilities\layout.md
// jtb-for review\utilities\margin-padding-spacing.md
// wip\aria.md
// wip\buzz.md
// wip\directory-structure.md
// wip\resolvers.md

// Create navigation
document.querySelector('#nav').innerHTML = `
<nav>
    <button class="btn xs primary" data-doc="wip.md">WIP</button>
    <button class="btn xs primary" data-doc="installation.md">Installation</button>
    <button class="btn xs primary" data-doc="introduction.md">Introduction</button>

    <button class="btn xs primary" data-doc="core-architecture.md">core-architecture</button>
    <button class="btn xs primary" data-doc="installation.md">installation</button>
    <button class="btn xs primary" data-doc="introduction.md">introduction</button>
    <button class="btn xs primary" data-doc="utility-and-class-generation.md">utility-and-class-generation</button>
    

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