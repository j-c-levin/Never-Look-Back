import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StartRoutingModule } from "./start-routing.module";
import { StartComponent } from "./start.component";
import { WordcountSetterComponent } from "./components/wordcount-setter/wordcount-setter.component";

@NgModule({
  imports: [CommonModule, StartRoutingModule],
  declarations: [StartComponent, WordcountSetterComponent],
  exports: []
})
export class StartModule {}
