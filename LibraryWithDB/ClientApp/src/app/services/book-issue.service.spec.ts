import { TestBed } from '@angular/core/testing';

import { BookIssueService } from './book-issue.service';

describe('BookIssueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookIssueService = TestBed.get(BookIssueService);
    expect(service).toBeTruthy();
  });
});
