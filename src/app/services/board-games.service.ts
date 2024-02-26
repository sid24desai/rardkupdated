import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BoardGame } from 'src/app/models/board-game';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BoardGamesService {
  constructor(private http: HttpClient) {}

  public getWishlistGames(): Observable<BoardGame[]> {
    return this.http.get<BoardGame[]>(
      `${environment.apiUrl}now/boardgamegeek/wishlist`
    );
  }

  public getOwnedGames(): Observable<BoardGame[]> {
    return this.http.get<BoardGame[]>(
      `${environment.apiUrl}now/boardgamegeek/owned`
    );
  }
}
