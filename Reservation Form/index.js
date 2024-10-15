document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementById("reservation-date");
  const timeInput = document.getElementById("reservation-time");

  // Set placeholder text for date and time
  dateInput.setAttribute("placeholder", "MM/DD/YYYY");
  timeInput.setAttribute("placeholder", "HH:MM AM");

  // Placeholder behavior for inputs
  dateInput.addEventListener("focus", function () {
    dateInput.removeAttribute("placeholder");
  });

  dateInput.addEventListener("blur", function () {
    if (!dateInput.value) {
      dateInput.setAttribute("placeholder", "MM/DD/YYYY");
    }
  });

  timeInput.addEventListener("focus", function () {
    timeInput.removeAttribute("placeholder");
  });

  timeInput.addEventListener("blur", function () {
    if (!timeInput.value) {
      timeInput.setAttribute("placeholder", "HH:MM AM");
    }
  });
});
