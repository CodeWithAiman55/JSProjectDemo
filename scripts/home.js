


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
