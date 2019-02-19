function checkMovie(movieName, movieRating, moviePrise) {
  if (movieRating >= 7 && moviePrise < 500) {
    console.log("На " + movieName + "стоит сходить в кино.")
  } else {
    console.log(movieName + "лучше посимотреть доиа.")
  }
}

let moveName = "Алита: Боевой ангел"
let moveRating = 7.3
let movePrise = 600
checkMovie(movieName, movieRating, moviePrise)


let movieName = "Дом, в который построил Ждек"
let movieRating = 7.3
let moviePrise = 500
checkMovie(movieName, movieRating, moviePrise)


let movieName = "Стекло"
let movieRating = 7.3
let moviePrise = 600
checkMovie(movieName, movieRating, moviePrise)

let movieName = "Спасти Ленинград"
let movieRating = 5.5
let moviePrise = 300
checkMovie(movieName, movieRating, moviePrise)

let movieName = "Ван Гог. На пороге вечности"
let movieRating = 7.2
let moviePrise = 450
checkMovie(movieName, movieRating, moviePrise)
