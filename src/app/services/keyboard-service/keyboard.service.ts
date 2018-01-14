import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs/Rx";

@Injectable()
export class KeyboardService {
  private keyboardSubject: ReplaySubject<KeyboardEvent> = new ReplaySubject<
    KeyboardEvent
  >();

  constructor() {}

  public sendKeyboardEvent(event: KeyboardEvent) {
    this.keyboardSubject.next(event);
  }

  public getKeyboardSubject(): ReplaySubject<KeyboardEvent> {
    return this.keyboardSubject;
  }

  public generalInvalidCharacters(): [string] {
    return [
      "Backspace",
      "Control",
      "Shift",
      "Enter",
      "Alt",
      "AltGraph",
      "ContextMenu",
      "Delete",
      "Escape",
      "PageDown",
      "PageUp",
      "F1",
      "F2",
      "F3",
      "F4",
      "F5",
      "F6",
      "F7",
      "F8",
      "F9",
      "F10",
      "F11",
      "F12"
    ];
  }
}
