import { Component, Input, OnInit } from '@angular/core';
import { jobData } from 'src/app/classes/jobData';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css'],
})
export class CardviewComponent implements OnInit {
  @Input() jobcollection!: jobData;

  constructor() {}

  ngOnInit(): void {}
}
