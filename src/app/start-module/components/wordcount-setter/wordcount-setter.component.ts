import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-wordcount-setter",
  templateUrl: "./wordcount-setter.component.html",
  styleUrls: ["./wordcount-setter.component.css"],
  host: { "(window:keydown)": "onKeypress($event)" }
})
export class WordcountSetterComponent implements OnInit {
  public wordcountGoal: string = "";

  constructor() {}

  ngOnInit() {}

  onKeypress(event: KeyboardEvent) {
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    if (numbers.includes(event.key)){
      this.wordcountGoal += event.key;
    }
    if (event.key === "Backspace") {
      this.wordcountGoal = this.wordcountGoal.slice(0, this.wordcountGoal.length - 1);
    }
  }
}
