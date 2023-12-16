import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({

    providedIn: 'root'

})

export class RevenueService {
    private url = 'http://localhost:8000/revenue/';
    constructor(private httpClient: HttpClient) { }
    getRevenueDay() {
        return this.httpClient.get(this.url + "/revenueDay");
    }

    getRevenueMonth(){
        return this.httpClient.get(this.url + "/revenueMonth")
    }
    
    getRevenueBooks(){
        return this.httpClient.get(this.url + "/revenueBooks")
    }

    getRevenueCustomers(){
        return this.httpClient.get(this.url + "/revenueCustomers")
    }

    getRevenueFilter(data : any){
        return this.httpClient.get(this.url + "/filterDate?fromDate=" + data.fromDate + "&toDate=" + data.toDate);
    }

}