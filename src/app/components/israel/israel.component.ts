import { Component, Inject } from '@angular/core';
import { GoldenLayoutComponentState, GlOnResize, GlOnHide, GlOnShow, GlOnTab, GoldenLayoutContainer } from '../../../core';
import * as GoldenLayout from 'golden-layout';
import { Vessel } from '../../core/models/vessel.model';
import { Const } from '../../core/const';

@Component({
  template: `
  Israel
  <agm-map [latitude]="mapLat" [longitude]="mapLng" style="height: 400px; width: 500px;">
    <agm-marker [latitude]="mapLat" [longitude]="mapLng"></agm-marker>
  </agm-map>
  `,
  selector: 'test-panel'
})
export class IsraelComponent implements GlOnResize, GlOnHide, GlOnShow, GlOnTab {

  zoom: number; // google maps zoom level
  mapLat: number; // latitude
  mapLng: number; // longitude
  vessels: Vessel[]; // Markers

  constructor(@Inject(GoldenLayoutComponentState) private state: any,
              @Inject(GoldenLayoutContainer) private container: GoldenLayout.Container) {
          this.initDefaults();
  }

  initDefaults = (): void => {
    this.zoom = Const.mapZoom;
    this.mapLat = Const.mapLat;
    this.mapLng = Const.mapLng;
  }

  public onInput(e: Event): void {

    this.container.extendState({
      value: (<HTMLInputElement>e.target).value
    });

    console.log('state saved.');
  }

  public glOnResize(): void {
    console.log('Resizing!');
  }

  public glOnShow(): void {
    console.log('Showing!');
  }

  public glOnHide(): void {
    console.log('Hiding!');
  }

  public glOnTab(): void {
    console.log('Tab shown!');
  }
}
