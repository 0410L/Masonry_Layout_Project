import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  
  //private apikey = '-O8SGnISSCI_73fl7wYRn10q-4gPM6y4y4CpooVW8ag';
  //P8j2xBwKogFd40nOtBEyHH9kQRcoH4syOwdCywLJxp0

  constructor(private http:HttpClient) {}

  getPhotos(page = 1) {
    const url = `https://api.unsplash.com/photos/?client_id=-O8SGnISSCI_73fl7wYRn10q-4gPM6y4y4CpooVW8ag&page=${page}`;
    //const url = `https://api.unsplash.com/photos/?client_id=P8j2xBwKogFd40nOtBEyHH9kQRcoH4syOwdCywLJxp0&page=${page}`;
    return this.http.get(url);
  }
}
