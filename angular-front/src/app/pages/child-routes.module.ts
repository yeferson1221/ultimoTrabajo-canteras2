import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamerComponent } from './gamer/gamer.component';


import { AccountSettingsComponent } from './account-settings/account-settings.component';

import { PerfilComponent } from './perfil/perfil.component';

// Mantenimientos
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';

import { AdminGuard } from '../guards/admin.guard';


const childRoutes: Routes = [
  { path: '', component: GamerComponent, data: { titulo: 'juego' } },
  { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes de cuenta' }},
 
  { path: 'perfil', component: PerfilComponent, data: { titulo: 'Perfil de usuario' }},
  


  // Mantenimientos


  // Rutas de Admin
  { path: 'usuarios', canActivate: [ AdminGuard ], component: UsuariosComponent, data: { titulo: 'Matenimiento de Usuarios' }},
]



@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRoutesModule { }
