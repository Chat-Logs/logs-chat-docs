const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Chat Logs',
  tagline: 'Official Chat Logs API Documentation',
  url: 'https://docs.logs.chat',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://logs.chat/img/favicon.png',
  organizationName: '1TGDev', // Usually your GitHub org/user name.
  projectName: 'logs.chat', // Usually your repo name.
  themeConfig: {
	colorMode: {
	  defaultMode: 'dark',
	},
    navbar: {
      title: 'Chat Logs',
      logo: {
        alt: 'Logo',
        src: 'https://logs.chat/img/favicon.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'get-started',
          position: 'left',
          label: 'SDK',
        },
        {to: '/api/get-started', label: 'API', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
		{
          href: 'https://logs.chat',
          label: 'Website',
          position: 'right',
        },
		{
          href: 'https://npmjs.com/logs.chat',
          label: 'NPM',
          position: 'right',
        },
        {
          href: 'https://github.com/1TGDev/logs.chat',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'SDK',
              to: '/docs/get-started',
            },
			{
              label: 'API',
              to: '/api/get-started',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/1TGDev/logs.chat',
            },
            {
              label: 'NPM',
              href: 'https://npmjs.com/logs.chat',
            },
            {
              label: 'Discord',
              href: 'https://logs.chat/discord',
            },
          ],
        },
        {
          title: 'Other',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Author',
              to: 'https://itariq.dev',
            },
          ],
        },
      ],
      copyright: `© Copyright © ${new Date().getFullYear()} All Rights Reserved, <a href="https://itariq.dev" target="_blank">TARIQ</a>`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/1TGDev/logs-chat-docs/tree/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/1TGDev/logs-chat-docs/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'api',
        routeBasePath: 'api',
        sidebarPath: require.resolve('./sidebars.js'),
		editUrl: 'https://github.com/1TGDev/logs-chat-docs/tree/master',
      },
    ],
	[
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html'],
        redirects: [
          {
            from: ['/docs'],
            to: '/docs/get-started',
          },
		  {
            from: ['/api', '/docs/api'],
            to: '/api/get-started',
          },
        ],
      },
    ],
  ],
};
