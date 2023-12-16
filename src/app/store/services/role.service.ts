import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({

    providedIn: 'root'

})

export class RoleService {
    private url = "http://localhost:8000/role";
    constructor(private httpClient: HttpClient) { }

    getRoleList(){
       return this.httpClient.get(this.url + "/roleList");
    }

    insertRole(role : any){
        const headers = { 'content-type': 'application/json'  }
        const body = JSON.stringify(role);
        return this.httpClient.post(this.url, body, { 'headers': headers });
    }
    getRoleById(id : string){
        return this.httpClient.get(this.url + `${"/" + id}`);
    }
}