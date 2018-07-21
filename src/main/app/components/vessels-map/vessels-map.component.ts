import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { InfoWindow } from '@agm/core/services/google-maps-types';
import { EventsService } from '../../core/data/events.service';
import { VesselService } from '../../core/services/vessel.service';
import { Vessel, VesselsResponse } from '../../core/models/vessel.model';
import { Const } from '../../core/const';

@Component({
  selector: 'vessels-map',
  styleUrls: [ './vessels-map.component.scss' ],
  templateUrl: './vessels-map.component.html',
})
export class VesselsMapComponent {

  zoom: number; // google maps zoom level
  mapLat: number; // latitude
  mapLng: number; // longitude
  vessels: Vessel[]; // Markers

  selectedVesselId: string;

  constructor(private eventsService: EventsService,
              private vesselService: VesselService ) {
    this.initDefaults();
    this.initVessels();
  }

  initDefaults = (): void => {
    this.zoom = Const.mapZoom;
    this.mapLat = Const.mapLat;
    this.mapLng = Const.mapLng;
  }

  initVessels = (): void => {
    this.vesselService.getVessels().then((vesselsResponse: VesselsResponse) => {
      this.vessels = vesselsResponse.vessels;
    });
  }

  showInfoWindow = (vesselId: string, infoWindow: InfoWindow): void => {
    infoWindow.open();
  }

  hideInfoWindow = (vesselId: string, infoWindow: InfoWindow): void => {
    infoWindow.close();
  }

  showVesselInfo = (label: string, index: number): void => {
    this.selectedVesselId = index.toString();
    this.eventsService.MAP_VESSEL_SELECTED_EVENT.emit(this.selectedVesselId);
  }

  mapClicked = ($event: MouseEvent): void => {
    // console.log(`Map clicked: ${event}`)
  }

}
