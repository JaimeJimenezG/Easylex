import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import form from '../../../form.json';

@Injectable({
  providedIn: 'root'
})

export class FormService {
  formGroup: FormGroup;

  constructor( public formBuilder: FormBuilder) {
    this.formGroup = this.toFormGroup(Object.keys(form));
  }

  toFormGroup(questions: string[]): FormGroup {
    const group: any = {};

    questions.forEach(question => {
      group[question] = new FormControl('', Validators.required);
    });
    return this.formBuilder.group(group);
  }

  sendFormGroup(formGroup: FormGroup): void {
    console.log(formGroup);
  }

  getFormGroup(): FormGroup {
    return this.formGroup;
  }
}
