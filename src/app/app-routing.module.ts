import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';

const routes: Routes = [
 { 
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import
      ('./shared/components/layouts/admin-layout/admin-layout.module').then
      (m => m.AdminLayoutModule)
    }]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
      useHash: true
    }),
    RouterModule,
    CommonModule,
    BrowserModule
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
