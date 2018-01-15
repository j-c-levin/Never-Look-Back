import { WordcountGoalService } from "./../../services/wordcount-goal/wordcount-goal.service";
import { KeyboardService } from "./../../services/keyboard-service/keyboard.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-wordcount",
  templateUrl: "./wordcount.component.html",
  styleUrls: ["./wordcount.component.css"]
})
export class WordcountComponent implements OnInit {
  public wordcount = 0;
  private newWordFlag = false;

  constructor(
    private keyboardService: KeyboardService,
    private wordcountGoalService: WordcountGoalService
  ) {}

  ngOnInit() {
    this.subscribeToKeyEvents();
  }

  private subscribeToKeyEvents() {
    this.keyboardService.getKeyboardSubject().subscribe(event => {
      if (this.keyboardService.isCharacterKey(event.key)) {
        this.handleWordcount(event);
      }
    });
  }

  private handleWordcount(event: KeyboardEvent) {
    // A new word is a space that has come after at least one non-space character
    if (event.key === " " && this.newWordFlag) {
      this.wordcount += 1;
      this.wordcountGoalService.setWordcount(this.wordcount);
      this.newWordFlag = false;
    } else if (event.key !== " ") {
      this.newWordFlag = true;
    }
  }
}
