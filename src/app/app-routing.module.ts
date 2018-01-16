import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { WritingComponent } from "./writing/writing.component";
import { StartComponent } from "./start-module/start.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/start",
    pathMatch: "full"
  },
  {
    path: "start",
    component: StartComponent
  },
  {
    path: "writing",
    component: WritingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
