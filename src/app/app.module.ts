import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DragonComponent } from './pages/dragon/dragon.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CoreComponent } from './pages/core/core.component';
import { RocketsComponent } from './pages/rockets/rockets.component';
import { MissionComponent } from './pages/mission/mission.component';
import { InfoComponent } from './pages/info/info.component';

import { counterReducer } from './store/reducers/count.reducer';

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
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      count: counterReducer,
    }),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
