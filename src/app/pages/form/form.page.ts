import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LangService } from '../../services/lang.service';

import form from '../../../../form.json';
import textFile from '../../../../textFile.json';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage {
  form = form;
  textFile = textFile;
  question = this.route.snapshot.paramMap.get('question');

  constructor(
    public langService: LangService,
    private route: ActivatedRoute,
  ) { }
}
