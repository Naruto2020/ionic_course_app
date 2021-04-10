import { Component, OnInit } from '@angular/core';
import {RecipesService} from '../recipes.service';
import {Recipe} from '../recipe-model';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {


  constructor(
    private service: RecipesService,
    private router: ActivatedRoute,
    private route:Router,
    public alertController: AlertController
  ) { }


  loadRecipe:Recipe;

  ngOnInit() {

    //console.log(this.router.snapshot.params.recipeId)
    const recipeId =    this.router.snapshot.params.recipeId;
    console.log(recipeId);
    this.loadRecipe =   this.service.getRecipe(recipeId);


    /*this.router.paramMap.subscribe(paramMap =>{
      if(!paramMap.has("recipeId")){
        // redirect
        return;

      }
      console.log(paramMap);
      const recipeId = paramMap.get("recipeId");
      console.log(recipeId)
      this.loadRecipe = this.service.getRecipe(recipeId);
      console.log(this.loadRecipe);

    });*/
  }

  async cancel(){

    const presentAlertConfirm = async  () => {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'are you sure ?',
        message: ' <strong>do you realy want to delete ?</strong>!!!',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
          },
          {
            text: 'delete',
            handler: () => {
              this.service.deleteRecipe(this.loadRecipe.id);
              this.route.navigate(["/recipes"]);
            }
          }
        ]
      });
      await alert.present();
    }
    presentAlertConfirm();


  }

}
