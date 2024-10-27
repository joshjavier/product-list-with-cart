import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginSvgSpritemap('./src/icons/*.svg', {
      output: {
        use: false,
        view: false,
      },
    }),
  ],
})
