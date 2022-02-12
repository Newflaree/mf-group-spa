export interface Product {
  id: string;
  categ: string;
  name: string;
  url: string;
  description: Paragraph[];
  espTech: EstTech[];
}

export interface EstTech {
  line: string
}

export interface Paragraph {
  p: string
}
