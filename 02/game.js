//координаты техпалубного корабля
//координаты текущего выстрела
//количество попаданий
//потоплен корабль или нет

//создаем три переменные: location1, locarione2, locatione3

let location1 = 5
let location2 = 6
let location3 = 7
//создаем переменную currentShot
let currentShot
//создаем переменную длтя счета выстрелов
let shots = 0
//создаем переменную для количества попаданий
let hits = 0
//создаем переменную для отслкживания пополнен ли isSunk
let isSunk = false

while (isSunk === false) {
  //получить координаты выстрела
  currentShot = Number(prompt("Введите число от 0 до 9:"))
  //нужно увеличить счетчик всех выстрелов
  shots += 1
  //сравнить координаты выстрела с координатами корабля
  if (currentShot === location1 || currentShot === location2 || currentShot === location3) {

    hits += 1


    if (hits === 3) {
      isSunk = true
      alert("Победа")
    }
  } else if (currentShot < 0 || currentShot > 9) {
    alert("неправильное число")
  } else {
    alert("лох")
  }
}


//выводим статистику игры и рейтинг игрока
let rating = Math.round(3 / shots * 100)
alert("Вам понадобилось " +  shots + " выстрелов, чтобы потопить корабль. Ваш рейтинг: " + rating)
