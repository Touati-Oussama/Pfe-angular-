import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Salle } from './../Models/Salle';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

  
@Injectable({
  providedIn: 'root'
})
export class SalleService {

  apiURL: string = 'http://localhost:8080/gestionPfe/api/salle';
  
  constructor(private http : HttpClient) { }

  ajouter(salle: Salle):any{
    return this.http.post(this.apiURL,salle,httpOptions)
  }

  getAll():any{
    return this.http.get(this.apiURL);
  }

  delete(id:any):any{
    const url = `${this.apiURL}/delete/${id}`;
    return this.http.delete(url);
  }

  update(salle:Salle,id:any):any{
    const url = `${this.apiURL}/update/${id}`;
    return this.http.post(url,salle,httpOptions) ;
  }
  getById(id: number){
    return this.http.get(`${this.apiURL}/${id}`);
  }

  getByNom(nom: String){
    return this.http.get(`${this.apiURL}/nom/${nom}`);
  }
}
