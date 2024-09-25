import { Building } from '../components/building-tab/models/building.model';
import { BuildingsEnum } from '../components/building-tab/models/buildings.enum';

export class DetermineBuilding {
  buildingEnum = BuildingsEnum;

  determineBuilding(building: Building) {
    switch (building.type) {
      case this.buildingEnum.BUILDING: {
        break;
      }
    }
  }
}
