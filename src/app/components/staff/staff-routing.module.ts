import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from "./staff.component"
import { InsertStaffComponent } from "./insert-staff/insert-staff.component"
import { InfoStaffComponent } from "./info-staff/info-staff.component"
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component : StaffComponent,
        data :{
          title : "Danh sách nhân viên"
        }
      },
      {
        path: 'them-nhan-vien',
        component : InsertStaffComponent,
        data:{
          title : "Thêm nhân viên mới"
        }
      },
      {
        path: 'thong-tin-nhan-vien/:id',
        component : InfoStaffComponent,
        data :{
          title : "Thông tin nhân viên"
        }
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule {}
