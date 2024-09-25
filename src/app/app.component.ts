import { Component } from '@angular/core';
import { GameComponent } from './containers/game/game.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [GameComponent],
})
export class AppComponent {
  title = 'terraforge';
}
