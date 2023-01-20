{
    const welcome = () => {
    };

    welcome();
};
{
    const onSelfieButtonClick = () => {
        const selfie = document.querySelector(".selfie");
        const selfieCaptionChange = document.querySelector(".js-CaptionChange");
        selfieCaptionChange.innerText = selfie.classList.contains("imageHide") ? "Pokaż zdjęcie" : "Ukryj zdjęcie";
        selfie.classList.toggle("imageHide");

    };


    const onChangeBackgroundClick = () => {
        const themeName = document.querySelector(".js-themeName");
        const page = document.querySelector(".page");
        page.classList.toggle("pink");
        themeName.innerText = page.classList.contains("pink") ? "niebieski" : "różowy";

    };

    const init = () => {
        const selfieButton = document.querySelector(".js-selfieButton");
        const themeButton = document.querySelector(".js-themeButton");
        selfieButton.addEventListener("click", onSelfieButtonClick);
        themeButton.addEventListener("click", onChangeBackgroundClick);
    };

    init();

};