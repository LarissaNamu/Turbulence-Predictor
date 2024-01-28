
function getData(form) {
    var formData = new FormData(form);
  
    for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
  
    console.log(Object.fromEntries(formData));
    a = Object.fromEntries(formData);
    flyn = Object.values(a);
    return "https://www.flightaware.com/live/flight/AAL" + flyn[0];
  }


document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
    getData(e.target);
    
    
});





