var bookedCars = [];
var registeredAccounts = [];
let timeStarted;
let timeEnded;
let bookButton = Array.from(document.querySelectorAll("button"));
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
const book = document.getElementsByClassName("book");
const Specific_Info = document.getElementsByClassName("Specific_Info");
const _numberOfBookedSlots = document.getElementById("BookedSlotsCounter");
const Price_showcase = document.getElementById("Price_showcase");
const Welcome = document.getElementById("Welcome");
const bookedButtons = document.getElementsByClassName("booked");
let numberOfBookedSlots = 0;
let priceToPay = 0.0;
let carRegNumber;
let userName;
let carSize;
const formData = {
  regNum: null,
  slotBooked: [],
  info: function () {
    return this.regNum;
  },
};
const car = [];

// if ((formData.slotBooked = null)) {
//   formData.slotBooked = "No Booked Slot";
// }

function backFunction() {
  var Intro_Page = document.querySelector(".Intro_Page");
  var booking_container = document.querySelector(".booking_container");
  var bookingkeysSmall = document.querySelector(".bookingkeysSmall");
  var bookingkeysLarge = document.querySelector(".bookingkeysLarge");

  bookingkeysLarge.style.display = "none";
  bookingkeysSmall.style.display = "none";
  booking_container.style.display = "none";
  Intro_Page.style.display = "block";
  if (!localStorage.BookedCars)
    localStorage.setItem("BookedCars", JSON.stringify(bookedCars));
}

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
    pricePerSpace.innerText = `Price is 3.50 Naira per Minute`;
  } else {
    bookingkeysSmall.style.display = "block";
    pricePerSpace.innerText = `Price is 2.00 Naira per Minute`;
  }
  Welcome.innerText = `Welcome, ${userName}
   Your Car Registration Number is: ${carRegNumber}`;

  formData.regNum = document.getElementById("regNumber").value;
  formData.slotBooked.push("No Booked Slot Yet");

  if (registeredAccounts.includes(formData.regNum)) {
    alert(
      `A car with the registration number ${formData.regNum} exists. We will Log You Into Your Dashboard`
    );
    Price_showcase.innerText = `Price To Pay: N ${localStorage.getItem(
      `Price ${carRegNumber} to pay`
    )}`;
    return null;
  } else {
    registeredAccounts.push(formData.regNum);
    alert("New Profile Created!");
    localStorage.setItem(`Price ${formData.regNum} to pay`, 0);
    Price_showcase.innerText = `Price To Pay: N ${localStorage.getItem(
      `Price ${carRegNumber} to pay`
    )}`;
  }

  if (!localStorage.BookedCars)
    localStorage.setItem("BookedCars", JSON.stringify(bookedCars));

  if (!localStorage.getItem(`Price ${formData.regNum} to pay`)) {
    localStorage.setItem(`Price ${formData.regNum} to pay`, 0);
  }
}

function resetBookings() {
  registeredAccounts.length = 0;
  bookedCars.length = 0;
  localStorage.clear(); // Clears the Local Storage
}
// BY OPEYEMI
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
          var bookedTo = localStorage.getItem(e.target.innerText);
          if (bookedTo.includes(formData.regNum)) {
            timeEnded = Date.now();
            localStorage.setItem(`${formData.regNum}TimeEnded`, timeEnded);
            var _totalTimeTaken = (timeEnded - timeStarted) / 60000;
            // ######################################################################
            var _1 = localStorage.getItem(`Price ${formData.regNum} to pay`);
            var _2 = _totalTimeTaken * priceForSmall;
            // ######################################################################
            let _priceToPay = (parseFloat(_1) + parseFloat(_2)).toFixed(2);
            localStorage.setItem(
              `Price ${formData.regNum} to pay`,
              _priceToPay
            );
            /* If the Space is Booked */ numberOfBookedSlots--;
            A1.className = "unBooked";
            localStorage.removeItem(e.target.innerText);
            const index = bookedCars.indexOf(formData.regNum);
            if (index > -1) {
              // only splice array when item is found
              bookedCars.splice(index, 1); // 2nd parameter means remove one item only
            }
            localStorage.setItem("BookedCars", bookedCars.toString());

            alert(`You have Unbooked Space ${e.target.innerText}`);
            car.pop(formData.regNum);
          } else {
            alert("Slot Booked By another User.");
            return null;
          }
        } /* If the Space is not Booked */ else {
          if (bookedCars.includes(formData.regNum) != false) {
            alert("You have already Booked A slot.");
            return null;
          } else {
            timeStarted = Date.now();
            localStorage.setItem(`${formData.regNum} TimeStarted`, timeStarted);
            const _start = Date.now();
            startTime = _start;
            numberOfBookedSlots++;
            A1.className = "booked";
            alert(`Thank You for Booking Space ${e.target.innerText}`);
            localStorage.setItem(
              e.target.innerText,
              JSON.stringify(formData.regNum)
            );
            car.push(formData.regNum);
            // Get the existing data
            // Add new data to localStorage Array
            bookedCars.push(formData.regNum);
            // Save back to localStorage
            localStorage.setItem("BookedCars", bookedCars.toString());
          }
        }

        break;

      case "A2":
        if (A2.className != "unBooked") {
          var bookedTo = localStorage.getItem(e.target.innerText);
          if (bookedTo.includes(formData.regNum)) {
            timeEnded = Date.now();
            localStorage.setItem(`${formData.regNum}TimeEnded`, timeEnded);
            var _totalTimeTaken = (timeEnded - timeStarted) / 60000;
            // ######################################################################
            var _1 = localStorage.getItem(`Price ${formData.regNum} to pay`);
            var _2 = _totalTimeTaken * priceForSmall;
            // ######################################################################
            let _priceToPay = (parseFloat(_1) + parseFloat(_2)).toFixed(2);
            localStorage.setItem(
              `Price ${formData.regNum} to pay`,
              _priceToPay
            );
            /* If the Space is Booked */ numberOfBookedSlots--;
            A2.className = "unBooked";
            localStorage.removeItem(e.target.innerText);
            const index = bookedCars.indexOf(formData.regNum);
            if (index > -1) {
              // only splice array when item is found
              bookedCars.splice(index, 1); // 2nd parameter means remove one item only
            }
            localStorage.setItem("BookedCars", bookedCars.toString());

            alert(`You have Unbooked Space ${e.target.innerText}`);
            car.pop(formData.regNum);
          } else {
            alert("Slot Booked By another User.");
            return null;
          }
        } /* If the Space is not Booked */ else {
          if (bookedCars.includes(formData.regNum) != false) {
            alert("You have already Booked A slot.");
            return null;
          } else {
            timeStarted = Date.now();
            localStorage.setItem(`${formData.regNum} TimeStarted`, timeStarted);
            const _start = Date.now();
            startTime = _start;
            numberOfBookedSlots++;
            A2.className = "booked";
            alert(`Thank You for Booking Space ${e.target.innerText}`);
            localStorage.setItem(
              e.target.innerText,
              JSON.stringify(formData.regNum)
            );
            car.push(formData.regNum);
            // Get the existing data
            // Add new data to localStorage Array
            bookedCars.push(formData.regNum);
            // Save back to localStorage
            localStorage.setItem("BookedCars", bookedCars.toString());
          }
        }

        break;
      // BY OPEYEMI

      case "A3":
        if (A3.className != "unBooked") {
          var bookedTo = localStorage.getItem(e.target.innerText);
          if (bookedTo.includes(formData.regNum)) {
            timeEnded = Date.now();
            localStorage.setItem(`${formData.regNum}TimeEnded`, timeEnded);
            var _totalTimeTaken = (timeEnded - timeStarted) / 60000;
            // ######################################################################
            var _1 = localStorage.getItem(`Price ${formData.regNum} to pay`);
            var _2 = _totalTimeTaken * priceForSmall;
            // ######################################################################
            let _priceToPay = (parseFloat(_1) + parseFloat(_2)).toFixed(2);
            localStorage.setItem(
              `Price ${formData.regNum} to pay`,
              _priceToPay
            );
            /* If the Space is Booked */ numberOfBookedSlots--;
            A3.className = "unBooked";
            localStorage.removeItem(e.target.innerText);
            const index = bookedCars.indexOf(formData.regNum);
            if (index > -1) {
              // only splice array when item is found
              bookedCars.splice(index, 1); // 2nd parameter means remove one item only
            }
            localStorage.setItem("BookedCars", bookedCars.toString());

            alert(`You have Unbooked Space ${e.target.innerText}`);
            car.pop(formData.regNum);
          } else {
            alert("Slot Booked By another User.");
            return null;
          }
        } /* If the Space is not Booked */ else {
          if (bookedCars.includes(formData.regNum) != false) {
            alert("You have already Booked A slot.");
            return null;
          } else {
            timeStarted = Date.now();
            localStorage.setItem(`${formData.regNum} TimeStarted`, timeStarted);
            const _start = Date.now();
            startTime = _start;
            numberOfBookedSlots++;
            A3.className = "booked";
            alert(`Thank You for Booking Space ${e.target.innerText}`);
            localStorage.setItem(
              e.target.innerText,
              JSON.stringify(formData.regNum)
            );
            car.push(formData.regNum);
            // Get the existing data
            // Add new data to localStorage Array
            bookedCars.push(formData.regNum);
            // Save back to localStorage
            localStorage.setItem("BookedCars", bookedCars.toString());
          }
        }

        break;
      case "A4":
        if (A4.className != "unBooked") {
          var bookedTo = localStorage.getItem(e.target.innerText);
          if (bookedTo.includes(formData.regNum)) {
            timeEnded = Date.now();
            localStorage.setItem(`${formData.regNum}TimeEnded`, timeEnded);
            var _totalTimeTaken = (timeEnded - timeStarted) / 60000;
            // ######################################################################
            var _1 = localStorage.getItem(`Price ${formData.regNum} to pay`);
            var _2 = _totalTimeTaken * priceForSmall;
            // ######################################################################
            let _priceToPay = (parseFloat(_1) + parseFloat(_2)).toFixed(2);
            localStorage.setItem(
              `Price ${formData.regNum} to pay`,
              _priceToPay
            );
            /* If the Space is Booked */ numberOfBookedSlots--;
            A4.className = "unBooked";
            localStorage.removeItem(e.target.innerText);
            const index = bookedCars.indexOf(formData.regNum);
            if (index > -1) {
              // only splice array when item is found
              bookedCars.splice(index, 1); // 2nd parameter means remove one item only
            }
            localStorage.setItem("BookedCars", bookedCars.toString());

            alert(`You have Unbooked Space ${e.target.innerText}`);
            car.pop(formData.regNum);
          } else {
            alert("Slot Booked By another User.");
            return null;
          }
        } /* If the Space is not Booked */ else {
          if (bookedCars.includes(formData.regNum) != false) {
            alert("You have already Booked A slot.");
            return null;
          } else {
            timeStarted = Date.now();
            localStorage.setItem(`${formData.regNum} TimeStarted`, timeStarted);
            const _start = Date.now();
            startTime = _start;
            numberOfBookedSlots++;
            A4.className = "booked";
            alert(`Thank You for Booking Space ${e.target.innerText}`);
            localStorage.setItem(
              e.target.innerText,
              JSON.stringify(formData.regNum)
            );
            car.push(formData.regNum);
            // Get the existing data
            // Add new data to localStorage Array
            bookedCars.push(formData.regNum);
            // Save back to localStorage
            localStorage.setItem("BookedCars", bookedCars.toString());
          }
        }

        break;
      case "A5":
        if (A5.className != "unBooked") {
          var bookedTo = localStorage.getItem(e.target.innerText);
          if (bookedTo.includes(formData.regNum)) {
            timeEnded = Date.now();
            localStorage.setItem(`${formData.regNum}TimeEnded`, timeEnded);
            var _totalTimeTaken = (timeEnded - timeStarted) / 60000;
            // ######################################################################
            var _1 = localStorage.getItem(`Price ${formData.regNum} to pay`);
            var _2 = _totalTimeTaken * priceForSmall;
            // ######################################################################
            let _priceToPay = (parseFloat(_1) + parseFloat(_2)).toFixed(2);
            localStorage.setItem(
              `Price ${formData.regNum} to pay`,
              _priceToPay
            );
            /* If the Space is Booked */ numberOfBookedSlots--;
            A5.className = "unBooked";
            localStorage.removeItem(e.target.innerText);
            const index = bookedCars.indexOf(formData.regNum);
            if (index > -1) {
              // only splice array when item is found
              bookedCars.splice(index, 1); // 2nd parameter means remove one item only
            }
            localStorage.setItem("BookedCars", bookedCars.toString());

            alert(`You have Unbooked Space ${e.target.innerText}`);
            car.pop(formData.regNum);
          } else {
            alert("Slot Booked By another User.");
            return null;
          }
        } /* If the Space is not Booked */ else {
          if (bookedCars.includes(formData.regNum) != false) {
            alert("You have already Booked A slot.");
            return null;
          } else {
            timeStarted = Date.now();
            localStorage.setItem(`${formData.regNum} TimeStarted`, timeStarted);
            const _start = Date.now();
            startTime = _start;
            numberOfBookedSlots++;
            A5.className = "booked";
            alert(`Thank You for Booking Space ${e.target.innerText}`);
            localStorage.setItem(
              e.target.innerText,
              JSON.stringify(formData.regNum)
            );
            car.push(formData.regNum);
            // Get the existing data
            // Add new data to localStorage Array
            bookedCars.push(formData.regNum);
            // Save back to localStorage
            localStorage.setItem("BookedCars", bookedCars.toString());
          }
        }

        break;
      //ROW B1 - B5
      case "B1":
        if (B1.className != "unBooked") {
          var bookedTo = localStorage.getItem(e.target.innerText);
          if (bookedTo.includes(formData.regNum)) {
            timeEnded = Date.now();
            localStorage.setItem(`${formData.regNum}TimeEnded`, timeEnded);
            var _totalTimeTaken = (timeEnded - timeStarted) / 60000;
            // ######################################################################
            var _1 = localStorage.getItem(`Price ${formData.regNum} to pay`);
            var _2 = _totalTimeTaken * priceForSmall;
            // ######################################################################
            let _priceToPay = (parseFloat(_1) + parseFloat(_2)).toFixed(2);
            localStorage.setItem(
              `Price ${formData.regNum} to pay`,
              _priceToPay
            );
            /* If the Space is Booked */ numberOfBookedSlots--;
            B1.className = "unBooked";
            localStorage.removeItem(e.target.innerText);
            const index = bookedCars.indexOf(formData.regNum);
            if (index > -1) {
              // only splice array when item is found
              bookedCars.splice(index, 1); // 2nd parameter means remove one item only
            }
            localStorage.setItem("BookedCars", bookedCars.toString());

            alert(`You have Unbooked Space ${e.target.innerText}`);
            car.pop(formData.regNum);
          } else {
            alert("Slot Booked By another User.");
            return null;
          }
        } /* If the Space is not Booked */ else {
          if (bookedCars.includes(formData.regNum) != false) {
            alert("You have already Booked A slot.");
            return null;
          } else {
            timeStarted = Date.now();
            localStorage.setItem(`${formData.regNum} TimeStarted`, timeStarted);
            const _start = Date.now();
            startTime = _start;
            numberOfBookedSlots++;
            B1.className = "booked";
            alert(`Thank You for Booking Space ${e.target.innerText}`);
            localStorage.setItem(
              e.target.innerText,
              JSON.stringify(formData.regNum)
            );
            car.push(formData.regNum);
            // Get the existing data
            // Add new data to localStorage Array
            bookedCars.push(formData.regNum);
            // Save back to localStorage
            localStorage.setItem("BookedCars", bookedCars.toString());
          }
        }

        break;
      case "B2":
        if (B2.className != "unBooked") {
          var bookedTo = localStorage.getItem(e.target.innerText);
          if (bookedTo.includes(formData.regNum)) {
            timeEnded = Date.now();
            localStorage.setItem(`${formData.regNum}TimeEnded`, timeEnded);
            var _totalTimeTaken = (timeEnded - timeStarted) / 60000;
            // ######################################################################
            var _1 = localStorage.getItem(`Price ${formData.regNum} to pay`);
            var _2 = _totalTimeTaken * priceForSmall;
            // ######################################################################
            let _priceToPay = (parseFloat(_1) + parseFloat(_2)).toFixed(2);
            localStorage.setItem(
              `Price ${formData.regNum} to pay`,
              _priceToPay
            );
            /* If the Space is Booked */ numberOfBookedSlots--;
            B2.className = "unBooked";
            localStorage.removeItem(e.target.innerText);
            const index = bookedCars.indexOf(formData.regNum);
            if (index > -1) {
              // only splice array when item is found
              bookedCars.splice(index, 1); // 2nd parameter means remove one item only
            }
            localStorage.setItem("BookedCars", bookedCars.toString());

            alert(`You have Unbooked Space ${e.target.innerText}`);
            car.pop(formData.regNum);
          } else {
            alert("Slot Booked By another User.");
            return null;
          }
        } /* If the Space is not Booked */ else {
          if (bookedCars.includes(formData.regNum) != false) {
            alert("You have already Booked A slot.");
            return null;
          } else {
            timeStarted = Date.now();
            localStorage.setItem(`${formData.regNum} TimeStarted`, timeStarted);
            const _start = Date.now();
            startTime = _start;
            numberOfBookedSlots++;
            B2.className = "booked";
            alert(`Thank You for Booking Space ${e.target.innerText}`);
            localStorage.setItem(
              e.target.innerText,
              JSON.stringify(formData.regNum)
            );
            car.push(formData.regNum);
            // Get the existing data
            // Add new data to localStorage Array
            bookedCars.push(formData.regNum);
            // Save back to localStorage
            localStorage.setItem("BookedCars", bookedCars.toString());
          }
        }

        break;
      case "B3":
        if (B3.className != "unBooked") {
          var bookedTo = localStorage.getItem(e.target.innerText);
          if (bookedTo.includes(formData.regNum)) {
            timeEnded = Date.now();
            localStorage.setItem(`${formData.regNum}TimeEnded`, timeEnded);
            var _totalTimeTaken = (timeEnded - timeStarted) / 60000;
            // ######################################################################
            var _1 = localStorage.getItem(`Price ${formData.regNum} to pay`);
            var _2 = _totalTimeTaken * priceForSmall;
            // ######################################################################
            let _priceToPay = (parseFloat(_1) + parseFloat(_2)).toFixed(2);
            localStorage.setItem(
              `Price ${formData.regNum} to pay`,
              _priceToPay
            );
            /* If the Space is Booked */ numberOfBookedSlots--;
            B3.className = "unBooked";
            localStorage.removeItem(e.target.innerText);
            const index = bookedCars.indexOf(formData.regNum);
            if (index > -1) {
              // only splice array when item is found
              bookedCars.splice(index, 1); // 2nd parameter means remove one item only
            }
            localStorage.setItem("BookedCars", bookedCars.toString());

            alert(`You have Unbooked Space ${e.target.innerText}`);
            car.pop(formData.regNum);
          } else {
            alert("Slot Booked By another User.");
            return null;
          }
        } /* If the Space is not Booked */ else {
          if (bookedCars.includes(formData.regNum) != false) {
            alert("You have already Booked A slot.");
            return null;
          } else {
            timeStarted = Date.now();
            localStorage.setItem(`${formData.regNum} TimeStarted`, timeStarted);
            const _start = Date.now();
            startTime = _start;
            numberOfBookedSlots++;
            B3.className = "booked";
            alert(`Thank You for Booking Space ${e.target.innerText}`);
            localStorage.setItem(
              e.target.innerText,
              JSON.stringify(formData.regNum)
            );
            car.push(formData.regNum);
            // Get the existing data
            // Add new data to localStorage Array
            bookedCars.push(formData.regNum);
            // Save back to localStorage
            localStorage.setItem("BookedCars", bookedCars.toString());
          }
        }

        break;
      case "B4":
        if (B4.className != "unBooked") {
          var bookedTo = localStorage.getItem(e.target.innerText);
          if (bookedTo.includes(formData.regNum)) {
            timeEnded = Date.now();
            localStorage.setItem(`${formData.regNum}TimeEnded`, timeEnded);
            var _totalTimeTaken = (timeEnded - timeStarted) / 60000;
            // ######################################################################
            var _1 = localStorage.getItem(`Price ${formData.regNum} to pay`);
            var _2 = _totalTimeTaken * priceForSmall;
            // ######################################################################
            let _priceToPay = (parseFloat(_1) + parseFloat(_2)).toFixed(2);
            localStorage.setItem(
              `Price ${formData.regNum} to pay`,
              _priceToPay
            );
            /* If the Space is Booked */ numberOfBookedSlots--;
            B4.className = "unBooked";
            localStorage.removeItem(e.target.innerText);
            const index = bookedCars.indexOf(formData.regNum);
            if (index > -1) {
              // only splice array when item is found
              bookedCars.splice(index, 1); // 2nd parameter means remove one item only
            }
            localStorage.setItem("BookedCars", bookedCars.toString());

            alert(`You have Unbooked Space ${e.target.innerText}`);
            car.pop(formData.regNum);
          } else {
            alert("Slot Booked By another User.");
            return null;
          }
        } /* If the Space is not Booked */ else {
          if (bookedCars.includes(formData.regNum) != false) {
            alert("You have already Booked A slot.");
            return null;
          } else {
            timeStarted = Date.now();
            localStorage.setItem(`${formData.regNum} TimeStarted`, timeStarted);
            const _start = Date.now();
            startTime = _start;
            numberOfBookedSlots++;
            B4.className = "booked";
            alert(`Thank You for Booking Space ${e.target.innerText}`);
            localStorage.setItem(
              e.target.innerText,
              JSON.stringify(formData.regNum)
            );
            car.push(formData.regNum);
            // Get the existing data
            // Add new data to localStorage Array
            bookedCars.push(formData.regNum);
            // Save back to localStorage
            localStorage.setItem("BookedCars", bookedCars.toString());
          }
        }

        break;
      case "B5":
        if (B5.className != "unBooked") {
          var bookedTo = localStorage.getItem(e.target.innerText);
          if (bookedTo.includes(formData.regNum)) {
            timeEnded = Date.now();
            localStorage.setItem(`${formData.regNum}TimeEnded`, timeEnded);
            var _totalTimeTaken = (timeEnded - timeStarted) / 60000;
            // ######################################################################
            var _1 = localStorage.getItem(`Price ${formData.regNum} to pay`);
            var _2 = _totalTimeTaken * priceForSmall;
            // ######################################################################
            let _priceToPay = (parseFloat(_1) + parseFloat(_2)).toFixed(2);
            localStorage.setItem(
              `Price ${formData.regNum} to pay`,
              _priceToPay
            );
            /* If the Space is Booked */ numberOfBookedSlots--;
            B5.className = "unBooked";
            localStorage.removeItem(e.target.innerText);
            const index = bookedCars.indexOf(formData.regNum);
            if (index > -1) {
              // only splice array when item is found
              bookedCars.splice(index, 1); // 2nd parameter means remove one item only
            }
            localStorage.setItem("BookedCars", bookedCars.toString());

            alert(`You have Unbooked Space ${e.target.innerText}`);
            car.pop(formData.regNum);
          } else {
            alert("Slot Booked By another User.");
            return null;
          }
        } /* If the Space is not Booked */ else {
          if (bookedCars.includes(formData.regNum) != false) {
            alert("You have already Booked A slot.");
            return null;
          } else {
            timeStarted = Date.now();
            localStorage.setItem(`${formData.regNum} TimeStarted`, timeStarted);
            const _start = Date.now();
            startTime = _start;
            numberOfBookedSlots++;
            B5.className = "booked";
            alert(`Thank You for Booking Space ${e.target.innerText}`);
            localStorage.setItem(
              e.target.innerText,
              JSON.stringify(formData.regNum)
            );
            car.push(formData.regNum);
            // Get the existing data
            // Add new data to localStorage Array
            bookedCars.push(formData.regNum);
            // Save back to localStorage
            localStorage.setItem("BookedCars", bookedCars.toString());
          }
        }

        break;
      // ROW C1 - C5
      case "C1":
        if (C1.className != "unBooked") {
          var bookedTo = localStorage.getItem(e.target.innerText);
          if (bookedTo.includes(formData.regNum)) {
            timeEnded = Date.now();
            localStorage.setItem(`${formData.regNum}TimeEnded`, timeEnded);
            var _totalTimeTaken = (timeEnded - timeStarted) / 60000;
            // ######################################################################
            var _1 = localStorage.getItem(`Price ${formData.regNum} to pay`);
            var _2 = _totalTimeTaken * priceForSmall;
            // ######################################################################
            let _priceToPay = (parseFloat(_1) + parseFloat(_2)).toFixed(2);
            localStorage.setItem(
              `Price ${formData.regNum} to pay`,
              _priceToPay
            );
            /* If the Space is Booked */ numberOfBookedSlots--;
            C1.className = "unBooked";
            localStorage.removeItem(e.target.innerText);
            const index = bookedCars.indexOf(formData.regNum);
            if (index > -1) {
              // only splice array when item is found
              bookedCars.splice(index, 1); // 2nd parameter means remove one item only
            }
            localStorage.setItem("BookedCars", bookedCars.toString());

            alert(`You have Unbooked Space ${e.target.innerText}`);
            car.pop(formData.regNum);
          } else {
            alert("Slot Booked By another User.");
            return null;
          }
        } /* If the Space is not Booked */ else {
          if (bookedCars.includes(formData.regNum) != false) {
            alert("You have already Booked A slot.");
            return null;
          } else {
            timeStarted = Date.now();
            localStorage.setItem(`${formData.regNum} TimeStarted`, timeStarted);
            const _start = Date.now();
            startTime = _start;
            numberOfBookedSlots++;
            C1.className = "booked";
            alert(`Thank You for Booking Space ${e.target.innerText}`);
            localStorage.setItem(
              e.target.innerText,
              JSON.stringify(formData.regNum)
            );
            car.push(formData.regNum);
            // Get the existing data
            // Add new data to localStorage Array
            bookedCars.push(formData.regNum);
            // Save back to localStorage
            localStorage.setItem("BookedCars", bookedCars.toString());
          }
        }

        break;
      case "C2":
        if (C2.className != "unBooked") {
          var bookedTo = localStorage.getItem(e.target.innerText);
          if (bookedTo.includes(formData.regNum)) {
            timeEnded = Date.now();
            localStorage.setItem(`${formData.regNum}TimeEnded`, timeEnded);
            var _totalTimeTaken = (timeEnded - timeStarted) / 60000;
            // ######################################################################
            var _1 = localStorage.getItem(`Price ${formData.regNum} to pay`);
            var _2 = _totalTimeTaken * priceForSmall;
            // ######################################################################
            let _priceToPay = (parseFloat(_1) + parseFloat(_2)).toFixed(2);
            localStorage.setItem(
              `Price ${formData.regNum} to pay`,
              _priceToPay
            );
            /* If the Space is Booked */ numberOfBookedSlots--;
            C2.className = "unBooked";
            localStorage.removeItem(e.target.innerText);
            const index = bookedCars.indexOf(formData.regNum);
            if (index > -1) {
              // only splice array when item is found
              bookedCars.splice(index, 1); // 2nd parameter means remove one item only
            }
            localStorage.setItem("BookedCars", bookedCars.toString());

            alert(`You have Unbooked Space ${e.target.innerText}`);
            car.pop(formData.regNum);
          } else {
            alert("Slot Booked By another User.");
            return null;
          }
        } /* If the Space is not Booked */ else {
          if (bookedCars.includes(formData.regNum) != false) {
            alert("You have already Booked A slot.");
            return null;
          } else {
            timeStarted = Date.now();
            localStorage.setItem(`${formData.regNum} TimeStarted`, timeStarted);
            const _start = Date.now();
            startTime = _start;
            numberOfBookedSlots++;
            C2.className = "booked";
            alert(`Thank You for Booking Space ${e.target.innerText}`);
            localStorage.setItem(
              e.target.innerText,
              JSON.stringify(formData.regNum)
            );
            car.push(formData.regNum);
            // Get the existing data
            // Add new data to localStorage Array
            bookedCars.push(formData.regNum);
            // Save back to localStorage
            localStorage.setItem("BookedCars", bookedCars.toString());
          }
        }

        break;
      case "C3":
        if (C3.className != "unBooked") {
          var bookedTo = localStorage.getItem(e.target.innerText);
          if (bookedTo.includes(formData.regNum)) {
            timeEnded = Date.now();
            localStorage.setItem(`${formData.regNum}TimeEnded`, timeEnded);
            var _totalTimeTaken = (timeEnded - timeStarted) / 60000;
            // ######################################################################
            var _1 = localStorage.getItem(`Price ${formData.regNum} to pay`);
            var _2 = _totalTimeTaken * priceForLarge;
            // ######################################################################
            let _priceToPay = (parseFloat(_1) + parseFloat(_2)).toFixed(2);
            localStorage.setItem(
              `Price ${formData.regNum} to pay`,
              _priceToPay
            );
            /* If the Space is Booked */ numberOfBookedSlots--;
            C3.className = "unBooked";
            localStorage.removeItem(e.target.innerText);
            const index = bookedCars.indexOf(formData.regNum);
            if (index > -1) {
              // only splice array when item is found
              bookedCars.splice(index, 1); // 2nd parameter means remove one item only
            }
            localStorage.setItem("BookedCars", bookedCars.toString());

            alert(`You have Unbooked Space ${e.target.innerText}`);
            car.pop(formData.regNum);
          } else {
            alert("Slot Booked By another User.");
            return null;
          }
        } /* If the Space is not Booked */ else {
          if (bookedCars.includes(formData.regNum) != false) {
            alert("You have already Booked A slot.");
            return null;
          } else {
            timeStarted = Date.now();
            localStorage.setItem(`${formData.regNum} TimeStarted`, timeStarted);
            const _start = Date.now();
            startTime = _start;
            numberOfBookedSlots++;
            C3.className = "booked";
            alert(`Thank You for Booking Space ${e.target.innerText}`);
            localStorage.setItem(
              e.target.innerText,
              JSON.stringify(formData.regNum)
            );
            car.push(formData.regNum);
            // Get the existing data
            // Add new data to localStorage Array
            bookedCars.push(formData.regNum);
            // Save back to localStorage
            localStorage.setItem("BookedCars", bookedCars.toString());
          }
        }

        break;
      case "C4":
        if (C4.className != "unBooked") {
          var bookedTo = localStorage.getItem(e.target.innerText);
          if (bookedTo.includes(formData.regNum)) {
            timeEnded = Date.now();
            localStorage.setItem(`${formData.regNum}TimeEnded`, timeEnded);
            var _totalTimeTaken = (timeEnded - timeStarted) / 60000;
            // ######################################################################
            var _1 = localStorage.getItem(`Price ${formData.regNum} to pay`);
            var _2 = _totalTimeTaken * priceForLarge;
            // ######################################################################
            let _priceToPay = (parseFloat(_1) + parseFloat(_2)).toFixed(2);
            localStorage.setItem(
              `Price ${formData.regNum} to pay`,
              _priceToPay
            );
            /* If the Space is Booked */ numberOfBookedSlots--;
            C4.className = "unBooked";
            localStorage.removeItem(e.target.innerText);
            const index = bookedCars.indexOf(formData.regNum);
            if (index > -1) {
              // only splice array when item is found
              bookedCars.splice(index, 1); // 2nd parameter means remove one item only
            }
            localStorage.setItem("BookedCars", bookedCars.toString());

            alert(`You have Unbooked Space ${e.target.innerText}`);
            car.pop(formData.regNum);
          } else {
            alert("Slot Booked By another User.");
            return null;
          }
        } /* If the Space is not Booked */ else {
          if (bookedCars.includes(formData.regNum) != false) {
            alert("You have already Booked A slot.");
            return null;
          } else {
            timeStarted = Date.now();
            localStorage.setItem(`${formData.regNum} TimeStarted`, timeStarted);
            const _start = Date.now();
            startTime = _start;
            numberOfBookedSlots++;
            C4.className = "booked";
            alert(`Thank You for Booking Space ${e.target.innerText}`);
            localStorage.setItem(
              e.target.innerText,
              JSON.stringify(formData.regNum)
            );
            car.push(formData.regNum);
            // Get the existing data
            // Add new data to localStorage Array
            bookedCars.push(formData.regNum);
            // Save back to localStorage
            localStorage.setItem("BookedCars", bookedCars.toString());
          }
        }

        break;
      case "C5":
        if (C5.className != "unBooked") {
          var bookedTo = localStorage.getItem(e.target.innerText);
          if (bookedTo.includes(formData.regNum)) {
            timeEnded = Date.now();
            localStorage.setItem(`${formData.regNum}TimeEnded`, timeEnded);
            var _totalTimeTaken = (timeEnded - timeStarted) / 60000;
            // ######################################################################
            var _1 = localStorage.getItem(`Price ${formData.regNum} to pay`);
            var _2 = _totalTimeTaken * priceForLarge;
            // ######################################################################
            let _priceToPay = (parseFloat(_1) + parseFloat(_2)).toFixed(2);
            localStorage.setItem(
              `Price ${formData.regNum} to pay`,
              _priceToPay
            );
            /* If the Space is Booked */ numberOfBookedSlots--;
            C5.className = "unBooked";
            localStorage.removeItem(e.target.innerText);
            const index = bookedCars.indexOf(formData.regNum);
            if (index > -1) {
              // only splice array when item is found
              bookedCars.splice(index, 1); // 2nd parameter means remove one item only
            }
            localStorage.setItem("BookedCars", bookedCars.toString());

            alert(`You have Unbooked Space ${e.target.innerText}`);
            car.pop(formData.regNum);
          } else {
            alert("Slot Booked By another User.");
            return null;
          }
        } /* If the Space is not Booked */ else {
          if (bookedCars.includes(formData.regNum) != false) {
            alert("You have already Booked A slot.");
            return null;
          } else {
            timeStarted = Date.now();
            localStorage.setItem(`${formData.regNum} TimeStarted`, timeStarted);
            const _start = Date.now();
            startTime = _start;
            numberOfBookedSlots++;
            C5.className = "booked";
            alert(`Thank You for Booking Space ${e.target.innerText}`);
            localStorage.setItem(
              e.target.innerText,
              JSON.stringify(formData.regNum)
            );
            car.push(formData.regNum);
            // Get the existing data
            // Add new data to localStorage Array
            bookedCars.push(formData.regNum);
            // Save back to localStorage
            localStorage.setItem("BookedCars", bookedCars.toString());
          }
        }

        break;
      // ROW D1 - D5
      case "D1":
        if (D1.className != "unBooked") {
          var bookedTo = localStorage.getItem(e.target.innerText);
          if (bookedTo.includes(formData.regNum)) {
            timeEnded = Date.now();
            localStorage.setItem(`${formData.regNum}TimeEnded`, timeEnded);
            var _totalTimeTaken = (timeEnded - timeStarted) / 60000;
            // ######################################################################
            var _1 = localStorage.getItem(`Price ${formData.regNum} to pay`);
            var _2 = _totalTimeTaken * priceForLarge;
            // ######################################################################
            let _priceToPay = (parseFloat(_1) + parseFloat(_2)).toFixed(2);
            localStorage.setItem(
              `Price ${formData.regNum} to pay`,
              _priceToPay
            );
            /* If the Space is Booked */ numberOfBookedSlots--;
            D1.className = "unBooked";
            localStorage.removeItem(e.target.innerText);
            const index = bookedCars.indexOf(formData.regNum);
            if (index > -1) {
              // only splice array when item is found
              bookedCars.splice(index, 1); // 2nd parameter means remove one item only
            }
            localStorage.setItem("BookedCars", bookedCars.toString());

            alert(`You have Unbooked Space ${e.target.innerText}`);
            car.pop(formData.regNum);
          } else {
            alert("Slot Booked By another User.");
            return null;
          }
        } /* If the Space is not Booked */ else {
          if (bookedCars.includes(formData.regNum) != false) {
            alert("You have already Booked A slot.");
            return null;
          } else {
            timeStarted = Date.now();
            localStorage.setItem(`${formData.regNum} TimeStarted`, timeStarted);
            const _start = Date.now();
            startTime = _start;
            numberOfBookedSlots++;
            D1.className = "booked";
            alert(`Thank You for Booking Space ${e.target.innerText}`);
            localStorage.setItem(
              e.target.innerText,
              JSON.stringify(formData.regNum)
            );
            car.push(formData.regNum);
            // Get the existing data
            // Add new data to localStorage Array
            bookedCars.push(formData.regNum);
            // Save back to localStorage
            localStorage.setItem("BookedCars", bookedCars.toString());
          }
        }

        break;
      case "D2":
        if (D2.className != "unBooked") {
          var bookedTo = localStorage.getItem(e.target.innerText);
          if (bookedTo.includes(formData.regNum)) {
            timeEnded = Date.now();
            localStorage.setItem(`${formData.regNum}TimeEnded`, timeEnded);
            var _totalTimeTaken = (timeEnded - timeStarted) / 60000;
            // ######################################################################
            var _1 = localStorage.getItem(`Price ${formData.regNum} to pay`);
            var _2 = _totalTimeTaken * priceForLarge;
            // ######################################################################
            let _priceToPay = (parseFloat(_1) + parseFloat(_2)).toFixed(2);
            localStorage.setItem(
              `Price ${formData.regNum} to pay`,
              _priceToPay
            );
            /* If the Space is Booked */ numberOfBookedSlots--;
            D2.className = "unBooked";
            localStorage.removeItem(e.target.innerText);
            const index = bookedCars.indexOf(formData.regNum);
            if (index > -1) {
              // only splice array when item is found
              bookedCars.splice(index, 1); // 2nd parameter means remove one item only
            }
            localStorage.setItem("BookedCars", bookedCars.toString());

            alert(`You have Unbooked Space ${e.target.innerText}`);
            car.pop(formData.regNum);
          } else {
            alert("Slot Booked By another User.");
            return null;
          }
        } /* If the Space is not Booked */ else {
          if (bookedCars.includes(formData.regNum) != false) {
            alert("You have already Booked A slot.");
            return null;
          } else {
            timeStarted = Date.now();
            localStorage.setItem(`${formData.regNum} TimeStarted`, timeStarted);
            const _start = Date.now();
            startTime = _start;
            numberOfBookedSlots++;
            D2.className = "booked";
            alert(`Thank You for Booking Space ${e.target.innerText}`);
            localStorage.setItem(
              e.target.innerText,
              JSON.stringify(formData.regNum)
            );
            car.push(formData.regNum);
            // Get the existing data
            // Add new data to localStorage Array
            bookedCars.push(formData.regNum);
            // Save back to localStorage
            localStorage.setItem("BookedCars", bookedCars.toString());
          }
        }

        break;
      case "D3":
        if (D3.className != "unBooked") {
          var bookedTo = localStorage.getItem(e.target.innerText);
          if (bookedTo.includes(formData.regNum)) {
            timeEnded = Date.now();
            localStorage.setItem(`${formData.regNum}TimeEnded`, timeEnded);
            var _totalTimeTaken = (timeEnded - timeStarted) / 60000;
            // ######################################################################
            var _1 = localStorage.getItem(`Price ${formData.regNum} to pay`);
            var _2 = _totalTimeTaken * priceForLarge;
            // ######################################################################
            let _priceToPay = (parseFloat(_1) + parseFloat(_2)).toFixed(2);
            localStorage.setItem(
              `Price ${formData.regNum} to pay`,
              _priceToPay
            );
            /* If the Space is Booked */ numberOfBookedSlots--;
            D3.className = "unBooked";
            localStorage.removeItem(e.target.innerText);
            const index = bookedCars.indexOf(formData.regNum);
            if (index > -1) {
              // only splice array when item is found
              bookedCars.splice(index, 1); // 2nd parameter means remove one item only
            }
            localStorage.setItem("BookedCars", bookedCars.toString());

            alert(`You have Unbooked Space ${e.target.innerText}`);
            car.pop(formData.regNum);
          } else {
            alert("Slot Booked By another User.");
            return null;
          }
        } /* If the Space is not Booked */ else {
          if (bookedCars.includes(formData.regNum) != false) {
            alert("You have already Booked A slot.");
            return null;
          } else {
            timeStarted = Date.now();
            localStorage.setItem(`${formData.regNum} TimeStarted`, timeStarted);
            const _start = Date.now();
            startTime = _start;
            numberOfBookedSlots++;
            D3.className = "booked";
            alert(`Thank You for Booking Space ${e.target.innerText}`);
            localStorage.setItem(
              e.target.innerText,
              JSON.stringify(formData.regNum)
            );
            car.push(formData.regNum);
            // Get the existing data
            // Add new data to localStorage Array
            bookedCars.push(formData.regNum);
            // Save back to localStorage
            localStorage.setItem("BookedCars", bookedCars.toString());
          }
        }

        break;
      case "D4":
        if (D4.className != "unBooked") {
          var bookedTo = localStorage.getItem(e.target.innerText);
          if (bookedTo.includes(formData.regNum)) {
            timeEnded = Date.now();
            localStorage.setItem(`${formData.regNum}TimeEnded`, timeEnded);
            var _totalTimeTaken = (timeEnded - timeStarted) / 60000;
            // ######################################################################
            var _1 = localStorage.getItem(`Price ${formData.regNum} to pay`);
            var _2 = _totalTimeTaken * priceForLarge;
            // ######################################################################
            let _priceToPay = (parseFloat(_1) + parseFloat(_2)).toFixed(2);
            localStorage.setItem(
              `Price ${formData.regNum} to pay`,
              _priceToPay
            );
            /* If the Space is Booked */ numberOfBookedSlots--;
            D4.className = "unBooked";
            localStorage.removeItem(e.target.innerText);
            const index = bookedCars.indexOf(formData.regNum);
            if (index > -1) {
              // only splice array when item is found
              bookedCars.splice(index, 1); // 2nd parameter means remove one item only
            }
            localStorage.setItem("BookedCars", bookedCars.toString());

            alert(`You have Unbooked Space ${e.target.innerText}`);
            car.pop(formData.regNum);
          } else {
            alert("Slot Booked By another User.");
            return null;
          }
        } /* If the Space is not Booked */ else {
          if (bookedCars.includes(formData.regNum) != false) {
            alert("You have already Booked A slot.");
            return null;
          } else {
            timeStarted = Date.now();
            localStorage.setItem(`${formData.regNum} TimeStarted`, timeStarted);
            const _start = Date.now();
            startTime = _start;
            numberOfBookedSlots++;
            D4.className = "booked";
            alert(`Thank You for Booking Space ${e.target.innerText}`);
            localStorage.setItem(
              e.target.innerText,
              JSON.stringify(formData.regNum)
            );
            car.push(formData.regNum);
            // Get the existing data
            // Add new data to localStorage Array
            bookedCars.push(formData.regNum);
            // Save back to localStorage
            localStorage.setItem("BookedCars", bookedCars.toString());
          }
        }

        break;
      case "D5":
        if (D5.className != "unBooked") {
          var bookedTo = localStorage.getItem(e.target.innerText);
          if (bookedTo.includes(formData.regNum)) {
            timeEnded = Date.now();
            localStorage.setItem(`${formData.regNum}TimeEnded`, timeEnded);
            var _totalTimeTaken = (timeEnded - timeStarted) / 60000;
            // ######################################################################
            var _1 = localStorage.getItem(`Price ${formData.regNum} to pay`);
            var _2 = _totalTimeTaken * priceForLarge;
            // ######################################################################
            let _priceToPay = (parseFloat(_1) + parseFloat(_2)).toFixed(2);
            localStorage.setItem(
              `Price ${formData.regNum} to pay`,
              _priceToPay
            );
            /* If the Space is Booked */ numberOfBookedSlots--;
            D5.className = "unBooked";
            localStorage.removeItem(e.target.innerText);
            const index = bookedCars.indexOf(formData.regNum);
            if (index > -1) {
              // only splice array when item is found
              bookedCars.splice(index, 1); // 2nd parameter means remove one item only
            }
            localStorage.setItem("BookedCars", bookedCars.toString());

            alert(`You have Unbooked Space ${e.target.innerText}`);
            car.pop(formData.regNum);
          } else {
            alert("Slot Booked By another User.");
            return null;
          }
        } /* If the Space is not Booked */ else {
          if (bookedCars.includes(formData.regNum) != false) {
            alert("You have already Booked A slot.");
            return null;
          } else {
            timeStarted = Date.now();
            localStorage.setItem(`${formData.regNum} TimeStarted`, timeStarted);
            const _start = Date.now();
            startTime = _start;
            numberOfBookedSlots++;
            D5.className = "booked";
            alert(`Thank You for Booking Space ${e.target.innerText}`);
            localStorage.setItem(
              e.target.innerText,
              JSON.stringify(formData.regNum)
            );
            car.push(formData.regNum);
            // Get the existing data
            // Add new data to localStorage Array
            bookedCars.push(formData.regNum);
            // Save back to localStorage
            localStorage.setItem("BookedCars", bookedCars.toString());
          }
        }

        break;
    }
    _numberOfBookedSlots.innerText = `N0. Of Booked Parking Slots ${numberOfBookedSlots} out of 20`;
    if (!localStorage.key(`Price ${formData.regNum} to pay`)) {
      Price_showcase.innerText = `Price To Pay: N ${localStorage.getItem(
        `Price ${formData.regNum} to pay`
      )}`;
    } else {
      Price_showcase.innerText = `Price To Pay: N ${localStorage.getItem(
        `Price ${formData.regNum} to pay`
      )}`;
    }
  });
});
