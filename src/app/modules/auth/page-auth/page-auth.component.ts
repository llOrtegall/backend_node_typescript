import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-auth',
  templateUrl: './page-auth.component.html',
  styleUrls: ['./page-auth.component.css']
})
export class PageAuthComponent {

  formLogin: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      user: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }  
}
