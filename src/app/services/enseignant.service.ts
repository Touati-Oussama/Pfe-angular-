import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etudiant } from '../models/Etudiant';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  apiURL: string = 'http://localhost:8080/gestionPfe/api/enseignant';
  constructor( private http : HttpClient) { }

  listeEnseignants(): any{
    return this.http.get(this.apiURL);
  }

  ajouterEnseignant( etud: Etudiant):any{
    return this.http.post(this.apiURL,etud,httpOptions);
  }
  get(id: any): any {
    console.log(`${this.apiURL}/${id}`);
    return this.http.get(`${this.apiURL}/${id}`);
  }

  listeTest():any{
    return this.http.get(this.apiURL);
  }

  updateEnseignant(ens: any,id: number){
    const url = this.apiURL + "/update/" + id;
    return this.http.post(url,ens,httpOptions);
  }

  deleteEtudiant(id){
    const url = this.apiURL + "/delete/" + id;
    return this.http.delete(url);
  }
}
