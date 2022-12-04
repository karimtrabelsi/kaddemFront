import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";

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
    acceptTerms: false,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = "";

  constructor(private authService:AuthService) {}

  ngOnInit() {}

  onSubmit(): void {
    const { username, firstname, lastname, email, password } = this.form;

    this.authService
      .register(username, firstname, lastname, email, password)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        },
      });
  }

  onReset(form: NgForm): void {
    form.reset();
  }
}
