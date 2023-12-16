import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private mangDuLieu: any[] = [];

  constructor() { }

  getMangDuLieu(): any[] {
    return this.mangDuLieu;
  }

  setMangDuLieu(data: any[]): void {
    this.mangDuLieu = data;
  }
}
