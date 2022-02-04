import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Etudiant } from '../models/Etudiant';
import { DemandeInscriptionService } from '../services/demande-inscription.service';
import { EnseignantService } from '../services/enseignant.service';
import { EtudiantService } from '../services/etudiant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css']
})
export class UpdateEtudiantComponent implements OnInit {

  successMsg='';
  errorMsg='';
  msg = '';
  errorPass = '';
  etudiants = [];

  submitted = false;
  loading = false;
  newEtud: Etudiant = new Etudiant();
  id:number;

  EtudiantData = new FormGroup(
    {
      nom: new FormControl('',[Validators.required]),
      prenom: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      telephone: new FormControl('',[Validators.required,Validators.minLength(8)]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    }
  )
  constructor(private demandeInscriptionService: DemandeInscriptionService,
              private route: ActivatedRoute,
              private router: Router,
              private etudiantService :EtudiantService,private enseignantService:EnseignantService)
               { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.etudiantService.getEtudiant(this.id).toPromise().then((res:any) =>{
      console.log(res);
      this.EtudiantData.setValue(res);
    })
    /*this.etudiantService.listeTest().toPromise().then((res: any[]) =>{
      this.etudiants = res;
      this.enseignantService.listeTest().toPromise().then((result: any[]) =>{
        console.log(result);
        console.log(res);
      });
    })*/

  }
 
  
  get f() { return this.EtudiantData.controls; }


  modifier(){
    console.log("hhhh");
    this.submitted = true;
    this.loading = true;
    this.id = this.route.snapshot.params.id;
    this.newEtud.nom =  this.EtudiantData.value['nom'];
    this.newEtud.prenom = this.EtudiantData.value['prenom'];
    this.newEtud.telephone = this.EtudiantData.value['telephone'];
    this.newEtud.email = this.EtudiantData.value['email'];
    this.newEtud.password = this.EtudiantData.value['password'];
    /*this.etudiantService.listeTest().toPromise().then((res: any [])=>{
      const isUserExists = res.some(({ email }) => email === this.newEtud.email);
      if (isUserExists)
        this.msg=' Email déja exist !';
      else{
        this.enseignantService.listeTest().toPromise().then((result: any[]) =>{
          const isExist = result.some(({ email }) => email === this.newEtud.email);
          if (isExist)
          this.msg=' Email déja exist !';
          else{
            this.demandeInscriptionService.ajouterEtudiant(this.newEtud).subscribe(prod =>{
              if (prod.id) {
                this.successMsg='Request successfully !';
              }else{
                this.errorMsg='Something went wrong';
              }
            });
          }
        })

      }
      
    })*/
    
    this.etudiantService.updateEtudiant(this.newEtud,this.id).toPromise().then((res: any)=>{
      if (res.id){
        alert("Updated successfully !'");
        this.router.navigate(['listeEtud'])
      }
      else{
        this.errorMsg='Something went wrong';
      }
    })
    if (this.EtudiantData.invalid){
      return;
    }


  }
  filte(e){
    this.loading = false;
  }

}
