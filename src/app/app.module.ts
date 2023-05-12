//Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RoutingModule } from "./routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
//Components
import { HomeComponent } from "./components/home/home.component";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { ModalComponent } from "./components/modal/modal.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { NavComponent } from "./components/nav/nav.component";
import { AppComponent } from "./app.component";

// Services
import { RecipeService } from "./components/recipes/recipes.service";
import { ModalService } from "./components/modal/modal.service";

import { TextMaskModule } from "angular2-text-mask";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipesComponent,
    ModalComponent,
    SpinnerComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    TextMaskModule
  ],
  providers: [RecipeService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule {}
