import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public domainUrl: string;
  constructor(public http: HttpClient) {
    this.domainUrl = environment.apiUrl;
  }
}
