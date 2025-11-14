import { marked } from 'marked'
import hljs from 'highlight.js'

// Custom renderer for code blocks with flags
const renderer = new marked.Renderer()

// Store the original code renderer
const originalCode = renderer.code.bind(renderer)

renderer.code = function (code, infostring, escaped) {

    // Handle marked v5+ token objects
    const content = typeof code === 'string' ? code : code.text
    const flagString = infostring || (typeof code === 'object' ? code.lang : null)


    if (!flagString) {
        return originalCode(code, infostring, escaped)
    }

    // Parse flags from flagString (e.g., "html +code +render")
    const flagsArray = flagString.split(/\s+/)
    const language = flagsArray[0] ?? 'html'
    const hasRender = flagsArray.includes('+render')
    const hasCode = flagsArray.includes('+code')
    const hasPreview = flagsArray.includes('+preview')


    // Extract attributes like class="..."
    const classMatch = flagString.match(/class=["']([^"']+)["']/)
    const wrapperClass = classMatch ? classMatch[1] : ''

    // If no special flags, use default rendering
    if (!hasRender && !hasCode && !hasPreview) {
        return originalCode(code, infostring, escaped)
    }

    const uniqueId = 'code-' + Math.random().toString(36).substr(2, 9)
    let output = ''

    // Render live preview - insert HTML directly
    if (hasRender || hasPreview) {
        output += `<div class="${wrapperClass}">${content}</div>`
    }

    // Render code block (highlighted)
    if (hasCode || hasRender) {
        const highlighted = hljs.highlight(content, { language: language || 'html' }).value
        output += `<pre><code id="${uniqueId}" class="hljs language-${language}">${highlighted}</code></pre>`
    }

    return output
}

// Configure marked with custom renderer
marked.setOptions({
    renderer: renderer,
    highlight: function (code, lang) {
        if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(code, { language: lang }).value
        }
        return hljs.highlightAuto(code).value
    }
})

export { marked }