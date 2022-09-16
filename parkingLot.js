let index = 0;
const colors = ["#171d1c", "#2C353F"];
let bookButton = Array.from(document.querySelectorAll("button"));
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
let unBookedColor = "#2C353F";
let bookedColor = "#171d1c";

bookButton.map((bookButton) => {
  bookButton.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      // ROW A1 - A5
      case "A1":
        if (A1.className != "unBooked") {
          A1.className = "unBooked";
          alert(`You have Unbooked ${e.target.innerText}`);
        } else {
          A1.className = "booked";
          alert(`Thank you for booking ${e.target.innerText}`);
        }
        break;

      case "A2":
        if (A2.className != "unBooked") {
          A2.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          A2.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "A3":
        if (A3.className != "unBooked") {
          A3.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          A3.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "A4":
        if (A4.className != "unBooked") {
          A4.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          A4.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "A5":
        if (A5.className != "unBooked") {
          A5.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          A5.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      //ROW B1 - B5
      case "B1":
        if (B1.className != "unBooked") {
          B1.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          B1.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "B2":
        if (B2.className != "unBooked") {
          B2.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          B2.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "B3":
        if (B3.className != "unBooked") {
          B3.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          B3.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "B4":
        if (B4.className != "unBooked") {
          B4.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          B4.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "B5":
        if (B5.className != "unBooked") {
          B5.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          B5.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      // ROW C1 - C5
      case "C1":
        if (C1.className != "unBooked") {
          C1.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          C1.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "C2":
        if (C2.className != "unBooked") {
          C2.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          C2.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "C3":
        if (C3.className != "unBooked") {
          C3.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          C3.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "C4":
        if (C4.className != "unBooked") {
          C4.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          C4.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "C5":
        if (C5.className != "unBooked") {
          C5.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          C5.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      // ROW D1 - D5
      case "D1":
        if (D1.className != "unBooked") {
          D1.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          D1.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "D2":
        if (D2.className != "unBooked") {
          D2.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          D2.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "D3":
        if (D3.className != "unBooked") {
          D3.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          D3.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "D4":
        if (D4.className != "unBooked") {
          D4.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          D4.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "D5":
        if (D5.className != "unBooked") {
          D5.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          D5.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
    }
  });
});
