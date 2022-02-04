import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DemandeEnseignantService } from 'src/app/services/demande-enseignant.service';
import { Etudiant } from 'src/app/models/Etudiant';
import { EnseignantService } from 'src/app/services/enseignant.service';
import { EtudiantService } from './../../services/etudiant.service';
import { DemandeInscriptionService } from 'src/app/services/demande-inscription.service';

@Component({
  selector: 'app-add-enseignant',
  templateUrl: './add-enseignant.component.html',
  styleUrls: ['./add-enseignant.component.css']
})
export class AddEnseignantComponent implements OnInit {
  
  EnseignantData: FormGroup;
  successMsg='';
  errorMsg='';
  msg = '';
  errorPass = '';
  submitted = false;
  loading = false;
  newEnseignant: Etudiant = new Etudiant();
  listeEtuidants : any[];
  listeEnseignants: any [];
  demnadeEtudiant: any[];
  demandeEnseignant: any[];
  data: any [];
  ok = 0;
  constructor(private demandeInscriptionService: DemandeInscriptionService,
              private etudiantService :EtudiantService,
              private enseignantService:EnseignantService,
              private demandeInscriptionServiceEn: DemandeEnseignantService)
               {
                 this.etudiantService.listeEtudiants().toPromise().then((res: any[])=> { this.listeEtuidants = res;});
                 this.enseignantService.listeEnseignants().toPromise().then((res:any[]) => {this.listeEnseignants = res;});
                 this.demandeInscriptionService.listeEtudiants().toPromise().then((res:any[]) => { this.demnadeEtudiant = res});
                 this.demandeInscriptionServiceEn.listeEnseignants().toPromise().then((res:any[]) => {this.demandeEnseignant = res});
              }


  ngOnInit(): void {
    this.EnseignantData = new FormGroup(
      {
        nom: new FormControl('',[Validators.required,Validators.minLength(3)]),
        prenom: new FormControl('',[Validators.required,Validators.minLength(3)]),
        email: new FormControl('',[Validators.required,Validators.email]),
        telephone: new FormControl('',[Validators.required]),
        password: new FormControl('',[Validators.required,Validators.minLength(8)]),
        repeatPassword: new FormControl('',[Validators.required,Validators.minLength(8)])
      }
    )
  }
  get f() { return this.EnseignantData.controls; }
  

  ajouter(){
    this.submitted = true;
    this.loading = true;
   
    this.newEnseignant.nom =  this.EnseignantData.value['nom'];
    this.newEnseignant.prenom = this.EnseignantData.value['prenom'];
    this.newEnseignant.telephone = this.EnseignantData.value['telephone'];
    this.newEnseignant.email = this.EnseignantData.value['email'];
    this.newEnseignant.password = this.EnseignantData.value['password'];
    const pass = this.EnseignantData.value['repeatPassword'];
    if (this.f.email.errors == null){
      if (pass != this.newEnseignant.password)
      this.errorPass = "Repeat Password Invalid !";
    else{
      this.data = this.listeEtuidants.concat(this.listeEnseignants.concat(this.demandeEnseignant.concat(this.demnadeEtudiant)));
      console.log(this.data);
      const isUserExists = this.data.some(({ email }) => email == this.newEnseignant.email);
      if (isUserExists)
        this.msg=' Email déja exist !';
      else{
          this.demandeInscriptionServiceEn.ajouterEnseignant(this.newEnseignant).subscribe(prod =>{
            if (prod.id) {
              this.ok = 1;
              this.EnseignantData.reset();
              this.submitted = false;
              this.loading = false;
            }else{
              this.errorMsg='Something went wrong';
              this.ok = 2;
            }
          });
        }
    }
    }
    /*this.enseignantService.listeTest().toPromise().then((res: any [])=>{
      const isUserExists = res.some(({ email }) => email === this.newEnseignant.email);
      if (isUserExists)
        this.msg=' Email déja exist !';
      else{
        this.etudiantService.listeTest().toPromise().then((result: any[]) =>{
          const isExist = result.some(({ email }) => email === this.newEnseignant.email);
          if (isExist)
          this.msg=' Email déja exist !';
          else{
            this.demandeEnseignantService.ajouterEnseignant(this.newEnseignant).subscribe(prod =>{
              if (prod.id) {
                this.successMsg='Request successfully !';
                this.loading = false;
              }else{
                this.errorMsg='Something went wrong';
              }
            });
          }
          
        })

      }
    })*/

    if (this.EnseignantData.invalid){
      return;
    }
    this.loading = false;
  }


  filte(e){
    this.loading = false;
    this.msg = '';
    this.errorPass = '';
  }
}
