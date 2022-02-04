import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ListeDemendeEtudiantComponent } from './direction/liste-demende-etudiant/liste-demende-etudiant.component';
import { AddComponent } from './etudiant/add/add.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ListeComponent } from './etudiant/liste/liste.component';
import { LoginComponent } from './login/login.component';
import { AddEnseignantComponent } from './enseignant/add-enseignant/add-enseignant.component';
import { ListeDemendeEnseignantComponent } from './direction/liste-demende-enseignant/liste-demende-enseignant.component';
import { DemandeStageComponent } from './demande-stage/demande-stage.component';
import { DemandeEncadrementComponent } from './demande-encadrement/demande-encadrement.component';
import { AddDemandeEncadrementComponent } from './add-demande-encadrement/add-demande-encadrement.component';
import { ListeDemandeEncadrementEtudComponent } from './liste-demande-encadrement-etud/liste-demande-encadrement-etud.component';
import { ListeDemandeEncadrementEnsComponent } from './liste-demande-encadrement-ens/liste-demande-encadrement-ens.component';
import { ListeEncadrementComponent } from './liste-encadrement/liste-encadrement.component';
import { ListeCommentaireComponent } from './liste-commentaire/liste-commentaire.component';
import { AddCommentaireComponent } from './add-commentaire/add-commentaire.component';
import { DemandeSoutenanceComponent } from './demande-soutenance/demande-soutenance.component';
import { AddSoutenanceComponent } from './add-soutenance/add-soutenance.component';
import { ListeSoutenanceEtudComponent } from './liste-soutenance-etud/liste-soutenance-etud.component';
import { ListeSoutenanceEnsComponent } from './liste-soutenance-ens/liste-soutenance-ens.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { DirectionGuard } from './direction.guard';
import { ListeSoutenanceComponent } from './liste-soutenance/liste-soutenance.component';
import { ListeEnseignantsComponent } from './liste-enseignants/liste-enseignants.component';
import { AjouterNoterComponent } from './ajouter-noter/ajouter-noter.component';
import { AjouterFileComponent } from './ajouter-file/ajouter-file.component';
import { EnGuradGuard } from './en-gurad.guard';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { UpdateEnseignantComponent } from './update-enseignant/update-enseignant.component';
import { ImageComponent } from './image/image.component';
import { AddSalleComponent } from './add-salle/add-salle.component';
import { EditSalleComponent } from './edit-salle/edit-salle.component';


const routes: Routes = [
  { path: 'etudiants', loadChildren: () => import('./etudiant/etudiant.module').then(m => m.EtudiantModule) ,canActivate:[DirectionGuard]}, 
  { path: 'enseignants', loadChildren: () => import('./enseignant/enseignant.module').then(m => m.EnseignantModule),canActivate:[DirectionGuard]},
  {path: 'login',component:LoginComponent},
  { path: 'directions', loadChildren: () => import('./direction/direction.module').then(m => m.DirectionModule) },
  { path: 'listeDeEtud', component: ListeDemendeEtudiantComponent,canActivate:[DirectionGuard]},
  {path: 'listeDeEn', component: ListeDemendeEnseignantComponent,canActivate:[DirectionGuard]},
  {path: 'listeEtud',component:ListeComponent,canActivate:[DirectionGuard]},
  {path: 'listeEns',component:ListeEnseignantsComponent,canActivate:[DirectionGuard]},
  {path: 'login/signInEtud', component: AddComponent},
  {path: 'login/signInEn', component: AddEnseignantComponent},
  {path: 'demandeStage', component: DemandeStageComponent},
  {path: 'demandeEncadrement', component: DemandeEncadrementComponent},
  {path: 'demandeEncadrement/add/:idEtud/:idEn',component:AddDemandeEncadrementComponent},
  {path: 'listeDemandeEtud',component:ListeDemandeEncadrementEtudComponent},
  {path: 'listeEncadrementEn',component:ListeDemandeEncadrementEnsComponent, canActivate:[EnGuradGuard]},
  {path: 'listeEncadrement',component:ListeEncadrementComponent,canActivate:[EnGuradGuard]},
  {path: 'forbidden', component: ForbiddenComponent},
  {path: 'listeEncadrement/listeCommentaire/:id/:sujet',component:ListeCommentaireComponent},
  {path: 'addCommentaire/:id/:sujet', component:AddCommentaireComponent},
  {path: 'demandeSoutenance', component: DemandeSoutenanceComponent,canActivate:[DirectionGuard]},
  {path: 'addSoutenance/:id',component:AddSoutenanceComponent,canActivate:[DirectionGuard]},
  {path: 'listeSoutenanceEtud',component: ListeSoutenanceEtudComponent},
  {path: 'listeSoutenanceEns',component: ListeSoutenanceEnsComponent,canActivate:[EnGuradGuard]},
  {path: 'listeSoutenance', component: ListeSoutenanceComponent,canActivate:[DirectionGuard]},
  {path : 'listeSoutenanceEns/ajouterNote/:id', component: AjouterNoterComponent},
  {path: 'ajouterFile', component: AjouterFileComponent},
  {path: 'listeEtud/updateEtudiant/:id',component:UpdateEtudiantComponent},
  {path: 'listeEns/updateEnseignant/:id',component:UpdateEnseignantComponent},
  {path: 'image',component:ImageComponent},
  {path: 'image/ajouterSalle', component:AddSalleComponent},
  {path: 'updateSalle/:id',component: EditSalleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
