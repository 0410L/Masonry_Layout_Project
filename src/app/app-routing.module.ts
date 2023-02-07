import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnsplashComponent } from './unsplash/unsplash.component';
import { MuraLComponent } from './mural/mural.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: '**', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: UnsplashComponent},
  {path: 'start', component: MuraLComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
