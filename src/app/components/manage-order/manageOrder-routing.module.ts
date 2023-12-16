import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageOrderComponent } from "./manage-order.component"

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component : ManageOrderComponent,
        data: {
          title: 'Danh sách đơn hàng trong ngày',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageOrderRoutingModule {}
