module.exports = {
  title: 'Основы SVG',
  tagline: 'вводный курс',
  url: 'https://krabaton.github.io',
  baseUrl: '/SVG-book/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'krabaton', // Usually your GitHub org/user name.
  projectName: 'SVG-book', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
        href: '/docs/intro',
      },
      items: [
        {
          to: 'docs/intro',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/Krabaton/SVG-book',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {},
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Krabaton/SVG-book/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Krabaton/SVG-book/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
