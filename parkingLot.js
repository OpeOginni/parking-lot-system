let bookButton = Array.from(document.querySelectorAll("button"));
//const booking_container = document.querySelector("booking_container");
const body = document.getElementById("body");
const A1 = document.getElementById("A1");
const A2 = document.getElementById("A2");
const A3 = document.getElementById("A3");
const A4 = document.getElementById("A4");
const A5 = document.getElementById("A5");
const B1 = document.getElementById("B1");
const B2 = document.getElementById("B2");
const B3 = document.getElementById("B3");
const B4 = document.getElementById("B4");
const B5 = document.getElementById("B5");
const C1 = document.getElementById("C1");
const C2 = document.getElementById("C2");
const C3 = document.getElementById("C3");
const C4 = document.getElementById("C4");
const C5 = document.getElementById("C5");
const D1 = document.getElementById("D1");
const D2 = document.getElementById("D2");
const D3 = document.getElementById("D3");
const D4 = document.getElementById("D4");
const D5 = document.getElementById("D5");
const _numberOfBookedSlots = document.getElementById("BookedSlotsCounter");
const Price_showcase = document.getElementById("Price_showcase");
const Welcome = document.getElementById("Welcome");
let numberOfBookedSlots = 0;
let priceToPay = 0.0;
let carRegNumber;
let userName;
let carSize;

const minute = 1000 * 60;

function myFunction() {
  var Intro_Page = document.querySelector(".Intro_Page");
  var booking_container = document.querySelector(".booking_container");
  var bookingkeysSmall = document.querySelector(".bookingkeysSmall");
  var bookingkeysLarge = document.querySelector(".bookingkeysLarge");
  var pricePerSpace = document.querySelector("#pricePerSpace");

  carRegNumber = document.getElementById("regNumber").value;
  userName = document.getElementById("name").value;
  carSize = document.getElementById("carSize").value;
  console.log(carSize);

  Intro_Page.style.display = "none";
  booking_container.style.display = "block";
  if (carSize != "small") {
    bookingkeysLarge.style.display = "block";
    pricePerSpace.innerText = `Price is 3.50 Naira per Slot`;
  } else {
    bookingkeysSmall.style.display = "block";
    pricePerSpace.innerText = `Price is 2.00 Naira per Slot`;
  }
  Welcome.innerText = `Welcome, ${userName}
   Your Car Registration Number is: ${carRegNumber}`;
}

let startTime;
let endTime;
let priceForSmall = 2;
let priceForLarge = 3.5;
bookButton.map((bookButton) => {
  bookButton.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      // ROW A1 - A5
      case "A1":
        if (A1.className != "unBooked") {
          const _end = Date.now();
          endTime = _end;
          /* If the Space is Booked */ numberOfBookedSlots--;
          A1.className = "unBooked";
          alert(`You have Unbooked ${e.target.innerText}`);
          var totalTimeTaken = (endTime - startTime) / 60000;
          console.log(
            `Total time take was: ${(endTime - startTime) / 60000} Minutes`
          );
          priceToPay = (totalTimeTaken * priceForSmall).toFixed(2);
        } /* If the Space is not Booked */ else {
          const _start = Date.now();
          startTime = _start;
          numberOfBookedSlots++;
          A1.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;

      case "A2":
        if (A2.className != "unBooked") {
          const _end = Date.now();
          endTime = _end;
          numberOfBookedSlots--;
          A2.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
          var totalTimeTaken = (endTime - startTime) / 60000;
          console.log(
            `Total time take was: ${(endTime - startTime) / 60000} Minutes`
          );
          priceToPay = (totalTimeTaken * priceForSmall).toFixed(2);
        } else {
          const _start = Date.now();
          startTime = _start;
          numberOfBookedSlots++;
          A2.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "A3":
        if (A3.className != "unBooked") {
          const _end = Date.now();
          endTime = _end;
          numberOfBookedSlots--;
          A3.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
          var totalTimeTaken = (endTime - startTime) / 60000;
          console.log(
            `Total time take was: ${(endTime - startTime) / 60000} Minutes`
          );
          priceToPay = (totalTimeTaken * priceForSmall).toFixed(2);
        } else {
          const _start = Date.now();
          startTime = _start;
          numberOfBookedSlots++;
          A3.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "A4":
        if (A4.className != "unBooked") {
          const _end = Date.now();
          endTime = _end;
          numberOfBookedSlots--;
          A4.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
          var totalTimeTaken = (endTime - startTime) / 60000;
          console.log(
            `Total time take was: ${(endTime - startTime) / 60000} Minutes`
          );
          priceToPay = (totalTimeTaken * priceForSmall).toFixed(2);
        } else {
          const _start = Date.now();
          startTime = _start;
          numberOfBookedSlots++;
          A4.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "A5":
        if (A5.className != "unBooked") {
          const _end = Date.now();
          endTime = _end;
          numberOfBookedSlots--;
          A5.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
          var totalTimeTaken = (endTime - startTime) / 60000;
          console.log(
            `Total time take was: ${(endTime - startTime) / 60000} Minutes`
          );
          priceToPay = (totalTimeTaken * priceForSmall).toFixed(2);
        } else {
          const _start = Date.now();
          startTime = _start;
          numberOfBookedSlots++;
          A5.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      //ROW B1 - B5
      case "B1":
        if (B1.className != "unBooked") {
          const _end = Date.now();
          endTime = _end;
          numberOfBookedSlots--;
          B1.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
          var totalTimeTaken = (endTime - startTime) / 60000;
          console.log(
            `Total time take was: ${(endTime - startTime) / 60000} Minutes`
          );
          priceToPay = (totalTimeTaken * priceForSmall).toFixed(2);
        } else {
          const _start = Date.now();
          startTime = _start;
          numberOfBookedSlots++;
          B1.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "B2":
        if (B2.className != "unBooked") {
          const _end = Date.now();
          endTime = _end;
          numberOfBookedSlots--;
          B2.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
          var totalTimeTaken = (endTime - startTime) / 60000;
          console.log(
            `Total time take was: ${(endTime - startTime) / 60000} Minutes`
          );
          priceToPay = (totalTimeTaken * priceForSmall).toFixed(2);
        } else {
          const _start = Date.now();
          startTime = _start;
          numberOfBookedSlots++;
          B2.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "B3":
        if (B3.className != "unBooked") {
          const _end = Date.now();
          endTime = _end;
          numberOfBookedSlots--;
          B3.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
          var totalTimeTaken = (endTime - startTime) / 60000;
          console.log(
            `Total time take was: ${(endTime - startTime) / 60000} Minutes`
          );
          priceToPay = (totalTimeTaken * priceForSmall).toFixed(2);
        } else {
          const _start = Date.now();
          startTime = _start;
          numberOfBookedSlots++;
          B3.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "B4":
        if (B4.className != "unBooked") {
          const _end = Date.now();
          endTime = _end;
          numberOfBookedSlots--;
          B4.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
          var totalTimeTaken = (endTime - startTime) / 60000;
          console.log(
            `Total time take was: ${(endTime - startTime) / 60000} Minutes`
          );
          priceToPay = (totalTimeTaken * priceForSmall).toFixed(2);
        } else {
          const _start = Date.now();
          startTime = _start;
          numberOfBookedSlots++;
          B4.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "B5":
        if (B5.className != "unBooked") {
          const _end = Date.now();
          endTime = _end;
          numberOfBookedSlots--;
          B5.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
          var totalTimeTaken = (endTime - startTime) / 60000;
          console.log(
            `Total time take was: ${(endTime - startTime) / 60000} Minutes`
          );
          priceToPay = (totalTimeTaken * priceForSmall).toFixed(2);
        } else {
          const _start = Date.now();
          startTime = _start;
          numberOfBookedSlots++;
          B5.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      // ROW C1 - C5
      case "C1":
        if (C1.className != "unBooked") {
          const _end = Date.now();
          endTime = _end;
          numberOfBookedSlots--;
          C1.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
          var totalTimeTaken = (endTime - startTime) / 60000;
          console.log(
            `Total time take was: ${(endTime - startTime) / 60000} Minutes`
          );
          priceToPay = (totalTimeTaken * priceForSmall).toFixed(2);
        } else {
          const _start = Date.now();
          startTime = _start;
          numberOfBookedSlots++;
          C1.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "C2":
        if (C2.className != "unBooked") {
          const _end = Date.now();
          endTime = _end;
          numberOfBookedSlots--;
          C2.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
          var totalTimeTaken = (endTime - startTime) / 60000;
          console.log(
            `Total time take was: ${(endTime - startTime) / 60000} Minutes`
          );
          priceToPay = (totalTimeTaken * priceForSmall).toFixed(2);
        } else {
          const _start = Date.now();
          startTime = _start;
          numberOfBookedSlots++;
          C2.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "C3":
        if (C3.className != "unBooked") {
          const _end = Date.now();
          endTime = _end;
          numberOfBookedSlots--;
          C3.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
          var totalTimeTaken = (endTime - startTime) / 60000;
          console.log(
            `Total time take was: ${(endTime - startTime) / 60000} Minutes`
          );
          priceToPay = (totalTimeTaken * priceForLarge).toFixed(2);
        } else {
          const _start = Date.now();
          startTime = _start;
          numberOfBookedSlots++;
          C3.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "C4":
        if (C4.className != "unBooked") {
          const _end = Date.now();
          endTime = _end;
          numberOfBookedSlots--;
          C4.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
          var totalTimeTaken = (endTime - startTime) / 60000;
          console.log(
            `Total time take was: ${(endTime - startTime) / 60000} Minutes`
          );
          priceToPay = (totalTimeTaken * priceForLarge).toFixed(2);
        } else {
          const _start = Date.now();
          startTime = _start;
          numberOfBookedSlots++;
          C4.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "C5":
        if (C5.className != "unBooked") {
          const _end = Date.now();
          endTime = _end;
          numberOfBookedSlots--;
          C5.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
          var totalTimeTaken = (endTime - startTime) / 60000;
          console.log(
            `Total time take was: ${(endTime - startTime) / 60000} Minutes`
          );
          priceToPay = (totalTimeTaken * priceForLarge).toFixed(2);
        } else {
          const _start = Date.now();
          startTime = _start;
          numberOfBookedSlots++;
          C5.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      // ROW D1 - D5
      case "D1":
        if (D1.className != "unBooked") {
          const _end = Date.now();
          endTime = _end;
          numberOfBookedSlots--;
          D1.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
          var totalTimeTaken = (endTime - startTime) / 60000;
          console.log(
            `Total time take was: ${(endTime - startTime) / 60000} Minutes`
          );
          priceToPay = (totalTimeTaken * priceForLarge).toFixed(2);
        } else {
          const _start = Date.now();
          startTime = _start;
          numberOfBookedSlots++;
          D1.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "D2":
        if (D2.className != "unBooked") {
          const _end = Date.now();
          endTime = _end;
          numberOfBookedSlots--;
          D2.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
          var totalTimeTaken = (endTime - startTime) / 60000;
          console.log(
            `Total time take was: ${(endTime - startTime) / 60000} Minutes`
          );
          priceToPay = (totalTimeTaken * priceForLarge).toFixed(2);
        } else {
          const _start = Date.now();
          startTime = _start;
          numberOfBookedSlots++;
          D2.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "D3":
        if (D3.className != "unBooked") {
          const _end = Date.now();
          endTime = _end;
          numberOfBookedSlots--;
          D3.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
          var totalTimeTaken = (endTime - startTime) / 60000;
          console.log(
            `Total time take was: ${(endTime - startTime) / 60000} Minutes`
          );
          priceToPay = (totalTimeTaken * priceForLarge).toFixed(2);
        } else {
          const _start = Date.now();
          startTime = _start;
          numberOfBookedSlots++;
          D3.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "D4":
        if (D4.className != "unBooked") {
          const _end = Date.now();
          endTime = _end;
          numberOfBookedSlots--;
          D4.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
          var totalTimeTaken = (endTime - startTime) / 60000;
          console.log(
            `Total time take was: ${(endTime - startTime) / 60000} Minutes`
          );
          priceToPay = (totalTimeTaken * priceForLarge).toFixed(2);
        } else {
          const _start = Date.now();
          startTime = _start;
          numberOfBookedSlots++;
          D4.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "D5":
        if (D5.className != "unBooked") {
          const _end = Date.now();
          endTime = _end;
          numberOfBookedSlots--;
          D5.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
          var totalTimeTaken = (endTime - startTime) / 60000;
          console.log(
            `Total time take was: ${(endTime - startTime) / 60000} Minutes`
          );
          priceToPay = (totalTimeTaken * priceForLarge).toFixed(2);
        } else {
          const _start = Date.now();
          startTime = _start;
          numberOfBookedSlots++;
          D5.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
    }
    _numberOfBookedSlots.innerText = `No Of Booked Parking Slots ${numberOfBookedSlots} out of 20`;
    Price_showcase.innerText = `Price To Pay: N ${priceToPay}`;
  });
});
