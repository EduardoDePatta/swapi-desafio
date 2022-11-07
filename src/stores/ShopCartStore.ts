import { VehicleInterface } from '../models/Vehicles';
import {createContext} from 'react';
import {makeObservable, observable, action, computed} from 'mobx';
import { CreditCardInterface } from '../models/CreditCard';

class ShopCartStore {
    boughtItem: VehicleInterface | null = null;
    purchaseSucced: boolean = false;
    creditCardInfo: CreditCardInterface | null = null;

    constructor(){
        makeObservable(this, {
            boughtItem: observable,
            purchaseSucced: observable,
            SetBoughtItem: action,
            info: computed
        })
    }

    SetBoughtItem = (vehicle: VehicleInterface, purchaseSucced: boolean, creditCardInfo: CreditCardInterface | null = null) => {
        if (!vehicle)
            return;

        if (creditCardInfo)
            this.creditCardInfo = creditCardInfo;
            
        this.boughtItem = vehicle;
        this.purchaseSucced = purchaseSucced;
    }

    get info() {
        return console.log(this.boughtItem);
    }
}

export default createContext(new ShopCartStore());