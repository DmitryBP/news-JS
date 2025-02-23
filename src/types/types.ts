interface DataSources {
    status: string;
    sources: SourceItem[];
}

type SourceItem = {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
};

interface DataNews {
    status: string;
    totalResults: number;
    articles: Article[];
}

type Article = {
    source: ArticleSource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
};

interface ArticleSource {
    id: string;
    name: string;
}

type CallbackType<T> = (data: T) => void;

type Option = Record<string, string>;

enum Endpoint {
    SOURCES = 'sources',
    EVERYTHING = 'everything',
}

export { DataSources, SourceItem, DataNews, Article, Endpoint, CallbackType, Option };
