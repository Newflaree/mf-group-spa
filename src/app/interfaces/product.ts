export interface Product {
  id: string;
  categ: string;
  name: string;
  url: string;
  description: string;
  espTech: EstTech[];
}

export interface EstTech {
  line: string
}
