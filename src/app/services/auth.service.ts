import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";

const AUTH_API = "http://localhost:8080/api/auth/";
const TEST_API = "http://localhost:8080/api/test/";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + "signin",
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string
  ): Observable<any> {
    return this.http.post(
      AUTH_API + "signup",
      {
        firstName,
        lastName,
        username,
        email,
        password,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + "signout", {}, httpOptions);
  }

  fetchUsers(): Observable<User[]> {
    return this.http.get<User[]>(TEST_API + "getAll");
  }
}
