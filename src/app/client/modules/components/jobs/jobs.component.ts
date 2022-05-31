import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { jobData } from 'src/app/classes/jobData';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  constructor(private router:Router) {}

  ngOnInit(): void {}

  p: number = 1;

  public gotoPost(url:any, id:any) {

    var myurl = `${url}/${id}`;
    this.router.navigate([url,id])
  }

  jobcollection: jobData[] = [
    {
      title: 'hello',
      salary: 'string',
      description: 'string',
      postdate: new Date(),
      companylogo: 'string',
      applylink: 'htt',
    },
    {
      title: 'hello',
      salary: 'string',
      description: 'string',
      postdate: new Date(),
      companylogo: 'string',
      applylink: 'https://link',
    },
    {
      title: 'hello',
      salary: 'string',
      description: 'string',
      postdate: new Date(),
      companylogo: 'string',
      applylink: 'https://link',
    },
    {
      title: 'hello',
      salary: 'string',
      description: 'string',
      postdate: new Date(),
      companylogo: 'string',
      applylink: 'https://link',
    },
    {
      title: 'hello',
      salary: 'string',
      description: 'string',
      postdate: new Date(),
      companylogo: 'string',
      applylink: 'https://link',
    },
    {
      title: 'hello',
      salary: 'string',
      description: 'string',
      postdate: new Date(),
      companylogo: 'string',
      applylink: 'https://link',
    },
  ];
}
