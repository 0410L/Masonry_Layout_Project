import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnsplashComponent } from './unsplash/unsplash.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: '**', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: UnsplashComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
