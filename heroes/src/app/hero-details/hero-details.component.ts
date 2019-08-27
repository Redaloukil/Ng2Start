import { Component, OnInit, Input } from '@angular/core';
import Hero from '../../models/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}