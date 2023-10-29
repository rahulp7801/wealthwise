// assets
import { ProfileOutlined, IdcardOutlined,FundViewOutlined, ScheduleOutlined, CompassOutlined} from '@ant-design/icons';  // Import specific icons you use
// constant
const icons = {
  
  ProfileOutlined,
  CompassOutlined,
  IdcardOutlined,
  ScheduleOutlined,
  FundViewOutlined,
};
// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Menu',
  type: 'group',
  children: [
    {
      id: 'stock-val',
      title: 'Learn',
      type: 'item',
      url: '/icons/stock-val',
      breadcrumbs: false,
      icon: icons.ProfileOutlined,
    },
    {
      id: 'util-typography',
      title: 'Explore',
      type: 'item',
      url: '/utils/portfolio-customization',
      icon: icons.CompassOutlined,
      breadcrumbs: false
    },
    {
      id: 'util-color',
      title: 'News Feed',
      type: 'item',
      url: '/utils/news-feed',
      icon: icons.ScheduleOutlined,
      breadcrumbs: false
    },
    {
      id: 'util-shadow',
      title: 'Portfolio Advisor',
      type: 'item',
      url: '/portfolio-advisor',
      icon: icons.FundViewOutlined,
      breadcrumbs: false
    }
  ]
};

export default utilities;
