import { Component, OnInit } from '@angular/core';

import { navItems } from './_nav';
import { DataService } from "../../helpers/data/data.service"
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnInit{

  //dataAccess  : any = [];
  public navItems = navItems;
  newNavItem : any = [];
  show : boolean = false;
  dataAccess : any = [];
   
  constructor(
    private dataService: DataService,
  ) {
  }

  ngOnInit() {
    this.onLoadDataAccessLocalStorage()
    this.dataAccess.map((val : any) =>{
      navItems.map((navVal)=>{
        if(val === navVal.name ){
          this.newNavItem.push(navVal)
        }
      })
    })
  }
  onLoadDataAccessLocalStorage(){
    let dataString : any = localStorage.getItem("dataAccess");
    this.dataAccess = dataString.split(',');
  }
}
