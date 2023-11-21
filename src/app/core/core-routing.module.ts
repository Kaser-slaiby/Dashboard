import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './guards/components/login/login.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: LoginComponent  
  //   },
  //   {
  //     path: 'login',
  //     component: LoginComponent
  //     },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    BrowserModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
