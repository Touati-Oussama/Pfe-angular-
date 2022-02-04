import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Note } from '../Models/Note';
import { not } from '@angular/compiler/src/output/output_ast';
import { NoteService } from './../services/note.service';

@Component({
  selector: 'app-ajouter-noter',
  templateUrl: './ajouter-noter.component.html',
  styleUrls: ['./ajouter-noter.component.css']
})
export class AjouterNoterComponent implements OnInit {
  successMsg = '';
  errorMsg = '';
  msg = '';
  constructor(private route:ActivatedRoute,private router:Router, private noteService: NoteService) { }
  id: any;
  note: Note;
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
  }


  data = new FormGroup(
    {
      note:new FormControl('',Validators.required)
    }
  );

  ajouter(){
    if ((Number(this.data.value['note'])  < 0) || (Number(this.data.value['note']) > 20))
      this.msg = 'Le note doit etre compris entre 0..20';
    else {
      this.note = new Note();
      this.note.note = this.data.value['note'];
      this.noteService.ajouter(this.note,this.id).toPromise().then((res:any) =>{
        if (res.id) {
          alert("La note est bien deposé !");
          this.router.navigate(['listeSoutenanceEns']);
        }else{
          this.errorMsg='Something went wrong';
        }
      })
    }


  }
}
