import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer} from "../../models/customerModel"

@Injectable({

    providedIn: 'root'

})

export class CustomerService {
    private url = "http://localhost:8000/customer";
    constructor(
        private httpClient: HttpClient,
    ) { }

    getCustomerByTel(tel : string){
        return this.httpClient.get(this.url + `${"/" + tel}`);
    }

    insertCustomer(customer : Customer){
        const headers = { 'content-type': 'application/json' }
        const body = JSON.stringify(customer);
        return this.httpClient.post(this.url, body, { 'headers': headers });
    }

    getAllCustomer(){
        return this.httpClient.get(this.url);
    }

    getCustomerTop(){
        return this.httpClient.get(this.url + "/topCustomer");
    }

    deleteCustomer(data : any){
        const headers = { 'content-type': 'application/json' }
        const body = JSON.stringify(data);
        const option = {
            headers : headers,
            body : body,
        }
        return this.httpClient.delete(this.url, option);
    }
}