import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { combineLatest, map, take } from 'rxjs';
import { Link } from 'src/app/models/link';
import { LinksService } from 'src/app/services/links.service';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { NgIf } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DateDisplayComponent } from '../../shared/date-display/date-display.component';
import { SocialMediaDiscussionComponent } from '../../shared/social-media-discussion/social-media-discussion.component';
import { DiscussionPostsService } from 'src/app/services/discussion-posts.service';

@Component({
  selector: 'app-link-post',
  standalone: true,
  imports: [
    PageTitleComponent,
    NgIf,
    MatProgressSpinnerModule,
    DateDisplayComponent,
    RouterLink,
    SocialMediaDiscussionComponent,
  ],
  templateUrl: './link-post.component.html',
  styleUrl: './link-post.component.scss',
})
export class LinkPostComponent implements OnInit {
  public link: Link;
  public isLoading: boolean;
  public linksService: LinksService;
  public slug: string;
  public discussionMethod = this.discussionPostsService.getDiscussionPostsForLinks.bind(
    this.discussionPostsService
  );

  constructor(
    linksService: LinksService,
    private route: ActivatedRoute,
    private router: Router,
    private discussionPostsService: DiscussionPostsService
  ) {
    this.linksService = linksService;
  }
  ngOnInit(): void {
    this.isLoading = true;
    combineLatest([this.linksService.getLinks(), this.route.paramMap])
      .pipe(
        take(1),
        map(([links, routeParams]) => {
          {
            return {
              links: links,
              routeParams: routeParams,
            };
          }
        })
      )
      .subscribe({
        next: (result: { links: Link[]; routeParams: ParamMap }) => {
          this.findAndSetLink(result.links, result.routeParams);
        },
        error: (error) => {
          console.error(error);
        },
      });
  }

  public findAndSetLink(links: Link[], routeParams: ParamMap) {
    const foundLink = links.find((link) => link.slug === routeParams.get('slug')!);
    if (!foundLink) {
      this.router.navigate(['links']);
    }
    this.link = foundLink!;
    this.isLoading = false;
  }
}
