import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { jobData } from 'src/app/classes/jobData';
import { SupabaseService } from 'src/app/shared/supabase.service';

@Component({
  selector: 'app-postview',
  templateUrl: './postview.component.html',
  styleUrls: ['./postview.component.css'],
})
export class PostviewComponent implements OnInit {
  constructor(
    private router: Router,
    private supabaseService: SupabaseService,
    private activateRoute: ActivatedRoute
  ) {}
  post!: jobData;
  // id!: string | null;

  isLoading = true;
  ngOnInit(): void {
    // console.log(this.activateRoute.snapshot.paramMap.get('id'));
    this.activateRoute.paramMap.subscribe((param) => {
      this.supabaseService.fetchByID(param.get('id')).then((post: any) => {
        this.post = post[0];
        this.isLoading = false;
      });
    });
  }
  applynow(link:any) {
    window.open(link, '_blank');
  }
}
