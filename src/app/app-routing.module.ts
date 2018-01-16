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
    loadChildren: 'app/start-module/start.module#StartModule'
  },
  {
    path: "writing",
    loadChildren: 'app/writing/writing.module#WritingModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
