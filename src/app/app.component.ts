import { Component } from "@angular/core";
import { reject } from "q";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  public name = "Darwin";

  public array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  public PI = Math.PI;

  public a = 0.234;

  public salary = 1234.5;

  public heroe = {
    name: "Logan",
    key: "Wolverine",
    age: 550,
    address: {
      street: "Marvel Street, Swansea, Massachusetts, EE. UU.",
      number: "23"
    }
  };

  public promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data have come!"), 3500);
  });

  public date = new Date();
}
