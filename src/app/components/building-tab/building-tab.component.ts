import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Building } from './models/building.model';
import { BuildingsService } from './services/buildings.service';

@Component({
  selector: 'trf-building-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './building-tab.component.html',
  styleUrl: './building-tab.component.scss',
})
export class BuildingTabComponent implements OnInit {
  buildings$: Observable<Building[]>;
  constructor(private readonly buildingsService: BuildingsService) {}

  ngOnInit(): void {
    this.buildings$ = this.buildingsService.getBuildings();
  }

  selectBuilding = (building: Building) => console.log(building);
}
