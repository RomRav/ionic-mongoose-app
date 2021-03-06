import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public taskList: Array<any> = [];
  public user;

  //Injection de dépendance (httpClientModule, Router)
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private userService: UserService) {

    this.user = userService.getUser();
  }


  //Affichage des tâches
  ionViewDidEnter() {
    let req = this.httpClient.get("http://localhost:3000/todo");
    req.subscribe((data: any) => {
      this.taskList = data;
    },
      err => console.log(err)
    );
  }

  //Suppression d'une tâche
  deleteTask(id) {
    this.httpClient.delete('http://localhost:3000/task/' + id)
      .subscribe(
        () => {
          this.ionViewDidEnter();
        },
        err => console.log(err)
      );
  };

  //Gestion et persistance du checkbox
  switchCheck(task) {
    this.httpClient.put('http://localhost:3000/task/', task)
      .subscribe(
        () => {
          this.ionViewDidEnter();
        },
        err => console.log(err)
      );

  }
}
