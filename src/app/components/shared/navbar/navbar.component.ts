import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Heroe } from "src/app/interface/heroe";
import { HeroesService } from "src/app/services/heroes.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
})
export class NavbarComponent {
  heroes: Heroe[] = [];
  constructor(private _heroesService: HeroesService, private router: Router) {
    this.heroes = _heroesService.getHeroes();
  }

  searchHeroe(text: string) {
    // console.log(text);
    // this.heroes = this._heroesService.searchHeroes(text);
    // console.log(this.heroes);
    this.router.navigate(["/heroes", text]);
  }
}
