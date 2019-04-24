import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.page.html',
  styleUrls: ['./todo-form.page.scss'],
})
export class TodoFormPage implements OnInit {

  public task = {
    taskName: '',
    dateString: (new Date()).toISOString(),
    done: false
  };
  //Injection de dépendance (httpClientModule, Router)
  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  persistTasks() {
    this.httpClient.post("http://localhost:3000/task/new", this.task)
      .subscribe(
        () => {
          this.router.navigateByUrl('/home');
          console.log("ok");
        },
        (err) => {
          console.log(err);
        });
  }

}
