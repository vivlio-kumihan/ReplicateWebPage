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