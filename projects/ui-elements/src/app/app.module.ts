import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { UiControlsModule, CopyButtonComponent } from 'ui-controls';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    UiControlsModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { 
  constructor(private injector: Injector) {}
  ngDoBootstrap(): void {
    const el = createCustomElement(CopyButtonComponent, { injector: this.injector });
  customElements.define('copy-button', el)};
}
