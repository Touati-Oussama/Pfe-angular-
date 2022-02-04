import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

  
@Injectable({
  providedIn: 'root'
})
export class DirectionService {
  apiURL: string = 'http://localhost:8080/gestionPfe//api/Direction';
  constructor( private http : HttpClient) { }

  listeDirections(): any{
    return this.http.get(this.apiURL);
  }
}
