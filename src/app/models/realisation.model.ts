
export type FileMD = string
export type FileSlide = { type: "slide", file: string, from: number, to: number }

export type File = FileMD | FileSlide

export type Realisation = {
    tag: string
    date: string
    title: string
    description: string
    thumbnail: string
    file: string
}