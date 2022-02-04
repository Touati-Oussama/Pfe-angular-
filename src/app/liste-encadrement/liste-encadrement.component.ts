import { Component, OnInit } from '@angular/core';
import { DemandeEncadrementEng } from '../models/DemandeEncadrementEng';
import { AuthService } from '../services/auth.service';
import { DemandeEncadrementService } from '../services/demande-encadrement.service';
import { EtudiantService } from '../services/etudiant.service';
import { SfeService } from '../services/sfe.service';

@Component({
  selector: 'app-liste-encadrement',
  templateUrl: './liste-encadrement.component.html',
  styleUrls: ['./liste-encadrement.component.css']
})
export class ListeEncadrementComponent implements OnInit {
  demandes: DemandeEncadrementEng[];
  usersE: any[];
  id:any;
  idEtud:any;
  nb: number;
  constructor(private demandeEncadrementService: DemandeEncadrementService,
    private sfeService: SfeService,private authService: AuthService,private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.id = this.authService.userId;
    this.sfeService.getAllSfeByEng(this.id).subscribe(res =>{
      this.demandes = res;
      console.log(this.demandes);   
      this.nb = this.demandes.length;  
    });
    /*this.demandes$ = this.demandeEncadrementService.getByEtudId(this.id);*/
 
  }

}

