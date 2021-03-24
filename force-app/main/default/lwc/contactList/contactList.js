import { LightningElement, wire } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';
import FName_FIELD from '@salesforce/schema/Contact.FirstName';
import LName_FIELD from '@salesforce/schema/Contact.LastName';
import Email_FIELD from '@salesforce/schema/Contact.Email';
import getContacts from '@salesforce/apex/ContactController.getContacts';
const COLUMNS = [
    { label: 'First Name', fieldName: FName_FIELD.fieldApiName, type: 'text' },
    { label: 'Last Name', fieldName: LName_FIELD.fieldApiName, type: 'text' },
    { label: 'Email', fieldName: Email_FIELD.fieldApiName, type: 'text' }
];
export default class ContactList extends LightningElement {
    columns = COLUMNS;
    @wire(getContacts)
    contacts;
    get errors() {
        return (this.contacts.error) ?
            reduceErrors(this.contacts.error) : [];
    }
}