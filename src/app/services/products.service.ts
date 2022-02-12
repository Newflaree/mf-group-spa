import { Injectable } from '@angular/core';
// Interfaces
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public productsData: Product[] = [];

  constructor() { 
    this.setItems();
  }
  
  findById( id: string ) {
    const filtered = this.productsData.filter( ( element: Product ) => {
      return element.id === id
    });

    const data: Product = {
      id: filtered[0].id,
      categ: filtered[0].categ,
      name: filtered[0].name,
      url: filtered[0].url,
      description: filtered[0].description,
      espTech: filtered[0].espTech
    };

    return data;
  }

  getProducts( categ: string ) {
    return this.productsData.filter( ( element: Product ) => {
      return element.categ === categ;
    });
  }

  private setItems() {
    this.productsData = [
      // Enchufes o Conectores
      {
        id: '111001',
        categ: 'eoc',
        name: 'CONECTOR SB120',
        url: '../../assets/products/ENCHUFES O CONECTORES/SB175 AMP.png',
        description: [
          {
            p: 'Conector SB175 AMP, diseñado para carga rápida y segura de las baterías industriales de vehículos eléctricos. Ideales para aplicaciones en equipos móviles como montacargas eléctrico, apilador y carretilla eléctrica. Como también carro de golf, elevadores, barredoras y diversos equipos eléctricos.'
          }
        ],
        espTech: [
	  { line: 'Valor Nominal de Corriente: 175A' },
	  { line: 'Tensión Nominal: 600V' },
	  { line: 'Conector hermafrodita' },
	  { line: 'Contactos de cobre puro recubiertos de plata' },
	  { line: 'Compatible con conector SR175' },
        ],
      },
      {
        id: '111002',
        categ: 'eoc',
        name: 'CONECTOR SB350',
        url: '../../assets/products/ENCHUFES O CONECTORES/SB350 AMP.png',
        description: [
          {
            p: 'Diseñados para carga rápida y segura de las baterías industriales de montacargas eléctrico, apilador y carretilla eléctrica multimarcas. Como también elevadores, barredoras y diversos equipos eléctricos.'
          },
          {
            p: 'Los conectores SB 350 son y originales tienen uso frecuente en la conexión de cargador y batería de tracción. Por ello es utilizado en diversas marcas de carretillas elevadoras de 24v, 36v y 48v.'
          },
          {
            p: 'Para una conexión necesita 2 unidades del mismo color, ya que se conectan entre sí.'
          }
        ],
        espTech: [
	  { line: 'Valor Nominal de Corriente: 350A' },
	  { line: 'Tensión Nominal: 600V' },
	  { line: 'Conector hermafrodita' },
	  { line: 'Contactos de cobre puro recubiertos de plata' },
	  { line: 'Compatible con conector SR350' },
        ],
      },
      {
        id: '111003',
        categ: 'eoc',
        name: 'DIN 80 amp Macho',
        url: '../../assets/products/ENCHUFES O CONECTORES/DIN 80 amp Macho.png',
        description: [
          {
            p: 'Conector DIN 80Amp Macho, diseñado para carga rápida y segura de las baterías industriales. Son la solución ideal para las conexiones de batería de iones de litio, de gel y plomo ácido. Utilizadas en frigoríficos y almacenes de varios sectores industriales.'
          },
          {
            p: 'Tiene uso frecuente en equipos móviles como transpaleta, apilador y carretilla eléctrica. Como también carro de golf, elevadores y diversos equipos eléctricos.'
          }
        ],
        espTech: [
	  { line: 'Valor Nominal de Corriente: 80A' },
	  { line: 'Tensión Nominal: 150 VDC' },
	  { line: 'Conector: Macho' },
	  { line: 'Carcasa resistente a los ácidos para mayor durabilidad' },
	  { line: 'Contactos de cobre E-Cu optimizado recubiertos de plata' },
        ],
      },
      {
        id: '111004',
        categ: 'eoc',
        name: 'DIN 80 amp Hembra',
        url: '../../assets/products/ENCHUFES O CONECTORES/DIN 80 amp Hembra.png',
        description: [
          {
            p: 'Conector DIN 80Amp Hembra, diseñado para carga rápida y segura de las baterías industriales. Son la solución ideal para las conexiones de batería de iones de litio, de gel y plomo ácido. Utilizadas en frigoríficos y almacenes de varios sectores industriales.'
          },
          {
            p: 'Tiene uso frecuente en equipos móviles como transpaleta, apilador y carretilla eléctrica. Como también carro de golf, elevadores y diversos equipos eléctricos.'
          }
        ],
        espTech: [
	  { line: 'Valor Nominal de Corriente: 80A' },
	  { line: 'Tensión Nominal: 150 VDC' },
	  { line: 'Conector: Hembra' },
	  { line: 'Carcasa resistente a los ácidos para mayor durabilidad' },
	  { line: 'Contactos de cobre E-Cu optimizado recubiertos de plata' },
        ],
      },
      {
        id: '111005',
        categ: 'eoc',
        name: 'DIN 160 amp Macho',
        url: '../../assets/products/ENCHUFES O CONECTORES/DIN 160 amp Macho.png',
        description: [
          {
            p: 'Conector DIN 160 amp Macho, diseñado específicamente para carga rápida y segura de las baterías industriales de vehículos eléctricos. Son la solución ideal para las conexiones de batería de iones de litio, de gel y plomo ácido. Este conector tiene uso frecuente en batería de apilador y montacargas eléctrico de 24v, 36v y 48v que se utilizan en: cadenas de frío y almacenes de varios sectores industriales.'
          }
        ],
        espTech: [
	  { line: 'Valor Nominal de Corriente: 160A' },
	  { line: 'Tensión Nominal: 150 VDC' },
	  { line: 'Conector: Macho' },
	  { line: 'Carcasa resistente a los ácidos para mayor durabilidad' },
	  { line: 'Contactos de cobre E-Cu optimizado recubiertos de plata' },
        ],
      },
      {
        id: '111006',
        categ: 'eoc',
        name: 'DIN 160 amp Hembra',
        url: '../../assets/products/ENCHUFES O CONECTORES/DIN 160 amp Hembra.png',
        description: [
          {
            p: 'Conector DIN 160 amp Hembra, diseñado específicamente para carga rápida y segura de las baterías industriales de vehículos eléctricos. Son la solución ideal para las conexiones de batería de iones de litio, de gel y plomo ácido. Este conector tiene uso frecuente en batería de apilador y montacargas eléctrico de 24v, 36v y 48v que se utilizan en: cadenas de frío y almacenes de varios sectores industriales.'
          },
        ],
        espTech: [
	  { line: 'Valor Nominal de Corriente: 160A' },
	  { line: 'Tensión Nominal: 150 VDC' },
	  { line: 'Conector: Hembra' },
	  { line: 'Carcasa resistente a los ácidos para mayor durabilidad' },
	  { line: 'Contactos de cobre E-Cu optimizado recubiertos de plata' },
        ],
      },
      {
        id: '111007',
        categ: 'eoc',
        name: 'DIN 320 amp Macho',
        url: '../../assets/products/ENCHUFES O CONECTORES/DIN 320 amp Macho.png',
        description: [
          {
            p: 'Conector DIN 320 amp Macho, diseñado para carga rápida y segura de las baterías industriales de vehículos eléctricos con batería de iones de litio, de gel y plomo ácido. Este conector DIN 320 amp tiene uso frecuente en batería de apilador y montacargas eléctricos, que se utilizan en: cadenas de frío y almacenes de varios sectores industriales.'
          },
          {
            p: 'También utilizado en los cargadores de baterías industriales de 24V 36V 48V 72V 80V y 96V.'
          }
        ],
        espTech: [
	  { line: 'Valor Nominal de Corriente: 320A' },
	  { line: 'Tensión Nominal: 150 VDC' },
	  { line: 'Conector: Macho' },
	  { line: 'Carcasa resistente a los ácidos para mayor durabilidad' },
	  { line: 'Contactos de cobre E-Cu optimizado recubiertos de plata' },
        ],
      },
      {
        id: '111008',
        categ: 'eoc',
        name: 'DIN 320 amp Hembra',
        url: '../../assets/products/ENCHUFES O CONECTORES/DIN 320 amp Hembra.png',
        description: [
          {
            p: 'Conector DIN 320 amp Hembra, diseñado para carga rápida y segura de las baterías industriales de vehículos eléctricos con batería de iones de litio, de gel y plomo ácido. Este conector DIN 320 amp tiene uso frecuente en batería de apilador y montacargas eléctricos, que se utilizan en: cadenas de frío y almacenes de varios sectores industriales.'
          },
          {
            p: 'También utilizado en los cargadores de baterías industriales de 24V 36V 48V 72V 80V y 96V.'
          }
        ],
        espTech: [
	  { line: 'Valor Nominal de Corriente: 320A' },
	  { line: 'Tensión Nominal: 150 VDC' },
	  { line: 'Conector: Hembra' },
	  { line: 'Carcasa resistente a los ácidos para mayor durabilidad' },
	  { line: 'Contactos de cobre E-Cu optimizado recubiertos de plata' },
        ],
      },
      // Pernos
      {
        id: '222001',
        categ: 'per',
        name: 'PERNOS M10 22mm',
        url: '../../assets/products/PERNOS/PERNOS M10 22mm.png',
        description: [
          {
            p: 'Perno Batería M10x22 con cabeza de plástico.'          
          }
        ],
        espTech: [
        ],
      },
      // Puntes y Conectores
      {
        id: '333001',
        categ: 'poc',
        name: 'Puentes 25mm - Length 75mm',
        url: '../../assets/products/PUENTES O CONECTORES/Puentes 25mm - Length 75mm.png',
        description: [
          {
            p: 'Puente flexible de conexión 25 mm de diámetro por 75 mm de longitud.'          
          },
          {
            p: 'Estos conectores atornillados de alta calidad están diseñados para interconectar celdas dentro de baterías industriales y de tracción. Están fabricados con cable de cobre que ha sido completamente revestido de caucho resistente a los ácidos que proporciona la máxima protección contra la corrosión y hace que el conector sea más duradero, seguro y fácil de maniobrar.'          
          }
        ],
        espTech: [
        ],
      },
      {
        id: '333002',
        categ: 'poc',
        name: 'Puentes 25mm - Length 95mm',
        url: '../../assets/products/PUENTES O CONECTORES/Puentes 25mm - Length 95mm.png',
        description: [
          {
            p: 'Puente flexible de conexión 25 mm de diámetro por 95 mm de longitud.'
          },
          {
            p: 'Estos conectores atornillados de alta calidad están diseñados para interconectar celdas dentro de baterías industriales y de tracción. Están fabricados con cable de cobre que ha sido completamente revestido de caucho resistente a los ácidos que proporciona la máxima protección contra la corrosión y hace que el conector sea más duradero, seguro y fácil de maniobrar.'
          },
        ],
        espTech: [
        ],
      },
      {
        id: '333003',
        categ: 'poc',
        name: 'Puentes 25mm - Length 110mm',
        url: '../../assets/products/PUENTES O CONECTORES/Puentes 25mm - Length 110mm.png',
        description: [
          {
            p: 'Puente flexible de conexión 25 mm de diámetro por 95 mm de longitud.'
          },
          {
            p: 'Estos conectores atornillados de alta calidad están diseñados para interconectar celdas dentro de baterías industriales y de tracción. Están fabricados con cable de cobre que ha sido completamente revestido de caucho resistente a los ácidos que proporciona la máxima protección contra la corrosión y hace que el conector sea más duradero, seguro y fácil de maniobrar.'
          },
        ],
        espTech: [
        ],
      },
      {
        id: '333004',
        categ: 'poc',
        name: 'Puentes 35mm - Length 75mm',
        url: '../../assets/products/PUENTES O CONECTORES/Puentes 35mm - Length 75mm.png',
        description: [
          {
            p: 'Puente flexible de conexión 35mm de diámetro por 75mm de longitud. Recambio de cables de conexión para baterías industriales, de tracción y solares. Conexión flexible de 35mm para la conexión de bornes de elementos de 2 voltios.'
          },
          {
            p: 'Estos conectores atornillados de alta calidad están diseñados para interconectar celdas dentro de baterías industriales y de tracción. Están fabricados con cable de cobre que ha sido completamente revestido de caucho resistente a los ácidos que proporciona la máxima protección contra la corrosión y hace que el conector sea más duradero, seguro y fácil de maniobrar.'
          },
        ],
        espTech: [
        ],
      },
      {
        id: '333005',
        categ: 'poc',
        name: 'Puentes 35mm - Length 95mm',
        url: '../../assets/products/PUENTES O CONECTORES/Puentes 35mm - Length 95mm.png',
        description: [
          {
            p: ''
          },
        ],
        espTech: [
        ],
      },
      {
        id: '333006',
        categ: 'poc',
        name: 'Puentes 35mm - Length 110mm',
        url: '../../assets/products/PUENTES O CONECTORES/Puentes 35mm - Length 110mm.png',
        description: [
          {
            p: 'Cable de conexión para baterías de tracción, y vasos de baterías de 12 voltios, 24 voltios etc. De 35mm de diámetro por 110mm de longitud. Es recomendable utilizar tornillos M 10x22mm aislados.'
          },
          {
            p: 'Estos conectores atornillados de alta calidad están diseñados para interconectar celdas dentro de baterías industriales y de tracción. Están fabricados con cable de cobre que ha sido completamente revestido de caucho resistente a los ácidos que proporciona la máxima protección contra la corrosión y hace que el conector sea más duradero, seguro y fácil de maniobrar.'
          },
        ],
        espTech: [
        ],
      },
      {
        id: '333007',
        categ: 'poc',
        name: 'Puentes 35mm - Length 115mm',
        url: '../../assets/products/PUENTES O CONECTORES/Puentes 35mm - Length 115mm.png',
        description: [
          {
            p: 'Puente flexible de conexión 35 mm de diámetro por 115 mm de longitud.'
          },
          {
            p: 'Estos conectores atornillados de alta calidad están diseñados para interconectar celdas dentro de baterías industriales y de tracción. Están fabricados con cable de cobre que ha sido completamente revestido de caucho resistente a los ácidos que proporciona la máxima protección contra la corrosión y hace que el conector sea más duradero, seguro y fácil de maniobrar.'
          },
        ],
        espTech: [
        ],
      },
      {
        id: '333008',
        categ: 'poc',
        name: 'Puentes 35mm - Length 130mm',
        url: '../../assets/products/PUENTES O CONECTORES/Puentes 35mm - Length 130mm.png',
        description: [
          {
            p: 'Puente flexible de conexión 35mm de diámetro por 130 mm de longitud. Cables de Conexión para baterías de 2 Voltios utilizado en baterías de carretillas eléctricas, traspaletas o vehículos industriales. Los cables de conexión flexibles están protegidos con goma aislante para un contacto seguro.'
          },
          {
            p: 'Es muy recomendable utilizar tornillos aislados de M 10 x 22'
          },
          {
            p: 'Estos conectores atornillados de alta calidad están diseñados para interconectar celdas dentro de baterías industriales y de tracción. Están fabricados con cable de cobre que ha sido completamente revestido de caucho resistente a los ácidos que proporciona la máxima protección contra la corrosión y hace que el conector sea más duradero, seguro y fácil de maniobrar.'
          },
        ],
        espTech: [
        ],
      },
      {
        id: '333009',
        categ: 'poc',
        name: 'Puentes 35mm - Length 150mm',
        url: '../../assets/products/PUENTES O CONECTORES/Puentes 35mm - Length 150mm.png',
        description: [
          {
            p: 'Puente flexible de conexión 35 mm de diámetro por 150 mm de longitud.'
          },
          {
            p: 'Estos conectores atornillados de alta calidad están diseñados para interconectar celdas dentro de baterías industriales y de tracción. Están fabricados con cable de cobre que ha sido completamente revestido de caucho resistente a los ácidos que proporciona la máxima protección contra la corrosión y hace que el conector sea más duradero, seguro y fácil de maniobrar.'
          },
        ],
        espTech: [
        ],
      },
      {
        id: '333010',
        categ: 'poc',
        name: 'Puentes 35mm - Length 170mm',
        url: '../../assets/products/PUENTES O CONECTORES/Puentes 35mm - Length 170mm.png',
        description: [
          {
            p: 'Puente flexible de conexión 35 mm de diámetro por 170 mm de longitud.'
          },
          {
            p: 'Estos conectores atornillados de alta calidad están diseñados para interconectar celdas dentro de baterías industriales y de tracción. Están fabricados con cable de cobre que ha sido completamente revestido de caucho resistente a los ácidos que proporciona la máxima protección contra la corrosión y hace que el conector sea más duradero, seguro y fácil de maniobrar.'
          },
        ],
        espTech: [
        ],
      },
      {
        id: '333011',
        categ: 'poc',
        name: 'Puentes 50mm - Length 75mm',
        url: '../../assets/products/PUENTES O CONECTORES/Puentes 50mm - Length 75mm.png',
        description: [
          {
            p: 'Puente flexible de conexión 50 mm de diámetro por 75 mm de longitud.'
          },
          {
            p: 'Estos conectores atornillados de alta calidad están diseñados para interconectar celdas dentro de baterías industriales y de tracción. Están fabricados con cable de cobre que ha sido completamente revestido de caucho resistente a los ácidos que proporciona la máxima protección contra la corrosión y hace que el conector sea más duradero, seguro y fácil de maniobrar.'
          },
        ],
        espTech: [
        ],
      },
      {
        id: '333012',
        categ: 'poc',
        name: 'Puentes 50mm - Length 95mm',
        url: '../../assets/products/PUENTES O CONECTORES/Puentes 50mm - Length 95mm.png',
        description: [
          {
            p: 'Puente flexible de conexión 50 mm de diámetro por 95 mm de longitud.'
          },
          {
            p: 'Estos conectores atornillados de alta calidad están diseñados para interconectar celdas dentro de baterías industriales y de tracción. Están fabricados con cable de cobre que ha sido completamente revestido de caucho resistente a los ácidos que proporciona la máxima protección contra la corrosión y hace que el conector sea más duradero, seguro y fácil de maniobrar.'
          },
        ],
        espTech: [
        ],
      },
      {
        id: '333013',
        categ: 'poc',
        name: 'Puentes 50mm - Length 110mm',
        url: '../../assets/products/PUENTES O CONECTORES/Puentes 50mm - Length 110mm.png',
        description: [
          {
            p: 'Puente flexible de conexión 50mm de diámetro por 110mm de longitud. Los puentes flexibles son cables de cobre con recubrimiento de goma, que se utilizan para la conexión de baterías de 2 voltios.'
          },
          {
            p: 'Es recomendable utilizar tornillos M 10x22mm con cabeza aislada.'
          },
          {
            p: 'Estos conectores atornillados de alta calidad están diseñados para interconectar celdas dentro de baterías industriales y de tracción. Están fabricados con cable de cobre que ha sido completamente revestido de caucho resistente a los ácidos que proporciona la máxima protección contra la corrosión y hace que el conector sea más duradero, seguro y fácil de maniobrar.'
          },
        ],
        espTech: [
        ],
      },
      {
        id: '333014',
        categ: 'poc',
        name: 'Puentes 50mm - Length 130mm',
        url: '../../assets/products/PUENTES O CONECTORES/Puentes 50mm - Length 130mm.png',
        description: [
          {
            p: 'Puente flexible de conexión 50 mm de diámetro por 130 mm de longitud.'
          },
          {
            p: 'Estos conectores atornillados de alta calidad están diseñados para interconectar celdas dentro de baterías industriales y de tracción. Están fabricados con cable de cobre que ha sido completamente revestido de caucho resistente a los ácidos que proporciona la máxima protección contra la corrosión y hace que el conector sea más duradero, seguro y fácil de maniobrar.'
          },
        ],
        espTech: [
        ],
      },
      {
        id: '333015',
        categ: 'poc',
        name: 'Puentes 50mm - Length 150mm',
        url: '../../assets/products/PUENTES O CONECTORES/Puentes 50mm - Length 150mm.png',
        description: [
          {
            p: 'Cable de conexión para baterías de tracción, y vasos de baterías de 12 voltios, 24 voltios etc. De 50mm de diámetro por 150mm de longitud. Es recomendable utilizar tornillos M 10x22mm aislados.'
          },
          {
            p: 'Estos conectores atornillados de alta calidad están diseñados para interconectar celdas dentro de baterías industriales y de tracción. Están fabricados con cable de cobre que ha sido completamente revestido de caucho resistente a los ácidos que proporciona la máxima protección contra la corrosión y hace que el conector sea más duradero, seguro y fácil de maniobrar.'
          },
        ],
        espTech: [
        ],
      },
      {
        id: '333016',
        categ: 'poc',
        name: 'Puentes 50mm - Length 170mm',
        url: '../../assets/products/PUENTES O CONECTORES/Puentes 50mm - Length 170mm.png',
        description: [
          {
            p: 'Cable de conexión de 50mm diámetro por 170 mm longitud para baterías de tracción, baterías solares u otro tipo de baterías. Incorpora el terminal M10 con recubrimiento de goma para evitar la sulfatación en los bornes de batería. Habitualmente utilizado para la conexión de la batería a la máquina, junto al conector de potencia'
          },
          {
            p: 'Es recomendable utilizar tornillos M 10x22mm aislados.'
          },
          {
            p: 'Estos conectores atornillados de alta calidad están diseñados para interconectar celdas dentro de baterías industriales y de tracción. Están fabricados con cable de cobre que ha sido completamente revestido de caucho resistente a los ácidos que proporciona la máxima protección contra la corrosión y hace que el conector sea más duradero, seguro y fácil de maniobrar.'
          },
        ],
        espTech: [
        ],
      },
      {
        id: '333017',
        categ: 'poc',
        name: 'Puentes 70mm - Length 95mm',
        url: '../../assets/products/PUENTES O CONECTORES/Puentes 70mm - Length 95mm.png',
        description: [
          {
            p: 'Puente flexible de conexión de Baterías de carretillas elevadoras y de tracción de 70mm de diámetro por 95mm de longitud. Los cables de conexión de baterías se utilizan para conectar los vasos de tracción y vasos solares, para conectar las baterías en serie o paralelo.'
          },
          {
            p: 'Estos conectores atornillados de alta calidad están diseñados para interconectar celdas dentro de baterías industriales y de tracción. Están fabricados con cable de cobre que ha sido completamente revestido de caucho resistente a los ácidos que proporciona la máxima protección contra la corrosión y hace que el conector sea más duradero, seguro y fácil de maniobrar.'
          },
        ],
        espTech: [
        ],
      },
      {
        id: '333018',
        categ: 'poc',
        name: 'Puentes 70mm - Length 110mm',
        url: '../../assets/products/PUENTES O CONECTORES/Puentes 70mm - Length 110mm.png',
        description: [
          {
            p: 'Puente flexible de conexión 70mm de diámetro por 95mm de longitud. Los cables de conexión de baterías se utilizan para conectar los vasos de tracción y vasos solares, para conectar las baterías en serie o paralelo de carretillas eléctricas o baterías solares, tracción.'
          },
          {
            p: 'Estos conectores atornillados de alta calidad están diseñados para interconectar celdas dentro de baterías industriales y de tracción. Están fabricados con cable de cobre que ha sido completamente revestido de caucho resistente a los ácidos que proporciona la máxima protección contra la corrosión y hace que el conector sea más duradero, seguro y fácil de maniobrar.'
          },
        ],
        espTech: [
        ],
      },
      {
        id: '333019',
        categ: 'poc',
        name: 'Puentes 70mm - Length 130mm',
        url: '../../assets/products/PUENTES O CONECTORES/Puentes 70mm - Length 130mm.png',
        description: [
          {
            p: 'Puente flexible de conexión 70 mm de diámetro por 130 mm de longitud.'
          },
          {
            p: 'Estos conectores atornillados de alta calidad están diseñados para interconectar celdas dentro de baterías industriales y de tracción. Están fabricados con cable de cobre que ha sido completamente revestido de caucho resistente a los ácidos que proporciona la máxima protección contra la corrosión y hace que el conector sea más duradero, seguro y fácil de maniobrar.'
          },
        ],
        espTech: [
        ],
      },
      {
        id: '333020',
        categ: 'poc',
        name: 'Puentes 70mm - Length 150mm',
        url: '../../assets/products/PUENTES O CONECTORES/Puentes 70mm - Length 170mm.png',
        description: [
          {
            p: 'Puente flexible de conexión 70 mm de diámetro por 150 mm de longitud.'
          },
          {
            p: 'Estos conectores atornillados de alta calidad están diseñados para interconectar celdas dentro de baterías industriales y de tracción. Están fabricados con cable de cobre que ha sido completamente revestido de caucho resistente a los ácidos que proporciona la máxima protección contra la corrosión y hace que el conector sea más duradero, seguro y fácil de maniobrar.'
          },
        ],
        espTech: [
        ],
      },
      {
        id: '333021',
        categ: 'poc',
        name: 'Puentes 70mm - Length 170mm',
        url: '../../assets/products/PUENTES O CONECTORES/Puentes 70mm - Length 170mm.png',
        description: [
          {
            p: 'Puente de conexión flexible de 70mm diámetro por 170 mm longitud para baterías de tracción, baterías solares u otro tipo de baterías. Incorpora el terminal M10 con recubrimiento de goma para evitar la sulfatación en los bornes de batería. Habitualmente utilizado para la interconexión de elementos de la batería tracción.'
          },
          {
            p: 'Es recomendable utilizar tornillos M 10x22mm aislados.'
          },
          {
            p: 'Estos conectores atornillados de alta calidad están diseñados para interconectar celdas dentro de baterías industriales y de tracción. Están fabricados con cable de cobre que ha sido completamente revestido de caucho resistente a los ácidos que proporciona la máxima protección contra la corrosión y hace que el conector sea más duradero, seguro y fácil de maniobrar.'
          },
        ],
        espTech: [
        ],
      },
      {
        id: '333022',
        categ: 'poc',
        name: 'Puentes 70mm - Length 190mm',
        url: '../../assets/products/PUENTES O CONECTORES/Puentes 70mm - Length 190mm.png',
        description: [
          {
            p: 'Puente flexible de conexión 70 mm de diámetro por 190 mm de longitud.'
          },
          {
            p: 'Estos conectores atornillados de alta calidad están diseñados para interconectar celdas dentro de baterías industriales y de tracción. Están fabricados con cable de cobre que ha sido completamente revestido de caucho resistente a los ácidos que proporciona la máxima protección contra la corrosión y hace que el conector sea más duradero, seguro y fácil de maniobrar.'
          },
        ],
        espTech: [
        ],
      },
      {
        id: '333023',
        categ: 'poc',
        name: 'Puentes 70mm - Length 210mm',
        url: '../../assets/products/PUENTES O CONECTORES/Puentes 70mm - Length 210mm.png',
        description: [
          {
            p: 'Puente flexible de conexión 70 mm de diámetro por 210 mm de longitud.'
          },
          {
            p: 'Estos conectores atornillados de alta calidad están diseñados para interconectar celdas dentro de baterías industriales y de tracción. Están fabricados con cable de cobre que ha sido completamente revestido de caucho resistente a los ácidos que proporciona la máxima protección contra la corrosión y hace que el conector sea más duradero, seguro y fácil de maniobrar.'
          },
        ],
        espTech: [
        ],
      },
      // Cables
      {
        id: '444001',
        categ: 'cab',
        name: 'Cables 25mm - Length 1000mm',
        url: '../../assets/products/CABLES/Cables 25mm - Length 1000mm.png',
        description: [
          {
            p: 'Cable de conexión de 25mm diámetro por 1000 mm longitud para baterías de tracción, baterías solares u otro tipo de baterías.'
          },
          {
            p: 'Estos cables de despegue atornillados de alta calidad se utilizan para cargar y descargar la batería. Están fabricados con cable de cobre que ha sido completamente revestido de caucho resistente a los ácidos que proporciona la máxima protección contra la corrosión y hace que el cable sea más duradero, seguro y fácil de maniobrar.'
          },
        ],
        espTech: [
        ],
      },
      {
        id: '444002',
        categ: 'cab',
        name: 'Cables 35mm - Length 1500mm',
        url: '../../assets/products/CABLES/Cables 35mm - Length 1500mm.png',
        description: [
          {
            p: 'Cable de conexión de 35mm diámetro por 1500 mm longitud para baterías de tracción, baterías solares u otro tipo de baterías. Incorpora el terminal M10 con recubrimiento de goma para evitar la sulfatación en los bornes de batería. Habitualmente utilizado para la conexión de la batería a la máquina, junto al conector de potencia.'
          },
          {
            p: 'Es recomendable utilizar tornillos M 10x22mm aislados.'
          },
          {
            p: 'Estos cables de despegue atornillados de alta calidad se utilizan para cargar y descargar la batería. Están fabricados con cable de cobre que ha sido completamente revestido de caucho resistente a los ácidos que proporciona la máxima protección contra la corrosión y hace que el cable sea más duradero, seguro y fácil de maniobrar.'
          },
        ],
        espTech: [
        ],
      },
      {
        id: '444003',
        categ: 'cab',
        name: 'Cables 50mm - Length 1500mm',
        url: '../../assets/products/CABLES/Cables 50mm - Length 1500mm.png',
        description: [
          {
            p: 'Cable de conexión de 50mm diámetro por 1500 mm longitud para baterías de tracción, baterías solares u otro tipo de baterías. Incorpora el terminal M10 con recubrimiento de goma para evitar la sulfatación en los bornes de batería. Habitualmente utilizado para la conexión de la batería a la máquina, junto al conector de potencia.'
          },
          {
            p: 'Es recomendable utilizar tornillos M 10x22mm aislados.'
          },
          {
            p: 'Estos cables de despegue atornillados de alta calidad se utilizan para cargar y descargar la batería. Están fabricados con cable de cobre que ha sido completamente revestido de caucho resistente a los ácidos que proporciona la máxima protección contra la corrosión y hace que el cable sea más duradero, seguro y fácil de maniobrar.'
          },
        ],
        espTech: [
        ],
      },
      {
        id: '444004',
        categ: 'cab',
        name: 'Cables 70mm - Length 1500mm',
        url: '../../assets/products/CABLES/Cables 70mm - Length 1500mm.png',
        description: [
          {
            p: 'Cable de conexión de 70mm diámetro por 1500 mm longitud para baterías de tracción, baterías solares u otro tipo de baterías.'
          },
          {
            p: 'Estos cables de despegue atornillados de alta calidad se utilizan para cargar y descargar la batería. Están fabricados con cable de cobre que ha sido completamente revestido de caucho resistente a los ácidos que proporciona la máxima protección contra la corrosión y hace que el cable sea más duradero, seguro y fácil de maniobrar.'
          },
        ],
        espTech: [
        ],
      },
    ];
  }
}
