// function sayHello(name) {
//   console.log("Привет," + name);
// }
// let userName = prompt("как тебя зовут?")
// sayHello(userName)

// function findMax(a, b) {
//   if (a > b) {
//     console.log(a);
//   } else {
//     console.log(b);
//   }
// }
// let value1 = prompt("ввидите число")
// let value2 = prompt("ввидите число")
// findMax(value1, value2)

//создаем функцию которвя принимает два парамтра: число1 и число2
//если число1 больше числа2, то консоль выводит число1,
// а иначе консоль выводи число2
//вызываем функцию с двкмя цифрами

//создаем функцию, которая принимает значение месяцев весна лето зима осень
//

// function checkSeason(month) {
//    if(month >= 3 && month <= 5) {
//      console.log("Весна");
//    }
//
//    if (month >= 6 && month <=8) {
//      console.log("Лето");
//    }
//
//    if (month >=9 && month <= 11) {
//     console.log("Осень");
//    }
//
//    if (month === 12 || month === 1 || month === 2) {
//     console.log("Зима");
//   }
// }
// let askSeason = prompt("КАкой месяц")
// checkSeason(Number(askSeason))




// function checkBedTime(wakeUpTime) {
// 	  let sleepingTime = 8
// 	  if (wakeUpTime < 0 || wakeUpTime > 23) {
// 	    console.error("Время должно быть от 0 до 23")
// 	  } else {
// 	    let bedTime = wakeUpTime - sleepingTime
// 	    if (bedTime < 0) {
// 	      console.log("Ложитесь спать в: " + (24 + bedTime))
// 	    } else {
// 	      console.log("Ложитесь спать в: " + bedTime)
// 	    }
// 	  }
// 	}
// 	checkBedTime(9)
// 	checkBedTime(7)
