import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsersService } from '../../core/services/users.service';
import { AlertService } from '../../core/services/alert.service';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '../../../../node_modules/@angular/forms';
import { routing } from '../../app.routing';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing
  ],
  exports: [],
  declarations: [
    RegisterComponent
  ],
  entryComponents: [
    RegisterComponent
  ],
  providers: [
    UsersService,
    AlertService
  ]
})
export class RegisterModule { }
