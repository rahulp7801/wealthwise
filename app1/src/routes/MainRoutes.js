import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
const Greeter = Loadable(lazy(() => import('views/utilities/learn_home')));
// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const StockValSkill = Loadable(lazy(() => import('views/learnProps/stockValSkill')))
const ETFSkill = Loadable(lazy(() => import('views/learnProps/etfGuideSkill')))
const PickStock = Loadable(lazy(() => import('valuationCourseProps/pickStock')))
const UnderstandBiz = Loadable(lazy(() => import('valuationCourseProps/understandingBusiness.js')))
const FinancialKPI = Loadable(lazy(() => import('valuationCourseProps/financialKPI.js')))
const RelativeValuationIntro = Loadable(lazy(() => import('valuationCourseProps/relValIntro.js')))
const EnterpriseValueMultiples = Loadable(lazy(() => import('valuationCourseProps/enterpriseValueMultiples.js')))
const EquityValueMultiples = Loadable(lazy(() => import('valuationCourseProps/equityValueMultiples.js')))
const DiscountedCashFlow = Loadable(lazy(() => import('valuationCourseProps/discountedCashflow.js')))
const CardBlur = Loadable(lazy(() => import('views/cardBlur')))
const Guest = Loadable(lazy(() => import('portbuilderprops/guest')))
const Customize = Loadable(lazy(() => import('portbuilderprops/customize')))
const CustomizeBard = Loadable(lazy(() => import('portbuilderprops/customizebard')))
const PortfolioDisplay = Loadable(lazy(() => import('findProps/portfolioDisplayofficial.js')))
const AddingNewStocks = Loadable(lazy(() => import('findProps/addingnewStocks.js')))
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'dashboard',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'portfolio-customization',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'news-feed',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'portfolio-advisor-home',
          element: <UtilsShadow />
        }
      ]
    },

    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'learn-home',
          element: <Greeter />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'stock-val',
          element: <StockValSkill />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'pick-stock',
          element: <PickStock />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'understand-business',
          element: <UnderstandBiz />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'financial-kpi',
          element: <FinancialKPI />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'rel-val-intro',
          element: <RelativeValuationIntro />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'enterprise-multiples',
          element: <EnterpriseValueMultiples />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'equity-multiples',
          element: <EquityValueMultiples />
        }
      ]
    },{
      path: 'icons',
      children: [
        {
          path: 'discounted-cashflow',
          element: <DiscountedCashFlow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'card-blur',
          element: <CardBlur />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'etf-guide',
          element: <ETFSkill />
        }
      ]
    },
    {
      path: 'guest',
      element: <Guest />
    },
    {
      path: 'portfolio-advisor',
      element: <Customize />
    },
    {
      path: 'customizebard',
      element: <CustomizeBard />
    },

    {
      path: 'recommendation-survey',
      element: <SamplePage />
    },
    {
      path: 'portfoliodisplay',
      element: <PortfolioDisplay />
    },
    {
      path: 'addingnewStocks',
      element: <AddingNewStocks />
    }
  ]
};

export default MainRoutes;
