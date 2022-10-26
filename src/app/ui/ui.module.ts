import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LangSelectorComponent } from './lang-selector/lang-selector.component';
import { PanelComponent } from './panel/panel.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PanelComponent, HeaderComponent, FooterComponent, LangSelectorComponent],
  imports: [CommonModule, AppRoutingModule, ReactiveFormsModule],
  exports: [PanelComponent, HeaderComponent, FooterComponent, LangSelectorComponent]
})
export class UiModule {}
