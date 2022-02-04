import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Salle } from '../Models/Salle';
import { SalleService } from '../services/salle.service';
import { Router } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-add-salle',
  templateUrl: './add-salle.component.html',
  styleUrls: ['./add-salle.component.css']
})
export class AddSalleComponent implements OnInit {

  constructor(private salleService:SalleService, private router:Router) { }
  submitted = false;
  loading = false;
  SalleData: FormGroup;
  salle:Salle = new Salle();
  errorNom = '';
  error = '';
  ngOnInit(): void {

    this.SalleData = new FormGroup(
      {
        nom: new FormControl('',[Validators.required]),

      }
    )
  }

    
  get f() { return this.SalleData.controls; }
  ajouter(){
    this.submitted = true;
    this.loading = true;
    this.salle.nom = this.SalleData.value['nom'];
    this.salleService.getByNom(this.salle.nom).toPromise().then((res:any)=>{
      if (res){
        this.errorNom = "La Salle est déja exist !";
      }
      else{
        this.salleService.ajouter(this.salle).toPromise().then((res:any)=>{
          console.log(res);
          if(res){
            alert("La salle est ajouté");
            this.router.navigate(['image']);
          }
          else
            this.error = "Echec d'ajout !";
        })
      }
    })
  }


  filte(e){
    this.loading = false;
    this.errorNom = '';
    this.error = '';
  
  }


  
}
