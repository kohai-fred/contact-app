import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  title;
  contacts;
  allContacts;
  

  /*
    Injection de dépendance.
    On peut injecter dans notre component list 
    une nouvelle propriété dont la valeur est un objet d'une class externe (ici de ContactService)

  */

  constructor(private contactService: ContactService) { console.log(this) }
  /* 
    ngOnInit est un fonction du cycle de vie d'un component 
    c'est ici que l'on donne des valeurs aux propriétés de notre component
    parce que Angular va chercher à afficher la view html juste après que ngOnInit soit exécutée
  */
  ngOnInit() {
    this.allContacts = this.contactService.getContacts();

    // je veux copier this.contacts = this.allContacts;
    // this.contacts est une variable d'affichichage, 
    // this.allContacts est variable qui contient toutes les données;
    this.contacts = [...this.allContacts];

  }

  deleteContact(contact) {
    if (window.confirm('Voulez-vous supprimer ' + contact.first)) {
      console.log(contact);
      // 1 récuperer l'index du contacts dans le array this.contacts
      let index = this.contacts.indexOf(contact);
      // 2 supprimer le contact avec splice(index, 1);
      this.contacts.splice(index, 1);
    }
  }

  filterContacts(userSearch) {
    userSearch = userSearch.toLowerCase();
    // la méthode this.contacts.filter()
    // prend en paramètre une fonction qui v s'executer sur chacun des objets contact
    this.contacts = this.allContacts.filter(contact =>
      contact.first.toLowerCase().includes(userSearch) ||
      contact.last.toLowerCase().includes(userSearch) ||
      (contact.first + " " + contact.last).toLocaleLowerCase().includes(userSearch) ||
      contact.email.toLowerCase().includes(userSearch)
    );
    console.log(this.contacts);
  }

  addFav(contact) {
    this.contactService.addContactToFavs(contact);
  }

  isFav(contact){
    let favoris = this.contactService.getFavs();
    if(favoris.indexOf(contact) != -1){
      return true;
    }

    else{
      return false;
    } 
  }



} // fin de la class