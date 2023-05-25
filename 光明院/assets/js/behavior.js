// behavior page top
const headerMenuBtn = document.getElementById("header-menu-button")
const contentsLinks = document.getElementById("contents-links")
const mainNavMask = document.getElementById("main-nav-mask")

// メニューの切り替え
headerMenuBtn.addEventListener("click", function () {
  console.log(headerMenuBtn)
  this.classList.toggle("active")
  contentsLinks.classList.toggle("pull-up")
  mainNavMask.classList.toggle("pull-up")
})

// ページ内スクロールの際に、メニューを閉じる
document.querySelectorAll('#contents-links a').forEach(el => {
  el.addEventListener('click', () => {
    headerMenuBtn.classList.remove('active')
    contentsLinks.classList.remove("pull-up")
    mainNavMask.classList.remove("pull-up")
  })
})


////////////
// nav menu
Array.from(contentsLinks.children).forEach(elem => {
  elem.addEventListener("mouseenter", function() {
    this.classList.add("slide-left")
  })
  elem.addEventListener("mouseleave", function() {
    this.classList.remove("slide-left")
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