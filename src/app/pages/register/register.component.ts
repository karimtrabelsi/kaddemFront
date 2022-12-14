import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "app/services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  public barLabel: string = "Password strength:";
  public myColors = ["#DD2C00", "#FF6D00", "#FFD600", "#AEEA00", "#00C853"];
  public thresholds = [90, 75, 45, 25];
  form = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    acceptTerms: false,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = "";
  role = ["mod", "user"];
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit(): void {
    const { username, firstname, lastname, email, password, phoneNumber } =
      this.form;

    this.authService
      .register(
        firstname,
        lastname,
        username,
        email,
        password,
        phoneNumber,
        this.role
      )
      .subscribe({
        next: (data) => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigate(["/login"]);
        },
        error: (err) => {
          console.log("dirabek");

          this.errorMessage = err.error.message;
          console.log(this.errorMessage);

          this.isSignUpFailed = true;
        },
      });
  }

  onReset(form: NgForm): void {
    form.reset();
  }
}
