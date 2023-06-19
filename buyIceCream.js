function buyIceCream() {
    let enteredPrice = prompt("Input your amount of money:");
    if (enteredPrice == null) {
        console.log("Entered price was null.");
        return;
    }
    let iceCreamsToSell = new IceCreamsToSell([]);
    iceCreams.forEach(iceCream => {
        if (iceCreamsToSell.isEmpty() && enteredPrice >= iceCream.price) {
            iceCreamsToSell.add(iceCream);
        } else if (iceCream.price == iceCreamsToSell.price) {
            iceCreamsToSell.add(iceCream);
        }
    })
    if (iceCreamsToSell.isEmpty()) {
        alert("The amount of money isn't enough to buy any ice cream.");
    } else {
        alert("Ice creams that can buy are: " + iceCreamsToSell.getString() + ".\n" +
        "The left over money is: " + (enteredPrice - iceCreamsToSell.price) + "$");
    }
}