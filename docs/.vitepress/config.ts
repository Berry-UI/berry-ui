import { defineConfig } from 'vitepress';

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
                ],
            },
        ],
    },
})
