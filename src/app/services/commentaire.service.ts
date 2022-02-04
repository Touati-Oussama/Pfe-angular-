import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentaire } from './../models/Commentaire';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

  
@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  apiURL: string = 'http://localhost:8080/gestionPfe/api/Commentaire';
  constructor(private http: HttpClient) { }

  getBySFE(id:number):Observable<Commentaire[]>{
    console.log(`${this.apiURL}/sfe/${id}`);
    return this.http.get<Commentaire[]>(`${this.apiURL}/sfe/${id}`)
  }

  ajouterCommentaire(commentaire:Commentaire,idSFE: number):Observable<Commentaire>{
    const url = `${this.apiURL}/add/${idSFE}`;
    console.log(url);
    return this.http.post<Commentaire>(url,commentaire,httpOptions);
  }
}
