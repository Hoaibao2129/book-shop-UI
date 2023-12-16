import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/store/services/book.service';
import * as _ from 'lodash';
import { NotifierService } from 'angular-notifier';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit{

  listBooks : any ;
  sum : number ;
  filter : any = {name : ""};
  _idBook : string = '';
  visible : boolean = false;
  visibleImportBook : boolean = false;
  quantityImport : string = '';
  private readonly notifier: NotifierService;

  constructor(
    private bookService : BookService,
    public router : Router,
    private route: ActivatedRoute,
    private notifierService: NotifierService,
  ){
    this.notifier = notifierService;
  }
  
  ngOnInit(){
    this.onCheckLogin();
    this.onGetBook();
  }

  onGetBook(){
    this.bookService.getListBook().subscribe(response =>{
      this.listBooks = response;
      this.sum = this.listBooks.length
    })
   }

   onNavigateInfoBook(data : any){
    this.router.navigate([`${"kho/thong-tin-sach/" + data._id}`])
   }

   onSearchBook(bookName : string){
    this.bookService.filterBook("name="+bookName).subscribe((response) =>{
      this.listBooks = _.cloneDeep(response);
    })
   }

   onDeleteBook(){
    this.bookService.deleteBook(this._idBook).subscribe((response : any) =>{
      this.onGetBook();
      this.toggleLiveDemo();
      this.notifier.notify("success", response)      
    })
   }

   onHandleDeleteBook(bookId : string){
    this._idBook = "";
    this._idBook =bookId;
    this.toggleLiveDemo();
   }

   onHandleImport(bookId: string){
    this._idBook = "";
    this._idBook =bookId;
    this.toggleLiveImport()
   }

   onImportBook(){
    let data = {
      id : this._idBook,
      quantity : this.quantityImport
    }
    this.bookService.importBook(data).subscribe((response : any) =>{
      this.onGetBook();
      this.toggleLiveImport();
      this.quantityImport = "";
      this.notifier.notify("success", response)
    } )
   }

   toggleLiveDemo() {
    this.visible = !this.visible;
  }

  toggleLiveImport() {
    this.visibleImportBook = !this.visibleImportBook;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  
  handleLiveImportChange(event: any) {
    this.visibleImportBook = event;
  }

   
  onCheckLogin(){
    let result = localStorage.getItem("token");
    if(!result){
      this.router.navigate([`${"/login"}`])
    } 
  }


}
