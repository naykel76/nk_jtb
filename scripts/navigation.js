import { loadMarkdown } from './markdown-loader.js'
import navData from './jtb-nav.json'

// Function to convert route name to file path
function routeToFile(routeName) {
    // Support Laravel-style docs routes like `docs.jtb.utilities.border`
    // and convert them into local markdown paths like `utilities/border.md`.
    return routeName.replace(/^docs\.jtb\./, '').replace(/^jtb\./, '').replace(/\./g, '/') + '.md'
}

// Function to load and process navigation from JSON
function loadNavigation() {
    try {
        // Build navigation HTML with sections
        let navHtml = '<nav class="txt-sm">'
        
        for (const [section, data] of Object.entries(navData)) {
            navHtml += `<ul class="menu va-c gap-05 my-05">`
            navHtml += `<h4>${section}</h4>`
            
            data.links.forEach(link => {
                const file = routeToFile(link.route_name)
                navHtml += `<li><button class="link" data-doc="${file}">${link.name}</button></li>\n`
            })
            
            navHtml += `</div>`
        }
        
        navHtml += '</nav>'
        
        document.querySelector('#nav').innerHTML = navHtml
        
        // Add navigation event listeners after HTML is inserted
        document.querySelectorAll('[data-doc]').forEach(button => {
            button.addEventListener('click', (e) => {
                const file = e.target.getAttribute('data-doc')
                window.location.hash = file
                loadMarkdown(file)
            })
        })
        
    } catch (error) {
        console.error('Error loading navigation:', error)
    }
}

// Get current doc from URL or default
function getCurrentDoc() {
    const hash = window.location.hash.slice(1)
    return hash || 'wip.md'
}

document.addEventListener('DOMContentLoaded', () => {
    // Load navigation first
    loadNavigation()
    
    // Listen for hash changes (back/forward buttons)
    window.addEventListener('hashchange', () => {
        loadMarkdown(getCurrentDoc())
    })

    // Load page from URL
    loadMarkdown(getCurrentDoc())
})
