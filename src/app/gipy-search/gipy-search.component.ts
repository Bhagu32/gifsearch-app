import { Component, OnInit } from '@angular/core';
import { GiphyserviceService } from '../giphyservice.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-gipy-search',
  templateUrl: './gipy-search.component.html',
  styleUrls: ['./gipy-search.component.scss']
})
export class GipySearchComponent implements OnInit {

  constructor(private giphyservice: GiphyserviceService) {
  
  }
  
  link = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=";

  giphies:any = [];

  ngOnInit(): void {
    // var apiLink = this.link + "cat";
    var idDto = {
      apiLink: this.link + "Mercedes-Benz"
    };
    this.giphyservice.GetgifImages(idDto).subscribe((data: any) => {
      this.giphies =  data.data;
    });
  }
  public showRate:any;
  public selectionModel:any;
  name:any="Mercedes-Benz";
  public data = [
      {
        id: 1,
        name: "Muthu",
      },
      {
        id: 2,
        name: "Jeeva",
      },
      {
        id: 3,
        name: "Gokul",
      },
      {
        id: 4,
        name: "SRK",
      },
      {
        id: 5,
        name: "FilmStart",
      },
      {
        id: 6,
        name: "Cat",
      },
      {
        id: 7,
        name: "Dog",
      },
      {
        id: 8,
        name: "Man",
      },
      {
        id: 9,
        name: "Boy",
      },
      {
        id: 10,
        name: "Girl",
      },
      {
        id: 11,
        name: "Women",
      },
      {
        id: 12,
        name: "Amir Khan",
      },

    ];

    onChange() {    
      this.name = this.selectionModel.name;
    }

  performSearch(searchTerm: HTMLInputElement) {
    var apiLink = this.link + searchTerm.value;
    var idDto = {
      apiLink: this.link + searchTerm.value
    };
    this.giphyservice.GetgifImages(idDto).subscribe((data: any) => {
      this.giphies =  data.data;
    });
  }

}
