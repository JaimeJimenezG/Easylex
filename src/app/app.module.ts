import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UiModule } from './ui/ui.module';
import { FormsModule } from '@angular/forms';
import { navigation } from './animations/navigation.animation';
import { PageModule } from './pages/pages.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    IonicModule.forRoot({navAnimation: navigation}),
    BrowserModule,
    AppRoutingModule,
    UiModule,
    CommonModule,
    FormsModule,
    IonicModule,
    UiModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PageModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
