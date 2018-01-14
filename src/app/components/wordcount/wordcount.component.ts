import { KeyboardService } from "./../../services/keyboard-service/keyboard.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-wordcount",
  templateUrl: "./wordcount.component.html",
  styleUrls: ["./wordcount.component.css"]
})
export class WordcountComponent implements OnInit {
  private wordcount = 0;

  constructor(private keyboardService: KeyboardService) {}

  ngOnInit() {
    this.subscribeToKeyEvents();
  }

  private subscribeToKeyEvents() {
    this.keyboardService.getKeyboardSubject().subscribe(event => {
      if (event.key === " ") {
        this.wordcount += 1;
      }
    });
  }
}
