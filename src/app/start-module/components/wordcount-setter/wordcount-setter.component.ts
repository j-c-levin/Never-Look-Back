import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { WordcountGoalService } from "../../../shared/services/wordcount-goal/wordcount-goal.service";

@Component({
  selector: "app-wordcount-setter",
  templateUrl: "./wordcount-setter.component.html",
  styleUrls: ["./wordcount-setter.component.css"],
  host: { "(window:keydown)": "onKeypress($event)" }
})
export class WordcountSetterComponent implements OnInit {
  public wordcountGoal: string = "500";
  public readyToWrite: boolean = false;

  constructor(
    private wordcountGoalService: WordcountGoalService,
    private router: Router
  ) {}

  ngOnInit() {}

  onKeypress(event: KeyboardEvent): void {
    if (this.readyToWrite) {
      // Prevent changing the wordcount goal after pressing enter but before navigating to the writing screen
      return;
    }

    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    if (numbers.includes(event.key)) {
      this.wordcountGoal = this.addNumberToGoal(event.key, this.wordcountGoal);
    }
    if (event.key === "Backspace") {
      this.wordcountGoal = this.subtractNumberFromGoal(this.wordcountGoal);
    }
    if (event.key === "Enter") {
      this.transitionToWriting();
    }
  }

  addNumberToGoal(key: string, currentValue: string): string {
    if (currentValue === "0") {
      currentValue = "";
    }
    currentValue += key;
    return currentValue;
  }

  subtractNumberFromGoal(currentValue: string): string {
    currentValue = currentValue.slice(0, currentValue.length - 1);
    if (currentValue.length === 0) {
      currentValue = "0";
    }
    return currentValue;
  }

  transitionToWriting(): void {
    // Send value to service
    this.wordcountGoalService.setWordcountGoal(Number(this.wordcountGoal));
    // Remove main text from screen and display instructions
    this.readyToWrite = true;
    // Navigate to writing page after a delay
    // setTimeout(() => {
    //   this.router.navigate(["writing"]);
    // }, 2000);
  }

  shouldFadeout() {
    return this.readyToWrite ? 'fade-out' : '';
  }
}
