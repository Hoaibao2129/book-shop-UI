import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CashierComponent} from "./cashier.component"


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component : CashierComponent,
        data: {
          title: 'Thu Ngân',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashierRoutingModule {}
