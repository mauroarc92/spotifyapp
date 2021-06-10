import { Component, OnInit } from '@angular/core';
import { SpotitfyService } from 'src/app/services/spotitfy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  artistas:any[] =[];
  constructor(private spotify: SpotitfyService) { }

  buscar(termino: string){
    this.spotify.getArtista(termino)
    .subscribe((data:any) =>{
      this.artistas = data
    })

  }

}
