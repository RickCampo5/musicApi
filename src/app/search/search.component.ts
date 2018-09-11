import { Component, OnInit } from '@angular/core';
import {MusicInfoService} from '../services/music-info.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private musicService: MusicInfoService
  ) { }

  searchText = ""
  artist: any = {}

  search(){
    this.musicService.getArtistInfo(this.searchText)
    .subscribe(info=>{
      this.artist = info
    })
  }

  ngOnInit() {
  }

}
