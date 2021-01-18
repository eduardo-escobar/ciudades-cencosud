import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  constructor(private http: HttpClient,
    private socket: Socket) { }

  /**
   * Centraliza la url del servicio
   * @param query 
   */
  getQuery(query: string) {
    const url = `${environment.urlServicio}${query}`;
    return this.http.get(url);
  }

  /**
   * obtiene las ciudades del servidor
   */
  getCiudades() {
    return this.socket.fromEvent('ciudad');
  }

  /**
   * Obtiene todas las ciudades
   */
  getAllCities = () => {
    return this.getQuery('/ciudad')
      .pipe(map(data => {
        return data['mensaje'].ciudades;
      }));
  }
}
