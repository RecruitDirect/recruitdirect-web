import {
  IconChartPie,
  IconCoffee,
  IconCpu,
  IconFlag,
  IconBasket,
  IconAperture,
  IconLayoutGrid,
  IconBox,
  IconMessage2,
  IconFiles,
  IconCalendar,
  IconUserCircle,
  IconChartBar,
  IconShoppingCart,
  IconChartLine,
  IconChartArea,
  IconChartDots,
  IconChartArcs,
  IconChartCandle,
  IconChartDonut3,
  IconChartRadar,
  IconLayout,
  IconCardboards,
  IconPhoto,
  IconFileText,
  IconBoxAlignBottom,
  IconBoxAlignLeft,
  IconFileDots,
  IconEditCircle,
  IconApps,
  IconBorderAll,
  IconBorderHorizontal,
  IconBorderInner,
  IconBorderTop,
  IconBorderVertical,
  IconBorderStyle2,
  IconLogin,
  IconCircleDot,
  IconUserPlus,
  IconRotate,
  IconZoomCode,
  IconSettings,
  IconAlertCircle,
  IconBrandTabler,
  IconCodeAsterix,
  IconBrandCodesandbox,
  IconColumns,
  IconRowInsertBottom,
  IconEyeTable,
  IconSortAscending,
  IconPageBreak,
  IconFilter,
  IconBoxModel,
  IconServer,
  IconJumpRope,
  IconLayoutKanban,
  IconWorldSearch
} from '@tabler/icons-vue';

export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  chip?: string;
  chipBgColor?: string;
  chipColor?: string;
  chipVariant?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  { header: 'Home' },
  {
    title: "Analytical",
    icon: IconChartPie,
    to: "/dashboards/analytical",
  },
  {
    title: "Classic",
    icon: IconCoffee,
    to: "/dashboards/classic",
  },
  {
    title: "Demographical",
    icon: IconCpu,
    to: "/dashboards/demographical",
  },
  {
    title: "Minimal",
    icon: IconFlag,
    to: "/dashboards/minimal",
  },
  {
    title: "eCommerce",
    icon: IconShoppingCart,
    to: "/dashboards/ecommerce",
  },
  {
    title: "Modern",
    icon: IconAperture,
    to: "/dashboards/modern",
  },
  { header: 'Apps' },
  {
    title: 'Contact',
    icon: IconBox,
    to: '/apps/contacts',
    chip: '2',
    chipColor: 'surface',
    chipBgColor: 'secondary'
  },

  {
    title: 'Blog',
    icon: IconChartDonut3,
    to: '/',
    children: [
      {
        title: 'Posts',
        icon: IconCircleDot,
        to: '/apps/blog/posts'
      },
      {
        title: 'Detail',
        icon: IconCircleDot,
        to: '/apps/blog/early-black-friday-amazon-deals-cheap-tvs-headphones'
      }
    ]
  },
  {
    title: 'E-Commerce',
    icon: IconBasket,
    to: '/ecommerce/',
    children: [
      {
        title: 'Shop',
        icon: IconCircleDot,
        to: '/ecommerce/products'
      },
      {
        title: 'Detail',
        icon: IconCircleDot,
        to: '/ecommerce/product/detail/1'
      },
      {
        title: 'List',
        icon: IconCircleDot,
        to: '/ecommerce/productlist'
      },
      {
        title: 'Checkout',
        icon: IconCircleDot,
        to: '/ecommerce/checkout'
      }
    ]
  },
  {
    title: 'JobList',
    icon: IconWorldSearch,
    to: '/recruiter/joblist'
  },
  {
    title: 'Chats',
    icon: IconMessage2,
    to: '/apps/chats'
  },
  {
    title: 'User Profile',
    icon: IconUserCircle,
    to: '/',
    children: [
      {
        title: 'Profile',
        icon: IconCircleDot,
        to: '/apps/user/profile'
      },
      {
        title: 'Followers',
        icon: IconCircleDot,
        to: '/apps/user/profile/followers'
      },
      {
        title: 'Friends',
        icon: IconCircleDot,
        to: '/apps/user/profile/friends'
      },
      {
        title: 'Gallery',
        icon: IconCircleDot,
        to: '/apps/user/profile/gallery'
      }
    ]
  },
  {
    title: 'Notes',
    icon: IconFiles,
    to: '/apps/notes'
  },
  {
    title: 'Calendar',
    icon: IconCalendar,
    to: '/apps/calendar'
  },
  {
    title: 'Kanban',
    icon: IconLayoutKanban,
    to: '/apps/kanban'
  },

  { header: 'Components' },
  {
    title: 'Ui Components',
    icon: IconLayoutGrid,
    to: '/components/',
    children: [
      {
        title: 'Alert',
        icon: IconCircleDot,
        to: '/ui-components/alert'
      },
      {
        title: 'Accordion',
        icon: IconCircleDot,
        to: '/ui-components/accordion'
      },
      {
        title: 'Avatar',
        icon: IconCircleDot,
        to: '/ui-components/avatar'
      },
      {
        title: 'Chip',
        icon: IconCircleDot,
        to: '/ui-components/chip'
      },
      {
        title: 'Dialog',
        icon: IconCircleDot,
        to: '/ui-components/dialogs'
      },
      {
        title: 'List',
        icon: IconCircleDot,
        to: '/ui-components/list'
      },
      {
        title: 'Menus',
        icon: IconCircleDot,
        to: '/ui-components/menus'
      },
      {
        title: 'Rating',
        icon: IconCircleDot,
        to: '/ui-components/rating'
      },
      {
        title: 'Tabs',
        icon: IconCircleDot,
        to: '/ui-components/tabs'
      },
      {
        title: 'Tooltip',
        icon: IconCircleDot,
        to: '/ui-components/tooltip'
      },
      {
        title: 'Typography',
        icon: IconCircleDot,
        to: '/ui-components/typography'
      }
    ]
  },
  { header: 'Charts' },
  {
    title: 'Line',
    icon: IconChartLine,
    to: '/charts/line-chart'
  },
  {
    title: 'Gredient',
    icon: IconChartArcs,
    to: '/charts/gredient-chart'
  },
  {
    title: 'Area',
    icon: IconChartArea,
    to: '/charts/area-chart'
  },
  {
    title: 'Candlestick',
    icon: IconChartCandle,
    to: '/charts/candlestick-chart'
  },
  {
    title: 'Column',
    icon: IconChartDots,
    to: '/charts/column-chart'
  },
  {
    title: 'Doughnut & Pie',
    icon: IconChartDonut3,
    to: '/charts/doughnut-pie-chart'
  },
  {
    title: 'Radialbar & Radar',
    icon: IconChartRadar,
    to: '/charts/radialbar-chart'
  },
  { header: 'Forms' },
  {
    title: 'Form Elements',
    icon: IconApps,
    to: '/components/',
    children: [
      {
        title: 'Autocomplete',
        icon: IconCircleDot,
        to: '/forms/form-elements/autocomplete'
      },
      {
        title: 'Combobox',
        icon: IconCircleDot,
        to: '/forms/form-elements/combobox'
      },
      {
        title: 'Button',
        icon: IconCircleDot,
        to: '/forms/form-elements/button'
      },
      {
        title: 'Checkbox',
        icon: IconCircleDot,
        to: '/forms/form-elements/checkbox'
      },
      {
        title: 'Custom Inputs',
        icon: IconCircleDot,
        to: '/forms/form-elements/custominputs'
      },
      {
        title: 'File Inputs',
        icon: IconCircleDot,
        to: '/forms/form-elements/fileinputs'
      },
      {
        title: 'Radio',
        icon: IconCircleDot,
        to: '/forms/form-elements/radio'
      },
      {
        title: 'Date Time',
        icon: IconCircleDot,
        to: '/forms/form-elements/date-time'
      },
      {
        title: 'Select',
        icon: IconCircleDot,
        to: '/forms/form-elements/select'
      },
      {
        title: 'Slider',
        icon: IconCircleDot,
        to: '/forms/form-elements/slider'
      },
      {
        title: 'Switch',
        icon: IconCircleDot,
        to: '/forms/form-elements/switch'
      }
    ]
  },
  {
    title: 'Form Layout',
    icon: IconFileText,
    to: '/forms/form-layouts'
  },
  {
    title: 'Form Horizontal',
    icon: IconBoxAlignBottom,
    to: '/forms/form-horizontal'
  },
  {
    title: 'Form Vertical',
    icon: IconBoxAlignLeft,
    to: '/forms/form-vertical'
  },
  {
    title: 'Form Custom',
    icon: IconFileDots,
    to: '/forms/form-custom'
  },
  {
    title: 'Form Validation',
    icon: IconFiles,
    to: '/forms/form-validation'
  },
  {
    title: 'Editor',
    icon: IconEditCircle,
    to: '/forms/editor'
  },

  { header: 'Widgets' },
  {
    title: 'Cards',
    icon: IconCardboards,
    to: '/widgets/cards'
  },
  {
    title: 'Banners',
    icon: IconPhoto,
    to: '/widgets/banners'
  },
  {
    title: 'Charts',
    icon: IconChartBar,
    to: '/widgets/charts'
  },
  { header: 'Tables' },
  {
    title: 'Basic Table',
    icon: IconBorderAll,
    to: '/tables/basic'
  },
  {
    title: 'Dark Table',
    icon: IconBorderHorizontal,
    to: '/tables/dark'
  },
  {
    title: 'Density Table',
    icon: IconBorderInner,
    to: '/tables/density'
  },
  {
    title: 'Fixed Header Table',
    icon: IconBorderTop,
    to: '/tables/fixed-header'
  },
  {
    title: 'Height Table',
    icon: IconBorderVertical,
    to: '/tables/height'
  },
  {
    title: 'Editable Table',
    icon: IconBorderStyle2,
    to: '/tables/editable'
  },
   { header: 'Data Tables' },
  {
    title: 'Basic Table',
    icon: IconColumns,
    to: '/datatables/basic'
  },
  {
    title: 'Header Table',
    icon: IconRowInsertBottom,
    to: '/datatables/header'
  },
  {
    title: 'Selection Table',
    icon: IconEyeTable,
    to: '/datatables/selection'
  },
  {
    title: 'Sorting Table',
    icon: IconSortAscending,
    to: '/datatables/sorting'
  },
  {
    title: 'Pagination Table',
    icon: IconPageBreak,
    to: '/datatables/pagination'
  },
  {
    title: 'Filtering Table',
    icon: IconFilter,
    to: '/datatables/filtering'
  },
  {
    title: 'Grouping Table',
    icon: IconBoxModel,
    to: '/datatables/grouping'
  },
  {
    title: 'Table Slots',
    icon: IconServer,
    to: '/datatables/slots'
  },
  { header: 'Authentication' },

  {
    title: 'Login',
    icon: IconLogin,
    to: '#',
    children: [
      {
        title: 'Side Login',
        icon: IconCircleDot,
        to: '/'
      },
      {
        title: 'Boxed Login',
        icon: IconCircleDot,
        to: '/auth/login2'
      }
    ]
  },
  {
    title: 'Register',
    icon: IconUserPlus,
    to: '#',
    children: [
      {
        title: 'Side Register',
        icon: IconCircleDot,
        to: '/auth/register'
      },
      {
        title: 'Boxed Register',
        icon: IconCircleDot,
        to: '/auth/register2'
      }
    ]
  },
  {
    title: 'Forgot Password',
    icon: IconRotate,
    to: '#',
    children: [
      {
        title: 'Side Forgot Password',
        icon: IconCircleDot,
        to: '/auth/forgot-password'
      },
      {
        title: 'Boxed Forgot Password',
        icon: IconCircleDot,
        to: '/auth/forgot-password2'
      }
    ]
  },
  {
    title: 'Two Steps',
    icon: IconZoomCode,
    to: '#',
    children: [
      {
        title: 'Side Two Steps',
        icon: IconSettings,
        to: '/auth/two-step'
      },
      {
        title: 'Boxed Two Steps',
        icon: IconSettings,
        to: '/auth/two-step2'
      }
    ]
  },

  {
    title: 'Error',
    icon: IconAlertCircle,
    to: '/auth/404'
  },
  {
    title: 'Maintenance',
    icon: IconSettings,
    to: '/auth/maintenance'
  },
  { header: "s" },
  {
    title: "Material",
    icon: IconBrandCodesandbox,
    to: "/icons/material",
  },
  {
    title: "Tabler",
    icon: IconBrandTabler,
    to: "/icons/tabler",
  },

];

export default sidebarItem;
