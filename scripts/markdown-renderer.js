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

    // Parse flags from flagString
    const flagsArray = flagString.split(/\s+/)
    const language = flagsArray[0] ?? 'html'
    const hasPreview = flagsArray.includes('+preview')
    const hasCode = flagsArray.includes('+code')
    const isCollapsible = flagsArray.includes('+collapse')

    // Extract attributes
    const classMatch = flagString.match(/class=["']([^"']+)["']/)
    const wrapperClass = classMatch ? classMatch[1] : ''

    const titleMatch = flagString.match(/\+title=["']([^"']+)["']/)
    const title = titleMatch ? titleMatch[1] : 'Show Code'

    // If no special flags, use default rendering
    if (!hasPreview && !hasCode) {
        return originalCode(code, infostring, escaped)
    }

    const uniqueId = 'code-' + Math.random().toString(36).substr(2, 9)
    let output = ''

    // Render live preview
    if (hasPreview) {
        output += `<div class="${wrapperClass}">${content}</div>`
    }

    // Render code block (highlighted)
    if (hasCode) {
        const highlighted = hljs.highlight(content, { language: language || 'html' }).value

        if (isCollapsible) {
            output += `
                <div x-data="{ open: false, copied: false }" class="mt-05 mb">
                    <div class="flex items-center gap-05">
                        <button x-on:click="open = !open" class="btn sm">
                            <span>${title}</span>
                        </button>
                        <button 
                            x-on:click="
                                navigator.clipboard.writeText(document.getElementById('${uniqueId}').textContent);
                                copied = true;
                                setTimeout(() => copied = false, 2000);
                            " 
                            class="btn sm"
                            x-bind:class="copied ? 'bg-sky-500' : 'bg-sky-300'"
                            x-text="copied ? 'Copied!' : 'Copy Code'">
                        </button>
                    </div>
                    <div x-show="open" x-collapse class="mt-05">
                        <pre><code id="${uniqueId}" class="hljs language-${language}">${highlighted}</code></pre>
                    </div>
                </div>
            `
        } else {
            output += `<pre><code id="${uniqueId}" class="hljs language-${language}">${highlighted}</code></pre>`
        }
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