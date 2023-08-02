function openReservationForm(filmTitle) {
   document.getElementById(
      "filmName"
   ).innerText = `Reservation Form - ${filmTitle}`;
   document.getElementById("reservationForm").style.display = "block";
}

function submitReservation() {
   const name = document.getElementById("name").value;
   const email = document.getElementById("email").value;
   const phoneNumber = document.getElementById("phoneNumber").value;
   const reservationDate = document.getElementById("reservationDate").value;
   const reservationHour = document.getElementById("reservationHour").value;
   const numTickets = document.getElementById("numTickets").value;

   const filmName = document
      .getElementById("filmName")
      .innerText.replace("Reservation Form - ", "");

   alert(
      `You have reserved ${numTickets} tickets for "${filmName}" on ${reservationDate} at ${reservationHour}.`
   );

   document.getElementById("buyTicketsForm").reset();
   document.getElementById("reservationForm").style.display = "none";
}

function submitForm(event) {
   event.preventDefault();
   const successMessage = "Your message has been sent successfully!";
   alert(successMessage);

   document.getElementById("name").value = "";
   document.getElementById("email").value = "";
   document.getElementById("phoneNumber").value = "";
   document.getElementById("message").value = "";
}
