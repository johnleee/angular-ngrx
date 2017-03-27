import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
    {path: '', loadChildren: './home/home.module#HomeModule'},
    {path: '**', redirectTo: ''}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);