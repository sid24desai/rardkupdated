import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubSearchResult } from 'src/app/models/github/github-search-result';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getGithubRecentlyUpdatedRepositories(): Observable<GithubSearchResult> {
    return this.http.get<GithubSearchResult>(
      `${environment.githubUrl}search/repositories?q=user:${environment.githubUsername}&sort=updated&order=desc&per_page=20`
    );
  }
}
