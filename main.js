import './src/build.scss'
import 'highlight.js/styles/github-dark.css'

import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'

import './js/markdown-renderer.js'
import './js/markdown-loader.js'
import './js/navigation.js'

Alpine.plugin(collapse)

// Initialize Alpine.js
window.Alpine = Alpine
Alpine.start()



