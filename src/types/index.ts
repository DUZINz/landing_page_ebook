export interface Ebook {
  id: string;
  title: string;
  author: string;
  description: string;
  imageUrl: string;
}

export interface EbookData {
  ebooks: Ebook[];
}