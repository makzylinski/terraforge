import { Component, HostListener } from '@angular/core';
import { RangePipe } from '../../pipes/range.pipe';

@Component({
  selector: 'trf-game-view',
  standalone: true,
  imports: [RangePipe],
  templateUrl: './game-view.component.html',
  styleUrl: './game-view.component.scss',
})
export class GameViewComponent {
  scrHeight: number = 0;
  scrWidth: number = 0;
  gridWidth: number = 0;
  gridHeight: number = 0;

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    this.calculateGrid();
  }

  constructor() {
    this.getScreenSize();
  }

  calculateGrid() {
    this.gridWidth = Math.round(Math.floor(this.scrWidth / 22));
    this.gridHeight = Math.round(Math.floor(this.scrHeight / 22));
  }

  onTileClick(event: MouseEvent) {
    console.log(event.clientX);
    console.log(event.clientY);
  }
}
