import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Contact } from '../models/contact.model';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contacts',
  imports: [CommonModule, RouterModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.contactsService.getAllContacts().subscribe({
      next: (contacts) => {
        console.log(contacts);
        this.contacts = contacts;
      },
    });
  }

  get favoriteContacts(): Contact[] {
    return this.contacts
      .filter(
        (contact) => contact.favoritesRanking && contact.favoritesRanking > 0
      )
      .sort(this.sortByFavoriteRanking);
  }

  private sortByFavoriteRanking(a: Contact, b: Contact): number {
    if (!a.favoritesRanking) return -1;
    if (!b.favoritesRanking) return 1;
    if (a.favoritesRanking < b.favoritesRanking) return -1;
    if (a.favoritesRanking > b.favoritesRanking) return 1;
    return 0;
  }
}
