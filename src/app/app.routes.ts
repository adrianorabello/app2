import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';

import {Routes } from '@angular/router';

import { DiversaoComponent } from './diversao/diversao.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { OfertaComponent } from './oferta/oferta.component';
import { HomeComponent } from './home/home.component';


export const ROUTES: Routes = [
    {path:'',component:HomeComponent},
    {path:'restaurante',component:RestaurantesComponent},
    {path:'diversao',component:DiversaoComponent},
    {path:'oferta',component:OfertaComponent},
    {path:'oferta/:id',component:OfertaComponent,
        children:[
            { path: '', component: ComoUsarComponent },
            { path: 'como-usar', component: ComoUsarComponent },
            { path:'onde-fica', component:OndeFicaComponent }
        ]
    },
];
