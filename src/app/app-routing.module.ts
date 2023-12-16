import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { BooksModule } from "../../src/app/components/books/books.module"
import { LoginComponent } from "../app/components/login/login.component"

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Trang Chủ'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'thu-ngan',
        loadChildren: () =>
          import('../app/components/cashier/cashier.module').then((m) => m.CashierModule)
      },
      {
        path: 'khach-hang',
        loadChildren: () =>
          import('../app/components/customer/customer.module').then((m) => m.CustomerModule)
      },
      {
        path: 'kho',
        loadChildren: () =>
          import('../app/components/books/books.module').then((m) => m.BooksModule)
      },
      {
        path: 'nhan-vien',
        loadChildren: () =>
          import("../app/components/staff/staff.module").then((m) => m.StaffModule)
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule)
      },
      {
        path: 'cai-dat',
        loadChildren: () =>
          import('../app/components/setting/role/role.module').then((m) => m.RoleModule)
      },
      {
        path: 'bao-cao',
        loadChildren: () =>
          import('../app/components/report/report.module').then((m) => m.ReportModule)
      },
      {
        path: 'don-hang-trong-ngay',
        loadChildren: () =>
          import("../app/components/manage-order/manage-order.module").then((m) => m.ManageOrderModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
