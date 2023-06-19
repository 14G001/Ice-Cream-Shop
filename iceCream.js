class IceCream {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    compareDescending(iceCream) {
        if (this.price > iceCream.price) {
            return -1;
        } else if (this.price < iceCream.price) {
            return 1;
        }
        return 0;
    }
}