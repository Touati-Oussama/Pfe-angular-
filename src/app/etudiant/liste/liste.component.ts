import { Component, OnInit } from '@angular/core';
import { EtudiantService } from './../../services/etudiant.service';
import { SfeService } from './../../services/sfe.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  data = [];
  Filterdata;
  errorMsg = '';
  errorDelete = '';
  constructor(private etudiantService: EtudiantService, private sfeService:SfeService) { }


  ngOnInit(): void {
    this.etudiantService.listeEtudiants().toPromise().then((res:any[])=>{
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
      this.errorMsg = "Etudiant non Trouvé !";
      this.Filterdata = this.data;
    }
  }
  delete(id:number){
    if (confirm('Do you really want to delete this student ?')) {
      this.sfeService.getAllSfeByEtud(id).toPromise().then((res: any) =>{
        console.log(res);
        if (res == null){
          this.etudiantService.deleteEtudiant(id).toPromise().then( (res)=>{
            this.etudiantService.listeEtudiants().toPromise().then((res:any[])=>{
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
