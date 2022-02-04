import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';

import { EtudiantComponent } from './etudiant.component';
import { ListeComponent } from './liste/liste.component';

const routes: Routes = [
  { path: '', component: ListeComponent },
  { path: 'add',component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class EtudiantRoutingModule { }
