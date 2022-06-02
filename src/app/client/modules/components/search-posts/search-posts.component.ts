import { Component, OnInit, Query } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupabaseService } from 'src/app/shared/supabase.service';

@Component({
  selector: 'app-search-posts',
  templateUrl: './search-posts.component.html',
  styleUrls: ['./search-posts.component.css'],
})
export class SearchPostsComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private supabaseService: SupabaseService
  ) {}

  QueryArray!: any;
  ngOnInit(): void {
    this.router.queryParams.subscribe((res) => {
      let temp = { ...res }; //will give query params as an object
      
      this.QueryArray = temp['searchInput'].trim().split(' ');
      // console.log(String( this.QueryArray));

      // console.log(this.supabaseService.searchFilter(this.QueryArray));
      // console.log(this.supabaseService.searchFilter(String( this.QueryArray[0])));

    });
  }
}
