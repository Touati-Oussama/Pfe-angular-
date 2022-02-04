import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandeEnseignantService } from 'src/app/services/demande-enseignant.service';
import { EnseignantService } from 'src/app/services/enseignant.service';
import { Etudiant } from 'src/app/models/Etudiant';


@Component({
  selector: 'app-liste-demende-enseignant',
  templateUrl: './liste-demende-enseignant.component.html',
  styleUrls: ['./liste-demende-enseignant.component.css']
})
export class ListeDemendeEnseignantComponent implements OnInit {

  successMsg='';
  errorMsg='';
  newEn: Etudiant = new Etudiant();
  data = [];
  nbEnseignants: number;
  constructor(private demandeInscriptionEnseignant: DemandeEnseignantService, private router:Router, 
              private enseignantService: EnseignantService) { }

  ngOnInit(): void {
    this.demandeInscriptionEnseignant.listeEnseignants().toPromise().then((res:any[])=>{
    this.data = res;
    this.nbEnseignants = this.data.length;
    })}
             



  supprimerEnseignant(en: Etudiant){
    let conf = confirm("Etes-vous sûr ?");
    if (conf){
      this.demandeInscriptionEnseignant.supprimerEnseignant(en.id).subscribe(() => {
        console.log("Enseignant supprimé");
        this.ngOnInit();
      });
    }

  }


  ajouterEnseignant( en: Etudiant){
    this.newEn.nom = en.nom;
    this.newEn.prenom = en.prenom;
    this.newEn.telephone = en.telephone;
    this.newEn.email = en.email;
    this.newEn.password = en.password;
    this.enseignantService.ajouterEnseignant(this.newEn).subscribe(prod =>{
      if (prod.id) {
        this.successMsg='Added successfully !';
      }else{
        this.errorMsg='Something went wrong';
      }
      this.supprimerEnseignant(en);
    });
  }
}
