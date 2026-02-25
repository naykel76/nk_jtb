import './src/build.scss'
import './src/extras/_nk-docs.scss'
import './src/extras/_nk-app.scss'

import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'

Alpine.plugin(collapse)

// Initialize Alpine.js
window.Alpine = Alpine
Alpine.start()



