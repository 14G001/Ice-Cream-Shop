const iceCreams = [new IceCream("Banana Split", 600),   new IceCream("Chocolate", 500),
                   new IceCream("Strawberry",   500),   new IceCream("Cream",     400),
                   new IceCream("Lemon",        300)];

let iceCreamsToDisplay =
`<div class="list-element-description">
    <div class="list-item">
        Ice Cream
    </div>
    <div class="list-item">
        Price
    </div>
</div>`;

let numberOfIceCreams = iceCreams.length;
for (let iceCreamCounter = 0;  iceCreamCounter < numberOfIceCreams; iceCreamCounter++) {
    let iceCream = iceCreams[iceCreamCounter];
    iceCreamsToDisplay +=
    `<div class="list-element">
        <div class="list-item">
            ${iceCream.name}
        </div>
        <div class="list-item">
            ${iceCream.price}$
        </div>
    </div>`;
}

document.write(iceCreamsToDisplay);