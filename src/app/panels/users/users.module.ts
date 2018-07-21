import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { UsersService } from '../../core/services/users.service';
import { UIComponentsModule } from '../../core/ui-components/ui.components.module';
import { BrowserModule } from '../../../../node_modules/@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './users.routes';

@NgModule({
  imports: [
    UIComponentsModule,
    BrowserModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [],
  declarations: [
    UsersComponent
  ],
  entryComponents: [
    UsersComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
