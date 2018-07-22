import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UsersComponent } from './panels/users/users.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuardService } from './core/services/auth.guard.service';

const appRoutes: Routes = [
    { path: '', component: UsersComponent, canActivate: [AuthGuardService] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
