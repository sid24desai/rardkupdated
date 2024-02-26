import { Component, Input, OnInit } from '@angular/core';
import { FeedItem } from 'src/app/models/feed-item';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SeeMoreLinkComponent } from '../see-more-link/see-more-link.component';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-feed-posters',
    templateUrl: './feed-posters.component.html',
    styleUrls: ['./feed-posters.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        SeeMoreLinkComponent,
        MatProgressSpinnerModule,
        NgFor,
    ],
})
export class FeedPostersComponent implements OnInit {
  @Input() sectionTitle: string;
  @Input() ratingMax: number;
  @Input() isLoading: boolean;
  @Input() feedItems: FeedItem[];
  @Input() displayType: string;
  @Input() profileUrl?: string;
  @Input() profileName?: string;
  @Input() isError: boolean = false;

  public isList: boolean;
  public isPoster: boolean;

  ngOnInit() {
    this.isList = this.displayType.toLowerCase() === 'list';
    this.isPoster = this.displayType.toLowerCase() === 'poster';
  }
}
