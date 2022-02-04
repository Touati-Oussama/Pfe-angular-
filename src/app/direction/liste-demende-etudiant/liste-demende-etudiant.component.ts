import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/models/Etudiant';
import { DemandeInscriptionService } from 'src/app/services/demande-inscription.service';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-liste-demende-etudiant',
  templateUrl: './liste-demende-etudiant.component.html',
  styleUrls: ['./liste-demende-etudiant.component.css']
})
export class ListeDemendeEtudiantComponent implements OnInit {

  successMsg='';
  errorMsg='';
 
  newEtud: Etudiant = new Etudiant();
  data = [];
  Filterdata;
  nbEtudiants: number;
  constructor(private demandeInscriptionService: DemandeInscriptionService, private router:Router, 
              private etudiantService: EtudiantService) { }
  ngOnInit(): void {
    this.demandeInscriptionService.listeEtudiants().toPromise().then((res:any[])=>{
    this.data = this.Filterdata =  res;
    this.nbEtudiants = this.data.length;
    })}
 
  

  supprimerEtudiant(etudiant: Etudiant){
    let conf = confirm("Etes-vous sûr ?");
    if (conf){
      this.demandeInscriptionService.supprimerEtudiant(etudiant.id).subscribe(() => {
        console.log("Etudiant supprimé");
        this.ngOnInit();
      });
    }

  }

  ajouterEtudiant( etud: Etudiant){
    this.newEtud.nom = etud.nom;
    this.newEtud.prenom = etud.prenom;
    this.newEtud.telephone = etud.telephone;
    this.newEtud.email = etud.email;
    this.newEtud.password = etud.password;
    this.etudiantService.ajouterEtudiant(this.newEtud).subscribe(prod =>{
      if (prod.id) {
        this.successMsg='Added successfully !';
      }else{
        this.errorMsg='Something went wrong';
      }
      
      this.supprimerEtudiant(etud);
    });
  }


  filte(e){
    if(e != "")
    {
      this.Filterdata = [];
  
      this.data.forEach(p =>{if ((p.nom.toLocaleLowerCase().includes(e.toLocaleLowerCase())) || (p.prenom.toLocaleLowerCase().includes(e.toLocaleLowerCase())))
        {
             this.Filterdata.push(p); 
        }
    })
    }
    else{
      this.Filterdata = this.data;
    }
  }



}