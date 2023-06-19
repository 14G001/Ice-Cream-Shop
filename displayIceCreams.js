function getRowHTML(classType, leftText, rightText) {
    return `<div class=${classType}>
                <div class="list-item">
                    ${leftText}
                </div>
                <div class="list-item">
                    ${rightText}
                </div>
            </div>`;
}


const iceCreams = [new IceCream("Banana Split", 600),   new IceCream("Chocolate", 500),
                   new IceCream("Strawberry",   500),   new IceCream("Cream",     400),
                   new IceCream("Lemon",        300)];

let iceCreamsToDisplay = getRowHTML("list-element-description", "Ice Cream", "Price");


iceCreams.forEach(iceCream => {
    iceCreamsToDisplay += getRowHTML("list-element", iceCream.name, iceCream.price + "$");
})

document.write(iceCreamsToDisplay);