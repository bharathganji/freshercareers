import { Component, OnInit } from '@angular/core';
import { SupabaseService } from './shared/supabase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'FresherCareers';
  constructor(private supabaseService: SupabaseService) {}
  ngOnInit(): void {
    // this.supabaseService.fetchDummy();
  }
}
