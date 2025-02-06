import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeApiService } from '../poke-api.service';
import { IonicModule } from '@ionic/angular';// estos dos los agregue para que funcione angular en los que no son home 
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
  imports: [IonicModule,CommonModule],
})
export class DetalleComponent implements OnInit {

  pokemon: any;

  constructor(private route: ActivatedRoute, private pokeService: PokeApiService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); // Obtiene el ID desde la URL

    if (id) {
      this.pokeService.getPokemonById(id).subscribe(data => {
        this.pokemon = data;
      });
    }
  }

}
