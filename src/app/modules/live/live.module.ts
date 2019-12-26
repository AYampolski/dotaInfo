import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveRoutingModule } from './live-routing.module';
import { LiveDashboardComponent } from './components/live-dashboard/live-dashboard.component';


@NgModule({
  declarations: [LiveDashboardComponent],
  imports: [
    CommonModule,
    LiveRoutingModule
  ]
})
export class LiveModule { }
