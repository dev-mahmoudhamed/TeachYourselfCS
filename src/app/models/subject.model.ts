export interface Resource {
    title: string;
    url: string;
    type: 'book' | 'video' | 'course' | 'paper' | 'website';
    author?: string;
    description?: string;
    free?: boolean;
}

export interface Subject {
    id: string;
    title: string;
    shortTitle: string;
    icon: string;
    color: string;
    hours: string;
    description: string;
    whyLearn: string;
    book: Resource;
    videos: Resource;
    alternativeResources?: Resource[];
    projects?: string[];
    quote?: {
        text: string;
        author: string;
    };
    isNew?: boolean;
}

export interface TableOfContentsItem {
    id: string;
    title: string;
    shortTitle: string;
    icon: string;
    color: string;
    isNew?: boolean;
}
