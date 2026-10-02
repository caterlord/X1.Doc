import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const resolveEnv = (name: string, fallback: string): string => {
  const value = process.env[name];
  if (!value || value.trim().length === 0) {
    return fallback;
  }

  return value.trim();
};

const resolveOptionalEnv = (name: string): string | undefined => {
  const value = process.env[name];
  if (!value || value.trim().length === 0) {
    return undefined;
  }

  return value.trim();
};

const normalizeBaseUrl = (value: string): string => {
  if (value === '/') {
    return '/';
  }

  const withLeadingSlash = value.startsWith('/') ? value : `/${value}`;
  return withLeadingSlash.endsWith('/')
    ? withLeadingSlash
    : `${withLeadingSlash}/`;
};

const normalizeDocsRouteBasePath = (value: string): string => {
  const trimmed = value.trim();
  if (trimmed === '' || trimmed === '/') {
    return '/';
  }

  return trimmed.replace(/^\/+|\/+$/g, '');
};

const siteUrl = resolveEnv('DOCS_SITE_URL', 'https://docs.posx1.ai');
const siteBaseUrl = normalizeBaseUrl(
  resolveEnv('DOCS_BASE_URL', '/'),
);
const docsRouteBasePath = normalizeDocsRouteBasePath(
  resolveEnv('DOCS_ROUTE_BASE_PATH', '/'),
);
const docsPathPrefix = docsRouteBasePath === '/' ? '' : `/${docsRouteBasePath}`;
const algoliaAppId = resolveEnv('DOCSEARCH_APP_ID', '88K552D32K');
const algoliaApiKey = resolveEnv(
  'DOCSEARCH_API_KEY',
  '1a1aaa88f21aea54a0609c4e9536cfd3',
);
const algoliaIndexName = resolveEnv(
  'DOCSEARCH_INDEX_NAME',
  'X1 Documentations',
);
const algoliaAskAiAssistantId = resolveOptionalEnv(
  'DOCSEARCH_ASK_AI_ASSISTANT_ID',
);
const hasAlgoliaDocSearch =
  Boolean(algoliaAppId) &&
  Boolean(algoliaApiKey) &&
  Boolean(algoliaIndexName);
const tlumaConfig = {
  source: 'caterlord/x1.doc',
  theme: 'auto',
  brandColor: 'blue',
  button: 'bottom-right',
  welcomePulse: true,
  edgePadding: '1rem',
  autoOpen: false,
  desktopFullscreenByDefault: false,
} as const;

const config: Config = {
  title: 'X1 Documentations',
  tagline: 'X1 platform operations manual',
  favicon: 'img/favicon.ico',
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: 'img/favicon-16x16.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'img/favicon-32x32.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: 'img/android-chrome-192x192.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'img/apple-touch-icon.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'shortcut icon',
        href: 'img/icon.ico',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: '8953743DC16FA7EF',
      },
    },
    {
      tagName: 'script',
      attributes: {},
      innerHTML: `window.tlumaConfig = ${JSON.stringify(tlumaConfig)};`,
    },
  ],
  scripts: [
    {
      src: 'https://tluma.ai/widget.js',
      async: true,
    },
  ],

  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      useCssCascadeLayers: true,
      siteStorageNamespacing: true,
      fasterByDefault: false,
      mdx1CompatDisabledByDefault: true,
    },
  },

  url: siteUrl,
  baseUrl: siteBaseUrl,

  organizationName: 'caterlord',
  projectName: 'X1.Doc',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-HK', 'zh-TW', 'zh-SG', 'zh-CN'],
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
      'zh-HK': {
        label: '繁體中文（香港）',
        htmlLang: 'zh-HK',
      },
      'zh-TW': {
        label: '繁體中文（台灣）',
        htmlLang: 'zh-TW',
      },
      'zh-SG': {
        label: '简体中文（新加坡）',
        htmlLang: 'zh-SG',
      },
      'zh-CN': {
        label: '简体中文（中国）',
        htmlLang: 'zh-CN',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/caterlord/X1.Doc/tree/main/',
          routeBasePath: docsRouteBasePath,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: hasAlgoliaDocSearch
    ? []
    : [
        [
          '@easyops-cn/docusaurus-search-local',
          {
            indexDocs: true,
            indexBlog: false,
            indexPages: false,
            docsRouteBasePath,
            docsDir: ['docs'],
            language: ['en', 'zh'],
            hashed: 'filename',
            highlightSearchTermsOnTargetPage: true,
            explicitSearchResultPath: true,
            searchBarPosition: 'right',
          },
        ],
      ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    ...(hasAlgoliaDocSearch
      ? {
          algolia: {
            appId: algoliaAppId!,
            apiKey: algoliaApiKey!,
            indexName: algoliaIndexName!,
            contextualSearch: true,
            searchPagePath: 'search',
            ...(algoliaAskAiAssistantId
              ? {
                  askAi: algoliaAskAiAssistantId,
                }
              : {}),
          },
        }
      : {}),
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'X1 Documentations',
      logo: {
        alt: 'POS X1 Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'posSidebar',
          position: 'left',
          label: 'POS User Manual',
        },
        {
          type: 'docSidebar',
          sidebarId: 'hqSidebar',
          position: 'left',
          label: 'HQ User Manual',
        },
        {
          type: 'docSidebar',
          sidebarId: 'mcpSidebar',
          position: 'left',
          label: 'MCP User Manual',
        },
        {
          type: 'docSidebar',
          sidebarId: 'releaseNotesSidebar',
          position: 'left',
          label: 'Release Notes',
        },
        {
          label: 'X1',
          href: 'https://posx1.ai/',
          position: 'right',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Manual',
          items: [
            {
              label: 'Introduction',
              to: `${docsPathPrefix}/intro`,
            },
            {
              label: 'Client Operations',
              to: `${docsPathPrefix}/client/overview`,
            },
            {
              label: 'HQ Operations',
              to: `${docsPathPrefix}/hq/overview`,
            },
            {
              label: 'MCP (Agent Platform)',
              to: `${docsPathPrefix}/mcp/overview`,
            },
            {
              label: 'X1 Website',
              to: 'https://posx1.ai/',
            },
            {
              label: 'Docs Repository',
              to: 'https://github.com/caterlord/X1.Doc',
            },
          ],
        },
      ],
      copyright: `Copyright \u00A9 ${new Date().getFullYear()} Everyware Limited.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
