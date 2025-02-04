import { Component } from '@angular/core';
import { PokeApiService } from '../poke-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  listPokemon: any = [];

  constructor(private pokeService: PokeApiService, private router: Router) { }

  ngOnInit() {
    this.pokeService.getListPokemon().subscribe((data) => {
      this.listPokemon = data.results
      console.log(data.results)
    });
  }

  obtenerIdDeUrl(url: any) {
    const regex = /\/(\d+)\//;
    const match = url.match(regex);

    if (match) {
      return match[1];
    } else {
      return "No se encontro un ID valido en la URL";
    }
  }

  handleDetail(url: any) {
    const pokemonId = this.obtenerIdDeUrl(url);
    console.log(url);
    //this.pokeService.getDetailPokemon(url).subscribe((data) => { });
    this.router.navigateByUrl(`/detail/${pokemonId}`);
  }

}