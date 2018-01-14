import { KeyboardService } from './services/keyboard-service/keyboard.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { WritingAreaComponent } from "./components/writing-area/writing-area.component";
import { LocalStorageModule } from "angular-2-local-storage";
import { TypingOverlayComponent } from './components/typing-overlay/typing-overlay.component';
import { KeyboardCaptureComponent } from './components/keyboard-capture/keyboard-capture.component';
import { WordcountComponent } from './components/wordcount/wordcount.component';

@NgModule({
  declarations: [AppComponent, WritingAreaComponent, TypingOverlayComponent, KeyboardCaptureComponent, WordcountComponent],
  imports: [
    BrowserModule,
    LocalStorageModule.withConfig({
      prefix: "never-look-back",
      storageType: "localStorage"
    }),
    FormsModule
  ],
  providers: [
    KeyboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
