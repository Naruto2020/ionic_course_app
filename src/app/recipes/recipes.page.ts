import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Recipe} from "./recipe-model"
import {RecipesService} from "./recipes.service"

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
   recipes:Recipe[] = [];

  constructor(private service:RecipesService ) { }

  ngOnInit() {
    this.recipes = this.service.getAllRecipes();
  }

}
