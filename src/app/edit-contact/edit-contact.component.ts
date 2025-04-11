import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddressTypes, Contact, PhoneTypes } from '../models/contact.model';
import { ContactsService } from '../services/contacts.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RestrictedWordsValidator } from '../validators/restricted-words-validator.directive';
import { DateValueAccessorDirective } from '../date-value-accessor/date-value-accessor.directive';
import { ProfileIconSelectorComponent } from '../profile-icon-selector/profile-icon-selector.component';

@Component({
  selector: 'app-edit-contact',
  imports: [
    CommonModule,
    FormsModule,
    RestrictedWordsValidator,
    DateValueAccessorDirective,
    ProfileIconSelectorComponent,
  ],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.scss',
})
export class EditContactComponent implements OnInit {
  phoneTypes = PhoneTypes;
  addressTypes = AddressTypes;
  contact: Contact = {
    id: '',
    profileIcon: '',
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    favoritesRanking: 0,
    personal: false,
    phones: [
      {
        phoneNumber: '',
        phoneType: '',
      },
    ],
    address: {
      streetAddress: '',
      city: '',
      state: '',
      postalCode: '',
      addressType: '',
    },
    note: '',
  };
  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const contactId = this.route.snapshot.params['id'];
    if (contactId) {
      this.contactsService
        .getContact(contactId)
        .subscribe((contact) => (this.contact = contact));
    }
  }

  onSave() {
    console.log(
      this.contact.favoritesRanking,
      typeof this.contact.favoritesRanking
    );
    this.contactsService
      .saveContact(this.contact)
      .subscribe(() => this.router.navigate(['/contacts']));
  }

  onCancel() {
    this.router.navigate(['/contacts']);
  }

  addPhone() {
    this.contact.phones.push({
      phoneNumber: '',
      phoneType: '',
    });
  }
}
