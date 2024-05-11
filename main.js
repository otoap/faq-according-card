"use strict"

let arrow = document.getElementsByClassName("arrow");
let p = document.getElementsByTagName("p");
let li = document.getElementsByTagName("li");

let pArr = Array.from(p)
let arrowArr = Array.from(arrow);
let arrowLi = Array.from(li)

console.log(arrowArr)
console.log(window.getComputedStyle(pArr[2]).display)
console.log(arrowLi)


arrowLi.forEach((li, index) => {
    li.addEventListener("click", ()=> {
        if(window.getComputedStyle(p[index]).display !== "none") {
            p[index].style.display = "none"
            arrowLi[index].style.fontWeight = "normal"
            arrowArr[index].style.transform = "rotate(0deg)"
            return
        }


        pArr.forEach(element => {
            element.style.display = "none"
        })
        arrowLi.forEach(element => {
            element.style.fontWeight = "normal"
        })
        arrowArr.forEach(element => {
            element.style.transform = "rotate(0deg)"
        })

        li.style.fontWeight = "bold";
        p[index].style.display = "block";
        arrowArr[index].style.transform = "rotate(180deg)"
    })
})
