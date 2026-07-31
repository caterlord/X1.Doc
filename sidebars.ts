import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  releaseNotesSidebar: [
    'release-notes/version-notes',
  ],
  posSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Start Here',
      items: [
        'getting-started/quick-start-15-mins',
        'getting-started/first-time-initialization',
        'getting-started/access-and-navigation',
        'getting-started/navigation-and-modules',
        'getting-started/roles-and-permissions',
      ],
    },
    {
      type: 'category',
      label: 'Run a Shift',
      items: [
        'client/daily-operations',
        'client/start-shift',
        'client/sales-flow',
        'client/checkout-and-payments',
        'client/payment-errors-and-retry',
        'client/refunds-and-voids',
        'client/end-of-day',
      ],
    },
    {
      type: 'category',
      label: 'Screen Guides',
      items: [
        'client/overview',
        'client/orders-overview',
        'client/online-orders',
        'client/inventory',
        'client/reservations',
        'client/devices',
        'client/reports',
        'client/more-tools',
        'client/settings',
        'client/info',
      ],
    },
    {
      type: 'category',
      label: 'Function Guides',
      items: [
        'functions/overview',
        {
          type: 'category',
          label: 'Ordering',
          items: [
            'functions/sign-in',
            'functions/apply-discount',
            'functions/apply-service-charge',
            'functions/change-table',
            'functions/order-contact',
            'functions/to-dine-in-to-takeaway',
            'functions/split-merge-transaction',
            'functions/member-login',
            'functions/octopus-settlement',
          ],
        },
        {
          type: 'category',
          label: 'Checkout and Completed Orders',
          items: [
            'functions/take-payment',
            'functions/void-vs-return',
            'functions/reopen-order',
            'functions/reprint-receipt',
          ],
        },
        {
          type: 'category',
          label: 'Devices',
          items: [
            'functions/manage-printers',
            'functions/configure-payment-devices',
            'functions/configure-input-devices',
            'functions/configure-x1-products',
          ],
        },
        {
          type: 'category',
          label: 'More Tools',
          items: [
            'functions/pay-in-pay-out',
            'functions/day-end',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/function-feature-map',
        'reference/troubleshooting',
        'reference/data-retention-and-storage',
        'reference/terminology',
      ],
    },
  ],
  hqSidebar: [
    'hq/overview',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'hq/dashboard',
        'hq/account-and-profile',
        'hq/organization',
        'hq/brand-shop-and-channel-scope',
        'hq/making-safe-hq-changes',
        'hq/copilot',
      ],
    },
    {
      type: 'category',
      label: 'Core Settings',
      items: [
        {
          type: 'category',
          label: 'Store Settings',
          items: [
            'hq/store-settings/overview',
            'hq/store-settings/general-info',
            'hq/store-settings/workday-schedule',
            'hq/integrations/device-settings',
            'hq/store-settings/system-parameters',
            'hq/store-settings/tables-and-floorplan',
            'hq/store-settings/reservations',
          ],
        },
        {
          type: 'category',
          label: 'POS Settings',
          items: [
            'hq/pos-settings/overview',
            'hq/pos-settings/payment-methods',
            'hq/pos-settings/tax-and-surcharge',
            'hq/pos-settings/payment-vendors',
            'hq/pos-settings/pos-users',
            'hq/pos-settings/departments',
            'hq/pos-settings/function-reasons',
            'hq/menu-catalog/promotions',
            'hq/menu-catalog/discounts',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Menu & Catalog Management',
      items: [
        'hq/menu-catalog/overview',
        'hq/menu-catalog/menu-items',
        'hq/menu-catalog/categories',
        'hq/menu-catalog/smart-categories',
        'hq/menu-catalog/pos-menus',
        'hq/menu-catalog/modifiers',
        'hq/menu-catalog/meal-sets',
        'hq/menu-catalog/button-styles',
      ],
    },
    {
      type: 'category',
      label: 'Online Ordering',
      items: [
        'hq/online-ordering/overview',
        'hq/online-ordering/categories-and-items',
        'hq/online-ordering/call-to-action',
        'hq/online-ordering/menus-and-combinations',
        'hq/online-ordering/general-settings',
        'hq/online-ordering/third-party-platforms',
        'hq/online-ordering/channel-mapping',
        'hq/online-ordering/ui-translations',
      ],
    },
    {
      type: 'category',
      label: 'Reports & Analytics',
      items: [
        'hq/logs',
        'hq/insights',
        'hq/reports/overview',
        'hq/reports/sales-reports',
        'hq/reports/operations-reports',
      ],
    },
    {
      type: 'category',
      label: 'Ecosystem & Integrations',
      items: [
        'hq/integrations/overview',
        'hq/integrations/partner-settings',
      ],
    },
    {
      type: 'category',
      label: 'Marketplace & Billing',
      items: [
        'hq/marketplace/catalog',
        'hq/marketplace/my-subscriptions',
        'hq/marketplace/billing-and-subscriptions',
      ],
    },
  ],
  mcpSidebar: [
    'mcp/overview',
    'mcp/connect-ai-assistant',
    'mcp/capabilities',
    'mcp/safe-use',
    'mcp/troubleshooting',
  ],
};

export default sidebars;
