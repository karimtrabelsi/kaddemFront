import { HttpClient, HttpHeaders } from "@angular/common/http";
 import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Department } from '../models/Department';
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {



  constructor(private http:HttpClient,private router:Router) 
  { }
  baseurl=environment.url;
  
  fetchDepartments():Observable<Department[]>
  {
    return this.http.get<Department[]>(this.baseurl+"retrieveAllDepartement",httpOptions);
  }
  fetchDepartmentById(id:any):Observable<Department>
  {
    return this.http.get<Department>(this.baseurl+"retrieveDepartement/"+id,httpOptions);
  }
  
  addDepartment(data:Department)
  {
    return this.http.post(this.baseurl+"addDepartement",data,httpOptions);
  }
  
  
  deleteDepartment(id:any){
  
    return this.http.delete(this.baseurl+"deleteDepartement/"+id,httpOptions);
  
  }
  UpdateDepartment(data:Department):Observable<Department>
  {
    return this.http.put<Department>(this.baseurl+"updateDepartement/",data,httpOptions);
  
  }
  
   
   
  }