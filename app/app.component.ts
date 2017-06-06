import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe-Box</h1>

    <ul>
      <li *ngFor="let currentRecipe of recipes">{{currentRecipe.title}} </li>
    </ul>
  </div>
  `
})

export class AppComponent {

  recipes: Recipe[] = [
    new Recipe("Omelette", ["eggs", "cheese"], ["crack eggs.", "cook eggs."]),
    new Recipe("Chicken Parm", ["Chicken", "Parmesean"], ["cook chicken.", "eat chicken."]),
    new Recipe("Ice Cream", ["milk", "sugar"], ["mix ingredients.", "make it cold."])
  ];
}

export class Recipe {
  constructor(public title: string, public ingredients: string[], public directions: string[]) { }
}
