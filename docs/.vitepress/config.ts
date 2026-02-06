import { resolve } from 'path'
import { defineConfig } from 'vitepress'
import {
  componentPreview,
  containerPreview,
} from '@vitepress-demo-preview/plugin'

const alias = {
  '@demo': resolve(__dirname, '../../', './examples/sandboxes'),
  '@xfsm/bcl-ui': resolve(__dirname, '../../', './src/index.ts'),
  '@': resolve(__dirname, '../../docs'),
};


export default defineConfig({
  title: '@xfsm/bcl-ui',
  description: '数码业务组件库(Vue3版本)',
  base: '/sm-bcl-ui/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/sm-bcl-ui/logo.svg' }],
  ],
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '指南',
        link: '/guide/quick-start'
      },
      {
        text: '组件',
        link: '/components/overview'
      },
    ],
    sidebar: {
      '/components/': [
        {
          text: '组件概览',
          link: '/components/overview'
        },
        {
          text: '多媒体',
          items: [
            {
              text: 'AudioPlayer 音频播放',
              link: '/components/audio-player'
            },
            {
              text: 'VgsAudio 波形音频',
              link: '/components/vgs-audio'
            }
          ]
        },
      ],
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/example/sm-bcl-ui'
      }
    ]
  },
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    lineNumbers: true,
    config(md) {
      md.use(componentPreview, { clientOnly: true, alias });
      md.use(containerPreview, { clientOnly: true, alias });
    },
  },
  vite: {
    resolve: { alias },
  },
})
