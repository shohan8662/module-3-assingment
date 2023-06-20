/****** 1. Date Object */

function takeDate(date) {
  const currentDate = new Date(date);

  console.log(currentDate.getDay());
}

takeDate("2023, 06, 19");

/**** 2. Math Object */

function squareRoot(arr) {
  let sum = 0;
  arr.forEach((item) => {
    let square = item * item;
    sum += square;
  });

  console.log(Math.sqrt(sum));
  // console.log(sum);
}

squareRoot([2, 2, 2, 2]);

/***** 3. Numbers */

let isPrime = true;

function calculatePrimeNumber(number) {
  // check if number is equal to 1
  if (number === 1) {
    console.log("1 is neither prime nor composite number.");
  }

  // check if number is greater than 1
  else if (number > 1) {
    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`${number} is a prime number`);
    } else {
      console.log(`${number} is a not prime number`);
    }
  }
}

calculatePrimeNumber(7);

/**** 4. Window Object */

function opneWindow() {
  window.open("https://www.example.com", "", "width=800,height=800");
}

/*** 5. Navigator Objecst */

function detectBrowserName() {
  console.log(`This browser name is ${navigator.appName}`);
}

detectBrowserName();

/*** 6. Geoloaction */

function currentLocation() {
  navigator.geolocation.getCurrentPosition(function (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);
  });
}

currentLocation();

/*** 7. JS Common Event */

// Part A
function showCoords(event) {
  let coordsX = event.pageX;
  let coordsY = event.pageY;

  alert(`CoordX: ${coordsX}, coordY${coordsY}`);
}

// Part B
document.addEventListener("keypress", (event) => {
  var name = event.key;

  // Alert the key name on keypress
  alert(`Key pressed ${name}`);
});

// Part C and Qustion 12

const img = document.querySelector("img");

img.addEventListener("mouseover", function () {
  img.src = "img/2.png";
});

/*** 8. HTML DOM Document */
function btnClick() {
  document.querySelector(".sec-8 p").textContent = "Button Clicked";
}

/*** 10. DOM Manipulate CSS Class */
function btnClick2() {
  document.querySelector(".sec-10 p").classList.add("highlight");
}

/*** 11. Create element & append elemnt */

function createElement() {
  for (let i = 0; i < 5; i++) {
    document.querySelector("ul").innerHTML += `<li>${i}</li>`;
    // console.log(i);
  }
}

createElement();

/*** 13. DOM Query Selector */

function changeItemColor() {
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.style.color = "red";
  });
}

changeItemColor();

/*** 14. AJAX Get Request  */

function getReq() {
  let url = "https://api.example.com/data";
  let option = { method: "GET" };

  fetch(url, option)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}

getReq();

/*** 15. AJAX post request */
function postReq() {
  let url = "https://api.example.com/data";
  let bodyData = { name: "John Doe", email: "johndoe@example.com" };
  let config = { method: "POST", headers: {}, body: JSON.stringify(bodyData) };

  fetch(url, config)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}

postReq();
