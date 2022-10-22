import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LangSelectorComponent } from './lang-selector/lang-selector.component';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  declarations: [PanelComponent, HeaderComponent, FooterComponent, LangSelectorComponent],
  imports: [IonicModule, CommonModule],
  exports: [PanelComponent, HeaderComponent, FooterComponent, LangSelectorComponent],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [PanelComponent],
})
export class UiModule {}
