import { Component, OnInit } from "@angular/core";
import { KeyboardService } from "../../../shared/services/keyboard-service/keyboard.service";

@Component({
  selector: "app-keyboard-capture",
  templateUrl: "./keyboard-capture.component.html",
  styleUrls: ["./keyboard-capture.component.css"],
  host: { "(window:keydown)": "onKeypress($event)" }
})
export class KeyboardCaptureComponent implements OnInit {
  constructor(private keyboardService: KeyboardService) {}

  ngOnInit() {}

  onKeypress(event: KeyboardEvent) {
    this.keyboardService.sendKeyboardEvent(event);
  }
}
