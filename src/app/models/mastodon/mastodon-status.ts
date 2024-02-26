import { MastodonAccount } from './mastodon-account';
import { MastodonStatusApplication } from './mastodon-status-application';
import { MastodonStatusMediaAttachment } from './mastodon-status-media-attachment';

export class MastodonStatus {
  id: string;
  created_at: string;
  in_reply_to_id: string;
  in_reply_to_account_id: number;
  sensitive: false;
  spoiler_text: string;
  visibility: string;
  language: string;
  uri: string;
  url: string;
  replies_count: number;
  reblogs_count: number;
  favourites_count: number;
  edited_at: string;
  content: string;
  reblog: string;
  application: MastodonStatusApplication;
  account: MastodonAccount;
  media_attachments: MastodonStatusMediaAttachment[];
  mentions: [];
  tags: [];
  emojis: [];
  card: null;
  poll: null;
}
