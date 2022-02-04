import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Etudiant } from 'src/app/models/Etudiant';
import { DemandeInscriptionService } from 'src/app/services/demande-inscription.service';
import { EtudiantService } from './../../services/etudiant.service';
import { EnseignantService } from './../../services/enseignant.service';
import { DemandeEnseignantService } from './../../services/demande-enseignant.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  successMsg='';
  errorMsg='';
  msg = '';
  errorPass = '';
  etudiants = [];
  EtudiantData: FormGroup;
  submitted = false;
  loading = false;
  newEtud: Etudiant = new Etudiant();
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
    /*this.etudiantService.listeTest().toPromise().then((res: any[]) =>{
      this.etudiants = res;
      this.enseignantService.listeTest().toPromise().then((result: any[]) =>{
        console.log(result);
        console.log(res);
      });
    })*/
    this.EtudiantData = new FormGroup(
      {
        nom: new FormControl('',[Validators.required,Validators.minLength(3)]),
        prenom: new FormControl('',[Validators.required,Validators.minLength(3)]),
        email: new FormControl('',[Validators.required,Validators.email]),
        telephone: new FormControl('',[Validators.required,Validators.minLength(8)]),
        password: new FormControl('',[Validators.required,Validators.minLength(8)]),
        repeatPassword: new FormControl('',[Validators.required,Validators.minLength(8)])
      }
    )
  }
 
  
  get f() { return this.EtudiantData.controls; }


  ajouter(){
    this.submitted = true;
    this.loading = true;
    this.newEtud.nom =  this.EtudiantData.value['nom'];
    this.newEtud.prenom = this.EtudiantData.value['prenom'];
    this.newEtud.telephone = this.EtudiantData.value['telephone'];
    this.newEtud.email = this.EtudiantData.value['email'];
    this.newEtud.password = this.EtudiantData.value['password'];
    const pass = this.EtudiantData.value['repeatPassword'];
    
    if (this.f.email.errors == null){
      if (pass != this.newEtud.password)
      this.errorPass = "Repeat Password Invalid !";
    else{
      
      console.log(this.demnadeEtudiant);
      console.log(this.demandeEnseignant);
      this.data = this.listeEtuidants.concat(this.listeEnseignants.concat(this.demandeEnseignant.concat(this.demnadeEtudiant)));
      console.log(this.data);
      const isUserExists = this.data.some(({ email }) => email == this.newEtud.email);
      console.log(isUserExists);
      if (isUserExists)
        this.msg=' Email déja exist !';
      else{
        this.demandeInscriptionService.ajouterEtudiant(this.newEtud).subscribe(prod =>{
          if (prod.id) {
            this.ok = 1;
            this.EtudiantData.reset();
            this.submitted = false;
            this.loading = false;
            console.log(this.ok);
          }else{
            this.errorMsg='Something went wrong';
            this.ok = 2;
          }
        });
      }
    }
    }
    if (this.EtudiantData.invalid){
      return;
    }


  }


  filte(e){
    this.loading = false;
    this.msg = '';
    this.errorPass = '';
    this.successMsg='';
    this.errorMsg='';

  }

 
}

