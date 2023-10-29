// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Menu',
  type: 'group',
  children: [
    {
      id: 'icons',
      title: 'Learn',
      type: 'collapse',
      icon: icons.IconWindmill,
      children: [
        {
          id: 'learn-home',
          title: 'Home',
          type: 'item',
          url: '/icons/learn-home',
          breadcrumbs: false
        },
        {
          id: 'stock-val',
          title: 'Stocks',
          type: 'item',
          url: '/icons/stock-val',
          breadcrumbs: false
        },
//        {
//          id: 'etf-guide',
//          title: 'ETFs',
//          type: 'item',
//          url: '/icons/etf-guide',
//          breadcrumbs: false
//        },

      ]
    },
    {
      id: 'util-typography',
      title: 'Find',
      type: 'item',
      url: '/utils/util-typography',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'util-color',
      title: 'News Feed',
      type: 'item',
      url: '/utils/util-color',
      icon: icons.IconPalette,
      breadcrumbs: false
    },
    {
      id: 'util-shadow',
      title: 'Portfolio Builder',
      type: 'item',
      url: '/utils/util-shadow',
      icon: icons.IconShadow,
      breadcrumbs: false
    }
  ]
};

export default utilities;
