type thumbnail = {
  url: string;
  width: string;
  height: string;
};

export interface VideoTypes {
  etag: string;
  items: {
    id: string;
    etag: string;
    kind: string;
    snippet: {
      publishedAt: string;
      channelId: string;
      title: string;
      description: string;
      thumbnails: {
        default: thumbnail;
        medium: thumbnail;
        high: thumbnail;
        standard: thumbnail;
        maxres: thumbnail;
      };
      channelTitle: string;
      tags: string[];
      categoryId: string;
    };
    contentDetails: {
      duration: string;
      dimension: string;
      definition: string;
      caption: string;
      projection: string;
    };
    statistics: {
      viewCount: string;
      likeCount: string;
      favoriteCount: string;
      commentCount: string;
    };
  }[];
}
