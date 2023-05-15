// 属性『letter-spacing: .5em;』を最後の文字だけ取り去る
function killLetterSpace(elem) {
  for (let head of elem) {
    let lastChar = head.textContent.slice(-1)
    let preText = head.textContent.slice(0, -1)
    head.innerHTML = `${preText}<span class="remove-letter-spacing">${lastChar}</span>`
  }
}