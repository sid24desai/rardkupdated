import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LetterboxdItem } from 'src/app/models/letterboxd-item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LetterboxdService {
  constructor(private http: HttpClient) {}

  getLetterboxdFeed(): Observable<LetterboxdItem[]> {
    return this.http.get<LetterboxdItem[]>(`${environment.apiUrl}now/json/now-recent-movies`);
  }
}
