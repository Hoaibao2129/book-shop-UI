import { Component, OnInit } from '@angular/core';
import { InvoiceService } from "../../../store/services/invoice.service";
import * as _ from 'lodash';
@Component({
  selector: 'app-export-history',
  templateUrl: './export-history.component.html',
  styleUrls: ['./export-history.component.scss']
})
export class ExportHistoryComponent implements OnInit {

  dataInvoice : any = [];

  constructor(
    private invoiceService : InvoiceService,
  ){

  }

  ngOnInit() {
    this.onLoadInvoice();
  }

  onLoadInvoice(){
    this.invoiceService.getAllInvoice().subscribe((response : any) =>{
      console.log(response);
      this.dataInvoice = _.cloneDeep(response);
    })
  }

}
