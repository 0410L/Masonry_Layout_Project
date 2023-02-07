import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MuraLComponent } from './mural/mural.component';
import { UnsplashComponent } from './unsplash/unsplash.component';

@NgModule({
  declarations: [
    AppComponent,
    MuraLComponent,
    UnsplashComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
