import { loadMarkdown } from './markdown-loader.js'

// Create navigation
document.querySelector('#nav').innerHTML = `
<nav>
    <button class="btn xs primary" data-doc="wip.md">WIP</button>
    <button class="btn xs primary" data-doc="components/pagination.md">pagination</button>
    <button class="btn xs primary" data-doc="components/accordion.md">accordion</button>
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

// Initialize after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
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
})