import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnseignantRoutingModule } from './enseignant-routing.module';
import { EnseignantComponent } from './enseignant.component';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EnseignantComponent, AddEnseignantComponent],
  imports: [

  CommonModule,
    EnseignantRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EnseignantModule { }
