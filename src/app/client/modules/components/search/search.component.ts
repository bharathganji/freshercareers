import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
    });
  }
  filter(searchInput: string) {
    this.router.navigate(['search'], {
      queryParams: { searchInput: searchInput },
    });
  }

  onSubmit(form: FormGroup) {
    console.log(' is registeration form Valid?', form.valid); // true or false
    console.log('entered search: ', form.value.username);
    if (form.valid) {
      this.filter(form.value.username);
    }
  }
}
