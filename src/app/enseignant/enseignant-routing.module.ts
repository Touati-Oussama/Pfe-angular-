import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnseignantComponent } from './enseignant.component';
import { ListeComponent } from './liste/liste.component';

const routes: Routes = [
  { path: '', component: ListeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnseignantRoutingModule { }
