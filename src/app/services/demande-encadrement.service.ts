import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DemandeEncadrement } from '../models/DemandeEncadrement';
import { DemandeEncadrementEng } from './../models/DemandeEncadrementEng';





const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class DemandeEncadrementService {
  
  apiURL: string = 'http://localhost:8080/gestionPfe/api/DemandeEncadrement';

  constructor(private http : HttpClient) { }

  ajouterEnseignant( demande: DemandeEncadrement,EtudId: number, enId: number): Observable <DemandeEncadrement>{
    const url = `${this.apiURL}/add/${EtudId}/${enId}`;
    return this.http.post<DemandeEncadrement>(url,demande,httpOptions);
  }

  getByEtudId(id:number): Observable<DemandeEncadrement[]>{
    console.log(`${this.apiURL}/etud/${id}`)
    return this.http.get<DemandeEncadrement[]>(`${this.apiURL}/etud/${id}`);
  }

  getByEnId(id:number): Observable<DemandeEncadrementEng[]>{
    //console.log(`${this.apiURL}/${id}`)
    return this.http.get<DemandeEncadrementEng[]>(`${this.apiURL}/en/${id}`);
  }

  deleteEncadrement(idEtud: number,idEns:number){
    const url= `${this.apiURL}/delete/${idEtud}/${idEns}`;
    return this.http.delete(url,httpOptions);
  }
  
  delete(id: number){
    const url= `${this.apiURL}/del/${id}`;
    return this.http.delete(url,httpOptions);
  }

  getByIds(idEtud:number, idEns:number): any{
    return this.http.get(`${this.apiURL}/${idEtud}/${idEns}`);
  }
}
