import { Component, OnInit } from '@angular/core';
import { PromotionService } from "../../../store/services/promotion.service"
import * as _ from 'lodash';
import { NotifierService } from 'angular-notifier';
import { Promotion } from "../../../models/promotionModel"
@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {

  visibleDelete : boolean = false;
  visibleInsert : boolean = false;
  promotion : any [];
  _idDelete : string = "";
  totalPayment : any = "";
  discount : any = "";

  private readonly notifier: NotifierService;

  constructor(
    private promotionService : PromotionService,
    private notifierService: NotifierService,
  ){
    this.notifier = notifierService;
  }

  ngOnInit(){
    this.onLoadPromotion();
  }

  onLoadPromotion(){
    this.promotionService.getAllPromotion().subscribe((response : any) =>{    
      this.promotion = _.cloneDeep(response);
    })
  }

  onHandleDelete(_id : string){
    this._idDelete = "";
    this._idDelete = _id;
    this.toggleLiveDelete();
  }

  onDelete(){
    this.promotionService.deletePromotion(this._idDelete).subscribe((response : any) =>{
      this.onLoadPromotion();
      this.toggleLiveDelete();
      this.notifier.notify("success", response)
    })
  }

  onSavePromotion(){
    let dataInsert : Promotion = {
      totalPayment : this.totalPayment,
      discount : this.discount,
      _id : ""
    } ;
    this.promotionService.insertPromotion(dataInsert).subscribe((response : any) =>{
      if(response){
        this.totalPayment = "Nhập giá trị khuyến mãi";
        this.discount = "Nhập phần trăm khuyến mãi";
        this.onLoadPromotion();
        this.toggleLiveInsert();
        this.notifier.notify("success", "TẠO KHUYẾN MÃI MỚI THÀNH CÔNG !")
      }
    })
  }

  handleLiveDelete(event : any){
    this.visibleDelete = event;
  }

  handleLiveInsert(event : any){
    this.visibleInsert = event;
  }

  toggleLiveDelete(){
    this.visibleDelete = !this.visibleDelete;
  }

  toggleLiveInsert(){
    this.visibleInsert = !this.visibleInsert;
  }

  onHandleInsertPromotion(){
    this.toggleLiveInsert();
  }

}
