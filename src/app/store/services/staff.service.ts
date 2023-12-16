import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Staff} from "../../models/staffModel"
@Injectable({

    providedIn: 'root'

})

export class StaffService {
    private url = "http://localhost:8000/staff";
    private token : any = "";
    constructor(
        private httpClient: HttpClient,
    ) { 
        this.getToken();
        console.log(this.token);
    }

   getStaffs(){
    const headers = {"accessToken" : this.token}
    return this.httpClient.get(this.url , {'headers':headers});
   }

   insertStaff(staff : Staff) {
    const headers = { 'content-type': 'application/json' , "accessToken" : this.token}  
    const body = JSON.stringify(staff);
    return this.httpClient.post(this.url,body,{'headers':headers});
   }

   getStaffByTel(tel : string){
    return this.httpClient.get(this.url + `${"/" + tel}`);
   }

   staffLogin(staff : Staff){
    const headers = {'content-type': 'application/json'}
    const body = JSON.stringify(staff);
    return this.httpClient.post(this.url+ "/login", body , {'headers':headers})
   }
   
    getToken() {
        this.token = localStorage.getItem("token");
    }

    getStaffById(_id : string){
        return this.httpClient.get(this.url + `${"/" + _id}`);
    }

    deleteStaff(_id : string){
        return this.httpClient.delete(this.url + `${"/" + _id}`)
    }

    filterStaff(filter : any){
        return this.httpClient.get(this.url + "/filter?name=" + filter);
    }

}