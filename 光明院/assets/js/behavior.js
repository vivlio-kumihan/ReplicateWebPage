// 属性『letter-spacing: .5em;』を最後の文字だけ取り去る
function killLetterSpace(arr) {
  arr.forEach(elem => {
    let lastChar = elem.textContent.slice(-1)
    let preText = elem.textContent.slice(0, -1)
    elem.innerHTML = `${preText}<span class="remove-letter-spacing">${lastChar}</span>`
  })
}
const anchor = Array.from(document.querySelectorAll("#article-links a"))
killLetterSpace(anchor)

// <button href="" id="header-menu-button">
const hamburgerMenuBtn = document.getElementById("header-menu-button")
const articleLinks = document.getElementById("article-links")
const btnLines = Array.from(document.querySelectorAll("header .btn-line"))

hamburgerMenuBtn.addEventListener("click", function() {
  articleLinks.classList.toggle("pull-up")
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