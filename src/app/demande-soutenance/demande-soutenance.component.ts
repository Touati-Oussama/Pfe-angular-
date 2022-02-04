import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SfeService } from './../services/sfe.service';
import { SoutenanceService } from './../services/soutenance.service';
import { FileService } from './../services/file.service';

@Component({
  selector: 'app-demande-soutenance',
  templateUrl: './demande-soutenance.component.html',
  styleUrls: ['./demande-soutenance.component.css']
})
export class DemandeSoutenanceComponent implements OnInit {
  errorMsg= '';
  data = [];
  Filterdata = [];
  verif = [];
  notValid = true;
  constructor(private sfeService: SfeService, private fileService:FileService,
    private soutenanceService:SoutenanceService, private router:Router) { }

  ngOnInit(): void {
    this.sfeService.getAll().toPromise().then((res:any[])=>{
      res.forEach((tmp) => {
        this.soutenanceService.getBySfe(tmp.id).toPromise().then((res:any) =>{
          if (res == null){
            
            this.verif.push(tmp);
            //console.log(this.verif);
          }
         
        })
      })
      console.log(this.verif);
      console.log(res);
      this.data = this.Filterdata = this.verif;
    })
  }


  filte(e){
    if(e != "")
    {
      this.Filterdata = [];
  
      this.data.forEach(p =>{if (
          (p.sujet.toLocaleLowerCase().includes(e.toLocaleLowerCase())) || 
          (p.encadreur.toLocaleLowerCase().includes(e.toLocaleLowerCase())) ||
          (p.etudiant.toLocaleLowerCase().includes(e.toLocaleLowerCase()))
        )
        {
             this.Filterdata.push(p); 
        }
    })
    }
    else{
      this.errorMsg = "SFE non Trouvé !";
      this.Filterdata = this.data;
    }
  }

  planifier(id){
    this.fileService.getBySfe(id).toPromise().then((res:any) =>{
      if (res.success)
            this.router.navigate(['addSoutenance/'+id])
      else
        this.notValid = false;
      
      
    })

  }
}
