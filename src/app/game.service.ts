import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  url = ' http://localhost:3000/games';

  constructor(private http: HttpClient) {
  }

  getAll(pageNumber, limit): Observable<any> {
    // posts?_page=page&_limit=20'
    return this.http.get(this.url + '?_page=' + pageNumber + '&_limit=' + limit, {observe: 'response'} );
  }
}
