function buyIceCream() {
    let enteredPrice = prompt("Input your amount of money:");
    if (enteredPrice == null) {
        console.log("Entered price was null.");
        return;
    }
    let iceCreamsToSell = new IceCreamsToSell([]);
    let numberOfIceCreams = iceCreams.length;
    for (let iceCreamCounter = 0;  iceCreamCounter < numberOfIceCreams; iceCreamCounter++) {
        let iceCream = iceCreams[iceCreamCounter];
        if (iceCreamsToSell.isEmpty() && enteredPrice >= iceCream.price) {
            console.log("1")
            iceCreamsToSell.add(iceCream);
        } else if (iceCream.price == iceCreamsToSell.price) {
            iceCreamsToSell.add(iceCream);
        }
        console.log("" + (iceCream.price == iceCreamsToSell.price) + " " + iceCream.price + " " + iceCreamsToSell.price);
    }
    console.log("iceCreamsToSell: " + iceCreamsToSell);
    if (iceCreamsToSell.isEmpty()) {
        alert("The amount of money isn't enough to buy any ice cream.");
    } else {
        alert("Ice creams that can buy are: " + iceCreamsToSell.getString() + ".\n" +
        "The left over money is: " + (enteredPrice - iceCreamsToSell.price) + "$");
    }
    console.log("Exits on final return.");
}