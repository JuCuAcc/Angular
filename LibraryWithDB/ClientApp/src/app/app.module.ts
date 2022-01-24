import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { BookListComponent } from './components/book-list/book-list.component';
import { BookFormComponent } from './components/book-form/book-form.component';

import { BookService } from "./services/book.service";
import { BookIssueService } from "./services/book-issue.service";
import { HttpModule } from "@angular/http";
import { BookIssueFormComponent } from './components/book-issue-form/book-issue-form.component';
import { BookIssueListComponent } from './components/book-issue-list/book-issue-list.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,

    BookListComponent,
    BookFormComponent,
    BookIssueFormComponent,
    BookIssueListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },

      { path: 'book/new', component: BookFormComponent },
      { path: 'book/:id', component: BookFormComponent },
      { path: 'book', component: BookListComponent },

      { path: 'bookIssue/new', component: BookIssueFormComponent },
      { path: 'bookIssue/:id', component: BookIssueFormComponent },
      { path: 'bookIssue', component: BookIssueListComponent },


      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [BookService, BookIssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
