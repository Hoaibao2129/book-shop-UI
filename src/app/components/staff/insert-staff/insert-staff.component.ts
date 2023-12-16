import { Component, OnInit } from '@angular/core';
import { Staff } from "../../../models/staffModel"
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StaffService } from 'src/app/store/services/staff.service';
import { RoleService } from 'src/app/store/services/role.service';
import { NotifierService } from 'angular-notifier';
import { DatePipe, Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-insert-staff',
  templateUrl: './insert-staff.component.html',
  styleUrls: ['./insert-staff.component.scss']
})
export class InsertStaffComponent implements OnInit{
  staffForm: FormGroup;
  roleList : any;
  selectedRole : string;
  dataAccess : Array<string> = [];
  private readonly notifier: NotifierService;

  constructor(
    private staffService: StaffService,
    private roleService : RoleService,
    private notifierService: NotifierService,
    public _location: Location,
    public router : Router
  ){
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.onCheckLogin();
    this.getRole();
    this.staffForm = this.staffForms 
  }

  getRole(){
    this.roleService.getRoleList().subscribe(response =>{
      this.roleList = response ;
    })
  }

  insertSaff() {
    let staff: Staff = {
      birthday: this.staffForm.value.birthday,
      staffId: this.staffForm.value.staffId,
      name: this.staffForm.value.name,
      tel: this.staffForm.value.tel.replaceAll(' ', ''),
      roleId: "",
      roleName: this.staffForm.value.roleName,
      id_number: "",
      dataAccess: [],
    };
    let result = this.roleList.find((val: any) => {
      return val.roleName === this.staffForm.value.roleName
    })
    this.roleService.getRoleById(result._id).subscribe((role: any) => {
      if(role.length > 0){
        role[0].dataAccess.map((val : any) =>{
          staff.dataAccess.push(val.name)
        })
        this.staffService.insertStaff(staff).subscribe(response => {
          if (typeof response !== "string") {
            this.notifier.notify("sucess", "Đã tạo mới nhân viên " + staff.name)
            this._location.back();
          } else {
            this.notifier.notify("warning", response);
          }
        })
      }   
    })

    // this.staffService.insertStaff(staff).subscribe(response =>{
    //   if(typeof response !== "string"){
    //     this.notifier.notify("sucess", "Đã tạo mới nhân viên " + staff.name)
    //     this._location.back();
    //   }else{
    //     this.notifier.notify( "warning", response);
    //   }
    // })
  }

  back(){
    this._location.back();
  }

  getDataAccessFromRole(name: string){  
     let result = this.roleList.map((val: any) =>{
      return val.roleName === name;
     })
    this.roleService.getRoleById(result._id).subscribe((response : any) =>{
      response[0].dataAccess.map((val : any) =>{
        this.dataAccess.push(val)
      })
    })
  }

  onCheckLogin(){
    let result = localStorage.getItem("token");
    if(!result){
      this.router.navigate([`${"/login"}`])
    } 
  }

  staffForms = new FormGroup({
    name : new FormControl('', [Validators.required]),
    tel : new FormControl('' ,  [Validators.required]),
    email : new FormControl(''),
    birthday : new FormControl('', [Validators.required]),
    roleName : new FormControl(''),
  })

}
