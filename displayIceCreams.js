function createNode(elementType, styleClass, text) {
    let node = document.createElement(elementType.toUpperCase());
    node.classList.add(styleClass);
    if (text != null) {
        node.innerHTML = text;
    }
    return node;
}

function getRow(styleClass, leftText, rightText) {
    let listRow = createNode("div", styleClass);
    listRow.appendChild(createNode("div", "list-item", leftText));
    listRow.appendChild(createNode("div", "list-item", rightText));
    return listRow;
}

const iceCreams = [new IceCream("Lemon",        300),   new IceCream("Chocolate", 500),
                   new IceCream("Banana Split", 600),   new IceCream("Cream",     400),
                   new IceCream("Strawberry",   500)];

iceCreams.sort((iceCream1, iceCream2) => iceCream1.compareDescending(iceCream2));

let list = document.getElementById("main__list");
let listElements = document.createDocumentFragment();
listElements.appendChild(getRow("list-element-description", "Ice Cream", "Price"));

iceCreams.forEach(iceCream => {
    listElements.appendChild(getRow("list-element", iceCream.name, iceCream.price + "$"));
})
list.appendChild(listElements);