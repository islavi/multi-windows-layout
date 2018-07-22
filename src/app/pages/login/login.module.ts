import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { UsersService } from '../../core/services/users.service';
import { AlertService } from '../../core/services/alert.service';
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
    LoginComponent
  ],
  entryComponents: [
    LoginComponent
  ],
  providers: [
    UsersService,
    AlertService
  ]
})
export class LoginModule { }
