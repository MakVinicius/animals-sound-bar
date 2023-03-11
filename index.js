for (let i = 0; i < document.querySelectorAll(".btn").length; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}

document.addEventListener("keydown", function () {
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            let wolf = new Audio('sounds/wolf.mp3');
            wolf.play();
        break;

        case "a":
            let bear = new Audio('sounds/bear.mp3');
            bear.play();
        break;

        case "s":
            let dog = new Audio('sounds/dog.mp3');
            dog.play();
        break;

        case "d":
            let lion = new Audio('sounds/lion.mp3');
            lion.play();
        break;

        case "j":
            let tiger = new Audio('sounds/tiger.mp3');
            tiger.play();
        break;

        case "k":
            let buffalo = new Audio('sounds/buffalo.mp3');
            buffalo.play();
        break;

        case "l":
            let eagle = new Audio('sounds/eagle.mp3');
            eagle.play();
        break;

        default:
    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100)
}