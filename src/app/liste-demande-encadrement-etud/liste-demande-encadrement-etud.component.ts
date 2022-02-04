import { Component, OnInit } from '@angular/core';
import { DemandeEncadrement } from '../Models/DemandeEncadrement';
import { AuthService } from '../services/auth.service';
import { DemandeEncadrementService } from '../services/demande-encadrement.service';

@Component({
  selector: 'app-liste-demande-encadrement-etud',
  templateUrl: './liste-demande-encadrement-etud.component.html',
  styleUrls: ['./liste-demande-encadrement-etud.component.css']
})
export class ListeDemandeEncadrementEtudComponent implements OnInit {

  constructor(private demandeEncadrementService: DemandeEncadrementService,private authService: AuthService) { }
  data: DemandeEncadrement[];
  id:any;
  nb:number;
  ngOnInit(): void {
    this.id = this.authService.userId;
    this.demandeEncadrementService.getByEtudId(this.id).subscribe(res =>{
      this.data = res;
      console.log(this.data);     
      this.nb = this.data.length;
    });
    /*this.demandes$ = this.demandeEncadrementService.getByEtudId(this.id);*/
    this.test();
  }

  test(){
   console.log(this.data);
  }

}