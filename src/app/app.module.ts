import { FormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { WritingAreaComponent } from "./components/writing-area/writing-area.component";
import { LocalStorageModule } from "angular-2-local-storage";

@NgModule({
  declarations: [AppComponent, WritingAreaComponent],
  imports: [
    BrowserModule,
    LocalStorageModule.withConfig({
      prefix: "never-look-back",
      storageType: "localStorage"
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
