import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { BookService } from '../../store/services/book.service'
import { InvoiceService } from "../../store/services/invoice.service"
import { NotifierService } from 'angular-notifier';
import { CustomerService } from "../../store/services/customer.service"
import { Customer } from 'src/app/models/customerModel';
import { Router } from '@angular/router';
import { PromotionService } from "../../store/services/promotion.service"
@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.scss']
})
export class CashierComponent implements OnInit {
  public visible = false;
  public createCustomer = false;
  private readonly notifier: NotifierService;
  data : Array<any> = []
  filter : any = {name : "" , custommer : ""};
  listBuyBooks : Array<any> = [];
  infoBook : FormGroup;
  quantity : number = 0 ;
  discount : number = 0 ;
  totalMoney : number = 0 ;
  price : number = 0 ;
  dataCustomer : Array<any> = [];
  resultDataCustomer : Array<any> = [];
  textId : string ;
  customerForm: FormGroup;
  promotion : any = "";
  use : any = false;
  
  constructor(
    private bookService : BookService,
    private invoiceService : InvoiceService,
    private notifierService: NotifierService,
    private customerService : CustomerService,
    private promotionService : PromotionService,
    public router : Router,
  ){
    this.notifier = notifierService;
  }

  ngOnInit(){ 
    this.onCheckLogin();     
    this.infoBook = this.infoBookForms;
    this.customerForm = this.createCustomerForm;
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.key !== 'Enter') {
      this.textId += event.key;
    }else{
      let newTextId : String = "" ;
     const resutl = this.textId.indexOf("undefined");
     if(resutl != -1){
      newTextId = this.textId.slice(resutl + 9 , this.textId.length );
     }else{
      newTextId = this.textId;
     }  
      this.onQrCode(newTextId)
      this.textId = "";
    } 
  }

  toggleLiveCreateCustomer(){
    this.createCustomer = !this.createCustomer;
  }

  handleCreateCustomer(event : any){
    this.createCustomer = event;
  }
  
  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }
  
  onSearch(data : any){
    this.filter.name = data ;
    this.bookService.filterBook("name="+this.filter.name).subscribe((response : any) =>{
      this.data = response;       
    })
    this.filter.name = "";
  }

  onQrCode(id : any){
    this.bookService.getListBookById(id).subscribe((response : any) =>{
      let data = {
        bookId : response[0]._id,
        name : response[0].name,
        price : response[0].price,
        _id : response[0]._id
      }
      this.onResult(data);
    })
  }

  onResult(data : any){
    let result = this.listBuyBooks.find((item) => {
      return item._id === data._id
    })
    if (result) {
      this.notifier.notify("warning", "Sản phẩm đã có trong danh sách thanh toán");
    } else {
      this.infoBookForms.setValue({
        id : data._id,
        name: data.name,
        quantity: "1",
        total: data.price,
        discount: "0"
      })
      data = {
        ...data,
        quantity: 1,
        discount: 0,
        totalMoney: data.price
      }
      this.listBuyBooks.push(data);
      this.infoBook = this.infoBookForms;
      this.quantity = 0
      this.discount = 0
      this.totalMoney = 0
      this.price = 0
      this.listBuyBooks.map((item) => {
        this.quantity += Number(item.quantity);
        this.discount += Number(item.discount);
        this.totalMoney += Number(item.totalMoney);
        this.price += Number(item.price);
      })
      this.onTotal();
    }

  }

  onPayment(){
    if(!this.use){
      this.promotion = "";
    }
    let infoPayment : Array<any> = [];
    let data : any = null;
    this.listBuyBooks.map((item)=>{
      infoPayment.push({
        bookId : item._id,
        bookName : item.name,
        bookPrice : item.price,
        quantity : item.quantity
      })
    }) 
    if(this.resultDataCustomer.length > 0){
      data = {
        infoPayment : infoPayment,
        customerName : this.resultDataCustomer[0].name,
        customerID : this.resultDataCustomer[0]._id,
        address: this.resultDataCustomer[0].address,
        birthDay: this.resultDataCustomer[0].birthday,
        numberPhone: this.resultDataCustomer[0].tel,
        use : this.use,
        discount : this.promotion ? this.promotion.discount : 0,
      }
    }else{
      data = {
        infoPayment : infoPayment,
        use : false ,
        discount : this.promotion ? this.promotion.discount : 0
      }
    }
    console.log(data);
    this.invoiceService.postRevoive(data).subscribe(response =>{
      this.listBuyBooks = [];
      this.infoBookForms.setValue({
        id :"",
        name: "",
        quantity: "",
        total: "",
        discount: ""
      })
      this.filter.name = ""
      if(typeof response === "string"){
        this.notifier.notify( "warning", response);
      }else{
        this.notifier.notify( "success", "Thanh toán hoàn tất");
      }
      this.toggleLiveDemo();
      this.resultDataCustomer = [];
      this.filter.custommer = "";
      if(this.use){
        this.use = !this.use;
      }
    })
    
  }

  onTotal(){
    this.quantity = 0 ;
    this.discount = 0 ;
    this.totalMoney = 0 ;
    this.price = 0 ;
    this.listBuyBooks.map((item) =>{
      this.quantity += Number(item.quantity);
      this.discount += Number(item.discount);
      this.totalMoney += Number(item.totalMoney);
      this.price += Number(item.price);
    })
    if(this.use){
      this.totalMoney = this.totalMoney - (this.totalMoney * (this.promotion.discount / 100));
    }

  }

  onChangeQuantity(data:any){
    this.listBuyBooks.find((item)=>{
      if(item._id === data.id){
        item.quantity = data.quantity;
        item.totalMoney = item.price*item.quantity - item.discount;
      }
    })
  this.onTotal()
  }

  onChangeDiscount(data : any){
    this.listBuyBooks.find((item)=>{
      if(item._id === data.id){
        item.discount = data.discount
        item.quantity = data.quantity;
        item.totalMoney = item.price*item.quantity - item.discount;
      }
    })
   this.onTotal();
  }

  onSearchCustomer(data : string){
    if(data.length === 10){
      this.customerService.getCustomerByTel(data).subscribe((response : any) =>{
        this.dataCustomer = response ;
      })
    }else{
      this.dataCustomer = [];
    }
  }

  onResultCustomer(data : any){
    this.promotionService.getAllPromotion().subscribe((response : any) => {
      if(response.length > 0){
        response.map((val : any) => {
          if(val.totalPayment === data.totalPayment || val.totalPayment < data.totalPayment){
            this.promotion = val; 
          }
        })
      }
    })
    this.resultDataCustomer = [];
    this.resultDataCustomer.push(data);    
  }

  onCreateCustomer() {
    let customer: Customer = {
      name: this.customerForm.value.name,
      tel: this.customerForm.value.tel,
      address: this.customerForm.value.address,
      birthday: this.customerForm.value.birthday,
    }
    this.customerService.insertCustomer(customer).subscribe(response => {
      if (typeof response === "string") {
        this.notifier.notify("warning", response);
      } else {
        this.customerForm.setValue({
          name: "", tel: "", birthday: "", address: "",
        })
        this.notifier.notify("success", "Thêm khách hàng mới thành công")
        this.toggleLiveCreateCustomer();
      }

    })
  }

  onCheckLogin(){
    let result = localStorage.getItem("token");
    if(!result){
      this.router.navigate([`${"/login"}`])
    } 
  }

  handleCheckboxChange(){
    this.use = !this.use;
    this.onTotal();
  }


  createCustomerForm = new FormGroup({
    name : new FormControl('' ,[Validators.required]),
    address : new FormControl(''),
    birthday : new FormControl('' ,[Validators.required]),
    tel : new FormControl('' ,[Validators.required])
  })

  infoBookForms = new FormGroup({
    id: new FormControl(''),
    name : new FormControl(''),
    quantity : new FormControl(''),
    total : new FormControl(''),
    discount : new FormControl(''),
  })
}
