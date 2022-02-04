import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SalleService } from './../services/salle.service';
import { SoutenanceService } from './../services/soutenance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  error = '';
  success = '';
  data = [];
  Filterdata;
  constructor(private salleService:SalleService,
    private router:Router,
    private soutenanceService:SoutenanceService) { }
  ngOnInit(): void {
    this.salleService.getAll().toPromise().then((res:any[]) =>{
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
      this.Filterdata = this.data;
    }
  }

  modifier(id){
    this.router.navigate(['updateSalle/'+id]);
  }
  supprimer(id){
    if (confirm('Do you really want to delete this student ?')) {
    this.soutenanceService.getBySalle(id).toPromise().then((res:any[])=>{
      if(res.length != 0){
        this.error = "Impossible de supprimer la salle. Il y'a des soutenance qui sont planifiées dans cette salle";
      }
      else {
        this.salleService.delete(id).toPromise().then((res:any)=>{
          console.log(res);
          this.success = "La salle est supprimé !";
          this.salleService.getAll().toPromise().then((res:any[]) =>{
            this.data = this.Filterdata = res;
          })
        })
      }
    })

    }
  }
}
