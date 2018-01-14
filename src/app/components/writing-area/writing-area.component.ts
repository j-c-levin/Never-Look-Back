import { KeyboardService } from "./../../services/keyboard-service/keyboard.service";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { LocalStorageService } from "angular-2-local-storage/dist/local-storage.service";
import { ReplaySubject } from "rxjs/Rx";

@Component({
  selector: "app-writing-area",
  templateUrl: "./writing-area.component.html",
  styleUrls: ["./writing-area.component.css"]
})
export class WritingAreaComponent implements OnInit {
  public writtenText: any = "";

  constructor(
    private localStorage: LocalStorageService,
    private keyboardService: KeyboardService
  ) {}

  ngOnInit() {
    this.subscribeToKeyEvents();
    this.setupStoringText();
    this.loadStoredText();
  }

  setupStoringText() {
    // Periodically save text to file, after every 1 second pause in typing
    this.keyboardService
      .getKeyboardSubject()
      .debounceTime(1000)
      .subscribe(() => {
        this.localStorage.set("file", this.writtenText);
      });
  }

  loadStoredText() {
    // If text is in the local storage, load it in
    if (this.localStorage.get("file") !== null) {
      // this.writtenText = this.localStorage.get("file");
    }
  }

  private subscribeToKeyEvents() {
    this.keyboardService.getKeyboardSubject().subscribe(event => {
      this.handleKeyEvents(event);
    });
  }

  private handleKeyEvents(event: KeyboardEvent) {
    if (this.keyboardService.generalInvalidCharacters().includes(event.key) === false) {
      this.writtenText += event.key;
    }
  }
}