import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { UiModule } from '../ui/ui.module';


@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    UiModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
