import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Universite } from '../models/Universite';
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
@Injectable({
  providedIn: 'root'
})
export class UniversiteService {



  constructor(private http:HttpClient,private router: Router) 
  { }
  baseurl=environment.url;
  
  fetchUniversite():Observable<Universite[]>
  {
    return this.http.get<Universite[]>(this.baseurl+"retrieveAllUniversite",httpOptions);
  }
  fetchUniversiteById(id:any):Observable<Universite>
  {
    return this.http.get<Universite>(this.baseurl+"retrieveUniversite/"+id,httpOptions);
  }
  
  addUniversite(data:Universite)
  {
    return this.http.post<Universite>(this.baseurl+"addUniversite/",data,httpOptions);

  }
  
  
  deleteUniversite(id:any){
  
    return this.http.delete(this.baseurl+"deleteUniversite/"+id,httpOptions);
  
  }
  UpdatUniversite(data:Universite):Observable<Universite>
  {
    return this.http.put<Universite>(this.baseurl+"updateUniversite/",data,httpOptions);
  
  }
  getUniversiteByDepartementNumber(id:any):Observable<number>
  {
    return this.http.get<number>(this.baseurl+"getUniversiteByDepartementNumber/"+id,httpOptions);
  }
  
   
   
  }