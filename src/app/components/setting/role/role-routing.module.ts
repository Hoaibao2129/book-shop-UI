import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleComponent } from "./role.component";
import { InsertRoleComponent } from "./insert-role/insert-role.component";
import { PromotionComponent } from "../promotion/promotion.component"

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'vai-tro',
        component : RoleComponent,
        data: {
          title: 'Vai Trò',
        },
      },
      {
        path: "them-vai-tro",
        component : InsertRoleComponent,
        data : {
          title : "Thêm Vai Trò"
        }
      },
      {
        path: "khuyen-mai",
        component : PromotionComponent,
        data:{
          title : "Danh Sách Khuyến Mãi"
        }
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoleRoutingModule {}
