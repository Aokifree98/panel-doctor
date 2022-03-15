import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AdminComponent } from './admin/admin.component';
// import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  {
    path: '**',
    redirectTo: 'admin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
