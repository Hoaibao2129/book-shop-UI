import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/store/services/book.service';
import { DatePipe, Location } from '@angular/common';
import { Book } from 'src/app/models/bookModel';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-insert-book',
  templateUrl: './insert-book.component.html',
  styleUrls: ['./insert-book.component.scss']
})
export class InsertBookComponent implements OnInit {
  bookForm: FormGroup;
  private readonly notifier: NotifierService;
  constructor(
    private bookService : BookService,
    private notifierService: NotifierService,
    public _location: Location,
    public router : Router
  ){
    this.notifier = notifierService;
  }

  ngOnInit(){
   
    this.onCheckLogin()
    this.bookForm = this.booksForm   
  }

  back(){
    this._location.back();
  }

  insertBook(){
    let book : Book = {
      _id : "",
      name : this.bookForm.value.bookName,
      author : this.bookForm.value.authorName,
      price : this.bookForm.value.price,
      quantity : this.bookForm.value.quantity
    }
    this.bookService.insertBook(book).subscribe(response =>{
      this.booksForm.setValue({
        bookName : "",
        authorName :"",
        price : "",
        quantity : "",
      })
      this.notifier.notify("success", "Thêm sách mới thành công")      
    })
  }
  
  onNavigateInfoBook(data : any){
    this.router.navigate([`${"sach/thong-tin-sach/" + data._id}`])
  }

  onCheckLogin(){
    let result = localStorage.getItem("token");
    if(!result){
      this.router.navigate([`${"/login"}`])
    } 
  }

  booksForm = new FormGroup({
    bookName : new FormControl('' ,[Validators.required]),
    authorName : new FormControl('' , [Validators.required]),
    price : new FormControl('' ,[Validators.required]),
    quantity : new FormControl('' ,[Validators.required])
  })

}
