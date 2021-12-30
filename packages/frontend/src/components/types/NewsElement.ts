export type NewsElement = {
    title: string | undefined;
    text: string | undefined;
    link: string | undefined;
}

export type NewsApiResponse = {
    news: NewsElement[]
}