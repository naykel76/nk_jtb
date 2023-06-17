// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
    plugins: [
        purgecss({
            content: ['./index.html'],
            verbose: true, //
        })
    ]
}

