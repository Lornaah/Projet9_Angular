const { fromEvent } = require("rxjs");

// Example starter JavaScript for disabling form submissions if there are invalid fields
document.addEventListener('DOMContentLoaded', function() {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        console.log("form is invalid");

        event.preventDefault()
        event.stopPropagation()
      }
      else{
        console.log("form is valid !");
        console.log(event);
      }

      form.classList.add('was-validated')
    }, false)
  })
}, false);