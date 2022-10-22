import { Component } from '@angular/core';
import { LangService } from 'src/app/services/lang.service';
@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.scss'],
})
export class LangSelectorComponent {
  langs = this.langService.getLangs();
  constructor(private langService: LangService) {}
}
