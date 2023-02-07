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

    //carga fotos de manera aleatoria (POR PAGINA)
    //const url = `https://api.unsplash.com/photos/random?client_id=-O8SGnISSCI_73fl7wYRn10q-4gPM6y4y4CpooVW8ag&count=1&order_by=random&page=${page}&per_page=10`;

    //carga fotos de manera aleatoria
    //const url = `https://api.unsplash.com/photos/random?client_id=-O8SGnISSCI_73fl7wYRn10q-4gPM6y4y4CpooVW8ag&count=1&order_by=random`;

    //carga fotos por pagina
    //const url = `https://api.unsplash.com/photos/random?client_id=-O8SGnISSCI_73fl7wYRn10q-4gPM6y4y4CpooVW8ag&page=${page}`;

    //carga fotos por pagina con otro id (por si acaso)
    const url = `https://api.unsplash.com/photos/?client_id=P8j2xBwKogFd40nOtBEyHH9kQRcoH4syOwdCywLJxp0&page=${page}`;
    return this.http.get(url);
  }
}

//const width = 600;
//const height = 1000;
/*
  const width = 600;
    const height = (Math.random() * (1000 - 400) + 400).toFixed();
    return {src: `https://picsum.photos/${width}/${height}/?random`};
  }
*/
