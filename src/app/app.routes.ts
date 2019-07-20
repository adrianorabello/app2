import {Routes } from '@angular/router';

import { DiversaoComponent } from './diversao/diversao.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { HomeComponent } from './home/home.component';


export const ROUTES: Routes = [
    {path:'',component:HomeComponent},
    {path:'restaurante',component:RestaurantesComponent},
    {path:'diversao',component:DiversaoComponent},
];

