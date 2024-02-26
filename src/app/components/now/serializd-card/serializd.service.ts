import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SerializdCurrentlyWatchingItem } from 'src/app/models/serializd-currently-watching-item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SerializdService {
  constructor(private http: HttpClient) {}

  getSerializdCurrentlyWatchingItems(): Observable<SerializdCurrentlyWatchingItem[]> {
    return this.http.get<SerializdCurrentlyWatchingItem[]>(
      `${environment.apiUrl}now/json/now-current-tv`
    );
  }
}
