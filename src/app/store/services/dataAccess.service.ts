import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({

    providedIn: 'root'

})

export class DataAccessService {
    private url = "http://localhost:8000/dataAccess";
    constructor(
        private httpClient: HttpClient,
    ) { }

    getAllDataAccess(){
        return this.httpClient.get(this.url);
    }

   
}
