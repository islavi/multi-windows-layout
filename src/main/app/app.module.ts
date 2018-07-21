import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { TestPanelComponent } from './test-panel.component';
import { GoldenLayoutModule, GoldenLayoutConfiguration, DEFAULT_LOCAL_STORAGE_STATE_STORE_PROVIDER } from '../../core';
import * as GoldenLayout from 'golden-layout';
import { goldenLayoutConfig } from './layout.config';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TestPanelComponent
  ],
  entryComponents: [
    TestPanelComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    GoldenLayoutModule.forRoot(goldenLayoutConfig)
  ],
  providers: [
    DEFAULT_LOCAL_STORAGE_STATE_STORE_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}