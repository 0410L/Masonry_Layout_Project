import { Component, HostListener, OnInit } from '@angular/core';
import { UnsplashService } from '../unsplash.service';



@Component({
  selector: 'app-unsplash',
  templateUrl: './unsplash.component.html',
  styleUrls: ['./unsplash.component.scss'],
  styles:[]
})
export class UnsplashComponent implements OnInit {
  photos: any = [];
  page = 1;
  loading = true;
  photo: any;


  constructor(private unsplashService: UnsplashService) {}



  ngOnInit() {
    this.loadMore();
    this.loading = false;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.loadMore();
    }
  }

  loadMore() {
    this.unsplashService.getPhotos(this.page).subscribe(photos => {
      this.photos = this.photos.concat(photos);
      this.page++;
    });
  }

  cargar() {
    this.loading = true;
    this.page +=1;
    this.unsplashService.getPhotos(this.page++).subscribe(_photos => {
      this.photos = this.photos.concat(_photos);
      
      this.loading = false;
    });
  }

    

}
