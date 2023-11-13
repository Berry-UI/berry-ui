import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";

export default defineConfig({
  plugins: [vue(),
  VueSetupExtend(),
  createSvgIconsPlugin({
    // 指定目录
    iconDirs: [path.resolve(process.cwd(), "berry/assets/svgs")],
    // 使用svg图标的格式
    symbolId: "berry-[dir]-[name]",
  }),
  ]
})