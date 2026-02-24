import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/last-war-wiki',

  title: 'Last War Wiki',

  locales: {
    en: {
      label: 'English',
      lang: 'en',

      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [{ text: 'Home', link: '/en' }],

        sidebar: [
          {
            text: 'Guides',
            items: [{ text: 'Example guide', link: '/en/guides' }],
          },
        ],
      },
    },
    it: {
      label: 'Italiano',
      lang: 'it',

      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [{ text: 'Home', link: '/it' }],

        sidebar: [
          {
            text: 'Guides',
            items: [{ text: 'Example guide', link: '/it/guides' }],
          },
        ],
      },
    },
  },
});
