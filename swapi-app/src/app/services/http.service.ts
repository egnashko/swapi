import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {}

  public get<T>(url): Observable<T> {
    return this.http.get(`${url}`)
      .map(res => res)
      .catch(this.handleError);
  }

  public handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err);
  }

}