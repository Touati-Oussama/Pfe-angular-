import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



const headers = new HttpHeaders().set(
  "Content-Type",
  "application/json; charset=utf-8"
);

  
@Injectable({
  providedIn: 'root'
})
export class FileService {

  apiURL: string = 'http://localhost:8080/gestionPfe/api/file';
  constructor(private http: HttpClient) { }
  upload(file: File, id: number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.apiURL}/upload/${id}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFile(id: number): Observable<any> {
    return this.http.get(`${this.apiURL}/etudiant/${id}`);
  }

  getFilee(url: String): any {
    return this.http.get(`${this.apiURL}/${url}`);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.apiURL}/files`);
  }

  getBySfe(id:number):any{
    return this.http.get(`${this.apiURL}/getBySfe/${id}`);
  }



  downloadFile(id) {
    // we would call the spring-boot service
    const REQUEST_URI = this.apiURL + "/download/"+id;
    return this.http.get(REQUEST_URI, {
      params: null,
      responseType: 'arraybuffer'
    })
  }
}
