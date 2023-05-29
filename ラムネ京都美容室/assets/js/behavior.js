////////////
// gsap
const scrollTriggers = document.querySelectorAll(".scroll-trigger")
scrollTriggers.forEach(elem => {
  gsap.from(elem, .5, {
    opacity: 0,
    y: 20,
    scale: 0.7,
    ease: "back",
    scrollTrigger: {
      trigger: elem,
      start: "top 80%",
      end: "50% 70%",
      markers: true,
      scrub: .5,
      // 一度アニメーションしたら終わり
      // once: true
    }
  })
})

// const scrollTriggers = document.querySelectorAll(".scroll-trigger")
// scrollTriggers.forEach(elem => {
//   gsap.from(elem, .5, {
//     opacity: 0,
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