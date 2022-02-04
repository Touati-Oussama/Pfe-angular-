import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectionComponent } from './direction.component';
import { ListeDemendeEtudiantComponent } from './liste-demende-etudiant/liste-demende-etudiant.component';

const routes: Routes = [
  { path: '', component: DirectionComponent },
  { path: 'listeDeEtud', component: ListeDemendeEtudiantComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class DirectionRoutingModule { }
