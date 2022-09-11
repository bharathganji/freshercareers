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
  // post!: jobData;
  post!: any;
  // id!: string | null;

  url!: any;
  date!:any;

  isLoading = true;
  ngOnInit(): void {
    // this.activateRoute.paramMap.subscribe((param) => {
    //   this.supabaseService
    //     .fetchByID(param.get('id'))
    //     .then((post: any) => {
    //       this.post = post[0];
    //       this.isLoading = false;
    //     })
    //     .catch((e) => alert(e));
    // });
    this.activateRoute.paramMap.subscribe((param: any) => {
      // this.post= param.get('id')
      this.post = JSON.parse(param.get('id'));
      console.log(this.post);
      

      this.date = this.post.pop().split(' ');
      this.url = this.post.pop();
      this.detectURLs(this.url);

      this.isLoading = false;
    });
  }

  link!: any;
  applynow() {
    window.open(this.link, '_blank');
  }
 
  // applynow(link: any) {
  //   window.open(link, '_blank');
  // }

  detectURLs(message: any) {
    let urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    this.link = message.match(urlRegex)[0];
    let temp = message.replace(this.link, '');
    this.post.push(temp);
    // console.log(message.match(urlRegex));

    // this.applynow( message.match(urlRegex));
  }
}
