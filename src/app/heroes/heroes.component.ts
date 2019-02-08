import { Component, OnInit } from '@angular/core';

import { Hero } from '../class/hero';
import { HEROES as Herodata } from '../mockdata/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

   hero: Hero = {
   	 id: 1,
   	 name: 'windostorm'
   }

   heroes: Hero[] = Herodata;
   selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(slc: Hero){
    this.selectedHero=slc;
  }

}
