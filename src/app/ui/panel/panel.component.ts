import { Component, Input, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { LangService } from 'src/app/services/lang.service';
import textFile from '../../../../textFile.json';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  @Input() routerButtonNext: string;
  @Input() routerButtonBack: string;
  @Input() inputText: string;
  @Input() buttonNextText: string;
  @Input() buttonBackText: string;
  @Input() type: string;
  @Input() question: string;
  @Input() nextButtonFunction: (formGroup: FormGroup) => void;

  textFile = textFile;
  formGroup = this.formService.getFormGroup();

  constructor(public langService: LangService, public formService: FormService) { }

  executer(): void {
    if (!!this.nextButtonFunction) {
      this.nextButtonFunction(this.formService.formGroup);
    }
  }

  ngOnInit(): void {
    console.log(this.formGroup);
    console.log(this.question);
  }

  setDate(formGroup: FormGroup, formControlname: string, event: CustomEvent): void {
    formGroup.get(formControlname).setValue(event.detail.value);
  }
}
