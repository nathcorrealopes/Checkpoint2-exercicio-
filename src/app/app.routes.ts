import { Routes } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { IbgeComponent } from './components/ibge/ibge.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'pokemon', component: PokemonComponent},
    {path: 'ibge', component: IbgeComponent},
    {path: '**', component: HomeComponent}
];
