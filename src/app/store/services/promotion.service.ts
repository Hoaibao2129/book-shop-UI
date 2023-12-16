import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Promotion } from "../../models/promotionModel"
@Injectable({

    providedIn: 'root'

})

export class PromotionService {
    private url = "http://localhost:8000/promotion/";
    constructor(private httpClient: HttpClient) { }

    getAllPromotion() {
        return this.httpClient.get(this.url);
    }

    deletePromotion(_id : string){
        return this.httpClient.delete(this.url + "/" + _id );
    }

    insertPromotion(promotion : Promotion){
        const headers = { 'content-type': 'application/json' }
        const body = JSON.stringify(promotion);
        return this.httpClient.post(this.url, body, { 'headers': headers });
    }
}