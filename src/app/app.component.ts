import { constants } from "./constants";
import { Component } from "@angular/core";
import "./components/modal/modal.component.scss";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = constants.siteTitle;
}
