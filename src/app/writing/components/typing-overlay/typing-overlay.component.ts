import { Component, OnInit, Input, trigger, style, state, transition, animate } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { EventEmitter } from "events";
import { KeyboardService } from "../../../shared/services/keyboard-service/keyboard.service";
import { WordcountGoalService } from "../../../shared/services/wordcount-goal/wordcount-goal.service";

@Component({
  selector: "app-typing-overlay",
  templateUrl: "./typing-overlay.component.html",
  styleUrls: ["./typing-overlay.component.css"],
  animations: [
    trigger('wordcount', [
      state('fade-out', style({
        opacity: '0'
      })),
      state('isVisible', style({
        opacity: '1'
      })),
      transition('* => fade-out', animate('500ms ease-out'))
    ])
  ]
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
      this.overlayVisible = "fade-out";
    });
  }
}
