export interface UserFormat {
    name: string;
    age: string;
    imgAddress: string;
}

export interface AuthorFormat {
    id: number;
    name: string;
    imgAddress: any;
    bio: string;
}

export interface BlogPostFormat {
    id: number;
    title: string;
    character: string;
    imgAddress: any;
    readTime: string;
    uploadDate: Date;
    detail: BlogPostDetailFormat;
    view?: number;
    author?: AuthorFormat;
}

export interface BlogPostDetailFormat {
    timeHappen?: String;
    context: string | Array<string | string[]>;
    mainStory: string | Array<string | string[]>;
    result: string | Array<string | string[]>;
    image: any[];
    links?: string[];
}

export interface PodcastFormat {
    id: number;
    title: string;
    imgAddress: any;
    uploadDate: Date;
    detail: PodcastEpsFormat[];
}

export interface PodcastEpsFormat {
    id: number;
    title: string;
    imgAddress: any;
    link: string;
}

export interface ThisDayThatYearFormat {
    id: number;
    title: string;
    timePoint: string;
    content: string;
    detail: BlogPostDetailFormat;
}

export interface HistoryPersonFormat {
    id: number;
    name: string;
    nickName: string;
    imgAddress: any;
    detail: {
        bio: string;
        mainStory: string[];
    }
}