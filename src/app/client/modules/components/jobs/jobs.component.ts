import { Component, OnInit } from '@angular/core';
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
    this.supabaseservice
      .fetchDummy()
      .then((resolve) => {
        this.jobcollection = resolve;
        this.isLoading = false;
      })
      .catch((e) => alert(e));
  }

  p: number = 1;

  public gotoPost(url: any, id: any): void {
    this.router.navigate([url, id]);
  }
}
