import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer'
import purgecss from '@fullhuman/postcss-purgecss';

export default defineConfig({

    css: {
        postcss: {
            plugins: [
                autoprefixer({}),
                // purgecss({
                //     content: ['./index.html'],
                //     // blocklist: ['usedClass', /^nav-/],
                //     // https://github.com/FullHuman/purgecss/issues/978
                //     safelist: {
                //         standard: [/^\:has$/, /^\:is$/, /^\:not$/, /^\:where$/]
                //     },
                //     extractors: [
                //         {
                //             extractor: (content) => {
                //                 // fix for escaped prefixes (sm:, lg:, etc)
                //                 return content.match(/[A-Za-z0-9-_:\/]+/g) || []
                //             },
                //             extensions: ['css', 'html', 'vue'],
                //         },
                //     ],
                // }),
            ],
        }
    }
})
