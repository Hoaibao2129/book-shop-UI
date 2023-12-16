import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from "./books.component"
import { InsertBookComponent } from "./insert-book/insert-book.component"
import { InfoBookComponent } from './info-book/info-book.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sach',
        component : BooksComponent,
        data: {
          title: 'Sách',
        },
      },
      {
        path: 'them-sach',
        component : InsertBookComponent,
        data: {
          title: "Thêm Sách"
        }
      },
      {
        path: 'thong-tin-sach/:id',
        component : InfoBookComponent,
        data :{
          title: "Thông Tin Sách"
        }
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
