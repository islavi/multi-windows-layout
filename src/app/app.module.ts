import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { TestPanelComponent } from './test-panel.component';
import { GoldenLayoutModule, GoldenLayoutConfiguration, DEFAULT_LOCAL_STORAGE_STATE_STORE_PROVIDER } from '../core';
import * as GoldenLayout from 'golden-layout';
import { goldenLayoutConfig } from './configuration/layout.config';
import { HttpClientModule } from '@angular/common/http';
import { VesselsMapsModule } from './panels/vessels-map/vessels-map.module';
import { UIComponentsModule } from './core/ui-components/ui.components.module';
import { UsersModule } from './panels/users/users.module';
import { APP_BASE_HREF } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/layouts/header/header.component';
import { FooterComponent } from './core/layouts/footer/footer.component';
import { LoginModule } from './pages/login/login.module';
import { RegisterModule } from './pages/register/register.module';
import { ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { routing } from './app.routing';
import { AuthGuardService } from './core/services/auth.guard.service';
import { AlertService } from './core/services/alert.service';
import { UsersService } from './core/services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    TestPanelComponent,
    HeaderComponent,
    FooterComponent
  ],
  entryComponents: [
    TestPanelComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    routing,
    GoldenLayoutModule.forRoot(goldenLayoutConfig),
    VesselsMapsModule,
    UsersModule,
    UIComponentsModule,
    BrowserAnimationsModule,
    LoginModule,
    RegisterModule
  ],
  providers: [
    AuthGuardService,
    AlertService,
    UsersService,
    DEFAULT_LOCAL_STORAGE_STATE_STORE_PROVIDER,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
