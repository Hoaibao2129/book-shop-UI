import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from "./customer.component"


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component : CustomerComponent,
        data: {
          title: 'Danh sách khách hàng',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
