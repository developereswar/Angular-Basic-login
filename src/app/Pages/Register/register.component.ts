import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  registerForm = {
    username: '',
    email: '',
    password: null,
    cpassword: null,
  };
  constructor(private service: AuthServiceService) {}

  ngOnInit() {}

  onSubmit() {
    this.service.getRegister(this.registerForm);
  }
}
