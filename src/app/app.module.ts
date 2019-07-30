import { DescricaoReduzida } from './util/descricao-reduzida.pipe';
import { TesteService } from './teste/service/teste.service';

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
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { TesteComponent } from './teste/teste.component';
import { AcordionComponent } from './teste/acordion/acordion.component';
import { BodyComponent } from './teste/acordion/body/body.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';




@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    HomeComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    TesteComponent,
    AcordionComponent,
    BodyComponent,
    DescricaoReduzida,
    OrdemCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
   
    
    
  ],
  providers: [OfertasService,TesteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
