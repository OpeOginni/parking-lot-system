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
const _numberOfBookedSlots = document.getElementById("BookedSlotsCounter");
let numberOfBookedSlots = 0;

bookButton.map((bookButton) => {
  bookButton.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      // ROW A1 - A5
      case "A1":
        if (A1.className != "unBooked") {
          /* If the Space is Booked */ numberOfBookedSlots--;
          A1.className = "unBooked";
          alert(`You have Unbooked ${e.target.innerText}`);
        } /* If the Space is not Booked */ else {
          numberOfBookedSlots++;
          A1.className = "booked";
          alert(`Thank you for booking ${e.target.innerText}`);
        }
        break;

      case "A2":
        if (A2.className != "unBooked") {
          numberOfBookedSlots--;
          A2.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          A2.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "A3":
        if (A3.className != "unBooked") {
          numberOfBookedSlots--;
          A3.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          A3.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "A4":
        if (A4.className != "unBooked") {
          numberOfBookedSlots--;
          A4.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          A4.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "A5":
        if (A5.className != "unBooked") {
          numberOfBookedSlots--;
          A5.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          A5.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      //ROW B1 - B5
      case "B1":
        if (B1.className != "unBooked") {
          numberOfBookedSlots--;
          B1.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          B1.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "B2":
        if (B2.className != "unBooked") {
          numberOfBookedSlots--;
          B2.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          B2.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "B3":
        if (B3.className != "unBooked") {
          numberOfBookedSlots--;
          B3.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          B3.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "B4":
        if (B4.className != "unBooked") {
          numberOfBookedSlots--;
          B4.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          B4.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "B5":
        if (B5.className != "unBooked") {
          numberOfBookedSlots--;
          B5.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          B5.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      // ROW C1 - C5
      case "C1":
        if (C1.className != "unBooked") {
          numberOfBookedSlots--;
          C1.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          C1.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "C2":
        if (C2.className != "unBooked") {
          numberOfBookedSlots--;
          C2.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          C2.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "C3":
        if (C3.className != "unBooked") {
          numberOfBookedSlots--;
          C3.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          C3.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "C4":
        if (C4.className != "unBooked") {
          numberOfBookedSlots--;
          C4.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          C4.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "C5":
        if (C5.className != "unBooked") {
          numberOfBookedSlots--;
          C5.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          C5.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      // ROW D1 - D5
      case "D1":
        if (D1.className != "unBooked") {
          numberOfBookedSlots--;
          D1.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          D1.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "D2":
        if (D2.className != "unBooked") {
          numberOfBookedSlots--;
          D2.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          D2.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "D3":
        if (D3.className != "unBooked") {
          numberOfBookedSlots--;
          D3.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          D3.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "D4":
        if (D4.className != "unBooked") {
          numberOfBookedSlots--;
          D4.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          D4.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
      case "D5":
        if (D5.className != "unBooked") {
          numberOfBookedSlots--;
          D5.className = "unBooked";
          alert(`You Have Unbooked Space ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          D5.className = "booked";
          alert(`Thank You for Booking Space ${e.target.innerText}`);
        }
        break;
    }
    _numberOfBookedSlots.innerText = `No Of Booked Parking Slots ${numberOfBookedSlots} out of 20`;
  });
});
