import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.page.html',
  styleUrls: ['./todo-form.page.scss'],
})
export class TodoFormPage implements OnInit {

  public task = {
    taskName: '',
    dateString: (new Date()).toDateString(),
    done: false
  };
  //Injection de dépendance (httpClientModule)
  constructor(private httpClient: HttpClientModule) { }

  ngOnInit() {
  }

  persistTasks() {
    this.httpClient.post("http://localhost:3000/task/new", this.task)
      .subscribe(
        () => {
          console.log("ok");
        },
        (err) => {
          console.log(err);
        });
  }

}
