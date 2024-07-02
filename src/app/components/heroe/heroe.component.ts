import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Heroe } from "src/app/interface/heroe";
import { HeroesService } from "src/app/services/heroes.service";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styles: [],
})
export class HeroeComponent {
  heroe: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _heroesService: HeroesService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params["id"]);
      this.heroe = _heroesService.getheroe(params["id"]);
    });
  }
  returnPage() {
    this.router.navigate(["/heroes"]);
  }
}
