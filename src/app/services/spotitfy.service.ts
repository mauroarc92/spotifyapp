import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotitfyService {



  constructor(private http: HttpClient) {

  }

  getQuery(query: string){

    const url = `https://api.spotify.com/v1/${query}`

    const headers = new HttpHeaders({

      'Authorization': `Bearer BQCxQ1_5SI_QGFucmqXVCKXNRYfrekEr4VqW9OZt6alod5o-0nupgaSeBOwJBRYY08OK61atVuIijB2B-rQ`
    })

    return this.http.get(url,{headers})

  }


     getNewRelease(){

      return this.getQuery('browse/new-releases?offset=0&limit=21')
       .pipe(map( (data:any) =>{
          return data['albums'].items
       }))

  }

  getArtista(termino: string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=21`)
     .pipe(map( (data:any) =>{
      return data['artists'].items
   }))

  }
}
