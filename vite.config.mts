import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import namedDirectory from 'rollup-plugin-named-directory'
import path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import pluginRewriteAll from 'vite-plugin-rewrite-all'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    pluginRewriteAll(),
    vueJsx(),
    namedDirectory(),
    vue()
  ],
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src')
    }
  }
})