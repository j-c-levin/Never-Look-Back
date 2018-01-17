import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardService } from './services/keyboard-service/keyboard.service';
import { WordcountGoalService } from './services/wordcount-goal/wordcount-goal.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    KeyboardService,
    WordcountGoalService
  ],
  exports: []
})
export class SharedModule { }
