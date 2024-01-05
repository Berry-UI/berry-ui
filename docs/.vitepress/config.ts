import { defineConfig } from 'vitepress';
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
// .vitepress/config.js
export default defineConfig({
    lang: 'zh-cn',
    title: 'Berry',
    titleTemplate: 'BerryUI',
    description: 'A Vue UI framework',
    head: [
        ['link', { rel: 'icon', href: '/assets/berry.png' }]
    ],
    themeConfig: {
        nav: [
            {
                text: '指南',
                link: '/Base/install.md',
                // items: [ //items存在时不写入link
                //     { text: 'Item A', link: '/item-1' },
                // ]
            },
            {
                text: '组件',
                link: '/Component/Icon/icon.md',
            }
        ],
        sidebar: [
            {
                text: '基本使用',
                items: [
                    { text: '安装', link: '/Base/install.md' },
                    { text: '快速开始', link: '/Base/quickstart.md' },
                ],
            },
            {
                text: '基础组件',
                items: [
                    { text: 'Icon', link: '/Component/Icon/icon.md' },
                    { text: 'Button', link: '/Component/Button/button.md' },
                    { text: 'ButtonGroup', link: '/Component/ButtonGroup/buttongroup.md' },
                    { text: 'Input', link: '/Component/Input/input.md' },
                    { text: 'Radio', link: '/Component/Radio/radio.md' },
                ],
            },
        ],
    },
    markdown: {
        theme: {
            light: 'vitesse-light',
            dark: 'vitesse-dark'
        },
        lineNumbers: true,
        config(md) {
            md.use(componentPreview)
            md.use(containerPreview)
        }
    }
})
