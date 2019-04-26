import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

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
    private router: Router,
    private toastCtrl: ToastController) { }

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
            console.log(response);
            if (response.data) {
              this.user.setUser(response.data);
              this.router.navigateByUrl('/home');
            } else {
              this.toastCtrl.create(
                { message: "Ce compte existe déjà", duration: 2000 }
              ).then(toast => toast.present());
            }

          },
          err => console.log(err)
        );
    }
  }

}
