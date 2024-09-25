import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BuildingsEnum } from '../models/buildings.enum';

@Injectable({
  providedIn: 'root',
})
export class BuildingsService {
  buildingEnum = BuildingsEnum;
  constructor() {}

  getBuildingTypes = (): Observable<any> => {
    // mock for the time being

    return of([
      {
        name: 'Stone Wall',
        type: this.buildingEnum.wall,
      },
    ]);
  };
}
