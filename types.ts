export interface IAlbum {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}
export interface IApi {
    fetch(url: string): Promise<any>
}