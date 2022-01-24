import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { BookService } from './../../services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {


  id: any;
  title: any;
  edition: any;
  publisher: any;
  isbn: any;
  book = { id: 0 };

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) {
    route.params.subscribe(p => {
      this.book.id = p["id"];
    }, error => {
      if (error.status == 404) {
        this.router.navigate(["/trainee"]);
      }
    }

    );

  }

  ngOnInit() {
    if (this.book.id !== undefined) {
      this.bookService
        .getBook(this.book.id)
        .subscribe(p => {
          this.book = p;
        });
    }
    else {
      this.book.id = 0;
      this.title = "";
      this.edition = "";
      this.publisher = "";
      this.isbn = "";
    }
  }

  submit() {
    if (this.book.id != 0) {
      this.bookService.update(this.book, this.book.id)
        .subscribe(x => {
          console.log(x), this.router.navigate(["/book"]);
        });
    }
    else {
      console.log(this.book);
      this.bookService.create(this.book)
        .subscribe(x => {
          console.log(x), this.router.navigate(["/book"]);
        });

    }
  }

}
