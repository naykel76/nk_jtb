import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        open: '/dev.html'
    },
    build: {
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                dev: resolve(__dirname, 'dev.html'),
                docs: resolve(__dirname, 'docs.html'),
            },
            output: {
                manualChunks: (id) => {
                    if (id.includes('node_modules')) {
                        if (id.includes('highlight.js')) {
                            return 'highlight';
                        }
                        return 'vendor';
                    }
                }
            }
        }
    }
});
