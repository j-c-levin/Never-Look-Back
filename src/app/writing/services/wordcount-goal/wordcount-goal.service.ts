import { AsyncSubject } from "rxjs/Rx";
import { Injectable } from "@angular/core";

@Injectable()
export class WordcountGoalService {
  private currentWordcount: AsyncSubject<number> = new AsyncSubject<number>();
  private wordcountGoal: number = 5;

  constructor() {}

  public goalCompleted(): AsyncSubject<Number> {
    return this.currentWordcount;
  }

  public setWordcount(currentValue: number) {
    this.currentWordcount.next(currentValue);
    console.log('wordcount:', currentValue);
    if (currentValue === this.wordcountGoal) {
      this.currentWordcount.complete();
      console.log('goal met');
    }
  }
}
