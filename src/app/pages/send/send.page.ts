import { Component } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { LangService } from 'src/app/services/lang.service';
import textFile from '../../../../textFile.json';

@Component({
  selector: 'app-send',
  templateUrl: './send.page.html',
  styleUrls: ['./send.page.scss'],
})
export class SendPage {
  textFile = textFile;

  constructor(public langService: LangService, public formService: FormService) { }
}
