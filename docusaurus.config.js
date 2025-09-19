// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Apache Uniffle',
    tagline: 'A high performance, general purpose remote shuffle service for distributed computing engines.',
    url: 'https://uniffle.apache.org/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    organizationName: 'apache',
    projectName: 'uniffle-website',

    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'zh-CN'],
        localeConfigs: {
            'zh-CN': {label: "简体中文"},
        },
    },

    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'community',
                path: 'community',
                routeBasePath: 'community',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'download',
                path: 'download',
                routeBasePath: 'download',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ]
    ],

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    path: 'docs',
                    routeBasePath: "/docs",
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/apache/uniffle',
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://github.com/apache/uniffle',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'Apache Uniffle',
                logo: {
                    alt: 'Apache Uniffle',
                    src: 'img/uniffle-logo.png',
                },
                items: [
                    {type: 'doc', docId: 'intro', position: 'right', label: 'Docs'},
                    {type: 'doc', docId: 'how to contribute', position: 'right', label: 'Community', docsPluginId: 'community'},
                    {to: '/blog', label: 'Blog', position: 'right'},
                    {to: '/download', label: 'Download', position: 'right'},
                    {
                        type: 'dropdown',
                        label: 'ASF',
                        position: 'right',
                        items: [
                            {label: 'Foundation', to: 'https://www.apache.org/'},
                            {label: 'License', to: 'https://www.apache.org/licenses/'},
                            {label: 'Events', to: 'https://www.apache.org/events/current-event'},
                            {label: 'Security', to: 'https://www.apache.org/security/'},
                            {label: 'Sponsorship', to: 'https://www.apache.org/foundation/sponsorship.html'},
                            {label: 'Privacy', to: 'https://www.apache.org/foundation/policies/privacy.html'},
                            {label: 'Thanks', to: 'https://www.apache.org/foundation/thanks.html'}
                        ],
                    },
                    {
                        type: 'localeDropdown',
                        position: 'right',
                    },
                    {
                        href: 'https://github.com/apache/uniffle',
                        position: 'right',
                        className: 'header-github-link',
                        'aria-label': 'GitHub repository',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Getting Started',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Slack',
                                href: 'https://join.slack.com/t/the-asf/shared_invite/zt-1fm9561yr-uzTpjqg3jf5nxSJV5AE3KQ',
                            },
                            {
                                label: 'Issue Tracker',
                                href: 'https://github.com/apache/uniffle/issues',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/apache/uniffle',
                            },
                        ],
                    },
                ],
                copyright: `<div style="text-align: left;">
          <div style="border-top: 1px solid #ccc;min-height: 60px;line-height: 20px;text-align: center;font-family: Avenir-Medium;font-size: 14px;color: #999;display: flex;align-items: center;"><span>Copyright © ${new Date().getFullYear()} The Apache Software Foundation. Apache Uniffle, Uniffle, and its feather logo are trademarks of The Apache Software Foundation.</span></div>
        </div>`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),

    themes: [
        [require.resolve("@easyops-cn/docusaurus-search-local"), { hashed: true }],
    ]
};

module.exports = config;
