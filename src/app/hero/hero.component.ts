import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  heroTittle = "Responsive left-aligned hero with image";
  heroContent = "Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.";
  btn_primary = "Contact Now";
  btn_outline = "Read More";
  hero_img = "https://getbootstrap.com/docs/5.2/examples/heroes/bootstrap-themes.png";
}
