import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Commentaire } from '../Models/Commentaire';
import { AuthService } from '../services/auth.service';
import { CommentaireService } from '../services/commentaire.service';
import { SfeService } from './../services/sfe.service';

@Component({
  selector: 'app-add-commentaire',
  templateUrl: './add-commentaire.component.html',
  styleUrls: ['./add-commentaire.component.css']
})
export class AddCommentaireComponent implements OnInit {


  constructor(private route:ActivatedRoute,
    private router:Router,
    private commentaireService: CommentaireService ,private authService: AuthService) { }

commentaire: Commentaire = new Commentaire();
idSFE:any;
sujet:any;
ngOnInit(): void {
  
  this.idSFE = this.route.snapshot.params.id;
  this.sujet = this.route.snapshot.params.sujet;
  console.log(this.idSFE);
}

Commentaire = new FormGroup(
{
commentaire: new FormControl('',[Validators.required]),
}
)

add(){
  this.commentaire.commentaire = this.Commentaire.value['commentaire'];
  this.commentaire.owner = this.authService.userPrenom + " "+ this.authService.loggedUser;
  this.commentaireService.ajouterCommentaire(this.commentaire,this.idSFE).subscribe(res =>{
    alert("Commentaire ajouté");
    console.log(res.sfe);
    this.router.navigate(['listeEncadrement/listeCommentaire/' + this.idSFE + '/' + this.sujet]);
  })
}



}
