// 任意の文字数を超えたら文字数＋『...』と表示させる。
function truncateText(str, maxLength) {
  if (str.textContent.length >= maxLength) {
    return str.textContent.substr(0, maxLength) + '...';
  } else {
    return str.textContent
  }
}

let inputTexts = document.querySelectorAll(".topics dd p")
for (text of inputTexts) {
  text.textContent = truncateText(text, 22)
}

// 見出し2に付いてる属性『letter-spacing: .5em;』を最後の文字だけ取り去る
// 最初のコード　バグあり
// let headingTwo = document.querySelectorAll("h2")
// for (let heading of headingTwo) {
//   let orgText = heading.innerHTML
//   let lastChar = orgText.slice(-1)
//   heading.innerHTML = orgText.replace(lastChar, `<span class="remove-letter-spacing">${lastChar}</span>`)
// }

// 改良版
function killLetterSpace(elem) {
  for (let head of elem) {
    let lastChar = head.textContent.slice(-1)
    let preText = head.textContent.slice(0, -1)
    head.innerHTML = `${preText}<span class="remove-letter-spacing">${lastChar}</span>`
  }
}

let headingTwo = Array.from(document.querySelectorAll("h2"))
for (let head of headingTwo) {
  let lastChar = head.textContent.slice(-1)
  let preText = head.textContent.slice(0, -1)
  head.innerHTML = `${preText}<span class="remove-letter-spacing">${lastChar}</span>`
}

let heading = Array.from(document.querySelectorAll("#sub-guide .inner-wrapper > dt"))
heading.forEach(head => {
  let lastChar = head.textContent.slice(-1)
  let preText = head.textContent.slice(0, -1)
  head.innerHTML = `${ preText }<span class="remove-letter-spacing">${ lastChar }</span>`
})

let guideHeading = Array.from(document.querySelectorAll(".guide dt"))
guideHeading.forEach(head => {
  let lastChar = head.textContent.slice(-1)
  let preText = head.textContent.slice(0, -1)
  head.innerHTML = `${ preText }<span class="remove-letter-spacing">${ lastChar }</span>`
})

let articles = document.querySelectorAll("#instagram article")
for (let article of articles) {
  article.addEventListener("mouseenter", function() {
    let information = this.firstElementChild.lastElementChild
    this.classList.add("active")
    information.classList.add("active")
  })
  article.addEventListener("mouseleave", function() {
    let information = this.firstElementChild.lastElementChild
    this.classList.remove("active")
    information.classList.remove("active")
  })
}

const dd = document.querySelectorAll(".anchor-wrapper > dd")
const listWrapper = document.querySelectorAll(".anchor-wrapper .list-wrapper")
for (let areaDd of dd) {
  areaDd.addEventListener("mouseenter", function() {
    let verticalMenu = this.querySelectorAll(".vertical-menu")[0]
    if (verticalMenu) { verticalMenu.classList.add("menu-active") }
  })
  areaDd.addEventListener("mouseleave", function() {
    let verticalMenu = this.querySelectorAll(".vertical-menu")[0]
    if (verticalMenu) { verticalMenu.classList.remove("menu-active") }
  })
}

// const moreInfo = document.querySelectorAll("#main-guide dd:last-of-type")
// console.log(moreInfo)