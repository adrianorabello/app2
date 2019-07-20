
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import {RouterModule} from '@angular/router'


import {ROUTES} from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HomeComponent } from './home/home.component';
import { OfertasService } from './ofertas.service';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';




@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    HomeComponent,
    RestaurantesComponent,
    DiversaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
   
    
    
  ],
  providers: [OfertasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
