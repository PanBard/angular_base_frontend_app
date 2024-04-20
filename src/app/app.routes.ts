import { Routes } from '@angular/router';
import { ItemsListComponent } from './items-list/items-list.component';
import { MainContentComponent } from './main-content/main-content.component';
import { RegisterComponent } from './register/register.component';
import { LogInComponent } from './log-in/log-in.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'about', component: ItemsListComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LogInComponent },
];
