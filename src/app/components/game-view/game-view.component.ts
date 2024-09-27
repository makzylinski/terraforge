import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RangePipe } from '../../shared/pipes/range.pipe';
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
  isSelecting: boolean = false;
  startX: number = 0;
  startY: number = 0;

  constructor(private readonly buildingsService: BuildingsService) {
    this.getScreenSize();
  }

  ngOnInit(): void {
    this.selectedBuildingSub$ =
      this.buildingsService.selectedBuilding$.subscribe(
        (selectedBuilding: Building | null) => {
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

  ngOnDestroy(): void {
    this.selectedBuildingSub$.unsubscribe();
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    if (event.buttons === 1) {
      this.isSelecting = true;
      this.startX = event.clientX;
      this.startY = event.clientY;
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (
      this.isSelecting &&
      event.buttons === 1 &&
      target.classList.contains('view__tile')
    ) {
      this.highlightTiles(target);
    }
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp() {
    this.isSelecting = false;
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {
    this.isSelecting = false;
  }

  highlightTiles(target: HTMLElement) {
    if (this.selectedBuilding?.type === this.buildingEnum.WALL) {
      target.style.backgroundColor = 'red';
    }
  }
}
