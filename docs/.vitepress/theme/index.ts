// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import BerryUI from 'berry-ui'

export default {
    extends: DefaultTheme,
    async enhanceApp({ app }) {
    // register your custom global components
        // app.component('MyGlobalComponent' /* ... */)
        app.use(BerryUI)
    }
} satisfies Theme