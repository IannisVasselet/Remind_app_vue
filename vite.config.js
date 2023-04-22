// import {fileURLToPath, URL} from 'node:url'
//
// import {defineConfig} from 'vite'
// import vue from '@vitejs/plugin-vue'
//
// // https://vitejs.dev/config/
// export default defineConfig({
//     plugins: [vue()],
//     resolve: {
//         alias: {
//             '@': fileURLToPath(new URL('./src', import.meta.url))
//         }
//     }
// })

import {VitePWA} from 'vite-plugin-pwa';
import vue from '@vitejs/plugin-vue'

export default {
    plugins: [vue(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.svg', 'robots.txt'],
            manifest: {
                name: 'Application de mémorisation',
                short_name: 'MemorApp',
                description: 'Une application de mémorisation basée sur la répétition espacée',
                start_url: '/',
                display: 'standalone',
                background_color: '#ffffff',
                theme_color: '#4DBA87',
                icons: [
                    {
                        src: './public/favicon.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                ],
            },
            workbox: {
                globPatterns: ['**/*'],
                navigateFallback: '/index.html',
                // Les options de Workbox pour générer le Service Worker
                skipWaiting: true,
                clientsClaim: true,
                runtimeCaching: [
                    {
                        urlPattern: /\.(?:png|jpg|jpeg|svg|gif|ico)$/,
                        handler: 'CacheFirst',
                    },
                    {
                        urlPattern: /\.(?:css|js|json)$/,
                        handler: 'StaleWhileRevalidate',
                    },
                    {
                        urlPattern: /^https?.*/,
                        handler: 'NetworkFirst',
                        options: {
                            networkTimeoutSeconds: 10,
                        },
                    },
                ],
            },
        }),
    ],
};
