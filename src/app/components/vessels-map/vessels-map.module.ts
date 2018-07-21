import { NgModule } from '@angular/core';
import { ILLineComponent } from '../../@core/components/line/line.component';
import { ILFlagComponent } from '../../@core/components/flag/flag.component';
import { CommonComponentsModule } from '../../@core/components/common.components.module';
import { InfoSidebarComponent } from './components/info-sidebar/info-sidebar.component';
import { VesselInfoComponent } from './components/vessel-info/vessel-info.component';
import { PipesModule } from '../../pipes/pipes.module';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { VesselsMapComponent } from './vessels-map.component';
import { IsraelComponent } from '../israel/israel.component';
import { EventsService } from '../../core/data/events.service';
import { VesselService } from '../../core/services/vessel.service';

@NgModule({
  imports: [
    CommonComponentsModule,
    PipesModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCpVhQiwAllg1RAFaxMWSpQruuGARy0Y1k',
      libraries: ['places'],
    }),
  ],
  exports: [],
  declarations: [
      InfoSidebarComponent,
      VesselInfoComponent,
      VesselsMapComponent,
      IsraelComponent
  ],
  entryComponents: [
    VesselInfoComponent,
    VesselsMapComponent,
    IsraelComponent
  ],
  providers: [
    EventsService,
    VesselService
  ]
})
export class VesselsMapsModule { }
