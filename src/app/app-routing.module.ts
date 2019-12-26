import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { TeamsResolverService } from './services/teams-resolver.service';


const routes: Routes = [
  {
    path: 'live',
    loadChildren: () => import('./modules/live/live.module').then(mod => mod.LiveModule)
  },
  {
    path: 'teams',
    loadChildren: () => import('./modules/teams/teams.module').then(mod => mod.TeamsModule),
    resolve: {
      ss: TeamsResolverService
    }
  },
  {
    path: '',
    component: HomeScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
