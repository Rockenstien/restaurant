import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeDisplay: Recipe

  constructor() { }

  displayDetail(recipe: Recipe){
    this.recipeDisplay = recipe
  }

  ngOnInit(): void {
  }

}
