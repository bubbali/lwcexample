import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Contact_OBJECT from '@salesforce/schema/Contact';
import FName_FIELD from '@salesforce/schema/Contact.FirstName';
import LName_FIELD from '@salesforce/schema/Contact.LastName';
import Email_FIELD from '@salesforce/schema/Contact.Email';
export default class ContactCreator extends LightningElement {
    objectApiName = Contact_OBJECT;
    fields = [FName_FIELD, LName_FIELD, Email_FIELD];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Contact created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}