{
    const welcome = () => {
        console.log("Witam na mojej pierwszej stronie!")
    };

    welcome();
}

{
    const selfie = document.querySelector(".selfie");
    const selfieButton = document.querySelector(".js-selfieButton");
    const selfieCaptionChange = document.querySelector(".js-CaptionChange");

    selfieButton.addEventListener("click", () => {

        selfie.classList.toggle("imageHide");
        selfieCaptionChange.innerText = selfie.classList.contains("imageHide") ? "Pokaż zdjęcie" : "Ukryj zdjęcie";
    });
}

{
const themeButton = document.querySelector(".js-themeButton")
const page = document.querySelector(".page");
const themeName = document.querySelector(".js-themeName");

themeButton.addEventListener("click", () => {
    page.classList.toggle("pink");
    themeName.innerText = page.classList.contains("pink") ? "niebieski" : "różowy";
});
}