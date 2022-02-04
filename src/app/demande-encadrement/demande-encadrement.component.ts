import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { EnseignantService } from '../services/enseignant.service';
import { SfeService } from '../services/sfe.service';

@Component({
  selector: 'app-demande-encadrement',
  templateUrl: './demande-encadrement.component.html',
  styleUrls: ['./demande-encadrement.component.css']
})
export class DemandeEncadrementComponent implements OnInit {

  verif:any;
  enseignants = [];
  id:any;
  constructor(private enseignantService: EnseignantService, private authService:AuthService, private sfeService:SfeService) { }

  ngOnInit(): void {
    this.id = this.authService.userId;
    this.sfeService.getAllSfeByEtud(this.id).toPromise().then((res:any) =>{
      if (res == null)
        this.verif = false;
      else
        this.verif = true;
    })
    this.enseignantService.listeEnseignants().toPromise().then( (res:any[]) => {      
      this.enseignants = res;
      console.log(this.enseignants);
    });
  }

  /*clicked(e:Enseignant){
    console.log("DemandeEncadrement/add/" + e.ncen + "/" + this.authService.userId);
  }*/

}
