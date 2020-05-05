import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = {
    username: '',
    password: '',
  };
  constructor(public authService: AuthServiceService) {}

  ngOnInit() {
  }

  onSubmit() {
   this.authService.getLogin(this.loginForm).subscribe(resp =>{
     console.log(resp)
   })
  }
}
