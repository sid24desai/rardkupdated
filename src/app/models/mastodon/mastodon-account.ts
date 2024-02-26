import { MastodonAccountMetadataField } from './mastodon-account-metadata-field';

export class MastodonAccount {
  id: number;
  username: string;
  acct: string;
  display_name: string;
  locked: false;
  bot: false;
  discoverable: false;
  group: false;
  created_at: string;
  note: string;
  url: string;
  avatar: string;
  avatar_static: string;
  header: string;
  header_static: string;
  followers_count: number;
  following_count: number;
  statuses_count: number;
  last_status_at: string;
  noindex: boolean;
  emojis: string[];
  fields: MastodonAccountMetadataField[];
}
