import { NgModule } from '@angular/core';
import { DraggableModule } from './draggable/draggable.module';

@NgModule({
  imports: [
    DraggableModule
  ],
  exports: [
    DraggableModule
  ]
})
export class CommonDirectivesModule { }
