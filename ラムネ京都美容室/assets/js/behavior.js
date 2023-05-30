////////////
// gsap


////////////
// 一文字ずつ現れる
function splitText(className) {
  const textElement = document.querySelector(className)
  let htmlContent = textElement.innerHTML
  let result = ""
  htmlContent.split('<br>').forEach((part, index, array) => {
    Array.from(part).forEach((char) => {
      result += `<span>${char}</span>`
    })
    // 最後の部分以外はbrタグを追加
    if (index < array.length - 1) {
      result += '<br>'
    }
  })

  textElement.innerHTML = result;
}
splitText('.per-char')

// const text = "あいうえおかきくけこ";
// const textContainer = document.getElementById("text-container");

// // 文字を1文字ずつ<span>要素で囲む
// const spannedText = Array.from(text).map(char => `<span>${char}</span>`).join("");

// // <div>要素に<span>で囲まれたテキストを設定する
// textContainer.innerHTML = spannedText;

// // <span>要素のアニメーション
// const spans = document.querySelectorAll("#text-container span");
// gsap.from(spans, {
//   opacity: 0,
//   y: 20,
//   duration: 0.5,
//   stagger: 0.1, // 要素ごとの遅延
// });

// const para = document.querySelectorAll(".per-char")
// para.forEach(elem => {
//   // const spannedText1 = Array.from(elem.textContent).map(char => `<span>${char}</span>`).join("")
//   const arr = elem.textContent.split("")
//   console.log(arr)
//   arr.forEach(char => {
//     // console.log(char)
//     if (char === " ") {
//       console.log("<br>")
//     } else {
//       console.log(`${ elem }`)
//     }
//   })

// const spannedText2 = arr.forEach(char => {
//   if (char === "<br>") {
//     return "<span><br></span>"
//   } else {
//     return `<span>${ elem }</span>`
//   }
// }).join("")

// console.log(spannedText1)
// console.log(spannedText2)

// elem.innerHTML = spannedText
// const spans = document.querySelectorAll(".pre-char span")
// spans.forEach(elem => {
//   gsap.from(elem, {
//     opacity: 0,
//     y: 20,
//     duration: 0.5,
//     stagger: 0.1, // 要素ごとの遅延
//   })
// })

// console.log(spannedText)
// // console.log(elem.textContent)
// Array.from(elem.textContent).forEach((char, idx) => {
//   gsap.from(char[idx], .5, {
//     x: -20,
//     opacity: 0,
//     delay: idx * 0.25,
//     ease: "power1.easeOut",
//     scrollTrigger: {
//       trigger: char[idx],
//       start: "top 50%",
//       // end: "bottom 50%",
//       // scrub: .5
//       markers: true,
//     }
//   })
// })


// const text = "あいうえおかきくけこ";
// const textContainer = document.getElementById("text-container");

// // 文字列を1文字ずつ<span>要素で囲む
// const spannedText = Array.from(text).map(char => `<span>${char}</span>`).join("");

// // <div>要素に<span>で囲まれたテキストを設定する
// textContainer.innerHTML = spannedText;


////////////
// one-after-another　次々に出現　横バージョン

// end, scrub, onceについて
      // start: "top 80%",
      // end: "50% 50%",
      // scrub: .5,　これを設定する意図は、
// endとscrubはセットで設定する。スクロールの『動き』に合わせたアニメーションを作りたいとき。
// なのでこのコード以降全て削除している。
// なお、一度アニメーションしたら終わりもセットと考える。
// デフォルトでアニメーションされたら終わるから。
      // once: true

// staggerについて
// 要素の子要素にアニメーションを『次々』につけたい場合、
// forEachで回して、ついてくるindex番号に延滞させる秒数を掛ける作戦はいいのだけれど、
// staggerで省略できる。
// items.forEach(elems => {
//   Array.from(elems.children).forEach((elem, idx) => {
//     gsap.from(elem, .7,{
//       opacity: ...,
//       delay: idx * 0.25,
//       ease: "...",
//       scrollTrigger: {
//         trigger: elem,
//         start: '...',
//       },
//     })
//   })
// })

const oneAfterAnotherRow = document.querySelectorAll("#one-after-another-row")
oneAfterAnotherRow.forEach(elem => {
  // 要素の子要素へアクセスはこれだけ。超絶賢い。
  gsap.from(elem.children, .7, {
    opacity: 0,
    ease: "power3.easeOut",
    // 0.25秒ずつ延滞させて処理する。これだけ。
    stagger: .25,
    scrollTrigger: {
      trigger: elem,
      start: 'top 80%',
      // markers: true,
    },
  })
})


////////////
// one-after-another　次々に出現
const oneAfterAnother = document.querySelectorAll("#one-after-another")
oneAfterAnother.forEach(elem => {
  gsap.from(elem.children, 1,{
    y: 100,
    opacity: 0,
    stagger: .25,
    scrollTrigger: {
      trigger: elem,
      start: 'top 80%',
      // markers: true,
    },
  })
});

// // 文章構造の中に視覚効果のカーテンをレイアウトするのは避ける。
// // JSで補助する。そこで『insertAdjacentHTML』を使う。

// // insertAdjacentHTML
// // 第二引数で指定するテキストを HTML または XML としてパースし、
// // その結果であるノードを DOM ツリー内の指定された位置（第一引数で指定）に挿入する。
// // これは挿入先の要素を再度パースするものではないため、既存の要素や要素内部の破壊を伴わない。
// // 余分なシリアル化のステップを回避できる分、 innerHTML への代入による直接的な操作よりも
// // はるかに高速な動作となる。

// // 引数の意味
// //    "beforebegin"  要素の直前に追加
// //    "afterbegin"   要素の最初の子要素として追加
// //    "beforeend"    要素の最後の子要素として追加
// //    "afterend"     要素の直後に追加

// // 最初の子要素では単純にできる。では、最後の子要素ではどうするか。

// var parentElement = document.getElementById("parent"); // 親要素の取得
// var lastChildElement = parentElement.lastElementChild; // 最後の子要素の取得

// // 最後の子要素の後ろに新たな要素を追加する
// lastChildElement.insertAdjacentHTML("afterend", "<div>新たな要素</div>");

// // 最後の子要素の前に新たな要素を追加する
// lastChildElement.insertAdjacentHTML("beforebegin", "<div>新たな要素</div>");

// // lastElementChildで取り込んでから処理するだけ。簡単な話。関数覚えようね。

document.querySelectorAll('.media-wrapper').forEach(elem => {
  elem.insertAdjacentHTML('afterbegin', '<div class="curtains"></div>')
})

////////////
// .curtains　カーテン効果
const curtains = document.querySelectorAll(".curtains")

curtains.forEach(elem => {
  gsap.to(elem, 1, {
    // 要素をスクリーン外に隠したい場合に使う『left or right: 100％;』は『''』で囲む。
    // これでそれぞれの幅に対して『duration: 1;』で適宜効果がついていく。
    // 色々な幅が混在するこんなところに『-2000』とかはない。動きが不自然だったのはそのせい。
    x: '-100%',
    transformOrigin: "left top",
    ease: "power1.easeOut",
    scrollTrigger: {
      trigger: elem,
      start: "top 80%",
      markers: true,
    }
  })
})






// const curtains = document.querySelectorAll(".curtains");

// curtains.forEach((curtain, index) => {
//   gsap.to(curtain, {
//     x: "-100%",
//     transformOrigin: "left top",
//     ease: "power1.easeOut",
//     scrollTrigger: {
//       trigger: curtain.parentElement,
//       start: "top 80%",
//       markers: true,
//     },
//   });
// });


////////////
// .fade-in　徐々に現れる
const stGadeIn = document.querySelectorAll(".fade-in")
stGadeIn.forEach(elem => {
  gsap.from(elem, .5, {
    opacity: 0,
    scrollTrigger: {
      trigger: elem,
      start: "top 80%",
      opacity: 1,
      // markers: true,
    }
  })
})

// const scrollTrigger = document.querySelectorAll(".scroll-trigger")
// scrollTrigger.forEach(elem => {
//   gsap.from(elem, .5, {
//     opacity: 1,
//     y: 20,
//     scale: 0.7,
//     ease: "back",
//     scrollTrigger: {
//       trigger: elem,
//       start: "top 80%",
//       markers: true,
//     }
//   })
// })


////////////
// < div class="bgm-play-stop" >　音楽再生とiconの遷移
const bgmPlayStop = document.getElementById("bgm-play-stop")
const playIcon = document.getElementById("play-icon")
const stopIcon = document.getElementById("stop-icon")
const bgMusic = document.getElementById("bg-music")
let userAction = false

bgmPlayStop.addEventListener("click", function(e) {
  if (bgMusic.paused) {
    bgMusic.play()
    this.classList.remove("fa-volume-high")
    this.classList.add("fa-volume-xmark")
  } else {
    bgMusic.pause();
    this.classList.add("fa-volume-high")
    this.classList.remove("fa-volume-xmark")
    bgMusic.currentTime = 0
  }
})

// 怒られた
// bgMusic.addEventListener("ended", function () {
//   bgMusic.currentTime = 0;
//   bgMusic.play();
// })


// ////////////
// // 属性『letter-spacing: .5em;』を最後の文字だけ取り去る
// function killLetterSpace(arr) {
//   arr.forEach(elem => {
//     let lastChar = elem.textContent.slice(-1)
//     let preText = elem.textContent.slice(0, -1)
//     elem.innerHTML = `${preText}<span class="remove-letter-spacing">${lastChar}</span>`
//   })
// }

// const arg = document.querySelectorAll("arg")
// killLetterSpace(arg)