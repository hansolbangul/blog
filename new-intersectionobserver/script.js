
const io = new IntersectionObserver((item) => {
  item.forEach((entry) => {
    if (entry.intersectionRatio) {
      entry.target.classList.add('move');
    }
    else {
      entry.target.classList.remove('move');
    }
  })
})

let box = document.querySelectorAll('.box')

box.forEach((el) => {
  io.observe(el)
})


