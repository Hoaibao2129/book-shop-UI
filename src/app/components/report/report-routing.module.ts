import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportHistoryComponent } from "./import-history/import-history.component"
import { ExportHistoryComponent } from "./export-history/export-history.component"
import { OrderCancelComponent } from "./order-cancel/order-cancel.component"
import { RevenueComponent } from "./revenue/revenue.component"
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'lich-su-nhap-hang',
        component : ImportHistoryComponent,
        data: {
          title: 'Lịch sử nhập hàng',
        },
      },
      {
        path: "lich-su-don-hang",
        component : ExportHistoryComponent,
        data: {
          title : "Lịch sử đơn hàng"
        }
      },
      {
        path : "don-hang-da-huy",
        component : OrderCancelComponent,
        data : {
          title : "Đơn hàng đã huỷ"
        }
      },
      {
        path : "bao-cao-doanh-thu",
        component : RevenueComponent,
        data : {
          title : "Báo cáo doanh thu"
        }
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportHistoryRoutingModule {}
