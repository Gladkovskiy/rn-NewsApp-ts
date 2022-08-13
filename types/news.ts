export interface INewsDescription {
  name: string
  anons: string
  full: string
  img: string
}

export interface INews extends INewsDescription {
  key: string
}
