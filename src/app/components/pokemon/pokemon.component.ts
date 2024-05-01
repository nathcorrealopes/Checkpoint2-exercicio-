import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interface/pokemon';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
    pokemons: Pokemon[] = []

    constructor (private http: HttpClient){}

    ngOnInit(): void {
      this.getPokemons();
    }
  
    getPokemons(): void {
      this.http.get<Pokemon[]>('https://demo1290477.mockable.io/pockemon').subscribe(
        pokemons => this.pokemons = pokemons.slice(0, 20),
        error => console.error('Error fetching pokemons', error)
      );
    }
}


