import { Component } from '@angular/core';
import { FetchPhotoService } from './fetch-photo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fetchPhotosvc: FetchPhotoService) {}
  photoUrl: any;
  getRandomPhoto() {
    this.fetchPhotosvc.fetchPhoto().subscribe(res => {
      console.log(res.urls.regular);
      this.photoUrl = res.urls.regular;
    });
  }
}
