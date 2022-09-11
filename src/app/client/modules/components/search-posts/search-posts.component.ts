import { Component, OnInit, Query } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupabaseService } from 'src/app/shared/supabase.service';
import { data_job } from '../jobs/data';

@Component({
  selector: 'app-search-posts',
  templateUrl: './search-posts.component.html',
  styleUrls: ['./search-posts.component.css'],
})
export class SearchPostsComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private router1: Router,

    private supabaseService: SupabaseService
  ) {}

  temp1: any = data_job;

  QueryArray!: any;

  jobcollection!:any;
  isLoading = false;


  ngOnInit(): void {
    this.router.queryParams.subscribe((res) => {
      let temp = { ...res }; //will give query params as an object
      this.QueryArray = temp['searchInput'].trim().split(' ');
  
      let querystring = String(this.QueryArray).toLowerCase();
      let filterdata = this.temp1.filter((ele: any) => this.filterFun(ele,querystring));
      this.jobcollection=filterdata
    });
  }
  filterFun(ele: any,query: string) {
    if (ele[0].toLowerCase().includes(query.toLowerCase())) {
      return ele;
    }
  }


  
  p: number = 1;

  public gotoPost(url: any, id: any): void {
    // console.log(id);
    id=JSON.stringify(id);
    this.router1.navigate([url, id]);
  }
}
