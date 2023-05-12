import { Injectable } from "@angular/core";
import { constants } from "../../constants";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class RecipeService {
  public query: string;
  constructor(private httpClient: HttpClient) {}

  getRecipes(query: string) {
    this.query = query;

    let apiUrl = constants.apiURL;
    let apiKey = constants.apiKey;
    let apiID = constants.apiID;

    let url = `${apiUrl}app_id=${apiID}&app_key=${apiKey}&q=` + this.query;

    console.log(url);

    return this.httpClient.get(url);
  }
}
