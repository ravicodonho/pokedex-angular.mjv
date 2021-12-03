import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RandomcolorService } from '../randomcolor.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  indexStr : string = "";
  style: string = "";
  @Input() public index!: number;
  @Input() public pokemon!: any;

  constructor(private randomColorService : RandomcolorService, private router: Router) {
    this.style = randomColorService.getRandomColor();
  }

  ngOnInit(): void {
    this.indexStr = String(this.pokemon.id).padStart(3, '0');
    // this.rgbStyle = this.getRgbStyleStringFromRgb(this.getAverageRGB('/assets/thumbnails/' + this.indexStr + '.png'));
  }

  goToPokemon() {
    console.log(this.pokemon.id);
    this.router.navigate(['/pokemon', this.pokemon.id]);
  }

}
