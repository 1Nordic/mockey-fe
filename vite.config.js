import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
        plugins: [sveltekit()],
        server: {
                port: 53967,
                host: true
        },
        test: {
                include: ['src/**/*.{test,spec}.{js,ts}']
        }
});
