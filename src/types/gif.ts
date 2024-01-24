export interface IGIf {
    id: string;
    images: IImageItem;
    username: string;
}

interface IImageItem {
    downsized: {
        url: string;
    };
}
