

import { Component, OnInit } from '@angular/core';
import { SpotitfyService } from '../../services/spotitfy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

nuevasCanciones:any[] = [];

  constructor(private spotify: SpotitfyService ) {

    this.spotify.getNewRelease()
    .subscribe((res:any) => {
      console.log(res)
      this.nuevasCanciones = res
    })


   }




}
