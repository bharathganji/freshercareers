import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { jobData } from 'src/app/classes/jobData';

@Component({
  selector: 'app-postview',
  templateUrl: './postview.component.html',
  styleUrls: ['./postview.component.css'],
})
export class PostviewComponent implements OnInit {
  constructor(private router: Router, private activateRoute: ActivatedRoute) {}
  post!: jobData;
  id!: string | null;

  ngOnInit(): void {
    console.log('e');
    
    this.id = this.activateRoute.snapshot.paramMap.get('id')
  }
}
