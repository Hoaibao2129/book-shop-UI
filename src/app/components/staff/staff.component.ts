import { Component, OnInit } from '@angular/core';
import { StaffService } from "../../store/services/staff.service"
import { Staff } from "../../models/staffModel"
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  listStaff : any = [];
  public visible = false;
  _idStaff : string = '';
  filter : any = {name : ""};

  private readonly notifier: NotifierService;

  constructor(
    private staffService : StaffService,
    public router : Router,
    private notifierService: NotifierService,
  ){
    this.notifier = notifierService;
  }
  ngOnInit() {  
    this.onCheckLogin();
    this.onLoadStaffs();
  }

  onLoadStaffs(){
    this.staffService.getStaffs().subscribe(response =>{
      this.listStaff = _.cloneDeep(response);
    })
  }

  onHandleDeleteStaff(_id : string){
    this._idStaff = '';
    this._idStaff = _id;
    this.toggleLiveDemo()
  }

  onDeleteStaff(){
    this.staffService.deleteStaff(this._idStaff).subscribe((response : any) =>{
      this.onLoadStaffs();
      this.toggleLiveDemo();
      this.notifier.notify( "success", response)
    })
  }

  onFilterStaff(name : string){
    this.staffService.filterStaff(name).subscribe((response : any) =>{
      this.listStaff = _.cloneDeep(response);
    })
  }

  onCheckLogin(){
    let result = localStorage.getItem("token");
    if(!result){
      this.router.navigate([`${"/login"}`])
    } 
  }

  onViewInfoStaff(_id : string){
    this.router.navigate([`${"nhan-vien/thong-tin-nhan-vien/" + _id }`])
  }

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }


}
