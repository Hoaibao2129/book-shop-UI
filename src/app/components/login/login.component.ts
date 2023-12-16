import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Staff } from "../../models/staffModel"
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StaffService } from "../../store/services/staff.service" 
import { Router } from '@angular/router';
import { DataService } from "../../helpers/data/data.service"
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup ;
  private readonly notifier: NotifierService;
  @Output() dataAccess = new EventEmitter <Array<any>> ();
  constructor(
    private staffservice : StaffService,
    public router : Router,
    private dataService: DataService,
    private notifierService: NotifierService,
  ){
    this.notifier = notifierService;
  }
  
  ngOnInit() {
    this.loginForm = this.createLoginForm;
  }

  onLogin(){
    let dataLogin = this.loginForm.value
    this.staffservice.staffLogin(dataLogin).subscribe((response : any)  =>{   
      if (response.length === 1) {
        let result = response[0].dataAccess.find((val: any) => {
          return val === "Tổng Quan";
        })
        if (result) {
          this.router.navigate([`${"dasboard"}`])
          this.onSetToken(response[0].token)
          this.onSetDataAccess(response[0].dataAccess);
          this.onSetIdStaff(response[0]._id);
        }else{
          this.router.navigate([`${"thu-ngan"}`])
          this.onSetToken(response[0].token);
          this.onSetDataAccess(response[0].dataAccess);
          this.onSetIdStaff(response[0]._id);
        }
        // response[0].dataAccess.map((val : any) =>{
        //   if(val === "Tổng Quan"){
        //     this.router.navigate([`${"dasboard"}`])
        //     // this.dataService.setMangDuLieu(response[0].dataAccess);
        //     this.onSetToken(response[0].token)
        //     this.onSetDataAccess(response[0].dataAccess);
        //   }else{
        //     this.router.navigate([`${"thu-ngan"}`])
        //    // this.dataService.setMangDuLieu(response[0].dataAccess);
        //     this.onSetToken(response[0].token);
        //     this.onSetDataAccess(response[0].dataAccess);
        //   }
        // })
      }else{
        this.notifier.notify("warning", response );
      }
    })
  }

  onSetToken(token : any){
    return localStorage.setItem("token" , token);
  }

  onSetDataAccess(dataAccess : any){
    return localStorage.setItem("dataAccess" , dataAccess)
  }

  onSetIdStaff(_id : any){
    return localStorage.setItem("_idStaff" ,_id );
  }

  createLoginForm = new FormGroup({
    tel : new FormControl('' ,[Validators.required]),
    password : new FormControl('' ,[Validators.required]),
  })


   

}
