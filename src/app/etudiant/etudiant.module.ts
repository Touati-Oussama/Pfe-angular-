import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantComponent } from './etudiant.component';
import { ListeComponent } from './liste/liste.component';
import { NavbarEtudiantComponent } from './navbar-etudiant/navbar-etudiant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [EtudiantComponent,  ListeComponent,AddComponent],
  imports: [


  CommonModule,
    EtudiantRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class EtudiantModule { }
