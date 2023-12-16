import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({

    providedIn: 'root'

})

export class InvoiceService {
    private url = "http://localhost:8000/invoice/";
    constructor(private httpClient: HttpClient) { }

    postRevoive(data: any) {
        const headers = { 'content-type': 'application/json' }
        const body = JSON.stringify(data);
        return this.httpClient.post(this.url, body, { 'headers': headers });
    }

    getAllInvoice(){
        return this.httpClient.get(this.url);
    }

    deleteInvoiceDay(data: any){
        const headers = { 'content-type': 'application/json' }
        const body = JSON.stringify(data);
        const option = {
            headers : headers,
            body : body
        }
        return this.httpClient.delete(this.url + "/invoiceDay" , option)
    }

    getAllInvoiceDay(){
        return this.httpClient.get(this.url + "/invoiceDay");
    }

    getAllInvoiceWasDelete(){
        return this.httpClient.get(this.url + "/invoiceWasDelete");
    }
}