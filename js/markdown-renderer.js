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
                    <div class="flex items-center justify-between gap-05">
                        <button x-on:click="open = !open" class="btn sm">
                            <span>${title}</span>
                        </button>
                        <button 
                            x-on:click="
                                navigator.clipboard.writeText(document.getElementById('${uniqueId}').textContent);
                                copied = true;
                                setTimeout(() => copied = false, 2000);
                            " 
                            class="btn sm wh-2 flex-centered"
                            x-bind:class="copied ? 'bg-sky-500' : 'bg-sky-300'"
                            x-bind:title="copied ? 'Copied!' : 'Copy Code'"
                            aria-label="Copy code">
                            <svg x-show="!copied" class="w-1 h-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                            </svg>
                            <svg x-show="copied" class="w-1 h-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </button>
                    </div>
                    <div x-show="open" x-collapse class="mt-05">
                        <pre><code id="${uniqueId}" class="hljs language-${language}">${highlighted}</code></pre>
                    </div>
                </div>
            `
        } else {
            output += `
                <div x-data="{ copied: false }" class="relative">
                    <button 
                        x-on:click="
                            navigator.clipboard.writeText(document.getElementById('${uniqueId}').textContent);
                            copied = true;
                            setTimeout(() => copied = false, 2000);
                        " 
                        class="pxy-025 wh-2 bdr bdr-slate-700 hover:bg-slate-600 flex-centered absolute top-0 right-0 rounded-sm bg-slate-800 mxy-025"
                        x-bind:class="copied ? 'bg-sky-500' : ' txt-slate-500'"
                        x-bind:title="copied ? 'Copied!' : 'Copy Code'"
                        aria-label="Copy code">
                        <svg x-show="!copied" class="w-1 h-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                        </svg>
                        <svg x-show="copied" class="w-1 h-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </button>
                    <pre><code id="${uniqueId}" class="hljs language-${language}">${highlighted}</code></pre>
                </div>
            `
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