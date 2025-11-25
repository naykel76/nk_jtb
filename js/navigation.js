import { loadMarkdown } from './markdown-loader.js'

// Function to convert route name to file path
function routeToFile(routeName) {
    // Remove 'jtb.' prefix, replace dots with slashes, and add .md extension
    return routeName.replace('jtb.', '').replace(/\./g, '/') + '.md'
}

// Function to load and process navigation from JSON
async function loadNavigation() {
    try {
        const response = await fetch('./js/nav.json')
        const navData = await response.json()
        
        // Build navigation HTML with sections
        let navHtml = '<nav class="dark txt-sm">'
        
        for (const [section, data] of Object.entries(navData)) {
            navHtml += `<div class="flex va-c gap-05 my-05">`
            navHtml += `<h4>${section}</h4>`
            
            data.links.forEach(link => {
                const file = routeToFile(link.route_name)
                navHtml += `<button class="btn sm primary" data-doc="${file}">${link.name}</button>\n`
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
    return hash || 'installation.md'
}

document.addEventListener('DOMContentLoaded', async () => {
    // Load navigation first
    await loadNavigation()
    
    // Listen for hash changes (back/forward buttons)
    window.addEventListener('hashchange', () => {
        loadMarkdown(getCurrentDoc())
    })

    // Load page from URL
    loadMarkdown(getCurrentDoc())
})