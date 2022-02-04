import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Salle } from '../Models/Salle';
import { SalleService } from '../services/salle.service';

@Component({
  selector: 'app-edit-salle',
  templateUrl: './edit-salle.component.html',
  styleUrls: ['./edit-salle.component.css']
})
export class EditSalleComponent implements OnInit {

  constructor(private salleService:SalleService, private router:Router,private route:ActivatedRoute) { }
  submitted = false;
  loading = false;

  SalleData = new FormGroup(
    {
      id: new FormControl('',[Validators.required]),
      nom: new FormControl('',[Validators.required]),

    }
  );
  salle:Salle = new Salle();
  errorNom = '';
  error = '';
  id;
  nom;
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.salleService.getById(this.id).toPromise().then((res:any) =>{
      this.SalleData.setValue(res);
      
    })
  }

    
  get f() { return this.SalleData.controls; }

  modifier(){
    this.id = this.route.snapshot.params.id;
    this.submitted = true;
    this.loading = true;
    this.salle.nom = this.SalleData.value['nom'];
    console.log(this.salle.nom);
        this.salleService.update(this.salle,this.id).toPromise().then((res:any)=>{
          console.log(res);
          if(res){
            alert("La salle est modifier");
            this.router.navigate(['image']);
          }
          else
            this.error = "Echec de modification !";
        })
  }


  filte(e){
    this.loading = false;
    this.errorNom = '';
    this.error = '';
  
  }

}
