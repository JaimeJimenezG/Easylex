import { Component } from '@angular/core';
import { LangService } from 'src/app/services/lang.service';
import textFile from '../../../../textFile.json';

@Component({
  selector: 'app-error',
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss'],
})
export class ErrorPage {
  textFile = textFile;

  constructor(public langService: LangService) { }

}
