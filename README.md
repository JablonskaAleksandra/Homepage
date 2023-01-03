## About

I recently joined a frontend developer course. This is my first repository, which includes the first project done in the course. The site is in Polish and briefly describes my humble self. 

# Homepage 

If you would like to visit my first page click on the link below:

https://jablonskaaleksandra.github.io/homepage/

# Demo

![screen or GIF of your app](https://raw.githubusercontent.com/JablonskaAleksandra/homepage/main/images/homepageGif.gif)

**Main features**:
- option to switch backgrounds on the page
- option to hide the photo on the page

## Screenshots
![alt text](https://raw.githubusercontent.com/JablonskaAleksandra/homepage/main/images/homepageScreenshot.png)


&nbsp;
 
## 💡 Technologies
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)


&nbsp;
 
## 🔗 See also

Are you interested in the course of my study come and see my next project [Interesting Project Name](tutaj link).

&nbsp;
 
## 🤔 Solutions provided in the project

I created this project on the basis of the guidance provided in the materials from the previously mentioned course. In addition, I was inspired by looking at the sites of other course participants.


## 💭 Conclusions for future projects

I would like to improve my JavaScript coding skills. In theory, the option to change the background and hide the page seemed simple, but practically it took me time to achieve the desired effect and proved more difficult than I thought.

#### This is the first issue:
```
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
```

I had trouble understanding the syntax of the language and could not use the right phrases to make the function work properly.


## Project Status
Project is: complete

The project was completed because I completed all the tasks that were stipulated as part of the homework. The work was graded positively, so I tackled the next required project.


&nbsp;

## 🙋‍♂️ Feel free to contact me
Write sth nice ;) Find me on:

[Facebook](https://www.facebook.com/profile.php?id=100000886447163)


&nbsp;

## 👏 Special thanks
Thanks to my Mentros from (https://youcode.pl/) – for providing me with this task and for code review.
