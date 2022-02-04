import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SoutenanceService } from '../services/soutenance.service';

@Component({
  selector: 'app-liste-soutenance',
  templateUrl: './liste-soutenance.component.html',
  styleUrls: ['./liste-soutenance.component.css']
})
export class ListeSoutenanceComponent implements OnInit {

  constructor(private soutenanceService: SoutenanceService) { }
  result = '';
  data = [];
  Filterdata = [];
  user;
  ngOnInit(): void {
    console.log(this.user);
    this.soutenanceService.getAll().toPromise().then((res:any[])=>{
      if (res.length == 0)
        this.result = "Aucune planification de soutenance";
      this.data = this.Filterdata =  res;
      console.log(res);
    })
  }


  filte(e){
    if(e != "")
    {
      this.Filterdata = [];
  
      this.data.forEach(p =>{if (
          (p.sfe.toLocaleLowerCase().includes(e.toLocaleLowerCase())) || 
          (p.encadreur.toLocaleLowerCase().includes(e.toLocaleLowerCase())) ||
          (p.president.toLocaleLowerCase().includes(e.toLocaleLowerCase())) ||
          (p.rapporteur.toLocaleLowerCase().includes(e.toLocaleLowerCase())) ||
          (p.salle.toLocaleLowerCase().includes(e.toLocaleLowerCase())) ||
          (p.date.toLocaleLowerCase().includes(e.toLocaleLowerCase()))
        )
        {
             this.Filterdata.push(p); 
        }
    })
    }
    else{
      this.Filterdata = this.data;
    }
  }
}
