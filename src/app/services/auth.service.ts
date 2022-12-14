import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";

const AUTH_API = "http://localhost:8080/api/auth/";
const TEST_API = "http://localhost:8080/api/test/";
const USER_KEY = "auth-user";

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
    password: string,
    phoneNumber: string,
    role: Array<string>
  ): Observable<any> {
    return this.http.post(
      AUTH_API + "signup",
      {
        username,
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    window.sessionStorage.removeItem(USER_KEY);
    return this.http.post(AUTH_API + "signout", {}, httpOptions);
  }

  fetchUsers(): Observable<User[]> {
    return this.http.get<User[]>(TEST_API + "getAll");
  }

  deleteUser(id: number): Observable<User[]> {
    return this.http.delete<User[]>(TEST_API + "delUser/" + id);
  }
}
