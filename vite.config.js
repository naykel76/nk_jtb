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
                // typographyShowcase: resolve(__dirname, 'typography-showcase.html')
            },
            output: {
                manualChunks: (id) => {
                    if (id.includes('node_modules')) {
                        return 'vendor';
                    }
                }
            }
        }
    }
});
