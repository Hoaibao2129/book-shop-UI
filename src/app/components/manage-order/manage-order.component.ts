import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/store/services/invoice.service';
import * as _ from 'lodash';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.scss']
})
export class ManageOrderComponent implements OnInit {

  listInvoices : any = [];
  visible : boolean = false;
  note : string = '';
  quantityImport : string = '';
  _id : string = '' ;
  staffId : any = '';
  private readonly notifier: NotifierService;

  constructor(
    private invoiceService : InvoiceService,
    private notifierService: NotifierService,
  ){
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.getStaffId();
    this.onLoadInvoiceDay();
  }

  onLoadInvoiceDay(){
    this.invoiceService.getAllInvoiceDay().subscribe((response) =>{
      this.listInvoices = _.cloneDeep(response);
    })
  }

  onHanldeDelete(_id : string){
    this._id = _id;
    this.toggleLiveDemo();
  }

  onDeleteOrder(){
    let data = {
      _id : this._id,
      staffId : this.staffId,
      note : this.note
    }
    this.invoiceService.deleteInvoiceDay(data).subscribe((response : any) =>{
      this.notifier.notify("success", response);
      this.toggleLiveDemo();
      this.onLoadInvoiceDay();
    })
  }

  handleLiveDemoChange(event : any){
    this.visible = event;
  }

  toggleLiveDemo(){
    this.visible = !this.visible;
  }

  getStaffId(){
    this.staffId = localStorage.getItem("_idStaff");
  }

}
