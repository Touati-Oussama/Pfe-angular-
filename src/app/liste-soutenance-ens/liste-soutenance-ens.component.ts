import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FileService } from '../services/file.service';
import { SoutenanceService } from '../services/soutenance.service';
import { saveAs } from 'file-saver';
import { NoteService } from './../services/note.service';



const MIME_TYPES = {
  pdf: 'application/pdf',
  xls: 'application/vnd.ms-excel',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetxml.sheet',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
}
@Component({
  selector: 'app-liste-soutenance-ens',
  templateUrl: './liste-soutenance-ens.component.html',
  styleUrls: ['./liste-soutenance-ens.component.css']
})
export class ListeSoutenanceEnsComponent implements OnInit {

  
  constructor(private soutenanceService: SoutenanceService,private authService: AuthService,
    private noteService: NoteService,
    private uploadService: FileService) { }
  result = '';
  id:any;
  data = [];
  user;
  verifNote = [];
  ngOnInit(): void {
    this.id = this.authService.userId;
    this.user = this.authService.loggedUser + " " + this.authService.userPrenom;
    console.log(this.user);
    this.soutenanceService.getByEns(this.id).toPromise().then((res:any[])=>{
      res.forEach((tmp) =>{
        this.noteService.getBySoutenance(tmp.id).toPromise().then((res:any) =>{
          if (res == null){
            this.verifNote.push(tmp);
          }
        })
      }

      )
      /*console.log(res);*/
      if (this.verifNote.length != 0)
        this.result = "Aucune planification de soutenance";
      this.data = this.verifNote;
    })
  }

  verif(date: Date): Boolean{
    const verif_date = formatDate(new Date(),'yyyy-MM-dd','en_US');
    const date2  = formatDate(date,'yyyy-MM-dd','en_US');
    if (date2 <= verif_date)
      return true;
    else
      return false;

  }

  downloadFile(id) {
    this.uploadService.downloadFile(id)
    .subscribe(data => {
      //save it on the client machine.
      saveAs(new Blob([data], {type: MIME_TYPES['application/vnd.openxmlformats-officedocument.wordprocessingml.document']}), 'Rapport.DOCX');
    })
  }
}
