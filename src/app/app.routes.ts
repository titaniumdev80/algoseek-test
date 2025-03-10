import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityListComponent } from './components/activity-list/activity-list.component';

const routes: Routes = [
  { path: '', component: ActivityListComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
