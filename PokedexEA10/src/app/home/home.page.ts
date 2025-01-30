import { Component } from '@angular/core';
import { PokeApiService } from '../poke-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  listPokemon: any = [];

  constructor(private pokeService: PokeApiService) { }

  ngOnInit() {
    this.pokeService.getListPokemon().subscribe((data) => {
      this.listPokemon = data.results
      console.log(data.results)
    });
  }

  handleDetail(url: any) {
    console.log(url);
  }
}
