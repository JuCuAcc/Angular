import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import {HttpClient } from 'selenium-webdriver/http';



//@Injectable({
//  providedIn: 'root'
//})

@Injectable()

export class BookService {

  constructor(private http: Http) { }

  getBooks() {
    return this.http.get("/api/books/").pipe(map(res => res.json()));
  }

  getBook(id:any) {
    return this.http.get("/api/books/" +id).pipe(map(res => res.json()));
  }

  create(book:any) {
    return this.http.post("/api/books/" , book).pipe(map(res => console.log(res.json())));

  }

  delete(id:any) {
    return this.http.delete("/api/books/" + id).pipe(map(res => res.json()));
  }

  update(book: any, id: any) {
    return this.http.put("/api/books/" + id, book).pipe(map(res => res.json()));
  }
}
