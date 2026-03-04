import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Cardd} from './cardd/cardd';

@NgModule({
  declarations: [Cardd],
  exports: [Cardd],
})
export class SharedModule {}
