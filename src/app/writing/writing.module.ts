import { WritingAreaComponent } from "./components/writing-area/writing-area.component";
import { LocalStorageModule } from "angular-2-local-storage";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { WritingRoutingModule } from "./writing-routing.module";
import { KeyboardService } from "../services/keyboard-service/keyboard.service";
import { WordcountGoalService } from "../services/wordcount-goal/wordcount-goal.service";
import { WritingComponent } from "./writing.component";
import { FormsModule } from "@angular/forms";
import { KeyboardCaptureComponent } from "./components/keyboard-capture/keyboard-capture.component";
import { TypingOverlayComponent } from "./components/typing-overlay/typing-overlay.component";
import { WordcountComponent } from "./components/wordcount/wordcount.component";

@NgModule({
  imports: [
    LocalStorageModule.withConfig({
      prefix: "never-look-back",
      storageType: "localStorage"
    }),
    CommonModule,
    WritingRoutingModule,
    FormsModule
  ],
  declarations: [
    WritingComponent,
    KeyboardCaptureComponent,
    TypingOverlayComponent,
    WordcountComponent,
    WritingAreaComponent
  ],
  providers: [KeyboardService, WordcountGoalService]
})
export class WritingModule {}
