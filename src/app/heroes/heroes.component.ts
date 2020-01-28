import { Component, OnInit } from '@angular/core';
import { Hero } from "./hero";
import { HEROES } from './mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroList: Hero[];

  selectedHero: Hero;
  
  constructor(private service: HeroService) { }

  ngOnInit() {
    this.service.getHeroes().subscribe(
      list => this.heroList = list
    );
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

}