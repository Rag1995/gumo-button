import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.BASE_URL,
    plugins: [
      vue(),
      Pages({
        exclude: ['**/components/*.vue', 'pages/**/components/*.vue'],
      }),
      Components({
        directoryAsNamespace: true,
        collapseSamePrefixes: true,
        dts: 'src/vue-components.d.ts',
        dirs: ['src/components', 'src/pages/**/**/components'],
      }),
      AutoImport({
        dts: 'src/auto-imports.d.ts',
        include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
        imports: [
          'vue',
          'vue-router',
          'pinia',
          {
            from: 'vue-router',
            imports: ['RouteLocationRaw'],
            type: true,
          },
        ],
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@img': resolve(__dirname, 'src/assets/img'),
      },
      extensions: ['.vue', '.js', '.ts'],
    },
  }
})