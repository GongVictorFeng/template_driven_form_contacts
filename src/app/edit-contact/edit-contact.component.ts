import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact.model';
import { ContactsService } from '../services/contacts.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.scss',
})
export class EditContactComponent implements OnInit {
  contact: Contact = {
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    favoritesRanking: 0,
    phone: {
      phoneNumber: '',
      phoneType: '',
    },
    address: {
      streetAddress: '',
      city: '',
      state: '',
      postalCode: '',
      addressType: '',
    },
  };
  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const contactId = this.route.snapshot.params['id'];
    this.contactsService
      .getContact(contactId)
      .subscribe((contact) => (this.contact = contact));
  }

  onSave(form: NgForm) {
    console.log(form.value);
    this.contactsService
      .saveContact(form.value)
      .subscribe(() => this.router.navigate(['/contacts']));
  }
}
