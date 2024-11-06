
$(document).ready(function () {

  // Delay the loader fade out by 2 seconds (2000 ms)
setTimeout(function () {
   $(".loader").fadeOut("slow", function () {
      //  After the loader fades out, fade in the container after a 1-second delay
       setTimeout(function () {
           $('.container').fadeIn("slow");
       }, 2000); // 1-second delay before container fade-in
   });
}, 3000); // 

});


