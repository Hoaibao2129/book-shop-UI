import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StaffService } from 'src/app/store/services/staff.service';

@Component({
  selector: 'app-info-staff',
  templateUrl: './info-staff.component.html',
  styleUrls: ['./info-staff.component.scss']
})
export class InfoStaffComponent implements OnInit {
  
  staffInfoForm : FormGroup
  idStaff : any = "";
  disable : boolean = true;

  constructor(
    private route: ActivatedRoute,
    private staffService : StaffService,
  ){
    this.route.paramMap.subscribe(params =>{
      this.idStaff = params.get("id");
    })
  }

  ngOnInit() {
  this.staffInfoForm = this.createStaffInfoForm;
  this.onLoadStaffById();
  }

  onLoadStaffById(){
    this.staffService.getStaffById(this.idStaff).subscribe((response : any)=>{
      if(response){
        this.staffInfoForm.setValue({
          _id : response._id,
          name : response.name,
          tel : response.tel,
          role : response.roleName,
        })
        this.staffInfoForm.disable()
      }
    })
  }

  onCheck(){
    this.disable = ! this.disable;
    if(this.disable == true){
      this.staffInfoForm.disable();
    }else{
      this.staffInfoForm.enable();
    }
  }

  onUpdateBook(){
    console.log(this.staffInfoForm.value);
  }

  createStaffInfoForm = new FormGroup({
    _id: new FormControl("" , [Validators.required]),
    name : new FormControl('' ,[Validators.required]),
    tel : new FormControl(''),
    role : new FormControl('' ,[Validators.required]),
  })

}
