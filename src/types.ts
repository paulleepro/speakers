export interface IReview {
  quote: string;
  active: boolean;
  source: string;
  attribution: string;
}

export interface ITalent {
  enabled: boolean;
  name: string;
  status: string;
  slug: string;
  headline: string;
  bio_highlights: string;
  bio_details: string;
  social_accounts: {
    twitter?: string;
    facebook?: string;
    youtube?: string;
    linkedin?: string;
  };
  metadata: {};
  reviews: IReview[];
  notes: string;
  types: { name: string; hwa_id: string }[];
  subtopics: { name: string; hwa_id: string }[];
  hwa_id: string;
  agents: string[];
  id: string;
  media: {
    books: { image: string; title: string; source: string }[];
    enews: {
      id: number;
      url: string;
      date: string;
      title: string;
      source: string;
      status: string;
    }[];
    images: { url: string; source: string }[];
    videos: { url: string; source: string }[];
    articles: {
      url: string;
      date: Date;
      title: string;
      source: string;
      publication: string;
    }[];
    featured_news: {
      url: string;
      title: string;
      source: string;
      description: string;
    }[];
    talking_points: { text: string; title: string; source: string }[];
  };
  titles: string[];
}

export interface IListResult<T> {
  data: T[];
  metadata: {
    total: number;
    pages: number;
    count: number;
    offset: number;
  };
}

export interface ISearchResult {
  name: {
    raw: string;
  };
  is_exclusive: {
    raw: boolean;
  };
  slug: {
    raw: string;
  };
  types: {
    raw: string[];
  };
  metadata: {
    raw: string;
  };
  _meta: {
    id: string;
    engine: string;
    score: number;
  };
  id: {
    raw: string;
  };
  bio_details: {
    raw: string;
  };
  subtopics: {
    raw: string[];
  };
  status: {
    raw: string;
  };
  titles: {
    raw: string[];
  };
  is_new: {
    raw: true;
  };
  media: {
    raw: string;
  };
  bio_highlights: {
    raw: string;
  };
  headline: {
    raw: string;
  };
}

export interface ISearch {
  results: ISearchResult[];
  metadata: {
    total: number;
    pages: number;
    count: number;
    offset: number;
    limit: number;
    page: number;
  };
}

export interface IType {
  slug: string;
  name: string;
  id: string;
}

export interface ITopic {
  slug: string;
  name: string;
  id: string;
  subtopics: IType[];
}

export interface IError {
  message: string;
}

export interface IFavoriteList {
  id: string;
  account_id: string;
  name: string;
  talent_ids: string[];
}
