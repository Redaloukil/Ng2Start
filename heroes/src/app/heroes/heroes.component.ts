import { Component, OnInit } from '@angular/core';
import Hero from '../../models/hero';
import Heroes from '../../models/heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero : Hero = {
    id :1,
    name : "redaaaaa",
  }

  heroes = Heroes;

  selectedHero: Hero;
  
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  
  constructor() { }

  ngOnInit() {
    
  }

  

}
