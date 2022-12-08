console.log("Hejka!");

let selfie = document.querySelector(".selfie");
let selfieButton = document.querySelector(".js-selfieButton");
let selfieCaptionChange = document.querySelector(".js-CaptionChange");


selfieButton.addEventListener("click", () => {
    selfie.classList.toggle("imageHide");
    if (selfie.classList.contains("imageHide")) {
        selfieCaptionChange.innerText = "Pokaż zdjęcie";
    }
    else {
        selfieCaptionChange = "Ukryj zdjęcie";
    }
});

let themeButton = document.querySelector(".js-themeButton")
let page = document.querySelector(".page");
let themeName = document.querySelector(".js-themeName");

themeButton.addEventListener("click", () => {
    page.classList.toggle("pink");

    themeName.innerText = page.classList.contains("pink") ? "niebieski" : "różowy";
});