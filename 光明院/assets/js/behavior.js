////////////
// 属性『letter-spacing: .5em;』を最後の文字だけ取り去る
function killLetterSpace(arr) {
  arr.forEach(elem => {
    let lastChar = elem.textContent.slice(-1)
    let preText = elem.textContent.slice(0, -1)
    elem.innerHTML = `${preText}<span class="remove-letter-spacing">${lastChar}</span>`
  })
}

const anchor = document.querySelectorAll(".contents-links a")
killLetterSpace(anchor)


////////////
// <button class="header-menu-button">
const mainNav = document.getElementById("main-nav")
const headerMenuButton = mainNav.firstElementChild
const mainNavMask = mainNav.lastElementChild
const contentsLinks = mainNavMask.previousElementSibling

headerMenuButton.addEventListener("click", function() {
  // 記事へのリンクと黒マスクを上げ下げする。
  [contentsLinks, mainNavMask].forEach(elem => {
    elem.classList.toggle("pull-up")
    if (elem.hasAttribute("id")) {
      Array.from(elem.children).forEach(li => {
        li.addEventListener("click", () => {
          elem.classList.remove("pull-up")
          mainNavMask.classList.remove("pull-up")
        })
      })
    }
  })
  // ハンバーガーメニューを動作させる。
  // この順番を上下に変えるとエラーになる。なぜ？
  Array.from(this.children).forEach(line => {
    line.classList.toggle("active")
  })
})


////////////
// スクロール・アニメーション
const targetElems = document.querySelectorAll(".animation-target")
const windowHight = window.innerHeight

document.addEventListener("scroll", function () {
  targetElems.forEach(elem => {
    // default setting
    const haflElemHight = elem.clientHeight / 5
    // const haflElemHight = elem.clientHeight
    const setHight = windowHight - haflElemHight
    const getElemDistance = elem.getBoundingClientRect().top
    if (setHight > getElemDistance) {
      elem.classList.add("active")
    }
  })
})