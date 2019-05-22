import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-authentification",
  templateUrl: "./authentification.page.html",
  styleUrls: ["./authentification.page.scss"]
})
export class AuthentificationPage implements OnInit {
  username: string = "";
  password: string = "";
  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {}

  async validate() {
    console.log(this.password);
    if (this.username == "" && this.password == "") {
      const alert = await this.alertController.create({
        header: "Inforamation",
        subHeader: "Authentification",
        message: "Authentification échoué ",
        buttons: [
          {
            text: "Confirmer"
          }
        ]
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: "Inforamation",
        subHeader: "Authentification",
        message: "Authentification réussie",
        buttons: [
          {
            text: "Confirmer",
            handler: () => {
              this.router.navigate(["list", this.username]);
            }
          }
        ]
      });
      await alert.present();
    }
  }
}
