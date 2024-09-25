import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RangePipe } from '../../pipes/range.pipe';
import { Building } from '../building-tab/models/building.model';
import { BuildingsEnum } from '../building-tab/models/buildings.enum';
import { BuildingsService } from '../building-tab/services/buildings.service';

@Component({
  selector: 'trf-game-view',
  standalone: true,
  imports: [RangePipe],
  templateUrl: './game-view.component.html',
  styleUrl: './game-view.component.scss',
})
export class GameViewComponent implements OnInit, OnDestroy {
  scrHeight: number = 0;
  scrWidth: number = 0;
  gridWidth: number = 0;
  gridHeight: number = 0;
  selectedBuilding: Building | null;
  buildingEnum = BuildingsEnum;
  selectedBuildingSub$: Subscription;

  constructor(private readonly buildingsService: BuildingsService) {
    this.getScreenSize();
  }

  ngOnInit(): void {
    this.selectedBuildingSub$ =
      this.buildingsService.selectedBuilding$.subscribe(
        (selectedBuilding: Building | null) => {
          console.log(selectedBuilding);
          this.selectedBuilding = selectedBuilding;
        }
      );
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    this.calculateGrid();
  }

  calculateGrid() {
    this.gridWidth = Math.round(Math.floor(this.scrWidth / 22));
    this.gridHeight = Math.round(Math.floor(this.scrHeight / 22));
  }

  onTileClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    console.log(event);
    if (this.selectedBuilding?.type === this.buildingEnum.WALL) {
      target.style.backgroundColor = 'red';
    }
  }

  ngOnDestroy(): void {
    this.selectedBuildingSub$.unsubscribe();
  }
}
