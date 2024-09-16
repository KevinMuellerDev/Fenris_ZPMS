import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewJobFormComponent } from './new-job-form/new-job-form.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "newjob", component:NewJobFormComponent}
];
