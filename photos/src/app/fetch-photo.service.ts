import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class FetchPhotoService {
  constructor(private http: HttpClient) {}
  key = 'GybUq9KBPMECnzHva5DF9AOqPtSQUWKDBU7n6cuQO7I';
  fetchPhoto() {
    return this.http.get<UnsplashResponse>(
      'https://api.unsplash.com/photos/random',
      {
        headers: {
          Authorization: `Client-ID ${this.key}`
        }
      }
    );
  }
}
