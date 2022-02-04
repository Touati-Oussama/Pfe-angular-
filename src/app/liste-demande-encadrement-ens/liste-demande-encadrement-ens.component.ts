import { Component, OnInit } from '@angular/core';
import { DemandeEncadrementEng } from '../models/DemandeEncadrementEng';
import { AuthService } from '../services/auth.service';
import { DemandeEncadrementService } from '../services/demande-encadrement.service';
import { EtudiantService } from '../services/etudiant.service';
import { SfeService } from '../services/sfe.service';

@Component({
  selector: 'app-liste-demande-encadrement-ens',
  templateUrl: './liste-demande-encadrement-ens.component.html',
  styleUrls: ['./liste-demande-encadrement-ens.component.css']
})
export class ListeDemandeEncadrementEnsComponent implements OnInit {
  demandes: DemandeEncadrementEng[];
  usersE: any[];
  id:any;
  idEtud:any;
  successMsg =  '';
  errorMsg = '';
  nb: number;
  msg ='';
  constructor(private demandeEncadrementService: DemandeEncadrementService,
    private sfeService: SfeService,private authService: AuthService,private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.id = this.authService.userId;
    this.demandeEncadrementService.getByEnId(this.id).subscribe(res =>{
      this.demandes = res;
      console.log(this.demandes);    
      this.nb = this.demandes.length; 
    });
    /*this.demandes$ = this.demandeEncadrementService.getByEtudId(this.id);*/
 
  }
  Accepter(id: number, email: string){
    //this.searchEtud(email); 
    this.etudiantService.listeEtudiants().subscribe(etuds => {
      console.log(etuds);
      etuds.forEach((curUser) => {
        
        if(email === curUser.email) {
          this.idEtud = curUser.id;
     
          this.sfeService.test(this.idEtud).toPromise().then((res: any) =>{
            console.log(res);
            if (res != null)
              this.msg = " l'etudiant à déja un encadreur !";
            else {
              this.sfeService.ajouterSfe(id).subscribe(res =>{
                console.log("sfe ajouté! ");
                alert("Sfe ajouté");
              });
              const idEns = this.authService.userId; 
              this.demandeEncadrementService.deleteEncadrement(this.idEtud,idEns).subscribe(res =>{
                console.log("Les demandes supprimé");
                this.id = this.authService.userId;
                this.demandeEncadrementService.getByEnId(this.id).subscribe(res =>{
                  this.demandes = res;
                  console.log(this.demandes);    
                  this.nb = this.demandes.length; 
                });
              });

                
            }
          });      
        }
      }
      )});
  }
  supprimer(id: number, email: string){
    if (confirm('Do you really want to delete this student ?')) {
      this.etudiantService.listeEtudiants().subscribe(res => {
        res.forEach((curUser) => {
          if (email === curUser.email){
            const vid = curUser.id;
            const idEns = this.authService.userId; 
            this.demandeEncadrementService.deleteEncadrement(vid,idEns).subscribe(res =>{
              alert("Demande Suppriméé !");
              this.id = this.authService.userId;
              this.demandeEncadrementService.getByEnId(this.id).subscribe(res =>{
                this.demandes = res;
                console.log(this.demandes);    
                this.nb = this.demandes.length; 
              });
            })
          }
        });
      })
  }
}
}