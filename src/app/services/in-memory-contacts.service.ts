import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contact } from '../models/contact.model';

export class InMemoryContactsApi implements InMemoryDbService {
  createDb() {
    let contacts: Contact[] = [
      {
        id: '5CehW',
        profileIcon: 'person-04.png',
        firstName: 'Percival',
        lastName: 'Doodleplumb',
        dateOfBirth: new Date('1994/05/05'),
        favoritesRanking: 0,
        personal: false,
        phones: [{ phoneNumber: '555-765-4321', phoneType: 'mobile' }],
        address: {
          streetAddress: '777 Whimsy Lane',
          city: 'Gleeberg City',
          state: 'Colohoma',
          postalCode: 'A4321',
          addressType: 'home',
        },
        note: '',
      },
      {
        id: 'A6rwe',
        profileIcon: 'person-04.png',
        firstName: 'Mortimer',
        lastName: 'Flungford',
        dateOfBirth: new Date('1988/10/05'),
        favoritesRanking: 0,
        personal: false,
        phones: [{ phoneNumber: '555-877-5678', phoneType: 'mobile' }],
        address: {
          streetAddress: '543 Lullaby Lane',
          city: 'Sleepytown',
          state: 'Ulaska',
          postalCode: 'F2231',
          addressType: 'other',
        },
        note: '',
      },
      {
        id: '3bNGA',
        profileIcon: 'person-04.png',
        firstName: 'Wanda',
        lastName: 'Giggleworth',
        dateOfBirth: new Date('1986/11/08'),
        favoritesRanking: 1,
        personal: false,
        phones: [
          { phoneNumber: '555-123-4567', phoneType: 'mobile' },
          { phoneNumber: '555-222-1234', phoneType: 'work' },
        ],
        address: {
          streetAddress: '123 Merriment Avenue',
          city: 'Dorado City',
          state: 'Mezona',
          postalCode: 'Z2345',
          addressType: 'work',
        },
        note: '',
      },
    ];

    return { contacts };
  }
}
