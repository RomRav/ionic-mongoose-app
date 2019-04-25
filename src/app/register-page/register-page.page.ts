import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.page.html',
  styleUrls: ['./register-page.page.scss'],
})

export class RegisterPagePage implements OnInit {

  public userInput = {
    userName: '',
    password: '',
    login: ''
  };

  constructor(
    private httpClient: HttpClient,
    private user: UserService,
    private router: Router) { }

  ngOnInit() {
  }
  //Verification de la saisie du formaulaire
  private isFormValid() {
    return this.userInput.userName
      && this.userInput.userName.length > 0
      && this.userInput.login
      && this.userInput.login.length > 0
      && this.userInput.password
      && this.userInput.password.length > 0
  }
  //Envoie de la saisie au contoler
  validateForm() {
    if (this.isFormValid()) {
      this.httpClient.post("http://localhost:3000/register", this.userInput)
        .subscribe(
          (response: any) => {
            this.user.setUser(response.data);
            this.router.navigateByUrl('/home');
          },
          err => console.log(err)
        );
    }
  }

}
