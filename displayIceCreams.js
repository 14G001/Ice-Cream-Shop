function createNode(elementType, styleClass, text) {
    let node = document.createElement(elementType.toUpperCase());
    node.classList.add(styleClass);
    if (text != null) {
        node.textContent = text;
    }
    return node;
}

function addRow(styleClass, leftText, rightText) {
    let list = document.getElementById("main__list");
    let listRow = createNode("div", styleClass);
    listRow.appendChild(createNode("div", "list-item", leftText));
    listRow.appendChild(createNode("div", "list-item", rightText));
    list.appendChild(listRow);
}

const iceCreams = [new IceCream("Banana Split", 600),   new IceCream("Chocolate", 500),
                   new IceCream("Strawberry",   500),   new IceCream("Cream",     400),
                   new IceCream("Lemon",        300)];

addRow("list-element-description", "Ice Cream", "Price");


iceCreams.forEach(iceCream => {
    addRow("list-element", iceCream.name, iceCream.price + "$");
})