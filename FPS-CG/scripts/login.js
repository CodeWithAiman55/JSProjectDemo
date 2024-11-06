$(document).ready(function () {
    // Custom method for strong password validation
    $.validator.addMethod("StrongPassword", function (value) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/.test(value);
    }, "Password must be 8-12 characters long and include at least one lowercase letter, one uppercase letter, one digit, and one special character");

    // Initialize form validation
    $("#signup_form").validate({
        rules: {
            user_name: {
                required: true,
                minlength: 3,
                maxlength: 15,
            },
            user_password: {
                required: true,
                StrongPassword: true,
                nowhitespace: true,
            },
            user_email: {  // Added validation rule for email
                required: true,
                email: true,
                nowhitespace: true
            }
        },
        highlight: function (element) {
            $(element).addClass("error-border").removeClass("success-border");
        },
        unhighlight: function (element) {
            $(element).addClass("success-border").removeClass("error-border");
        },
        messages: {
            user_name: {
                required: "Name is required as a mandatory field",
                minlength: "Name should be at least 3 characters long",
                maxlength: "Please enter at most 15 characters"
            },
            user_password: {
                required: "Password is required as a mandatory field",
                nowhitespace: "No white spaces are allowed",
            },
            user_email: {  // Added message for email validation
                required: "Email is required",
                email: "Please enter a valid email address",
                nowhitespace: "No white spaces are allowed",
            }
        },
        submitHandler: function(form) {
            // Show success alert when the form is valid
            Swal.fire({
                icon: "success",
                title: "Form Submitted",
                text: "All fields are valid! Your form has been successfully submitted.",
                confirmButtonText: "OK",
                customClass: {
                    popup: 'custom-swal',
                    confirmButton: 'swal2-confirm',
                },
            }).then(function() {
                form.submit(); // Submit the form after showing the success message
            });
        },
        invalidHandler: function(event, validator) {
            // Show error alert when the form submission fails
            Swal.fire({
                icon: "error",
                title: "Form Error",
                text: "Please correct the errors in the form.",
                confirmButtonText: "OK",
                customClass: {
                    popup: 'custom-swal',
                    confirmButton: 'swal2-confirm',
                },
            });
        }
    });
});
