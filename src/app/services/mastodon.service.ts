import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MastodonStatus } from 'src/app/models/mastodon/mastodon-status';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MastodonService {
  constructor(private http: HttpClient) {}

  async getMastodonFeed() {
    return this.http.get<MastodonStatus[]>(
      `${environment.mastodonBaseUrl}/api/v1/accounts/${environment.mastodonId}/statuses/?limit=100&exclude_replies=true&exclude_reblogs=true`
    );
  }
}
