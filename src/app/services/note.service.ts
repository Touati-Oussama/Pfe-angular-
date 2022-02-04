import { HttpClient, HttpHeaders } from '@angular/common/http';
import { not } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Note } from '../Models/Note';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

  
@Injectable({
  providedIn: 'root'
})
export class NoteService {

  apiURL: string = 'http://localhost:8080/gestionPfe/api/note';
  constructor(private http : HttpClient) { }

  ajouter(note:Note, id: number): any{
    const url = `${this.apiURL}/add/${id}`;
    return this.http.post(url,note,httpOptions);
  }

  getByEtud(id: number): any{
    return this.http.get(`${this.apiURL}/etud/${id}`);
  }
  getBySoutenance(id:number):any{
    return this.http.get(`${this.apiURL}/soutenance/${id}`);
  }

}
