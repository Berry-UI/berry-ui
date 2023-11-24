// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import BerryUI from 'berry-ui'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import './custom.scss'

export default {
    extends: DefaultTheme,
    async enhanceApp({ app }) {
        // register your custom global components
        // app.component('MyGlobalComponent' /* ... */)
        app.use(BerryUI)
        app.component('demo-preview', AntDesignContainer)
    }
} satisfies Theme