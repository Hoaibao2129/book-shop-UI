import { Component, OnInit } from '@angular/core';
import { CustomerService } from "../../store/services/customer.service"
import * as _ from 'lodash';
import { NotifierService } from 'angular-notifier';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customerModel';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customerId : string  = '';
  listCustomers : any = [];
  visible : boolean = false ;
  createCustomer = false;
  customerForm: FormGroup;
  private readonly notifier: NotifierService;

  constructor(
    private customerService : CustomerService,
    private notifierService: NotifierService,
  ){
    this.notifier = notifierService;
    
  }

  ngOnInit() {
    this.onLoadCustomer();
    this.customerForm = this.createCustomerForm;
  }

  onLoadCustomer(){
    this.customerService.getAllCustomer().subscribe((response : any) =>{
      this.listCustomers = _.cloneDeep(response);
    })
  }

  onHandleDelete(_id : string){
    this.customerId = _id;
    this.toggleLiveDemo();
  }

  onDeleteCustomer(){
    let data = {
      _id : this.customerId
    }
    this.customerService.deleteCustomer(data).subscribe((response) =>{
      this.notifier.notify("success", "Xoá thành công khách hàng") 
      this.onLoadCustomer();
      this.toggleLiveDemo();
    })
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
        this.onLoadCustomer();
        this.toggleLiveCreateCustomer();
      }

    })
  }

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  
  toggleLiveCreateCustomer(){
    this.createCustomer = !this.createCustomer;
  }

  handleCreateCustomer(event : any){
    this.createCustomer = event;
  }

  createCustomerForm = new FormGroup({
    name : new FormControl('' ,[Validators.required]),
    address : new FormControl('' ,[Validators.required]),
    birthday : new FormControl('' ,[Validators.required]),
    tel : new FormControl('' ,[Validators.required])
  })

  

}
