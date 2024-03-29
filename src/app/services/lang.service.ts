import { Injectable } from '@angular/core';
import langs from '../../../langs.json';

export interface Lang {key: string; description: string};

@Injectable({
  providedIn: 'root'
})

export class LangService {

  lang: Lang = this.selectLang('Español');

  constructor() { }

  selectLang(lang: string): Lang {
    this.lang = langs.find(d => d.description === lang);
    return langs.find(d => d.description === lang);
  }

  getLangs(): Lang[] {
    return langs;
  }

  getLang(): Lang {
    return this.lang;
  }

  getLangKey(): string {
    return this.lang.key;
  }
}
