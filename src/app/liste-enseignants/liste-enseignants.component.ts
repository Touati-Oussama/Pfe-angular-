import { Component, OnInit } from '@angular/core';
import { EnseignantService } from 'src/app/services/enseignant.service';
import { SfeService } from './../services/sfe.service';

@Component({
  selector: 'app-liste-enseignants',
  templateUrl: './liste-enseignants.component.html',
  styleUrls: ['./liste-enseignants.component.css']
})
export class ListeEnseignantsComponent implements OnInit {

  constructor(private enseignantService:EnseignantService, private sfeService: SfeService) { }
  data = [];
  Filterdata;
  errorMsg = '';
  errorDelete = '';
  ngOnInit(): void {
    this.enseignantService.listeEnseignants().toPromise().then((res:any[])=>{
      this.data = this.Filterdata = res;
    })
  
  }

  filte(e){
    if(e != "")
    {
      this.Filterdata = [];
  
      this.data.forEach(p =>{if ((p.nom.toLocaleLowerCase().includes(e.toLocaleLowerCase())) || (p.prenom.toLocaleLowerCase().includes(e.toLocaleLowerCase())))
        {
             this.Filterdata.push(p); 
        }
    })
    }
    else{
      this.errorMsg = "Enseignant non Trouvé !";
      this.Filterdata = this.data;
    }
  }

  delete(id:number){
    if (confirm('Do you really want to delete this student ?')) {
      this.sfeService.getAllSfeByEng(id).toPromise().then((res: any[]) =>{
        console.log(res.length);
        if (res.length == 0){
          this.enseignantService.deleteEtudiant(id).toPromise().then( (res)=>{
            this.enseignantService.listeEnseignants().toPromise().then((res:any[])=>{
              this.data = this.Filterdata = res;
            })
          })
        }
        else {
          this.errorDelete = " Impossible de supprimer l'etudiant! car il a un sfe !";
        }
      })

    }
  }
}
