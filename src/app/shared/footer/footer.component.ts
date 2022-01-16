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
      position: 'left'
    },
    {
      name: 'Whatsapp',
      value: '+56998482497',
      icon: 'fab fa-whatsapp',
      position: 'right'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }



}
