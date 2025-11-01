import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AI Agents Lab',
  tagline: 'Documenting and analyzing AI agent frameworks with Web3 integration',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  // Update this with your actual Vercel deployment URL
  url: 'https://aigents-lab.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For Vercel root deployment, use '/'
  baseUrl: '/',

  // GitHub pages deployment config (commented out for Vercel)
  // organizationName: 'decentraminds',
  // projectName: 'aigents-lab',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Scripts for third-party integrations (e.g., AI Cookbook)
  scripts: [
    {
      src: 'https://ai.cookbook.dev/embed.js',
      async: true,
      defer: true,
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/decentraminds/aigents-lab/tree/main/apps/docs/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/decentraminds/aigents-lab/tree/main/apps/docs/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AI Agents Lab',
      logo: {
        alt: 'AI Agents Lab Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'docSidebar',
          sidebarId: 'frameworksSidebar',
          position: 'left',
          label: 'Frameworks',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/decentraminds/aigents-lab',
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
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'Frameworks',
              to: '/docs/frameworks/intro',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Web3 Integration',
              to: '/docs/web3/intro',
            },
            {
              label: 'Examples',
              to: '/docs/examples/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/decentraminds/aigents-lab',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DecentraMinds. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
