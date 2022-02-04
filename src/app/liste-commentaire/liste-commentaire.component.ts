import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commentaire } from '../Models/Commentaire';
import { CommentaireService } from '../services/commentaire.service';
import { SfeService } from './../services/sfe.service';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-liste-commentaire',
  templateUrl: './liste-commentaire.component.html',
  styleUrls: ['./liste-commentaire.component.css']
})
export class ListeCommentaireComponent implements OnInit {
  commentaires: Commentaire[];
  id: any;
  sujet: any;
  nb: number;
  data: any;
  constructor(private route: ActivatedRoute,
     private commentaireService: CommentaireService,
     private sfeService:SfeService, public authService:AuthService,
     private Router: Router) { }

  ngOnInit(): void {
    this.sfeService.getAllSfeByEtud(this.authService.userId).toPromise().then( (res : any) =>{
      this.data = res;
    })
    this.id = this.route.snapshot.params.id;
    this.sujet = this.route.snapshot.params.sujet;
    console.log(this.id);
    this.commentaireService.getBySFE(this.id).subscribe(res =>{
      this.commentaires = res;
      this.nb = this.commentaires.length;
    })
  }

  add(){
    this.Router.navigate(['addCommentaire/' + this.id+ '/' + this.sujet]);
  }

}