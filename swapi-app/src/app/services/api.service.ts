import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class ApiService {

  constructor(private httpService: HttpService) {}

  public getData(dataUrl) {
    return this.httpService.get(`${dataUrl}`)
  }

}
