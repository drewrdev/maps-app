import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//Configuracion de Mapbox a nivel global de la App, para saber a que token debe hacer referencia para mostrar el Map

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZHJld3JkZXYiLCJhIjoiY2xhNGJoNmxlMGh6aDNwbzdka29wc2dlciJ9.mombciUxG3k2ls0Sb3K21A';

//Para saber la locacion del usuario 
if ( !navigator.geolocation ) {
  alert('Navegador no soporta la Geolocation');
  throw new Error('Navegador no soporta la Geolocation');
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
