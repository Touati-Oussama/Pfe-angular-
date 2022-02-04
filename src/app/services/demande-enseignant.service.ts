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
export class DemandeEnseignantService {
  enseignant : Etudiant;
  apiURL: string = 'http://localhost:8080/gestionPfe/api/DemandeInscriptionEn/En';
  constructor( private http : HttpClient) { }

  listeEnseignants(): any{
    return this.http.get(this.apiURL);
  }
  ajouterEnseignant( en: Etudiant): any{
    return this.http.post(this.apiURL,en,httpOptions);
  }

  supprimerEnseignant(id :number){
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url,httpOptions);
  }
}
