import { Component } from '@angular/core';
import { BuildingTabComponent } from '../../components/building-tab/building-tab.component';
import { GameViewComponent } from '../../components/game-view/game-view.component';

@Component({
  selector: 'trf-game',
  standalone: true,
  imports: [BuildingTabComponent, GameViewComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {}
