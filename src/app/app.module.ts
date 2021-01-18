import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CiudadService } from './services/ciudad/ciudad.service';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { CiudadesTarjetaComponent } from './components/ciudades-tarjeta/ciudades-tarjeta.component';
import { CiudadComponent } from './components/ciudad/ciudad.component';import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {}};
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NavbarComponent,
    CiudadesTarjetaComponent,
    CiudadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule,
    MatProgressBarModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [CiudadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
