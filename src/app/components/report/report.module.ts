import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportHistoryComponent } from "./import-history/import-history.component"
import { ImportHistoryRoutingModule } from "./report-routing.module"
import { ExportHistoryComponent } from './export-history/export-history.component';
import {
  AccordionModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonModule,
  CardModule,
  CarouselModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  NavModule,
  PaginationModule,
  PlaceholderModule,
  PopoverModule,
  ProgressModule,
  SharedModule,
  SpinnerModule,
  TableModule,
  TabsModule,
  TooltipModule,
  UtilitiesModule,
  AlertModule,
  ModalModule,
  ToastModule,
} from '@coreui/angular';
import { OrderCancelComponent } from './order-cancel/order-cancel.component';
import { RevenueComponent } from './revenue/revenue.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ImportHistoryComponent,
    ExportHistoryComponent,
    OrderCancelComponent,
    RevenueComponent,
  ],
  imports: [
    CommonModule,
    ImportHistoryRoutingModule,
    AccordionModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    CollapseModule,
    DropdownModule,
    FormModule,
    GridModule,
    ListGroupModule,
    NavModule,
    PaginationModule,
    PlaceholderModule,
    PopoverModule,
    ProgressModule,
    SharedModule,
    SpinnerModule,
    TableModule,
    TabsModule,
    TooltipModule,
    UtilitiesModule,
    AlertModule,
    ModalModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReportModule { }
