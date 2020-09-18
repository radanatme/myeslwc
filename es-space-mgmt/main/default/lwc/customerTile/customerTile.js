import { LightningElement, api } from 'lwc';

export default class CustomerTile extends LightningElement {

    @api customer;
    @api object;

    connectedCallBack() {

    }

    get icon() {
        return 'doctype:image';
    }

    get alttext() {
        return 'image';
    }

    handleClick() {
        const clickevt = new CustomEvent('customerselect', {
            detail: {
                customerId: this.customer.Id,
                sobjectType: this.object,
                state: this.customer.state,
                name:this.customer.name
            }
        });
        this.dispatchEvent(clickevt);
    }
}