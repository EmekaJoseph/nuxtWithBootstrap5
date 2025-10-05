// @ts-nocheck

export default defineNuxtPlugin(async (nuxtApp) => {
    if (process.client) {
        try {
            const bootstrap = await import('bootstrap')
            console.log('✅ Bootstrap loaded successfully')

            const initTooltips = () => {
                document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
                    // Prevent duplicate initialization
                    if (!el.getAttribute('data-has-tooltip')) {
                        new bootstrap.Tooltip(el)
                        el.setAttribute('data-has-tooltip', 'true')
                    }
                })
            }

            // Run once on DOM load
            document.addEventListener('DOMContentLoaded', initTooltips)

            // Run again after every Nuxt route change
            nuxtApp.hook('page:finish', () => {
                initTooltips()
            })

        } catch (error) {
            console.error('❌ Failed to load Bootstrap:', error)
        }
    }
})
