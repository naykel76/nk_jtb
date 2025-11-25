import './src/build.scss'
import './src/play.scss'
import './src/extras/_nk-docs.scss'
import 'highlight.js/styles/github-dark.css'

import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'

import './scripts/markdown-renderer.js'
import './scripts/markdown-loader.js'
import './scripts/navigation.js'

Alpine.plugin(collapse)

// Initialize Alpine.js
window.Alpine = Alpine
Alpine.start()



