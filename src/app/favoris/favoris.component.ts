import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {

  //1 On déclare nos propriétés (c'est des variables)
  favoris;

  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
    console.log('je suis le ngOnInit');

    this.favoris = this.contactService.getFavs();

  }

}
