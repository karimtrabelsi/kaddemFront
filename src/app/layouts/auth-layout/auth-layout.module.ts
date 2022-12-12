import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthLayoutRoutes } from "./auth-layout.routing";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { Ng9PasswordStrengthBarModule } from "ng9-password-strength-bar";
import { LoginComponent } from "../../pages/login/login.component";
import { RegisterComponent } from "../../pages/register/register.component";
import { PasswordPatternDirective } from "app/directives/password-pattern.directive";
import { ErrorsComponent } from "app/pages/errors/errors.component";
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ErrorsComponent,
    PasswordPatternDirective,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    Ng9PasswordStrengthBarModule,

    NgbModule,
  ],
})
export class AuthLayoutModule {}
