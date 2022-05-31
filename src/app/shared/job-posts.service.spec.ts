import { TestBed } from '@angular/core/testing';

import { JobPostsService } from './job-posts.service';

describe('JobPostsService', () => {
  let service: JobPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
