import './src/build.scss'
import 'highlight.js/styles/github-dark.css'
import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import './scripts/navigation.js'

Alpine.plugin(collapse)
window.Alpine = Alpine
Alpine.start()
