import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeEncadrement } from '../Models/DemandeEncadrement';
import { Etudiant } from '../models/Etudiant';
import { DemandeEncadrementService } from '../services/demande-encadrement.service';
import { EnseignantService } from '../services/enseignant.service';

@Component({
  selector: 'app-add-demande-encadrement',
  templateUrl: './add-demande-encadrement.component.html',
  styleUrls: ['./add-demande-encadrement.component.css']
})
export class AddDemandeEncadrementComponent implements OnInit {


  etudId: any = null;
  enId: any = null;
  nomEns : any;
  prenomEns: any;
  enseignant: Etudiant;
  demande : DemandeEncadrement = new DemandeEncadrement()
  successMsg ='';
  errorMsg = '';
  msg = '';
  constructor(private route:ActivatedRoute,private enseignantService: EnseignantService,
     private demandeEncadrementService:DemandeEncadrementService, private router:Router) { }

  ngOnInit(): void {
    this.etudId = this.route.snapshot.params.idEtud;
    this.enId = this.route.snapshot.params.idEn;  
    this.enseignantService.get(this.enId).subscribe(en =>{
      this.nomEns = en.nom;
      this.prenomEns = en.prenom;
      /*console.log(en);
      console.log(this.nomEns);*/
    });

  }

  Demande = new FormGroup(
    {
      enseignant: new FormControl([Validators.required,Validators.minLength(5)]),
      sujet: new FormControl('',[Validators.required]),
    }
  )

  ajouter(){
      this.demandeEncadrementService.getByIds(this.etudId,this.enId).toPromise().then((res: any []) =>{
        if (res.length == 0){
          this.demande.sujet = this.Demande.value['sujet'];
          this.demandeEncadrementService.ajouterEnseignant(this.demande,this.etudId,this.enId).toPromise().then(res =>{
            if (res.id) {
              this.successMsg='Request successfully !';
            }else{
              this.errorMsg='Something went wrong';
            }
          });
        }
        else 
          this.msg = "Vous avez déja une demande en cours !";
      })
    

    }
}
