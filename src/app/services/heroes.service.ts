import { Injectable } from "@angular/core";
import { Heroe } from "../interface/heroe";
import { HEROES } from "src/assets/data/Heroes";

@Injectable({
  providedIn: "root",
})
export class HeroesService {
  private heroes: Heroe[] = HEROES;
  constructor() {
    console.warn("servicio listo para usarse");
  }

  getHeroes() {
    return this.heroes;
  }

  getheroe(idx: number) {
    return this.heroes[idx];
  }

  searchHeroes(text: string) {
    let heroesArr: Heroe[] = [];
    text = text.toLocaleLowerCase();
    for (const heroe of this.heroes) {
      let name = heroe.nombre.toLocaleLowerCase();
      if (name.indexOf(text) >= 0) {
        heroesArr.push(heroe);
      }
    }
    return heroesArr;
  }
}
