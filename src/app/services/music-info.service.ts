import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicInfoService {

  constructor(
    private http: Http
  ) { }

  url = "https://musicbrainz.org/ws/2/artist/?query="

  getArtistInfo(artist){
    return this.http.get(this.url + artist)
    .pipe(map(res=>res.json()))
  }
}
