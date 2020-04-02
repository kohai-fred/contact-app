import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
 
  private favs=[];
  // 1 je déclare mes propriétés
  private allContacts= [
    {first:"Fred", last:"Vu", image:"https://randomuser.me/api/portraits/men/6.jpg", email:"fred@gmail.com", date:"2020-03-01"},
    {first:"Laura", last:"Lamassourre", image:"https://randomuser.me/api/portraits/women/7.jpg", email:"laura@gmail.com", date:"2020-03-02"},
    {first:"Yann", last:"Yver", image:"https://randomuser.me/api/portraits/men/8.jpg", email:"yann@gmail.com", date:"2020-03-03"},
    {first:"Gilles", last:"Da Silva Santos", image:"https://randomuser.me/api/portraits/men/1.jpg", email:"gilles@gmail.com", date:"2020-03-04"},
    {first:"Rubens", last:"Tordjman", image:"https://randomuser.me/api/portraits/men/2.jpg", email:"rubens@gmail.com", date:"2020-03-05"},
    {first:"Meryem", last:"Foughali", image:"https://randomuser.me/api/portraits/women/2.jpg", email:"meryem@gmail.com", date:"2020-03-06"},
    {first:"Ewa", last:"Kadziolka", image:"https://randomuser.me/api/portraits/women/3.jpg", email:"ewa@gmail.com", date:"2020-03-07"},
    {first:"Leila", last:"Ech-chabi", image:"https://randomuser.me/api/portraits/women/4.jpg", email:"leila@gmail.com", date:"2020-03-08"},
  ];

  // CRUD (create, read, update, delete)
  getContacts() {
    return this.allContacts;
  }

  /*
    on va l'éxecuter depuis ListComponent
  */
  addContactToFavs(contact) {
    let index = this.favs.indexOf(contact);
    // push contact dans this.favs
    if(index == -1){
      this.favs.push(contact);
      
    }
    else {
      this.favs.splice(index, 1);
    }
    console.log(this.favs);
  }

  /*
    on va l'éxecuter depuis ListComponent
  */
  removeContactFromFavs() {

  }

  /*
   on va l'exectuer dans FavorisComponent
  */
  getFavs() {
    return this.favs;
  }



  constructor() { }
} // Fin de la class ContactService
