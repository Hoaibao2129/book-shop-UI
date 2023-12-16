import { Component, OnInit } from '@angular/core';
import { RoleService } from "../../../store/services/role.service"

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  roleList : any ;
  sum : number = 0 ;

  constructor(
    private roleService : RoleService, 
  ){};
  
  ngOnInit(){
    this.getRoleList();
  }

  getRoleList(){
    this.roleService.getRoleList().subscribe(response =>{
      this.roleList = response;
      this.sum = this.roleList.length;
    })
   }

}
