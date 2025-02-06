import { Component } from '@angular/core';
import { PokeApiService } from '../poke-api.service';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  listPokemones: any = [];

  constructor(private pokeService: PokeApiService, private router: Router) { }

  ngOnInit() {
    this.pokeService.getListPokemones().subscribe((data) => {
      this.listPokemones = data.results
      console.log(data.results)
    });
  }

  handleDetail(url: string) {
    const id = url.split('/').filter(part => part).pop(); 
    this.router.navigate(['/pokemon', id]); 
  }

  handleImage(item: any): string {
    if (!item.url) return 'assets/default-image.png'; 
  
    
    const id = item.url.split('/').filter((part: string) => part).pop();
    
    
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

}