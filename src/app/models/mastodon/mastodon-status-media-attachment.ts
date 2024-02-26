export class MastodonStatusMediaAttachment {
    id: string;
    type: string;
    url: string;
    preview_url: string;
    remote_url: string;
    preview_remote_url: string;
    text_url: string;
    // meta: {
    //     original: {
    //         width: 128;
    //         height: 128;
    //         size: string;
    //         aspect: 1.0
    //     };
    //     small: {
    //         width: 128;
    //         height: 128;
    //         size: string;
    //         aspect: 1.0
    //     }
    // };
    description: string;
    blurhash: string
}
