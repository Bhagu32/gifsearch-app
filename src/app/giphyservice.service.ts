import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class GiphyserviceService {
  constructor(protected http: HttpClient) { }
  GetgifImages(link:any)
  {
      return this.http.get(link.apiLink); 
  }

}
