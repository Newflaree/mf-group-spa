import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public socialItems = [
    {
      name: 'Correo electrónico',
      value: 'ventas@myfg.cl',
      icon: 'far fa-envelope',
      position: 'left',
      href: 'mailto:ventas@myfg.cl'
    },
    {
      name: 'Whatsapp',
      value: '+56998482497',
      icon: 'fab fa-whatsapp',
      position: 'right',
      href: 'https://api.whatsapp.com/send?phone=56998482497'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }



}
