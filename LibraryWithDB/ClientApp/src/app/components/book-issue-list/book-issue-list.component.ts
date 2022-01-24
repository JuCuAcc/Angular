import { Component, OnInit } from '@angular/core';
import { BookIssueService } from './../../services/book-issue.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-book-issue-list',
  templateUrl: './book-issue-list.component.html',
  styleUrls: ['./book-issue-list.component.css']
})
export class BookIssueListComponent implements OnInit {
  bookIssues: any[];
  constructor(private router: Router, private bookIssueService: BookIssueService) { }

  ngOnInit() {
    this.refreshData();
  }
    refreshData() {
      this.bookIssueService.getBookIssues().subscribe(bookIssues => this.bookIssues = bookIssues);
    }


  delete(id) {
    if (confirm("Do You Want to Delete Info with ID : " + id)) {
      console.log(id);
      this.bookIssueService.delete(id).subscribe(x => {
        console.log(x), this.refreshData();
      });
    }
  }
}
