let scores = [22, 33, 42, 54, 65,76, 44, 24, 65, 90]
// let i = 0
//
// while (i < scores.length) {
//   if (scores[i] > highScore) {
//     highScore = scores[i]
//   }
//   let msg = `Лошадь №${i + 1} пришла с результатом ${scores[i]}`
//   console.log(msg)
//   i += 1
// }


let highScore = 0
for (let i = 0; i < scores.length; i += 1) {
  if (scores[i] > highScore) {
    highScore = scores[i]
}
let msg = `Лошадь №${i + 1} пришла с результатом ${scores[i]}`
console.log(msg)
}
console.log(highScore);

let bestScores = []
for (let i = 0; i < scores.length; i += 1) {
  if (scores[i] === highScore) {
    bestScores.push(scores[i])
  }
}
console.log(bestScores);
