import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NavbarEtudiantComponent } from './etudiant/navbar-etudiant/navbar-etudiant.component';
import { NavbarEnseignantComponent } from './enseignant/navbar-enseignant/navbar-enseignant.component';
import { NavbarDirectionComponent } from './direction/navbar-direction/navbar-direction.component';
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
import { DatePipe } from '@angular/common';
import { ListeSoutenanceEtudComponent } from './liste-soutenance-etud/liste-soutenance-etud.component';
import { ListeSoutenanceEnsComponent } from './liste-soutenance-ens/liste-soutenance-ens.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListeSoutenanceComponent } from './liste-soutenance/liste-soutenance.component';
import { ListeEnseignantsComponent } from './liste-enseignants/liste-enseignants.component';
import { AjouterNoterComponent } from './ajouter-noter/ajouter-noter.component';
import { AjouterFileComponent } from './ajouter-file/ajouter-file.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { UpdateEnseignantComponent } from './update-enseignant/update-enseignant.component';
import { ImageComponent } from './image/image.component';
import { AddSalleComponent } from './add-salle/add-salle.component';
import { EditSalleComponent } from './edit-salle/edit-salle.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarEtudiantComponent,
    NavbarEnseignantComponent,
    NavbarDirectionComponent,
    DemandeStageComponent,
    DemandeEncadrementComponent,
    AddDemandeEncadrementComponent,
    ListeDemandeEncadrementEtudComponent,
    ListeDemandeEncadrementEnsComponent,
    ListeEncadrementComponent,
    ListeCommentaireComponent,
    AddCommentaireComponent,
    DemandeSoutenanceComponent,
    AddSoutenanceComponent,
    ListeSoutenanceEtudComponent,
    ListeSoutenanceEnsComponent,
    ForbiddenComponent,
    ListeSoutenanceComponent,
    ListeEnseignantsComponent,
    AjouterNoterComponent,
    AjouterFileComponent,
    UpdateEtudiantComponent,
    UpdateEnseignantComponent,
    ImageComponent,
    AddSalleComponent,
    EditSalleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
