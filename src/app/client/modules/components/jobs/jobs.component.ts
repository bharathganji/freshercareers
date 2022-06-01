import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { jobData } from 'src/app/classes/jobData';
import { SupabaseService } from 'src/app/shared/supabase.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  constructor(
    private router: Router,
    private supabaseservice: SupabaseService
  ) {}
  jobcollection!: jobData[] | any;
  isLoading = true;
  ngOnInit(): void {
    this.supabaseservice.fetchDummy().then((resolve) => {
      this.jobcollection = resolve;
      this.isLoading = false;
      console.log('job component called', this.jobcollection);
    });
  }

  p: number = 1;

  public gotoPost(url: any, id: any) {
    var myurl = `${url}/${id}`;
    this.router.navigate([url, id]);
  }
}
