import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RoleService } from 'src/app/store/services/role.service';
import { DataAccessService}  from "../../../../store/services/dataAccess.service";
import { RoleModel } from "../../../../models/roleModel"
import * as _ from 'lodash';
import { NotifierService } from 'angular-notifier';
import { DatePipe, Location } from '@angular/common';
@Component({
  selector: 'app-insert-role',
  templateUrl: './insert-role.component.html',
  styleUrls: ['./insert-role.component.scss']
})
export class InsertRoleComponent implements OnInit {
  roleForm : FormGroup
  dataAccess : any = [];
  dataAccessInsert : any = [];
  private readonly notifier: NotifierService;
  constructor(
    private roleService : RoleService,
    private dataAccessService : DataAccessService,
    private notifierService: NotifierService,
    public _location: Location,
  ){
    this.notifier = notifierService;
  }

  ngOnInit() {
   this.roleForm = this.createRoleForm
   this.onLoadDataAccess();
  }

  onLoadDataAccess(){
    this.dataAccessService.getAllDataAccess().subscribe(response =>{
      this.dataAccess = _.cloneDeep(response)
      let checked : boolean = false;
      this.dataAccess.map((val : any) =>{
        val = {
          ...val,
          checked : checked,
        }
      })
    })
  }

  handleCheckboxChange(data : any){
    this.dataAccessInsert.map((val : any , index: number) =>{
      if(val._id === data._id){
        this.dataAccessInsert.splice(index , 1);
        data = null;
      }
    })
    if(data != null){
      this.dataAccessInsert.push(data);
    }
  }

  inserRole() {
    let data : RoleModel = {
      roleName: this.roleForm.value.name,
      dataAccess: this.dataAccessInsert,
    }
    this.roleService.insertRole(data).subscribe(response =>{
      if(response !==null){
        this.roleForm.setValue({
          name :"",
        })
        this.dataAccess.map((val : any)=>{
          val.checked = false;
        })
        this.notifier.notify("success", "Thêm vai trò thành công")    
      }
    })
  }

  back(){
    this._location.back();
  }


  createRoleForm = new FormGroup({
    name : new FormControl('' ,[Validators.required]),
  })

}
