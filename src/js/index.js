function createDiceChilds(cssClasses) {
    let children = [];

    for (let eachClass of cssClasses) {
        let element = document.createElement("div");
        element.classList.add("circle");
        element.classList.add(eachClass);
        children.push(element);
    }

    return children;
}

const cssClasses = {
    1: ["five"],
    2: ["three", "seven"],
    3: ["one", "five", "nine"],
    4: ["one", "three", "seven", "nine"],
    5: ["one", "three", "five", "seven", "nine"],
    6: ["one", "three", "four", "six", "seven", "nine"],
};

let dice = document.querySelector(".dice");

dice.addEventListener("click", (ev) => {
    let diceResult = Math.round(Math.random() * 5 + 1);
    let innerDice = ev.currentTarget.querySelector(".grid");

    innerDice.textContent = "";
    let children = createDiceChilds(cssClasses[diceResult]);

    for (let child of children) {
        innerDice.appendChild(child);
    }
});
