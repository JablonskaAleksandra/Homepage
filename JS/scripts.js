console.log("Hejka!");

let selfie = document.querySelector(".selfie");
let selfie__button = document.querySelector(".js-selfieButton");
let selfie__CaptionChange = document.querySelector(".js-CaptionChange");


selfie__button.addEventListener("click", () => {
    selfie.classList.toggle("imageHide");
    if (selfie.classList.contains("imageHide")) {
        selfie__CaptionChange.innerText = "Pokaż zdjęcie";
    }
    else {
        selfie__CaptionChange = "Ukryj zdjęcie";
    }
});

let theme__button = document.querySelector(".js-themeButton")
let page = document.querySelector(".page");
let theme__name = document.querySelector(".js-themeName");

theme__button.addEventListener("click", () => {
    page.classList.toggle("pink");

    theme__name.innerText = page.classList.contains("pink") ? "niebieski" : "różowy";
});