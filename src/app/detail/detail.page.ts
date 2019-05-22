import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { CoursesService } from "../services/courses.service";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.page.html",
  styleUrls: ["./detail.page.scss"]
})
export class DetailPage implements OnInit {
  constructor(
    private courseService: CoursesService,
    private activated: ActivatedRoute,
    private storage: Storage,
    private router:Router,
    private alertController: AlertController
  ) {}

  course: any;
  nbrPlace: number;
  ngOnInit() {
    this.activated.queryParams.subscribe(params => {
      this.course = params;
      this.nbrPlace = params["nbr_place"];
    });
  }

  async addToFavorite() {
    this.storage.get('favorited').then(value => {
      let array = [];
      if(value != null){
        array.push(value);
        console.log(value);
      }
      array.push(this.course);
      console.log("Array " + array);
      this.storage.set('favorited' , array);
    })
    this.courseService.updateCours(this.course.id).subscribe(
      data => {
      },
      err => {}
    );
    const alert = await this.alertController.create({
      header: "Inforamation",
      subHeader: "Favoris",
      message: "Vous avez ajouté ce cours au favoris",
      buttons: [
        {
          text: "Valider",
          handler: () => {
            this.nbrPlace = this.nbrPlace - 1;
            this.router.navigate(['favoris']);
          }
        }
      ]
    });
    await alert.present();
  }
}
