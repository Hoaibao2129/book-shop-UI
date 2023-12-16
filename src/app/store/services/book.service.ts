import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../models/bookModel';

@Injectable({

    providedIn: 'root'

})

export class BookService {
    private url = "http://localhost:8000/book";
    private token : any = "";
    constructor(private httpClient: HttpClient) { 
        this.getToken();
    }

    getListLowQuantity(){
        return this.httpClient.get(this.url + "/listLowQuantity");
    }

    filterBook(filter : any){
        return this.httpClient.get(this.url + "/filter?" + filter);
    }

    getListBook(){
        return this.httpClient.get(this.url)
    }

    insertBook(book : Book){
        const headers = { 'content-type': 'application/json' , 'token' : this.token }
        const body = JSON.stringify(book);
        return this.httpClient.post(this.url, body, { 'headers': headers });
    }

    getListBookById(id : string){
        return this.httpClient.get(this.url + `${"/" + id}`);
    }

    deleteBook(_id : string){
        return this.httpClient.delete(this.url + `${"/" + _id}`);
    }

    updateBook(book :Book){
        const headers = { 'content-type': 'application/json'}
        const body = JSON.stringify(book);
        return this.httpClient.put(this.url, body, { 'headers': headers });
    }

    importBook(data : any){
        const headers = { 'content-type': 'application/json'}
        const body = JSON.stringify(data);
        return this.httpClient.post(this.url + "/importBook", body, { 'headers': headers });
    }

    getToken(){
        this.token = localStorage.getItem("token");
    }

}