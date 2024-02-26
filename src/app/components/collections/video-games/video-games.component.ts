import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgIf, NgFor, KeyValuePipe, NgClass } from '@angular/common';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { GameCollectionService } from '../../../services/video-games.service';
import { GameCollectionEntry } from 'src/app/models/game-collection-entry';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { GamePlatform } from 'src/app/models/game-platform';

@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.component.html',
  styleUrls: ['./video-games.component.scss'],
  standalone: true,
  imports: [
    PageTitleComponent,
    NgIf,
    MatProgressSpinnerModule,
    NgFor,
    KeyValuePipe,
    NgClass,
    MatSelectModule,
    FormsModule,
    MatOptionModule,
  ],
})
export class VideoGamesComponent implements OnInit {
  public gameCollectionItemsGrouped: { [key: string]: GameCollectionEntry[] };
  public gameCollectionItems: GameCollectionEntry[];
  public isLoading: boolean;
  public selectedPlatform: string = 'Nintendo 64';
  public availablePlatforms: GamePlatform[] = [];

  constructor(private gameCollectionService: GameCollectionService) {}

  ngOnInit() {
    this.isLoading = true;
    this.populateGameCollection();
  }

  public async populateGameCollection() {
    this.gameCollectionService
      .getGameCollection()
      .pipe(take(1))
      .subscribe({
        next: (gameCollectionItems: GameCollectionEntry[]) => {
          const gameCollectionItemsFiltered = gameCollectionItems
            .filter((g) => g.category === 'Games')
            .sort((a, b) => {
              return a > b ? 1 : -1;
            });
          this.gameCollectionItemsGrouped = this.groupBy(
            gameCollectionItemsFiltered,
            'platform'
          );
          this.setAvailablePlatforms();
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading game collection', error);
        },
      });
  }

  public groupBy(
    // found here: https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-an-array-of-objects#comment122310660_34890276
    groupOfItemsToGroup: any[],
    key: string
  ): { [key: string]: GameCollectionEntry[] } {
    return groupOfItemsToGroup.reduce((storage, item) => {
      (storage[item[key]] = storage[item[key]] || []).push(item);
      return storage;
    }, []);
  }

  setAvailablePlatforms() {
    const keys: string[] = Object.keys(this.gameCollectionItemsGrouped);
    const mapped: GamePlatform[] = keys.map((key: string) => {
      return {
        name: key,
        gameCount: this.gameCollectionItemsGrouped[key].length,
      } as GamePlatform;
    });
    this.availablePlatforms = mapped;
  }

  sortGames(games: GameCollectionEntry[]) {
    return games.sort((g1, g2) => (g1.title > g2.title ? 1 : -1));
  }
}
