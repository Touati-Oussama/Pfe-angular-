import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from '../models/Etudiant';
import { EnseignantService } from '../services/enseignant.service';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-update-enseignant',
  templateUrl: './update-enseignant.component.html',
  styleUrls: ['./update-enseignant.component.css']
})
export class UpdateEnseignantComponent implements OnInit {
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
  constructor( 
    private enseignantService: EnseignantService, private etudiantService: EtudiantService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.enseignantService.get(this.id).toPromise().then((res:any) =>{
      console.log(res);
      this.EtudiantData.setValue(res);
    })
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
    this.enseignantService.updateEnseignant(this.newEtud,this.id).toPromise().then((res: any)=>{
      if (res.ncen){
        alert("Updated successfully !'");
        this.router.navigate(['listeEns'])
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
