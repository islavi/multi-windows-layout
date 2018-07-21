import { Routes } from '@angular/router';
import { TestPanelComponent } from '../../test-panel.component';
import { UsersComponent } from './users.component';

export const appRoutes: Routes = [
    { path: 'users', component: UsersComponent },
    { path: '**', component: TestPanelComponent }
];
