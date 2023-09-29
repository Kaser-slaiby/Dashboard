import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AdminLayoutComponent } from './components/layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AdminLayoutComponent
  //   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
