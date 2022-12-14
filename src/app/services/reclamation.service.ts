import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclamation } from '../models/Reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  public uri = 'http://localhost:8085/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  getAllReclamations() {
    return this.http.get<Reclamation[]>(this.uri + 'Reclamation/getReclamation');
  }
  addReclamation(c: Reclamation) {
    //console.log('c:==================> ', c);
    return this.http.post(this.uri + 'Reclamation/addReclamation/ahmed.manaa@esprit.tn', c);
  }

  updateReclamation(id:number,Reclamation: Reclamation): Observable<Reclamation> {
    return this.http.put<Reclamation>(this.uri + `Reclamation/updateReclamation/${id}`, Reclamation);
  }

  confirmReclamation(id:number,Reclamation: Reclamation): Observable<Reclamation> {
    return this.http.put<Reclamation>(this.uri + `Reclamation/confirmReclamation/${id}`, Reclamation);
  }

  getReclamationById(id: number) {
    return this.http.get<Reclamation>(this.uri + `Reclamation/getone/${id}`);
  }

  deleteReclamation(id: number): Observable<Object> {
    return this.http.delete(this.uri + `Reclamation/delReclamation/${id}`);
  }
}
