import { Component } from '@angular/core';
import { LangService } from 'src/app/services/lang.service';
import textFile from '../../../../textFile.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  text = textFile;
  constructor(public langService: LangService) {}
}
