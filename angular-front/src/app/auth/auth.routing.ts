/**
 *  el enrutador  login y register
 * 
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com
 *
 * @since [1.0.0]
 *
 */

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

    { path: 'register', component: RegisterComponent }, 
    { path: 'login', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
