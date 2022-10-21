import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragonComponent } from './pages/dragon/dragon.component';
import { HomeComponent } from './pages/home/home.component';
import { RocketsComponent } from './pages/rockets/rockets.component';
import { MissionComponent } from './pages/mission/mission.component';
import { CoreComponent } from './pages/core/core.component';
import { InfoComponent } from './pages/info/info.component';

const routes: Routes = [
  { path: 'dragons', component: DragonComponent },
  { path: '', component: HomeComponent },
  { path: 'rockets', component: RocketsComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'core', component: CoreComponent },
  { path: 'info', component: InfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
