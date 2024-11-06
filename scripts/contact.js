// $(document).ready(function () {
$(document).ready(function () {
  // Show the loader when the page is loading
  $(".loader").fadeIn("slow");

  // Delay the loader fade out by 3 seconds (3000 ms)
  setTimeout(function () {
    $(".loader").fadeOut("slow", function () {
      // After the loader fades out, fade in the container
      $(".container").fadeIn("slow", function () {
        // Show welcome alert after the container has faded in
        Swal.fire({
          icon: "info",
          title: "Welcome!",
          text: "Welcome to our website!",
          confirmButtonText: "OK",
          customClass: {
            popup: "custom-swal", // Apply custom class to the popup
            confirmButton: "swal2-confirm", // Confirm button class
          },
        });
      });
    });
  }, 3000); // Show the loader for 3 seconds
});

// Initialize the datetime picker
$("#datetimepicker").datetimepicker();

// Custom validation method for strong password
$.validator.addMethod(
  "StrongPassword",
  validateStrongPassword,
  "Password must be 8-12 characters long and include at least one lowercase letter, one uppercase letter, one digit, and one special character"
);

// Form validation rules for the form with ID #signup_form
$("#signup_form").validate({
  rules: {
    user_fname: {
      required: true,
      minlength: 3,
      maxlength: 15,
    },
    user_lname: {
      required: true,
      minlength: 3,
      maxlength: 15,
    },
    user_email: {
      required: true,
      email: true,
      nowhitespace: true,
    },
    user_subject: {
      required: true,
      letterswithbasicpunc: true,
    },
    user_bio: {
      required: true,
      letterswithbasicpunc: true,
    },
  },
  highlight: addErrorBorder,
  unhighlight: removeErrorBorder,
  messages: {
    user_fname: {
      required: "Please enter your first name.",
      minlength: "Your name should be at least 3 characters long.",
      maxlength: "Your name should be no longer than 15 characters.",
    },
    user_lname: {
      required: "Please enter your last name.",
      minlength: "Your name should be at least 3 characters long.",
      maxlength: "Your name should be no longer than 15 characters.",
    },
    user_email: {
      required: "Please enter your email address.",
      email: "Enter a valid email address (e.g., name@example.com).",
      nowhitespace: "Email addresses cannot contain spaces.",
    },
    user_subject: {
      required: "Please describe any additional services needed.",
      letterswithbasicpunc: "Only letters and punctuation are allowed.",
    },
    user_bio: {
      required: "Please describe any additional services needed.",
      letterswithbasicpunc: "Only letters and punctuation are allowed.",
    },
  },
  onkeyup: validateOnKeyup,
  onfocusout: validateOnFocusOut,
  onchange: validateOnChange,
  invalidHandler: function (event, validator) {
    // Show SweetAlert only once when the form is submitted and there are errors
    if (validator.numberOfInvalids()) {
      Swal.fire({
        icon: "error",
        title: "Form Error",
        text: "Please correct the errors in the form.",
        confirmButtonText: "OK",
        customClass: {
          popup: "custom-swal", // Apply custom class to the popup
          confirmButton: "swal2-confirm", // Confirm button class
        },
      });
    }
  },
  submitHandler: showSuccessAlert,
});
// });

// Function to validate strong password
function validateStrongPassword(value) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/.test(
    value
  );
}

// Function to add error border style to invalid fields
function addErrorBorder(element) {
  $(element).addClass("error-border").removeClass("success-border");
}

// Function to remove error border style from valid fields
function removeErrorBorder(element) {
  $(element).addClass("success-border").removeClass("error-border");
}

// Function to show SweetAlert success message when the form is valid
function showSuccessAlert(form) {
  Swal.fire({
    icon: "success",
    title: "Form Submitted",
    text: "All fields are valid! Your form has been successfully submitted.",
    confirmButtonText: "OK",
    customClass: {
      popup: "custom-swal", // Apply custom class to the popup
      confirmButton: "swal2-confirm", // Confirm button class
    },
  }).then(function () {
    form.submit(); // Submit the form after showing the success message
  });
}

// Functions to trigger validation on specific events
function validateOnKeyup(element) {
  $(element).valid();
}

function validateOnFocusOut(element) {
  $(element).valid();
}

function validateOnChange(element) {
  $(element).valid();
}

