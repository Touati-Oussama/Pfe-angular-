import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import { DirectionRoutingModule } from './direction-routing.module';
import { DirectionComponent } from './direction.component';
import { ListeDemendeEtudiantComponent } from './liste-demende-etudiant/liste-demende-etudiant.component';
import { ListeDemendeEnseignantComponent } from './liste-demende-enseignant/liste-demende-enseignant.component';



@NgModule({
  declarations: [DirectionComponent,ListeDemendeEtudiantComponent, ListeDemendeEnseignantComponent],
  imports: [
    BrowserModule,
    DirectionRoutingModule
  ]
})
export class DirectionModule { }
