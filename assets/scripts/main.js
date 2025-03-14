const links = document.querySelectorAll(".nav__links li a");
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");
const resumeSec = document.querySelectorAll('.__resume');
const resumeLi = document.querySelectorAll('.resume__ul li');
const priceLi = document.querySelectorAll('.price__type li');
const priceSec = document.querySelectorAll('.price__inner');
const menuShowBtn = document.querySelector('.menu__logo i');
const menuHideBtn = document.querySelector('#main__nav span i');
const resNav = document.querySelector('.__backdrop');

//  Nav Active

links[0].classList.add("active");
links.forEach(li => {
    li.addEventListener('click', () => {
        resetlinks();
        li.classList.add('active');
    })
});

function resetlinks() {
    links.forEach(li => {
        li.classList.remove('active');
    })
};

// Responsive Nav
function navShow() {
    resNav.style.display = "block";
}
function navHide() {
    if (window.innerWidth < 991) {
        resNav.style.display = "none";
        navliHide();
    }
}
function navliHide() {
    links.forEach(nav => {
        nav.addEventListener('click', () => {
            if (window.innerWidth < 991) {
                resNav.style.display = "none";
            }
        })
    })
}
menuShowBtn.addEventListener('click', navShow);
menuHideBtn.addEventListener('click', navHide);
resNav.addEventListener('click', navHide);


// Text Wrapper

const textArray = ["Web Developer.", "Professional Coder.", "HTML CSS JS Expert.", "Marketing Manager."];

let textArrayIndex = 0;
let charIndex = 0;

const erase = () => {
    if (charIndex > 0) {
        cursor.classList.remove('blink');
        typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 30);
    } else {
        cursor.classList.add('blink');
        textArrayIndex++;
        if (textArrayIndex > textArray.length - 1) {
            textArrayIndex = 0;
        }
        setTimeout(type, 500);
    }
}

const type = () => {
    if (charIndex <= textArray[textArrayIndex].length - 1) {
        cursor.classList.remove('blink');
        typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 50);
    } else {
        cursor.classList.add('blink');
        setTimeout(erase, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
})


// WEB Img Scroll

class ImageScroller {
    constructor(imageContainer) {
        this.imageContainer = imageContainer;
        this.image = imageContainer.querySelector('img');
        this.scrollPosition = 0;
        this.isScrolling = false;
        this.animationId = null;

        this.imageContainer.addEventListener('mouseover', () => {
            this.isScrolling = true;
            this.scrollImage();
        });

        this.imageContainer.addEventListener('mouseout', () => {
            this.isScrolling = false;
            cancelAnimationFrame(this.animationId);
            this.resetImagePosition();
        });
    }

    scrollImage() {
        if (this.isScrolling) {
            const imageHeight = this.image.offsetHeight;
            const containerHeight = this.imageContainer.offsetHeight;
            this.scrollPosition -= 3; // adjust the scroll speed

            if (this.scrollPosition < -imageHeight + containerHeight) {
                this.scrollPosition = -imageHeight + containerHeight;
            }

            this.image.style.transform = `translateY(${this.scrollPosition}px)`;

            this.animationId = requestAnimationFrame(() => this.scrollImage());
        }
    }

    resetImagePosition() {
        this.image.style.transform = `translateY(0)`;
        this.scrollPosition = 0;
    }
}

const imageContainers = document.querySelectorAll('.web__img');
imageContainers.forEach((imageContainer) => {
    new ImageScroller(imageContainer);
});

// Section-4 Resume

function sectionHide(sechide) {
    sechide.forEach((content, index) => {
        if (index > 0) {
            content.classList.add('hidden');
        }
    });
}

sectionHide(resumeSec);
sectionHide(priceSec);


resumeLi[0].classList.add("li__active");

resumeLi.forEach(reesli => {
    reesli.addEventListener('click', () => {
        resetResLI();
        reesli.classList.add('li__active');
    })
})

function resetResLI() {
    resumeLi.forEach(resli => {
        resli.classList.remove('li__active');
    })
}

function activeSection(section, secli) {
    secli.forEach((li, index) => {
        li.addEventListener('click', () => {
            section.forEach(sec => {
                sec.classList.add('fadeOut');
                sec.classList.add('hidden');
            });
            // resumeSec[index].classList.add('fadeIn');
            section[index].classList.remove('hidden');
        })
    });
}

activeSection(resumeSec, resumeLi);
activeSection(priceSec, priceLi);


// Progress Bar Animation

const progressBar = document.querySelectorAll('.__progress');
const progressSkill = document.querySelector('.pro__skill');


function progressAni() {
    progressBar.forEach(pbar => {
        setTimeout(() => {
            const targetWidth = getComputedStyle(pbar).width;
            pbar.style.setProperty('--target-width', targetWidth);
            pbar.style.animation = "progressAnimation 0.6s ease";
        }, 400);
        setTimeout(() => {
            pbar.style.animation = "none";
        }, 1000);
    })
}
progressSkill.addEventListener('click', progressAni);

// Section-5 list

// console.log(priceLi);

const clientLi = document.querySelectorAll('.client__li ul li');

clientLi[0].classList.add('active');
priceLi[0].classList.add('active');
function SetAtiveLi(elements) {

    function removeClientLi() {
        elements.forEach(ele => {
            ele.classList.remove('active');
        })
    }

    elements.forEach(ele => {
        ele.addEventListener('click', () => {
            removeClientLi();
            ele.classList.add('active');
        })
    })

}

SetAtiveLi(priceLi);
SetAtiveLi(clientLi);

const clientBox = document.querySelector('.client__boxes');
clientLi.forEach(cli => {
    cli.addEventListener('click', () => {
        clientBox.classList.add('fadeOut');

        setTimeout(() => {
            clientBox.classList.remove('fadeOut');

        }, 400);
    })
});
