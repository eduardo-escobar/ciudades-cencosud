import { Component, OnInit } from '@angular/core';
import { CiudadService } from 'src/app/services/ciudad/ciudad.service';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent implements OnInit {

  loading = false;
  ciudades = [];
  constructor(private ciudadSv: CiudadService) { }

  ngOnInit(): void {
    this.loading = true;

    //Obtiene todas las ciudades al momento de iniciar la aplicacion
    this.ciudadSv.getAllCities().subscribe(cd =>{
        this.ciudades = cd;  
        this.loading = false;
        this.conecccionWebSocket();
    });



    
  }

  conecccionWebSocket = () =>{
    this.ciudadSv.getCiudades().subscribe((ciudades: any) => {

      ciudades.forEach(cd => {
        console.log('Hola Mundo' + JSON.stringify(cd));
        
        let obj = this.ciudades.find(c =>  c.key == cd.key);
        obj.hora = cd.hora;
        obj.temperatura = cd.temperatura;
      });
    });
  }

}
