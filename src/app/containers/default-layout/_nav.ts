import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Tổng Quan',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: ''
    }
  },
  {
    title: true,
    name: 'Nhân Viên'
  },
  {
    name: 'Thu Ngân',
    url: '/thu-ngan',
    iconComponent: { name: 'cil-notes' }
  },
  {
    name: 'Đơn Trong Ngày',
    url: '/don-hang-trong-ngay',
    iconComponent: { name: 'cil-drop' }
  },
  // {
  //   name: 'Typography',
  //   url: '/theme/typography',
  //   linkProps: { fragment: 'someAnchor' },
  //   iconComponent: { name: 'cil-pencil' }
  // },
  {
    name: 'Quản Lý',
    title: true
  },
  {
    name: 'Doanh Thu',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Doanh Thu Nhân Viên',
        url: '/base/accordion'
      },
      {
        name: 'Doanh Thu Cửa Hàng',
        url: '/base/breadcrumbs'
      },
      // {
      //   name: 'Cards',
      //   url: '/base/cards'
      // },
      // {
      //   name: 'Carousel',
      //   url: '/base/carousel'
      // },
      // {
      //   name: 'Collapse',
      //   url: '/base/collapse'
      // },
      // {
      //   name: 'List Group',
      //   url: '/base/list-group'
      // },
      // {
      //   name: 'Navs & Tabs',
      //   url: '/base/navs'
      // },
      // {
      //   name: 'Pagination',
      //   url: '/base/pagination'
      // },
      // {
      //   name: 'Placeholder',
      //   url: '/base/placeholder'
      // },
      // {
      //   name: 'Popovers',
      //   url: '/base/popovers'
      // },
      // {
      //   name: 'Progress',
      //   url: '/base/progress'
      // },
      // {
      //   name: 'Spinners',
      //   url: '/base/spinners'
      // },
      // {
      //   name: 'Tables',
      //   url: '/base/tables'
      // },
      // {
      //   name: 'Tabs',
      //   url: '/base/tabs'
      // },
      // {
      //   name: 'Tooltips',
      //   url: '/base/tooltips'
      // }
    ]
  },
  {
    name: 'Kho',
    url: "/kho",
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Sách',
        url: '/kho/sach'
      },
      // {
      //   name: 'Button groups',
      //   url: '/buttons/button-groups'
      // },
      // {
      //   name: 'Dropdowns',
      //   url: '/buttons/dropdowns'
      // }
    ]
  },
  {
    name: 'Nhân viên',
    url: '/nhan-vien',
    iconComponent: { name: 'cil-notes' },
    // children: [
    //   {
    //     name: 'Form Control',
    //     url: '/forms/form-control'
    //   },
    //   {
    //     name: 'Select',
    //     url: '/forms/select'
    //   },
    //   {
    //     name: 'Checks & Radios',
    //     url: '/forms/checks-radios'
    //   },
    //   {
    //     name: 'Range',
    //     url: '/forms/range'
    //   },
    //   {
    //     name: 'Input Group',
    //     url: '/forms/input-group'
    //   },
    //   {
    //     name: 'Floating Labels',
    //     url: '/forms/floating-labels'
    //   },
    //   {
    //     name: 'Layout',
    //     url: '/forms/layout'
    //   },
    //   {
    //     name: 'Validation',
    //     url: '/forms/validation'
    //   }
    // ]
  },
  {
    name: 'Khách Hàng',
    url: '/khach-hang',
    iconComponent: { name: 'cil-chart-pie' }
  },
  {
    name: 'Cài Đặt',
    iconComponent: { name: 'cil-star' },
    url: '/cai-dat',
    children: [
      {
        name: 'Vai trò',
        url: '/cai-dat/vai-tro',
        // badge: {
        //   color: 'success',
        //   text: 'FREE'
        // }
      },
      {
        name: 'Khuyến Mãi',
        url: '/cai-dat/khuyen-mai'
      },
      // {
      //   name: 'CoreUI Brands',
      //   url: '/icons/brands'
      // }
    ]
  },
  {
    name: 'Báo Cáo',
    url: '/bao-cao',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Doanh Thu',
        url: '/bao-cao/bao-cao-doanh-thu'
      },
      {
        name: 'Đơn Đã Huỷ',
        url: '/bao-cao/don-hang-da-huy'
      },
      {
        name: 'Lịch Sử Nhập',
        url: '/bao-cao/lich-su-nhap-hang'
      },
      {
        name: 'Lịch Sử Đơn Hàng',
        url: '/bao-cao/lich-su-don-hang'
      },
    ]
  },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   iconComponent: { name: 'cil-calculator' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   title: true,
  //   name: 'Extras'
  // },
  // {
  //   name: 'Pages',
  //   url: '/login',
  //   iconComponent: { name: 'cil-star' },
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500'
  //     }
  //   ]
  // },
  // {
  //   title: true,
  //   name: 'Links',
  //   class: 'py-0'
  // },
  // {
  //   name: 'Docs',
  //   url: 'https://coreui.io/angular/docs/templates/installation',
  //   iconComponent: { name: 'cil-description' },
  //   attributes: { target: '_blank', class: '-text-dark' },
  //   class: 'mt-auto'
  // },
  // {
  //   name: 'Try CoreUI PRO',
  //   url: 'https://coreui.io/product/angular-dashboard-template/',
  //   iconComponent: { name: 'cil-layers' },
  //   attributes: { target: '_blank' }
  // }
];
