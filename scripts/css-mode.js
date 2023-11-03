/* add your JavaScript code here! */

/* Wait for DOM to be loaded before doing anything*/
document.addEventListener("DOMContentLoaded", function() {
  
  /* Output a console log message of your choice one the DOM has been loaded. */
  console.log("All systems go");
    
    /* Add "click" listener to button */
    let btnMode = document.querySelector('#btn-mode');
    btnMode.addEventListener("click", function() {
      var element = document.body;
      /* Click event handler should toggle the class on the body element. */
      element.classList.toggle("darkmode");
      });
  });

