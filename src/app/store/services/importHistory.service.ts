import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({

    providedIn: 'root'

})

export class ImportServiceService {
    private url = "http://localhost:8000/importHistory";
    constructor(private httpClient: HttpClient) { 
      
    }

    getAllImportHistory(){
        return this.httpClient.get(this.url);
    }
}