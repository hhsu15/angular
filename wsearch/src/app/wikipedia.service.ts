import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

// it's not required to list all the keys but just the ones we care about
interface WikipediaResponse {
  query: {
    search: {
      pageid: number;
      title: string;
      snippet: string;
    }[]; // annotates array of objects
  };
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    // anything provided in the params key will be automatically turned into
    // query string
    // http.get is a generic function - which allows you to annotate the type
    return this.http
      .get<WikipediaResponse>('http://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          utf8: '1',
          srsearch: term,
          origin: '*'
        }
      })
      .pipe(pluck('query', 'search'));
  }
}
