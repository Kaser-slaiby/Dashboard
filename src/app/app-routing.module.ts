import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './core/guards/login/login.component';
// import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
// import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';

const routes: Routes = [
 
  // {
  //   path: '',
  //   component: AdminLayoutComponent,
  //   children: [{
  //     path: '',
  //     loadChildren: () => import('./shared/components/layouts/admin-layout/admin-layout.component').then(m => m.AdminLayoutComponent)
  //   }]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
