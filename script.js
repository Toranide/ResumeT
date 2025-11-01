/* RTL - راستچین و چپ چین */
let bodyDir = document.querySelector('body')
let dirctionItem = document.querySelectorAll(".Rtl-Ltr");
let buttonSidebar = document.querySelector('.button-sidebar')
let sidebarMobile = document.querySelector('.sidebar-mobile')



function bodyDirection() {

    if (bodyDir.dir == "rtl") {

        dirctionItem.forEach(function (Item) {
            Item.classList.remove("text-end")
            sidebarMobile.classList.remove('sidebar-mobileLtr')
        })
    } else {

        dirctionItem.forEach(function (Item) {
            Item.classList.add("text-end")
            sidebarMobile.classList.add('sidebar-mobileLtr')
        })

    }

}
bodyDirection()


/* change page - تعقیر صفحات */
let pageAll = document.querySelectorAll(".page-child")
let divMenu = document.querySelectorAll(".div-menu")

function activePage(page) {

    let pages = document.querySelector(page)

    pageAll.forEach(function (onePage) {

        onePage.classList.remove("active")
        onePage.style.display = 'none'

        if (onePage.id == pages.id) {
            onePage.style.display = 'block'

            setTimeout(function () {
                onePage.classList.add("active")
            }, 100);
        }

    })
}

divMenu.forEach(function (list) {

    list.addEventListener('click', function () {

        divMenu.forEach(function (listTwo) {
            listTwo.classList.remove("active-menu")
        })

        this.classList.add("active-menu")
    })

})



/* change font - تعقیر فونت */
let root = document.documentElement;
let selecorFont = document.querySelectorAll(".dropdown-item")

selecorFont.forEach(function (selector) {
    selector.addEventListener('click', function () {
        let optionValue = selector.value
        let classText = selector.classList.contains('text')

        if (optionValue == 'vazir' && classText) {
            root.style.setProperty('--font-text', 'Vazir')
            localStorage.setItem('fontText', 'vazir')
        }
        else if (optionValue == 'yekan' && classText) {
            root.style.setProperty('--font-text', 'Yekan')
            localStorage.setItem('fontText', 'Yekan')

        }
        else if (optionValue == 'Estedad' && classText) {
            root.style.setProperty('--font-text', 'Estedad')
            localStorage.setItem('fontText', 'Estedad')


        }
        else if (optionValue == 'IranSans' && classText) {
            root.style.setProperty('--font-text', 'IranSans')
            localStorage.setItem('fontText', 'IranSans')

        }
        else if (optionValue == 'Tanha' && classText) {
            root.style.setProperty('--font-text', 'Tanha')
            localStorage.setItem('fontText', 'Tanha')

        }
        else if (optionValue == 'Shabnam' && classText) {
            root.style.setProperty('--font-text', 'Shabnam')
            localStorage.setItem('fontText', 'Shabnam')

        }
        else if (optionValue == 'Sahel' && classText) {
            root.style.setProperty('--font-text', 'Sahel')
            localStorage.setItem('fontText', 'Sahel')

        }
        else if (optionValue == 'Samim' && classText) {
            root.style.setProperty('--font-text', 'Samim')
            localStorage.setItem('fontText', 'Samim')

        }
        else if (optionValue == 'Rezvan' && classText) {
            root.style.setProperty('--font-text', 'Rezvan')
            localStorage.setItem('fontText', 'Rezvan')

        }
        else if (optionValue == 'Lalezar' && classText) {
            root.style.setProperty('--font-text', 'Lalezar')
            localStorage.setItem('fontText', 'Lalezar')

        }
        else if (optionValue == 'titr' && classText) {
            root.style.setProperty('--font-text', 'titr')
            localStorage.setItem('fontText', 'titr')

        }
    })
})


selecorFont.forEach(function (selector) {
    selector.addEventListener('click', function () {
        let optionValue = selector.value
        let classTitle = selector.classList.contains('title')

        if (optionValue == 'vazir' && classTitle) {
            root.style.setProperty('--font-title', 'Vazir')
            localStorage.setItem('fontTitle', 'Vazir')

        }
        else if (optionValue == 'yekan' && classTitle) {
            root.style.setProperty('--font-title', 'Yekan')
            localStorage.setItem('fontTitle', 'Yekan')

        }
        else if (optionValue == 'Estedad' && classTitle) {
            root.style.setProperty('--font-title', 'Estedad')
            localStorage.setItem('fontTitle', 'Estedad')

        }
        else if (optionValue == 'IranSans' && classTitle) {
            root.style.setProperty('--font-title', 'IranSans')
            localStorage.setItem('fontTitle', 'IranSans')

        }
        else if (optionValue == 'Tanha' && classTitle) {
            root.style.setProperty('--font-title', 'Tanha')
            localStorage.setItem('fontTitle', 'Tanha')

        }
        else if (optionValue == 'Shabnam' && classTitle) {
            root.style.setProperty('--font-title', 'Shabnam')
            localStorage.setItem('fontTitle', 'Shabnam')

        }
        else if (optionValue == 'Sahel' && classTitle) {
            root.style.setProperty('--font-title', 'Sahel')
            localStorage.setItem('fontTitle', 'Sahel')

        }
        else if (optionValue == 'Samim' && classTitle) {
            root.style.setProperty('--font-title', 'Samim')
            localStorage.setItem('fontTitle', 'Samim')

        }
        else if (optionValue == 'Rezvan' && classTitle) {
            root.style.setProperty('--font-title', 'Rezvan')
            localStorage.setItem('fontTitle', 'Rezvan')

        }
        else if (optionValue == 'Lalezar' && classTitle) {
            root.style.setProperty('--font-title', 'Lalezar')
            localStorage.setItem('fontTitle', 'Lalezar')

        }
        else if (optionValue == 'titr' && classTitle) {
            root.style.setProperty('--font-title', 'titr')
            localStorage.setItem('fontTitle', 'titr')

        }
    })
})



/* night - تاریک و روشن */

let night = document.querySelectorAll(".div-night");
let toggle = localStorage.getItem("mode"); 

function applyMode() {
    if (!toggle) return; 

    night.forEach(function (dark) {
        if (toggle === "light") {
            root.style.setProperty("--bg-body", "#f2f2f2");
            root.style.setProperty("--bg-div", "#fff");
            root.style.setProperty("--text-color", "#000");
            dark.innerHTML = '<i class="fa-solid fa-moon"></i>';
        } else if (toggle === "dark") {
            root.style.setProperty("--bg-body", "#1A1A1A");
            root.style.setProperty("--bg-div", "#000");
            root.style.setProperty("--text-color", "#fff");
            dark.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }
    });
}

applyMode(); 

night.forEach(function (dark) {
    dark.addEventListener("click", function () {
        
        if (!toggle) {
            toggle = "light";  /* (dark) برای تغییر حالت پیشفرض به روشن */
        } else {
            toggle = toggle === "light" ? "dark" : "light"; 
        }

        localStorage.setItem("mode", toggle);
        applyMode();
    });
});



/* cursor - نشانه گر موس */

$(document).ready(function () {
    $("body").prepend('<span class="cursor"></span>')
    $("body").prepend('<span class="cursor_2"></span>')
    var top = 0;
    var left = 0;
    $("body").on("mousemove", function (event) {
        top = $(window).scrollTop() - $(this).offset().top + event.clientY
        left = $(window).scrollLeft() - $(this).offset().left + event.clientX
        $('.cursor').css({ "left": left - 17, "top": top - 4 });
        $('.cursor_2').css({ "left": left - 17, "top": top - 4 });
    });

    $("body").click(function (event) {
        if (!$('.cursor').hasClass('active')) {
            $('.cursor').addClass('active');
        }
        setTimeout(function () {
            $('.cursor').removeClass('active');

        }, 300)

    });

});



/* type text - تایپ متن */

document.addEventListener('DOMContentLoaded', function () {
    const typingTextElementP = document.getElementById('typing-text-p');
    const textP = typingTextElementP.innerHTML; 
    let indexP = 0;

    function typep() {
        typingTextElementP.textContent = textP.slice(0, indexP++);
        if (indexP <= textP.length) {
            setTimeout(typep, 50); 
        }
    }

    typep();
});



document.addEventListener('DOMContentLoaded', function () {

    var fixedWord = "من یک ";
    var variableWords = ["برنامه نویس", "گرافیست", "طراح سایت"]; 

    if (document.body.dir == 'ltr') {
        fixedWord = "I am one ";
        variableWords = ["programmer", "Graphic Designer", "site designer"];
    }

    const typingTextElement = document.getElementById('typing-text');
    const fixedWordElement = document.getElementById('fixed-word');
    let wordIndex = 0;
    let charIndex = 0;

    function type() {
        const currentWord = variableWords[wordIndex];
        typingTextElement.textContent = fixedWord + currentWord.slice(0, charIndex++);
        if (charIndex <= currentWord.length) {
            setTimeout(type, 100); 
        } else {
            setTimeout(erase, 500); 
        }
    }

    function erase() {
        const currentWord = variableWords[wordIndex];
        typingTextElement.textContent = fixedWord + currentWord.slice(0, charIndex--);
        if (charIndex >= 0) {
            setTimeout(erase, 50); 
        } else {
            charIndex = 0;
            wordIndex = (wordIndex + 1) % variableWords.length; 
            setTimeout(type, 500); 
        }
    }

    type();
});


let btnSetting = document.querySelectorAll('.reset-settings')

btnSetting.forEach((btn) => {
    btn.addEventListener("click", () => {
        localStorage.clear()
        location.reload()
    })
})


/* save color/font - ذخیره فونت و رنگ ها */
root.style.setProperty('--font-text', localStorage.getItem('fontText'))
root.style.setProperty('--font-title', localStorage.getItem('fontTitle'))
root.style.setProperty('--one-color', localStorage.getItem('oneColor'))
root.style.setProperty('--two-color', localStorage.getItem('twoColor'))



/* change color - تغییر رنگ */
let divColor = document.querySelectorAll('.div-color')

divColor.forEach(function (changeColor) {

    changeColor.addEventListener('click', function (event) {

        if (event.target.value == "orange") {
            root.style.setProperty('--one-color', '#FFCC00')
            localStorage.setItem('oneColor', '#FFCC00')
            root.style.setProperty('--two-color', '#000')
            localStorage.setItem('twoColor', '#000')
        } else if (event.target.value == "pink") {
            root.style.setProperty('--one-color', '#FF9999')
            localStorage.setItem('oneColor', '#FF9999')
            root.style.setProperty('--two-color', '#000')
            localStorage.setItem('twoColor', '#000')
        } else if (event.target.value == "purple") {
            root.style.setProperty('--one-color', '#CC3399')
            localStorage.setItem('oneColor', '#CC3399')
            root.style.setProperty('--two-color', '#fff')
            localStorage.setItem('twoColor', '#fff')
        } else if (event.target.value == "gold") {
            root.style.setProperty('--one-color', '#F2BE5B')
            localStorage.setItem('oneColor', '#F2BE5B')
            root.style.setProperty('--two-color', '#000')
            localStorage.setItem('twoColor', '#000')
        } else if (event.target.value == "brown") {
            root.style.setProperty('--one-color', '#996633')
            localStorage.setItem('oneColor', '#996633')
            root.style.setProperty('--two-color', '#fff')
            localStorage.setItem('twoColor', '#fff')
        } else if (event.target.value == "red") {
            root.style.setProperty('--one-color', '#FF0000')
            localStorage.setItem('oneColor', '#FF0000')
            root.style.setProperty('--two-color', '#fff')
            localStorage.setItem('twoColor', '#fff')
        } else if (event.target.value == "blue") {
            root.style.setProperty('--one-color', '#00CCFF')
            localStorage.setItem('oneColor', '#00CCFF')
            root.style.setProperty('--two-color', '#fff')
            localStorage.setItem('twoColor', '#fff')
        } else if (event.target.value == "green") {
            root.style.setProperty('--one-color', '#33CC66')
            localStorage.setItem('oneColor', '#33CC66')
            root.style.setProperty('--two-color', '#fff')
            localStorage.setItem('twoColor', '#fff')
        }

    })

})

function getColorCodeOne(valueColor) {
    root.style.setProperty('--one-color', valueColor)
    localStorage.setItem('oneColor', valueColor)
}
function getColorCodeTwo(valueColor) {
    root.style.setProperty('--two-color', valueColor)
    localStorage.setItem('twoColor', valueColor)
}

const savedColor = localStorage.getItem("oneColor");
const savedColorTwo = localStorage.getItem("twoColor");

const colorInputOneD = document.getElementById("custom-color-one-d");
colorInputOneD.value = savedColor;

const colorInputTwoD = document.getElementById("custom-color-two-d");
colorInputTwoD.value = savedColorTwo

const colorInputOneM = document.getElementById("custom-color-one-m");
colorInputOneM.value = savedColor;


const colorInputTwoM = document.getElementById("custom-color-two-m");
colorInputTwoM.value = savedColorTwo;




/* sidebar Mobile - سایدبار موبایل */
let toggleSidebar = true

buttonSidebar.addEventListener('click', function () {

    if (toggleSidebar) {
        document.querySelector('section').style.opacity = 0.4
        toggleSidebar = false
    } else {
        document.querySelector('section').style.opacity = 1
        toggleSidebar = true
    }

    sidebarMobile.classList.toggle('active-sidebar')

})

document.querySelector('section').addEventListener('click', function () {
    sidebarMobile.classList.remove('active-sidebar')
    document.querySelector('section').style.opacity = 1
    toggleSidebar = true
})
