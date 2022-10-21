import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragonComponent } from './pages/dragon/dragon.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CoreComponent } from './pages/core/core.component';
import { RocketsComponent } from './pages/rockets/rockets.component';
import { MissionComponent } from './pages/mission/mission.component';
import { InfoComponent } from './pages/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    DragonComponent,
    LayoutsComponent,
    HeaderComponent,
    HomeComponent,
    CoreComponent,
    RocketsComponent,
    MissionComponent,
    InfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
