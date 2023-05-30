////////////
// gsap

// // 一文字ずつ現れる
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



const para = document.querySelectorAll(".per-char")
para.forEach(elem => {
  // const spannedText1 = Array.from(elem.textContent).map(char => `<span>${char}</span>`).join("")
  const arr = elem.textContent.split("")
  console.log(arr)
  arr.forEach(char => {
    // console.log(char)
    if (char === " ") {
      console.log("<br>")
    } else {
      console.log(`${ elem }`)
    }
  })
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
})



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
  //       end: "bottom 50%",
  //       markers: true,
  //       scrub: .5
  //     }
  //   })
  // })



// const text = "あいうえおかきくけこ";
// const textContainer = document.getElementById("text-container");

// // 文字列を1文字ずつ<span>要素で囲む
// const spannedText = Array.from(text).map(char => `<span>${char}</span>`).join("");

// // <div>要素に<span>で囲まれたテキストを設定する
// textContainer.innerHTML = spannedText;






// one-after-another　次々に出現　横バージョン
const items = document.querySelectorAll(".one-after-another-row")
items.forEach(elems => {
  Array.from(elems.children).forEach((elem, idx) => {
    gsap.from(elem, .7,{
      x: -50,
      opacity: 0,
      delay: idx * 0.25,
      ease: "power3.easeOut",
      scrollTrigger: {
        trigger: elem,
        start: 'top 80%',
        end: 'bottom 80%',
        // markers: true,
        // scrubすると次々出現の効果がなくなる。なぜ？
        // scrub: .5,
      },
    })

  })
})

// one-after-another　次々に出現
const listItems = Array.from(document.getElementById("one-after-another").children)
listItems.forEach((elem, idx) => {
  gsap.from(elem, 1,{
    y: 100,
    opacity: 0,
    delay: idx * 0.3,
    scrollTrigger: {
      trigger: elem,
      start: 'top 80%',
      end: 'bottom 80%',
      // markers: true,
      // scrubすると次々出現の効果がなくなる。なぜ？
      // scrub: .5,
    },
  })
})

// .curtains
const curtains = document.querySelectorAll(".curtains")
curtains.forEach(elem => {
  gsap.to(elem, 1, {
    x: -2000,
    transformOrigin: "left top",
    ease: "power1.easeIn",
    scrollTrigger: {
      trigger: elem,
      start: "top 50%",
      end: "50% 50%",
      // markers: true,
      // scrub: .5,
      // 一度アニメーションしたら終わり
      // once: true
    }
  })
})     

// .fade-in
const stGadeIn = document.querySelectorAll(".fade-in")
stGadeIn.forEach(elem => {
  gsap.from(elem, .5, {
    opacity: 0,
    scrollTrigger: {
      trigger: elem,
      start: "top 80%",
      end: "50% 50%",
      // markers: true,
      opacity: 1,
      // scrub: .5,
      // 一度アニメーションしたら終わり
      // once: true
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
//       end: "50% 70%",
//       markers: true,
//       scrub: .5,
//       // 一度アニメーションしたら終わり
//       // once: true
//     }
//   })
// })


////////////
// < div class="bgm-play-stop" >
const bgmPlayStop = document.getElementById("bgm-play-stop")
const playIcon = document.getElementById("play-icon");
const stopIcon = document.getElementById("stop-icon");
const bgMusic = document.getElementById("bg-music");

bgmPlayStop.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    playIcon.classList.remove("active")
    stopIcon.classList.add("active")
  } else {
    bgMusic.pause();
    playIcon.classList.add("active")
    stopIcon.classList.remove("active")
    // これもだめ
    // audio.currentTime = 0
  }
})




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