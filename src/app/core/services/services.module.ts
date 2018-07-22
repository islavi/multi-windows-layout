import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VesselService } from './vessel.service';
import { UsersService } from './users.service';
import { NotificationService } from './notification.service';
import { AuthGuardService } from './auth.guard.service';
import { AlertService } from './alert.service';

const SERVICES = [
  UsersService,
  VesselService,
  NotificationService,
  AuthGuardService,
  AlertService
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ServicesModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
