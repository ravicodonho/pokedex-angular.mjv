import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomcolorService {

  letters = '0123456789ABCDEF';
  constructor() { }

  getRandomColor() {
    var color = '#'; // <-----------
    for (var i = 0; i < 6; i++) {
        color += this.letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
