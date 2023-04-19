export interface IUserInterface {
    id: number
    name: string
    username: string
    email: string
    photo: string
    address: {
        [key: string] : string
    },
    phone: string
    website: string
    company: {
        [key: string]: string
    }
}
export interface IPhotoInterface {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}


