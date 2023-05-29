////////////
// gsap

const listItems = Array.from(document.getElementById("one-after-another").children)
console.log(listItems)
listItems.forEach((elem, idx) => {
  gsap.from(elem, 1,{
    y: 100,
    opacity: 0,
    delay: idx * 0.3,
    scrollTrigger: {
      trigger: elem,
      start: 'top 80%',
      end: 'bottom 80%',
      markers: true,
      // scrub: .5,
    },
  })
})

// .curtains
const curtains = document.querySelectorAll(".curtains")
console.log(curtains)
curtains.forEach(elem => {
  gsap.to(elem, 5, {
    x: -1000,
    transformOrigin: "left top",
    ease: "power1.easeIn",
    scrollTrigger: {
      trigger: elem,
      start: "top 50%",
      end: "50% 50%",
      markers: true,
      scrub: .5,
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
      markers: true,
      opacity: 1,
      scrub: .5,
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