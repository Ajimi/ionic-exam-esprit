import { Component, OnInit } from '@angular/core';
import { Storage } from "@ionic/storage";


@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.page.html',
  styleUrls: ['./favoris.page.scss'],
})
export class FavorisPage implements OnInit {

  favorites: any;
  constructor(private storage: Storage) { }

  ngOnInit() {

    this.storage.get('favorited').then(value => {
        this.favorites = value;
        console.log(this.favorites);
    });
  }

}
