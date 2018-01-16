import { WordcountGoalService } from "../../../services/wordcount-goal/wordcount-goal.service";
import { KeyboardService } from "../../../services/keyboard-service/keyboard.service";
import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { EventEmitter } from "events";

@Component({
  selector: "app-typing-overlay",
  templateUrl: "./typing-overlay.component.html",
  styleUrls: ["./typing-overlay.component.css"]
})
export class TypingOverlayComponent implements OnInit {
  public lastLetter = "";
  public overlayVisible = "isVisible";

  constructor(
    private keyboardService: KeyboardService,
    private wordcountGoalService: WordcountGoalService
  ) {}

  ngOnInit() {
    this.subscribeToKeyEvents();
    this.subscribeToWordcountGoal();
  }

  private subscribeToKeyEvents() {
    this.keyboardService.getKeyboardSubject().subscribe(event => {
      if (this.keyboardService.isCharacterKey(event.key)) {
        this.lastLetter = event.key;
      }
    });
  }

  private subscribeToWordcountGoal() {
    this.wordcountGoalService.goalCompleted().subscribe(() => {
      this.overlayVisible = "isNotVisible";
    });
  }
}
