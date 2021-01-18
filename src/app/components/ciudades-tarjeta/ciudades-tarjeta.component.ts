import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciudades-tarjeta',
  templateUrl: './ciudades-tarjeta.component.html',
  styleUrls: ['./ciudades-tarjeta.component.css']
})
export class CiudadesTarjetaComponent implements OnInit {

  @Input() ciudades: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
