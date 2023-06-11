const NO_ICE_CREAM_TO_SELL = -1;

class IceCreamsToSell extends IceCream {
    constructor(name) {
        super(name, NO_ICE_CREAM_TO_SELL);
    }

    isEmpty() { return this.price == NO_ICE_CREAM_TO_SELL; }
    
    add(iceCream) {
        console.log("add " + iceCream.name)
        this.name.push(iceCream.name);
        this.price = iceCream.price;
    }

    areMoreThan1() {
        return this.name[0][0] != undefined;
    }

    getFirstIceCreamToSell() {
        console.log("A " + this.name);
        console.log("A " + this.name[0][0]);
        if (this.areMoreThan1()) {
            return this.name[0];
        }
        return this.name;
    }

    getString() {
        let iceCreamsToSellString = this.getFirstIceCreamToSell().toLowerCase();
        console.log("name len: " + this.name.length)
        if (this.areMoreThan1()) {
            console.log(iceCreamsToSellString);
            for (let iceCreamCounter = 1; iceCreamCounter < this.name.length; iceCreamCounter++) {
                iceCreamsToSellString += (", " + this.name[iceCreamCounter].toLowerCase());
                console.log(iceCreamsToSellString);
            }
        }
        return iceCreamsToSellString;
    }
}