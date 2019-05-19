import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpGetService {

  private urlString = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getData(): Observable<any> {
    return this.http.get(this.urlString).pipe(
      map(this.extractData));
  }
}
