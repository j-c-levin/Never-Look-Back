import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StartRoutingModule } from "./start-routing.module";
import { StartComponent } from "./start.component";
import { WordcountSetterComponent } from "./components/wordcount-setter/wordcount-setter.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [CommonModule, StartRoutingModule],
  declarations: [StartComponent, WordcountSetterComponent],
  providers: [],
  exports: []
})
export class StartModule {}
