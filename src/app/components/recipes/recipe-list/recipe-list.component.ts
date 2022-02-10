import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'Just a Test',
      'https://media.istockphoto.com/photos/chickpea-hummus-bowl-closeup-with-pita-flatbread-dipping-isolated-on-picture-id1323443868?k=20&m=1323443868&s=612x612&w=0&h=fiW-vsqnLS7tAjhXSNZ_GIHT9A0unUnrajZ6eiBzaJ0='
    ),
    new Recipe(
      'A Test Recipe',
      'Just a Test',
      'https://media.istockphoto.com/photos/chickpea-hummus-bowl-closeup-with-pita-flatbread-dipping-isolated-on-picture-id1323443868?k=20&m=1323443868&s=612x612&w=0&h=fiW-vsqnLS7tAjhXSNZ_GIHT9A0unUnrajZ6eiBzaJ0='
    ),
    new Recipe(
      'A Test Recipe',
      'Just a Test',
      'https://media.istockphoto.com/photos/chickpea-hummus-bowl-closeup-with-pita-flatbread-dipping-isolated-on-picture-id1323443868?k=20&m=1323443868&s=612x612&w=0&h=fiW-vsqnLS7tAjhXSNZ_GIHT9A0unUnrajZ6eiBzaJ0='
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
