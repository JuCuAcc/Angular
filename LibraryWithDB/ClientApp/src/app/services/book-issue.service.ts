import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable()

export class BookIssueService {

  constructor(private http: Http) { }

  create(bookIssue: any) {
    return this.http.post('/api/bookIssues', bookIssue).pipe(map(res => console.log(res.json())));
  }
  getBookIssue(id: any) {
    return this.http.get('/api/bookIssues/' + id).pipe(map(res => res.json()));
  }

  update(bookIssue: any, id: any) {
    return this.http.put('/api/bookIssues/' + id, bookIssue).pipe(map(res => res.json()));
  }

  delete(id: any) {
    return this.http.delete('/api/bookIssues/' + id).pipe(map(res => res.json()));
  }

  getBookIssues() {
    return this.http.get('/api/bookIssues/').pipe(map(res => res.json()));
  }

  getBookList() {
    return this.http.get('/api/bookIssues/GetBookList/')
      .pipe(map(res => res.json()));
  }

}
