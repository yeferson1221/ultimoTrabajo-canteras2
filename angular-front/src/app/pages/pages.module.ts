import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { PipesModule } from '../pipes/pipes.module';

import { GamerComponent } from './gamer/gamer.component';


import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';






@NgModule({
  declarations: [
    GamerComponent,
    
    
    PagesComponent,
    AccountSettingsComponent,
   
    PerfilComponent,
    UsuariosComponent,
  ],
  exports: [
    GamerComponent,
    
  
    PagesComponent,
    AccountSettingsComponent
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule,
    PipesModule
  ]
})
export class PagesModule { }
