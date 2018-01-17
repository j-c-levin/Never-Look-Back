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

  public setWordcount(currentValue: number): void {
    this.currentWordcount.next(currentValue);
    console.log('current:', currentValue, this.wordcountGoal);
    if (currentValue === this.wordcountGoal) {
      this.currentWordcount.complete();
    }
  }

  public setWordcountGoal(goal: number): void {
    this.wordcountGoal = goal;
    console.log('new goal', this.wordcountGoal);
  }
}
