import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../models/Etudiant';



const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
  
@Injectable({
  providedIn: 'root'
})
export class DemandeInscriptionService {

  etudiant : Etudiant;
  apiURL: string = 'http://localhost:8080/gestionPfe//api/DemandeInscription';
  constructor( private http : HttpClient) { }

  listeEtudiants(): any{
    return this.http.get(this.apiURL);
  }
  ajouterEtudiant( etud: Etudiant): Observable <Etudiant>{
    return this.http.post<Etudiant>(this.apiURL,etud,httpOptions);
  }

  supprimerEtudiant(id :number){
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url,httpOptions);
  }
}
