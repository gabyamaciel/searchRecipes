import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { HttpHeaders } from "@angular/common/http";

import { recipes, results } from "./models/recipe.model";

import { RecipeService } from "./recipes.service";
import { ModalService } from "../modal/modal.service";

@Component({
  selector: "recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.scss"]
})
export class RecipesComponent implements OnInit, OnDestroy {
  public query: string;
  public recipes: recipes[] = [];
  private paramSubscription: Subscription;
  private recipeSubscription: Subscription;
  private error: boolean = false;
  private showSpin: boolean = false;
  public modalContent: recipes[] = [];
  private phone: string;
  public mask: any[] = [
    "+",
    "1",
    " ",
    "(",
    /[1-9]/,
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ];

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.paramSubscription = this.route.paramMap.subscribe(params => {
      this.query = params.get("query");
      this.getRecipesViaService();
    });
  }

  getRecipesViaService() {
    this.showSpin = true;

    const httpOptions = {
      headers: new HttpHeaders({
        "Accept-Encoding": "Accept-Encoding:gzip"
      })
    };

    this.recipeSubscription = this.recipeService
      .getRecipes(this.query)
      .subscribe(
        (response: results) => {
          let resp = response;
          this.recipes = resp.hits;
          console.log(this.recipes);
          this.error = false;
          this.showSpin = false;
        },
        (error: any) => {
          console.log("There was an error with getting recipes");
          this.error = true;
          this.showSpin = false;
          return Observable.throw(error);
        }
      );
  }

  sendMessage(phoneNumber: string, recipe: recipes) {
    let name = recipe.label;
    let url = recipe.url;

    let message = `Here's your ${name} recipe!
    ${url}`;
  }

  openModal(id: string, recipe: recipes[]) {
    this.modalContent = recipe;
    console.log(this.modalContent);
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
    this.recipeSubscription.unsubscribe();
  }
}
