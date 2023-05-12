import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { RecipesComponent } from "./components/recipes/recipes.component";

const routes: Routes = [
  { path: "", redirectTo: "", pathMatch: "full", component: HomeComponent },
  { path: "recipes/:query", component: RecipesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule {}
