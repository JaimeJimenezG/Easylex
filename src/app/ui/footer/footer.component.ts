import { Component } from '@angular/core';
import { LangService } from 'src/app/services/lang.service';
import textFile from '../../../../textFile.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  TEXT_FILE = textFile;
  constructor(public langService: LangService) {}
}
