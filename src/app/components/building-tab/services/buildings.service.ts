import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Building } from '../models/building.model';
import { BuildingsEnum } from '../models/buildings.enum';

@Injectable({
  providedIn: 'root',
})
export class BuildingsService {
  buildingEnum = BuildingsEnum;
  private selectedBuildingSubject = new BehaviorSubject<Building | null>(null);
  selectedBuilding$ = this.selectedBuildingSubject;

  getBuildings = (): Observable<Building[]> => {
    // mock for the time being

    return of([
      {
        id: 0,
        name: 'Stone Wall',
        type: this.buildingEnum.WALL,
      },
      {
        id: 1,
        name: 'Stone Gate',
        type: this.buildingEnum.GATE,
      },
    ]);
  };
}
