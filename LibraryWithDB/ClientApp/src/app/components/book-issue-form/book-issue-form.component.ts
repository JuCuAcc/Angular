import { Component, OnInit } from '@angular/core';

import { BookIssueService } from './../../services/book-issue.service';
import { ActivatedRoute, Route, Router } from '@angular/router';



@Component({
  selector: 'app-book-issue-form',
  templateUrl: './book-issue-form.component.html',
  styleUrls: ['./book-issue-form.component.css']
})
export class BookIssueFormComponent implements OnInit {

  bookIssueID: any;
  issueDate: any;
  registered: any;
  memberName: any;
  imagePath: any;


  id: number;
  bookList: Array<number> = [];

  bookIssue = { bookIssueID: 0 };


  constructor(private route: ActivatedRoute, private router: Router, private bookIssueService: BookIssueService) {
    route.params.subscribe(b => {
      this.bookIssue.bookIssueID = b["id"];
    }, err => {
      if (err.status == 404)
        this.router.navigate(['/bookIssue']);
    });

  }

  ngOnInit() {
    this.bookIssueService.getBookList().subscribe(
      data => this.bookList = data
    )

    if (this.bookIssue.bookIssueID !== undefined) {
      this.bookIssueService
        .getBookIssue(this.bookIssue.bookIssueID)
        .subscribe(b => {
          this.bookIssue = b;
        });
    }
    else {
      this.bookIssue.bookIssueID = 0;
      this.issueDate = '2022/01/03';
      this.registered = false;
      this.memberName = '';
      this.imagePath = '/Images/default.png';
      this.id = 0;
    }
  }

  submit() {
    if (this.bookIssue.bookIssueID != 0) {
      this.bookIssueService.update(this.bookIssue, this.bookIssue.bookIssueID)
        .subscribe(x => {
          console.log(x),
            this.router.navigate(['/bookIssue'])
        });
    }
    else {
      console.log(this.bookIssue);
      this.bookIssueService.create(this.bookIssue)
        .subscribe(x => {
          console.log(x),
            this.router.navigate(['/bookIssue'])
        });
    }
  }

}
