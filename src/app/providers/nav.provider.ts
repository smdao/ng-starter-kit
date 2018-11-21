export const navItems = [
  {
    name: 'Dashboard',
    url: '/samples/core-ui/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Colors',
    url: '/samples/core-ui/theme/colors',
    icon: 'icon-drop'
  },
  {
    name: 'Typography',
    url: '/samples/core-ui/theme/typography',
    icon: 'icon-pencil'
  },
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Base',
    url: '/samples/core-ui/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Cards',
        url: '/samples/core-ui/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Carousels',
        url: '/samples/core-ui/base/carousels',
        icon: 'icon-puzzle'
      },
      {
        name: 'Collapses',
        url: '/samples/core-ui/base/collapses',
        icon: 'icon-puzzle'
      },
      {
        name: 'Forms',
        url: '/samples/core-ui/base/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Pagination',
        url: '/samples/core-ui/base/paginations',
        icon: 'icon-puzzle'
      },
      {
        name: 'Popovers',
        url: '/samples/core-ui/base/popovers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Progress',
        url: '/samples/core-ui/base/progress',
        icon: 'icon-puzzle'
      },
      {
        name: 'Switches',
        url: '/samples/core-ui/base/switches',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tables',
        url: '/samples/core-ui/base/tables',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tabs',
        url: '/samples/core-ui/base/tabs',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tooltips',
        url: '/samples/core-ui/base/tooltips',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/samples/core-ui/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Buttons',
        url: '/samples/core-ui/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Dropdowns',
        url: '/samples/core-ui/buttons/dropdowns',
        icon: 'icon-cursor'
      },
      {
        name: 'Brand Buttons',
        url: '/samples/core-ui/buttons/brand-buttons',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Charts',
    url: '/samples/core-ui/charts',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Icons',
    url: '/samples/core-ui/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'CoreUI Icons',
        url: '/samples/core-ui/icons/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Flags',
        url: '/samples/core-ui/icons/flags',
        icon: 'icon-star'
      },
      {
        name: 'Font Awesome',
        url: '/samples/core-ui/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/samples/core-ui/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/samples/core-ui/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/samples/core-ui/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Badges',
        url: '/samples/core-ui/notifications/badges',
        icon: 'icon-bell'
      },
      {
        name: 'Modals',
        url: '/samples/core-ui/notifications/modals',
        icon: 'icon-bell'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/samples/core-ui/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/samples/core-ui/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/samples/core-ui/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/samples/core-ui/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/samples/core-ui/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/samples/core-ui/500',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Download CoreUI',
    url: 'http://coreui.io/angular/',
    icon: 'icon-cloud-download',
    class: 'mt-auto',
    variant: 'success'
  },
  {
    name: 'Try CoreUI PRO',
    url: 'http://coreui.io/pro/angular/',
    icon: 'icon-layers',
    variant: 'danger'
  }
];
