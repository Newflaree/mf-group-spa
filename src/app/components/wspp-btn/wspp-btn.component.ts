import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wspp-btn',
  templateUrl: './wspp-btn.component.html',
  styleUrls: ['./wspp-btn.component.css']
})
export class WsppBtnComponent implements OnInit {
  public urlWsp: string = 'https://api.whatsapp.com/send?phone=56998482497'

  constructor() { }

  ngOnInit(): void {
  }

}
