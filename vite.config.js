import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer'
import purgecss from '@fullhuman/postcss-purgecss';

export default defineConfig({

    css: {
        postcss: {
            plugins: [
                autoprefixer({}),
                purgecss({
                    content: ['./index.html'],
                }),
            ],
        }
    }
})
