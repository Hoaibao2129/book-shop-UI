import { Component, OnInit } from '@angular/core';
import { InvoiceService } from "../../../store/services/invoice.service"
import * as _ from 'lodash';
@Component({
  selector: 'app-order-cancel',
  templateUrl: './order-cancel.component.html',
  styleUrls: ['./order-cancel.component.scss']
})
export class OrderCancelComponent implements OnInit {

  listInvoice : any ;
  constructor(
    private invoiceService : InvoiceService,
  ){}

  ngOnInit() {
    this.onLoadInvoiceDelete();
  }

  onLoadInvoiceDelete(){
    this.invoiceService.getAllInvoiceWasDelete().subscribe((response : any) =>{
      this.listInvoice =_.cloneDeep(response);      
    })
  }

}
