import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  // value = "http://localhost:4200/#/dashboard";
  username = "";
  password = "";
  email = "";
  display: boolean = true;
  constructor(private routes: Router) {}

  ngOnInit() {}
  login(username, password) {
    console.log("hello");
    if (this.username === "admin" && this.password === "admin") {
      this.routes.navigateByUrl("dashobard");
    }
  }
  dispaly() {
    console.log('how rare you');
    
    this.display = false;
  }
}
