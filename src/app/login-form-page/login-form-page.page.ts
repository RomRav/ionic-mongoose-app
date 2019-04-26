import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login-form-page',
  templateUrl: './login-form-page.page.html',
  styleUrls: ['./login-form-page.page.scss'],
})
export class LoginFormPagePage implements OnInit {

  public loginInfo = {
    login: '',
    password: ''
  };

  constructor(
    private httpCLient: HttpClient,
    private userService: UserService,
    private router: Router,
    private toastCtrl: ToastController) { }

  ngOnInit() {
  }



  validateLogin() {
    this.httpCLient.post('hhtp://localhost:3000/login', this.loginInfo)
      .subscribe(
        (response: any) => {
          if (response.success) {
            this.userService.setUser(response.user);
            this.router.navigateByUrl('/home');
          } else {
            let myToast = this.toastCtrl.create(
              {
                message: "Infos d'authentification incorrect :",
                duration: 3200
              }
            );
            myToast.then((toast) => toast.present());
          }
        },
        (err) => { console.log(err) }

      );
  }

}
