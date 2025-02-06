import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private apiUrl = "https://pokeapi.co/api/v2/pokemon/"
  private limit = 50;
  private offset = 0;
  constructor(private http: HttpClient) { }

  getListPokemones(): Observable<any>{
    return this.http.get(`${this.apiUrl}?limit=${this.limit}&offset=${this.offset}`);

  }

  getDetailPokemon(urlPokemon: any): Observable<any> {
    return this.http.get(urlPokemon);
  }

  getPokemonById(id: string): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
  

}
