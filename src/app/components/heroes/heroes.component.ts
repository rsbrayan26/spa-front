import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { empty, isEmpty } from "rxjs";
import { Heroe } from "src/app/interface/heroe";
import { HeroesService } from "src/app/services/heroes.service";
import { HEROES } from "src/assets/data/Heroes";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styles: [],
})
export class HeroesComponent {
  heroes: Heroe[] = [];
  searchHeroe: any;
  constructor(
    private _heroesService: HeroesService,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      console.log(params["search"]);
      this.searchHeroe =
        params["search"] == isEmpty || params["search"] == ""
          ? undefined
          : params["search"];
      // this.searchHeroe = params["search"];
      if (this.searchHeroe) {
        this.heroes = _heroesService.searchHeroes(this.searchHeroe);
      } else {
        this.heroes = _heroesService.getHeroes();
      }
    });
  }
}
