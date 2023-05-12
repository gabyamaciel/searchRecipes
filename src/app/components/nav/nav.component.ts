import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit, OnDestroy {
  public query: string = "";
  public paramSubscription: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.paramSubscription = this.route.paramMap.subscribe(params => {
      this.query = params.get("query");
    });
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }
}
