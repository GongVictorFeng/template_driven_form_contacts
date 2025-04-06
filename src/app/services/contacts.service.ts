import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import { Contact } from '../models/contact.model';
import { nanoid } from 'nanoid';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private http: HttpClient) {}

  getContact(id: string): Observable<Contact> {
    return this.http.get<Contact>(`api/contacts/${id}`).pipe(
      catchError((err) => {
        const message = 'Could not get contact';
        console.log(message, err);
        return throwError(() => err);
      })
    );
  }

  getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>('api/contacts').pipe(
      catchError((err) => {
        const message = 'Could not get all contacts';
        console.log(message, err);
        return throwError(() => err);
      })
    );
  }

  saveContact(contact: Contact): Observable<Contact> {
    const headers = { headers: { 'Content-Type': 'application/json' } };

    if (!contact.id || contact.id === '') {
      let newContact: Contact = { ...contact, id: nanoid(5) };
      return this.http.post<Contact>('api/contacts', newContact, headers).pipe(
        catchError((err) => {
          const message = 'Could not save the contact';
          console.log(message, err);
          return throwError(() => err);
        })
      );
    }

    return this.http.put<Contact>('api/contacts/', contact, headers).pipe(
      delay(3000),
      catchError((err) => {
        const message = 'Could not create the contact';
        console.log(message, err);
        return throwError(() => err);
      })
    );
  }
}
