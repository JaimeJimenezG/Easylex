import { NgModule } from '@angular/core';
import { HomePage } from './home/home.page';
import { FormPage } from './form/form.page';
import { ErrorPage } from './error/error.page';
import { SendPage } from './send/send.page';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [HomePage, FormPage, ErrorPage, SendPage],
  imports: [UiModule],
  exports: [HomePage, FormPage, ErrorPage, SendPage]
})
export class PageModule {}
