import { Component, OnInit } from "@angular/core";
import { LocalStorageService } from "angular-2-local-storage/dist/local-storage.service";
import { ReplaySubject } from "rxjs/Rx";

@Component({
  selector: "app-writing-area",
  templateUrl: "./writing-area.component.html",
  styleUrls: ["./writing-area.component.css"]
})
export class WritingAreaComponent implements OnInit {
  writtenText: any;
  localStorageObserver: ReplaySubject<any> = new ReplaySubject();

  constructor(private localStorage: LocalStorageService) {}

  ngOnInit() {
    // Periodically save text to file, after every 1 second pause in typing
    this.localStorageObserver.debounceTime(1000).subscribe(data => {
      this.localStorage.set("file", data);
    });
    // If text is in the local storage, load it in
    if (this.localStorage.get('file') !== null) {
      this.writtenText = this.localStorage.get('file');
    }
  }

  onTextInput() {
    this.localStorageObserver.next(this.writtenText);
  }
}
