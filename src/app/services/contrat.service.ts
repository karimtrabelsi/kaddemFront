import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contrat } from '../models/Contrat';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ContratService {
  public uri = 'http://localhost:8085/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  getAllContrat() {
    return this.http.get<Contrat[]>(this.uri + 'Contrat/getContrat');
  }
  addContrat(c: Contrat) {
    return this.http.post(this.uri + 'Contrat/affectContratToEtudiant/Ahmed/Manaa', c);
  }

  updateContrat(id:number ,data: Contrat): Observable<Contrat> {
    return this.http.put<Contrat>(this.uri + `Contrat/updateContrat/${id}`, data);
  }

  getContratById(id: number) {
    return this.http.get<Contrat>(this.uri + `Contrat/getone/${id}`);
  }

  deleteContrat(id: number): Observable<Object> {
    return this.http.delete(this.uri + `Contrat/delContrat/${id}`);
  }

  unaffectContract(id: number,contrat: Contrat): Observable<Object> {
    return this.http.put(this.uri + `Contrat/unaffectContrat/${id}`,contrat);
  }

}
