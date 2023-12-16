import { Component, OnInit } from '@angular/core';
import * as moment from "moment";
import { RevenueService } from "../../../store/services/revenue.service";
import * as _ from 'lodash';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.scss']
})
export class RevenueComponent implements OnInit{
  fromDate : string = "";
  toDate : string = "";
  listRevenue : any ;
  createFilterDate : boolean = false;
  FilterDateForm: FormGroup;
  constructor(
    private revenueService : RevenueService,
  ){}

  ngOnInit(){
   this.FilterDateForm = this.createFilterDateForm
   this.onGetRevenue(true);
  }

  onGetRevenue(toDays : boolean){
    let days: any;
    let month: any;
    let year: any;
    let fromDate : any ;
    let toDate : any ;
    if (toDays) {
      const date = new Date();
      days = date.getDate();
      month = date.getMonth() + 1;
      year = date.getFullYear();
      fromDate = days + '-'+ month + '-' + year;
      toDate = days + '-'+ month + '-' + year;
    }else{
      fromDate = this.createFilterDateForm.value.fromDate;
      toDate = this.createFilterDateForm.value.toDate;
    }
    this.fromDate = fromDate;
    this.toDate = toDate;
    let data = {
      fromDate : fromDate,
      toDate : toDate
    }
    this.revenueService.getRevenueFilter(data).subscribe((response : any) =>{
      this.listRevenue = _.cloneDeep(response)
    })
  }

  onHandleFilter(){
    this.toggleLiveCreateFilterDate();
  }

  onFilter(){
    this.onGetRevenue(false);
    this.createFilterDateForm.setValue({
      fromDate: "", toDate: "",
    })
    this.toggleLiveCreateFilterDate();
  }

  handleCreateFilterDate(event : any){
    this.createFilterDate = event;
  }

  toggleLiveCreateFilterDate(){
    this.createFilterDate = !this.createFilterDate;
  }

  createFilterDateForm = new FormGroup({
    fromDate : new FormControl('' ,[Validators.required]),
    toDate : new FormControl(''),
  })

}
