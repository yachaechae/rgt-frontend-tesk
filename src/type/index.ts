export interface IndustryIdentifier {
  type: string
  identifier: string
}

export interface ReadingModes {
  text: boolean
  image: boolean
}

export interface PanelizationSummary {
  containsEpubBubbles: boolean
  containsImageBubbles: boolean
}

export interface ImageLinks {
  smallThumbnail: string
  thumbnail: string
}

export interface SeriesInfo {
  kind: string
  shortSeriesBookTitle: string
  bookDisplayNumber: string
  volumeSeries: {
    seriesId: string
    seriesBookType: string
    orderNumber: number
  }[]
}

export interface Price {
  amount: number
  currencyCode: string
}

export interface SaleInfo {
  country: string
  saleability: string
  isEbook: boolean
  listPrice?: Price
  retailPrice?: Price
  buyLink?: string
  offers?: {
    finskyOfferType: number
    listPrice: {
      amountInMicros: number
      currencyCode: string
    }
    retailPrice: {
      amountInMicros: number
      currencyCode: string
    }
  }[]
}

export interface AccessInfo {
  country: string
  viewability: string
  embeddable: boolean
  publicDomain: boolean
  textToSpeechPermission: string
  epub: {
    isAvailable: boolean
    acsTokenLink?: string
  }
  pdf: {
    isAvailable: boolean
    acsTokenLink?: string
  }
  webReaderLink: string
  accessViewStatus: string
  quoteSharingAllowed: boolean
}

export interface SearchInfo {
  textSnippet: string
}

export interface VolumeInfo {
  title: string
  subtitle?: string
  authors: string[]
  publisher: string
  publishedDate?: string
  description?: string
  industryIdentifiers: IndustryIdentifier[]
  readingModes: ReadingModes
  pageCount?: number
  printType: string
  categories: string[]
  maturityRating: string
  allowAnonLogging: boolean
  contentVersion: string
  panelizationSummary: PanelizationSummary
  imageLinks: ImageLinks
  language: string
  previewLink: string
  infoLink: string
  canonicalVolumeLink: string
  seriesInfo?: SeriesInfo
  averageRating?: number
  ratingsCount?: number
}

export interface Item {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: VolumeInfo
  saleInfo: SaleInfo
  accessInfo: AccessInfo
  searchInfo?: SearchInfo
}

export interface BooksResponse {
  kind: string
  totalItems: number
  items: Item[]
}
