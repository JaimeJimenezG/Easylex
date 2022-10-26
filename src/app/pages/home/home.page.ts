import { Component, OnInit } from '@angular/core';
import textFile from '../../../../textFile.json';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text = textFile;
  constructor(public langService: LangService) {}
}
