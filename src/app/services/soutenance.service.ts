import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Soutenance } from './../models/Test';



const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

  
@Injectable({
  providedIn: 'root'
})
export class SoutenanceService {

  apiURL: string = 'http://localhost:8080/gestionPfe/api/soutenance';
  constructor(private http : HttpClient) { }


  getAll(): any{
    //console.log(`${this.apiURL}/${id}`)
    return this.http.get(this.apiURL);

    // this.http.get(`${this.apiURL}/list`);
  }

  ajouter(soutenance:Soutenance, sfeId: number, rapId, preId,salleId): any{
    const url = `${this.apiURL}/add/${sfeId}/${preId}/${rapId}/${salleId}`;
    return this.http.post(url,soutenance,httpOptions);
  }

  getBydateSalle(date: String,salle: string): any{
    return this.http.get(`${this.apiURL}/getByDateSalle/${date}/${salle}`);
  }

  getBySalle(id: number): any{
    return this.http.get(`${this.apiURL}/salle/${id}`);
  }

  findBydateSalle(date: String,idSalle: number): any{
    return this.http.get(`${this.apiURL}/findByDateSalle/${date}/${idSalle}`);
  }

  getBydateJury(date: String,id: number): any{
    return this.http.get(`${this.apiURL}/getByDateJury/${date}/${id}`);
  }

  getBySfe(id: number): any{
    return this.http.get(`${this.apiURL}/getBySfe/${id}`);
  }

  getByEtud(id: number): any{
    return this.http.get(`${this.apiURL}/etud/${id}`);
  }

  getByEns(id: number): any{
    return this.http.get(`${this.apiURL}/en/${id}`);
  }
}
