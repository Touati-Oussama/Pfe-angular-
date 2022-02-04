import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DemandeEncadrementEng } from '../models/DemandeEncadrementEng';
import { SFE } from '../models/Sfe';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
  
@Injectable({
  providedIn: 'root'
})
export class SfeService {

  apiURL: string = 'http://localhost:8080/gestionPfe/api/sfe/';

  constructor(private http : HttpClient) { }


  getAllSfe(): Observable<DemandeEncadrementEng[]>{
    //console.log(`${this.apiURL}/${id}`)
    return this.http.get<DemandeEncadrementEng[]>(`${this.apiURL}`);
  }

  getAll():any{
    return this.http.get(`${this.apiURL}get`);
  }
  get(id:number):any{
    return this.http.get(`${this.apiURL}get/${id}`);
  }

  getAllSfeByEng(id: number): Observable<DemandeEncadrementEng[]>{
    //console.log(`${this.apiURL}/${id}`)
    return this.http.get<DemandeEncadrementEng[]>(`${this.apiURL}/en/${id}`);
  }

  getAllSfeByEtud(id: number): Observable<SFE>{
    //console.log(`${this.apiURL}/${id}`)
    return this.http.get<SFE>(`${this.apiURL}/etudiant/${id}`);
  }
  
  ajouterSfe( demandeId: number): Observable <SFE>{
    const url = `${this.apiURL}/add/${demandeId}`;
    return this.http.post<SFE>(url,null,httpOptions);
  }


  test(id: number): any{
    //console.log(`${this.apiURL}/${id}`)
    return this.http.get(`${this.apiURL}/etudiant/${id}`);
  }

  getBySfeId(id: number){
    return this.http.get(`${this.apiURL}${id}`)
  }


}
