import { KeyboardService } from "./../../services/keyboard-service/keyboard.service";
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

  constructor(private keyboardService: KeyboardService) {}

  ngOnInit() {
    this.subscribeToKeyEvents();
  }

  private subscribeToKeyEvents() {
    this.keyboardService.getKeyboardSubject().subscribe(event => {
      if (
        this.keyboardService.generalInvalidCharacters().includes(event.key) ===
        false
      ) {
        this.lastLetter = event.key;
      }
    });
  }
}
