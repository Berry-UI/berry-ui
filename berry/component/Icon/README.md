### 安装插件
```
1.npm install vite-plugin-svg-icons fast-glob -D

2.vite.config.ts 添加

import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";

export default defineConfig({
  plugins: [vue(),
  VueSetupExtend(),
  createSvgIconsPlugin({
    // 指定目录
    iconDirs: [path.resolve(process.cwd(), "public/assets/icons")],
    // 使用svg图标的格式
    symbolId: "berry-[dir]-[name]",
  }),
  ],
})


3.main.ts引入插件
import "virtual:svg-icons-register";
```

### 如何使用
```
<BerryIcon name="vue"></BerryIcon>
<BerryIcon name="aiming" color="#715718" size="48px"></BerryIcon>
```