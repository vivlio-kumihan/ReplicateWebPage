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
let headingTwo = document.querySelectorAll("h2")
for (let heading of headingTwo) {
  let orgText = heading.innerHTML
  let lastChar = orgText.slice(-1)
  heading.innerHTML = orgText.replace(lastChar, `<span class="remove-letter-spacing">${lastChar}</span>`)
}