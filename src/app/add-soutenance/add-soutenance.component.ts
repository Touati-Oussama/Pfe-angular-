import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SfeService } from './../services/sfe.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnseignantService } from './../services/enseignant.service';
import { SoutenanceService } from './../services/soutenance.service';
import { Soutenance } from '../models/Test';
import { DatePipe } from '@angular/common';
import { SalleService } from './../services/salle.service';

@Component({
  selector: 'app-add-soutenance',
  templateUrl: './add-soutenance.component.html',
  styleUrls: ['./add-soutenance.component.css']
})
export class AddSoutenanceComponent implements OnInit {
  successMsg = '';
  errorSFE = '';
  errorRapporteur = '';
  errorChoix = '';
  submitted = false;
  constructor(private route:ActivatedRoute, private SfeService:SfeService,
    private router:Router,
    private datepipe:DatePipe, private saleService:SalleService,
    private soutenanceService: SoutenanceService,
    private enseignantService: EnseignantService) { }
  sujet = "";
  encadreur;
  rapporteurs = [];
  presidents = [];
  salles = [];
  datas = [];
  errorSalle = '';
  errorPresident = '';
  soutenance: Soutenance = new Soutenance();
  date: Date;
  sfeId:number;idPr: number;idRap: number;
  nb: any;
  president: string;
  rapporteur: string;
  
  ngOnInit(): void {
    this.sfeId = this.route.snapshot.params.id;
    this.SfeService.get(this.sfeId).toPromise().then((res: any) => {
      this.sujet = res.sujet;
      this.encadreur = res.encadreur;
    })
    this.enseignantService.listeTest().toPromise().then((res:any) =>{
      this.presidents = res;
      this.rapporteurs = res;
      console.log(this.presidents);
    })
    this.saleService.getAll().toPromise().then((res:any) =>{
      this.salles = res;
    })
    //.SoutenanceData.setValue({presidant: ''})

    this.soutenanceService.getAll().toPromise().then((res:any[]) =>{
      console.log(res);
      this.datas = res;
    });
  }

  data = new FormGroup(
    {
      sfe: new FormControl('',[Validators.required]),
      encadreur: new FormControl('',[Validators.required]),
      presidant: new FormControl('',[Validators.required]),
      rapporteur: new FormControl('',[Validators.required]),
      salle: new FormControl('',[Validators.required]),
      date: new FormControl('',Validators.required)
    }
  )

  filte(e){
    this.successMsg = '';
    this.errorSFE = '';
    this.errorRapporteur = '';
    this.errorPresident = '';
    this.errorChoix = '';
    this.errorSalle = '';
  }
  onChange(e){
    this.successMsg = '';
    this.errorSFE = '';
    this.errorRapporteur = '';
    this.errorPresident = '';
    this.errorChoix = '';
    this.errorSalle = '';
  }
  /*ajouter(){
    this.submitted = true;
    this.idPr = this.data.value['presidant'];
    this.idRap = this.data.value['rapporteur'];
    this.soutenance.date =  this.data.value['date'];
    this.soutenance.salle = this.data.value['salle'];
    if ((this.soutenance.date == null) || (this.soutenance.salle.length == 0)){
      this.errorSFE = " Les champs sont obligatoires !";
    }
    else {
      let s = this.datepipe.transform(this.data.value['date'],'yyyy-MM-dd HH:mm');
      this.soutenanceService.getBySfe(this.sfeId).toPromise().then((res:any)=>{
        if (res != null)
         this.errorSFE = "Cette projet déja planifier";
         else{
          this.soutenanceService.findBydateSalle(s,this.data.value['salle']).toPromise().then((res:any[])=>{
            console.log(res);
            if (res.length > 0){
              this.errorSalle = "La salle est réservé pour une autre soutenance! ";
    
            }
            else{
              var vid = this.route.snapshot.params.id;
              this.SfeService.getBySfeId(vid).toPromise().then((res: any) =>{
                console.log(res.encadreur.ncen);
                console.log(this.idPr);
                console.log(this.idRap);
                if (res.encadreur.ncen === this.idRap)
                  console.log("ja3333333333");
                if ((res.encadreur.ncen == this.idPr) || (res.encadreur.ncen == this.idRap))
                  this.errorChoix = "L'encadreur et les jurys doit étre 2 enseignants différents!";
                else{
                  if (this.idPr === this.idRap){
                    this.errorChoix = "Le rapporteur et le présidant doit étre 2 enseignants différents!";
        
                  }
                 
                    else{
                      this.soutenanceService.getBydateJury(s,this.idPr).toPromise().then((res:any[])=>{
                        console.log(res);
                        if (res.length > 0){
                          this.errorPresident = "La présidant à déja une soutenance  dans ce temps! ";
                        
                        }
                        else{
                          this.soutenanceService.getBydateJury(s,this.idRap).toPromise().then((res:any[])=>{
                            console.log(res);
                            if (res.length > 0){
                              this.errorRapporteur = "La rapporteur à déja une soutenance  dans ce temps! ";
             
                            }
                          else{
                            this.soutenanceService.ajouter(this.soutenance,this.sfeId,this.idPr,this.idRap).subscribe(res =>{
                            this.successMsg = "Added succesfly! ";
                            this.data.reset();
                            });
                          }
                        });
                  
                      }
                    });
              
                  }
                }
              })
            }
     
        })
         }
      })
    }

 


      }

  }*/


    ajouter(){
    this.submitted = true;
    this.idPr = this.data.value['presidant'];
    this.idRap = this.data.value['rapporteur'];
    this.soutenance.date =  this.data.value['date'];
    const idSalle = this.data.value['salle'];
    if (this.soutenance.date == null){
      this.errorSFE = " Les champs sont obligatoires !";
    }
    else {
      let s = this.datepipe.transform(this.data.value['date'],'yyyy-MM-dd HH:mm');
      console.log(s);
      this.soutenanceService.getBySfe(this.sfeId).toPromise().then((res:any)=>{
        if (res != null)
         this.errorSFE = "Cette projet déja planifier";
         else{
          this.soutenanceService.findBydateSalle(s,idSalle).toPromise().then((res:any[])=>{
            console.log(res);
            if (res.length > 0){
              this.errorSalle = "La salle est réservé pour une autre soutenance! ";
    
            }
            else{
              var vid = this.route.snapshot.params.id;
              this.SfeService.getBySfeId(vid).toPromise().then((res: any) =>{
                console.log(res.encadreur.ncen);
                console.log(this.idPr);
                console.log(this.idRap);
                if (res.encadreur.ncen === this.idRap)
                  console.log("ja3333333333");
                if ((res.encadreur.ncen == this.idPr) || (res.encadreur.ncen == this.idRap))
                  this.errorChoix = "L'encadreur et les jurys doit étre 2 enseignants différents!";
                else{
                  if (this.idPr === this.idRap){
                    this.errorChoix = "Le rapporteur et le présidant doit étre 2 enseignants différents!";
        
                  }
                 
                    else{
                      this.soutenanceService.getBydateJury(s,this.idPr).toPromise().then((res:any[])=>{
                        console.log(res);
                        if (res.length > 0){
                          this.errorPresident = "La présidant à déja une soutenance  dans ce temps! ";
                        
                        }
                        else{
                          this.soutenanceService.getBydateJury(s,this.idRap).toPromise().then((res:any[])=>{
                            console.log(res);
                            if (res.length > 0){
                              this.errorRapporteur = "La rapporteur à déja une soutenance  dans ce temps! ";
             
                            }
                          else{
                            this.soutenanceService.ajouter(this.soutenance,this.sfeId,this.idPr,this.idRap,idSalle).subscribe(res =>{
                            this.successMsg = "Added succesfly! ";
                            this.data.reset();
                            alert("La soutenance est bien plainifié !");
                              this.router.navigate(['listeSoutenance']);
                            });
                          }
                        });
                  
                      }
                    });
              
                  }
                }
              })
            }
     
        })
         }
      })
    }

 


      }

  }
   
   
   
   
   /*
   this.soutenance.date =  this.EtudiantData.value['date'];
    this.soutenance.salle = this.EtudiantData.value['salle'];
    this.idSfe = this.EtudiantData.value['sfeId'];
    this.idPr = this.EtudiantData.value['preId'];
    this.idRap = this.EtudiantData.value['rapId'];
    this.soutenanceService.ajouter(this.soutenance,this.idSfe,this.idPr,this.idRap).subscribe(res =>{
      console.log(res);
    });*/
  
