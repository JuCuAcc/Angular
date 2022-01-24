import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookService } from './../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: any[];

  constructor( private router: Router, private bookService: BookService) { }

  ngOnInit() {
    this.refreshData();
  }
    refreshData() {
      this.bookService.getBooks().subscribe(books => this.books = books);
    }

  delete(id:any) {
    if (confirm('Do you want to Really Delete this?')) {
      console.log(id);
      this.bookService.delete(id).subscribe(x => {
        console.log(x), this.refreshData();
      });
    }
  }

}
