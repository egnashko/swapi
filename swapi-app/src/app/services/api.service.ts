import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {
  private url = environment.url;

  constructor(private httpService: HttpService) {}

  public getCharectersList() {
    return this.httpService.get(`${this.url}people`)
  }

}
