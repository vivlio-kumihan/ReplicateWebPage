// 属性『letter-spacing: .5em;』を最後の文字だけ取り去る
function killLetterSpace(arr) {
  arr.forEach(elem => {
    let lastChar = elem.textContent.slice(-1)
    let preText = elem.textContent.slice(0, -1)
    elem.innerHTML = `${preText}<span class="remove-letter-spacing">${lastChar}</span>`
  })
}

// <nav id="header-nav">
const headerNav = document.getElementById("header-nav")
const headerLi = Array.from(headerNav.firstElementChild.children)
killLetterSpace(headerLi)

// <button href="" id="header-menu-button">
const hamburgerMenuBtn = document.getElementById("header-menu-button")
// const navi = document.querySelector("header .link-menu")
const btnLines = Array.from(document.querySelectorAll("header .btn-line"))

hamburgerMenuBtn.addEventListener("click", function() {
  headerNav.classList.toggle("pull-up")
  btnLines.forEach((line, idx) => {
    switch (idx) {
      case 0:
        line.classList.toggle("oblique-line-dw")
        break;
      case 1:
        line.classList.toggle("erase")
        break;
      case 2:
        line.classList.toggle("oblique-line-up")
        break;
    }
  })
})