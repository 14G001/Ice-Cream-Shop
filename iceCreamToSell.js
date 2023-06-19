const NO_ICE_CREAM_TO_SELL = -1;

class IceCreamsToSell extends IceCream {
    constructor(name) {
        super(name, NO_ICE_CREAM_TO_SELL);
    }

    isEmpty() { return this.price == NO_ICE_CREAM_TO_SELL; }
    
    add(iceCream) {
        this.name.push(iceCream.name);
        this.price = iceCream.price;
    }

    getString() {
        let iceCreamsToSellString = "";
        this.name.forEach(iceCreamName => {
            if (iceCreamsToSellString.length > 0) {
                iceCreamsToSellString += ", ";
            }
            iceCreamsToSellString += (iceCreamName.toLowerCase());
        })
        return iceCreamsToSellString;
    }
}