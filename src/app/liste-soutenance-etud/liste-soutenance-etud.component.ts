import { Component, OnInit } from '@angular/core';
import { SoutenanceService } from './../services/soutenance.service';
import { AuthService } from 'src/app/services/auth.service';
import { NoteService } from './../services/note.service';

@Component({
  selector: 'app-liste-soutenance-etud',
  templateUrl: './liste-soutenance-etud.component.html',
  styleUrls: ['./liste-soutenance-etud.component.css']
})
export class ListeSoutenanceEtudComponent implements OnInit {

  constructor(private soutenanceService: SoutenanceService,private authService: AuthService,private noteService: NoteService) { }
  data: any;
  id:any;
  result = '';
  note = 0;
  ngOnInit(): void {
    this.id = this.authService.userId;
    this.soutenanceService.getByEtud(this.id).toPromise().then((res:any)=>{
      console.log(res);
      if (res != null)
        this.data = res;
      else 
      this.result = "Aucune planification de soutenance";
    })

    this.noteService.getByEtud(this.id).toPromise().then((res:any) => {
      console.log(res);
      this.note = res.note
    })
  }

}
