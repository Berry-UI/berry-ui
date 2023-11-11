import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
    plugins: [
        vue(),
    ],
    build:{
        lib:{
            entry:"./berry/index.ts",
            name:"BerryUI"
        },
        outDir:"lib"
    }
})
