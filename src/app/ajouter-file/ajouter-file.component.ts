import { HttpParams, HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileService } from './../services/file.service';
import { AuthService } from './../services/auth.service';
import { saveAs } from 'file-saver';
import { SfeService } from './../services/sfe.service';



const MIME_TYPES = {
  pdf: 'application/pdf',
  xls: 'application/vnd.ms-excel',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetxml.sheet',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
}


@Component({
  selector: 'app-ajouter-file',
  templateUrl: './ajouter-file.component.html',
  styleUrls: ['./ajouter-file.component.css']
})
export class AjouterFileComponent implements OnInit {

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  error = '';
  id : any;
  nb: number;
  fileInfos: any [];
  verif:any;
  constructor(private uploadService: FileService, private authService: AuthService, private sfeService:SfeService) { }
  ngOnInit(): void {
    this.id = this.authService.userId;
    this.sfeService.getAllSfeByEtud(this.id).toPromise().then((res:any) =>{
      if (res == null)
        this.verif = false;
      else
        this.verif = true;
    })
    this.uploadService.getFile(this.id).toPromise().then((res: any[]) =>
    {
      this.fileInfos = res;
      this.nb = this.fileInfos.length;
      console.log(this.fileInfos);
    });
  }

  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    console.log(this.id);
    this.progress = 0;
  
    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(this.currentFile, this.id).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.uploadService.getFile(this.id).toPromise().then((res: any[]) =>
          {
            this.fileInfos = res;
            this.nb = this.fileInfos.length;
           
          });
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });
    this.selectedFiles = undefined;
  }

  test(url : String){
    console.log(url);
    this.uploadService.getFilee(url).toPromise().then((res:any) =>{
      console.log(res);
    })
  }

  downloadFile(id) {
    this.uploadService.downloadFile(id)
    .subscribe(data => {
      //save it on the client machine.
      saveAs(new Blob([data], {type: MIME_TYPES['application/vnd.openxmlformats-officedocument.wordprocessingml.document']}), 'Rapport.DOCX');
    })
  }

}
