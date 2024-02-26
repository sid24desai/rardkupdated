import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BlogPost } from 'src/app/models/blog-post';
import { BlogPostAttributes } from 'src/app/models/blog-post-attributes';
import { BlogService } from 'src/app/services/blog.service';
import { PageTitleComponent } from '../shared/page-title/page-title.component';
import { NgFor, NgIf } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DateDisplayComponent } from '../shared/date-display/date-display.component';
import { HtmlDirective } from 'src/app/directives/html.directive';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    PageTitleComponent,
    NgIf,
    MatProgressSpinnerModule,
    NgFor,
    DateDisplayComponent,
    HtmlDirective,
    RouterLink,
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  public isLoading: boolean;
  public blogPosts: BlogPost[];
  @Input() itemCount: number = 0;
  @Input() pageTitle = 'Blog';

  constructor(private blogService: BlogService, private router: Router) {}

  ngOnInit() {
    this.isLoading = true;
    this.blogService.getBlogPosts().subscribe({
      next: (blogPostsResponse: BlogPost[]) => {
        let blogPostsToShow = blogPostsResponse.sort((p1, p2) =>
          new Date(this.getPublishedDate(p1.attributes)) >
          new Date(this.getPublishedDate(p2.attributes))
            ? -1
            : 1
        );

        this.itemCount > 0
          ? (this.blogPosts = blogPostsToShow.slice(0, this.itemCount))
          : (this.blogPosts = blogPostsToShow);

        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        console.error(error);
      },
    });
  }

  public getPublishedDate(attributes: BlogPostAttributes): string {
    return attributes.originallyPostedDate
      ? attributes.originallyPostedDate
      : attributes.publishedAt;
  }
}
