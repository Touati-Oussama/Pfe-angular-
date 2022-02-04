import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etudiant } from '../models/Etudiant';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
  
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {


  etudiant : any;
  apiURL: string = 'http://localhost:8080/gestionPfe/api/etudiant';
  constructor( private http : HttpClient) { }

  listeEtudiants(): any{
    return this.http.get(this.apiURL);
  }
  ajouterEtudiant( etud: Etudiant):any{
    return this.http.post(this.apiURL,etud,httpOptions);
  }

  supprimerEtudiant(id :number){
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url,httpOptions);
  }


  getEtudiant(id: number){
    return this.http.get(`${this.apiURL}/${id}`);
  }
  
  listeTest():any{
    return this.http.get(this.apiURL);
  }

  updateEtudiant(etud: any,id: number){
    const url = this.apiURL + "/update/" + id;
    return this.http.post(url,etud,httpOptions);
  }
  deleteEtudiant(id){
    const url = this.apiURL + "/delete/" + id;
    return this.http.delete(url);
  }
}
